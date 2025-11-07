// Twitter Intent URLs
const T_TWEET = "https://twitter.com/intent/tweet?hashtags=wisdom";
const T_RETWEET = "https://twitter.com/intent/retweet?tweet_id=";
const T_LIKE = "https://twitter.com/intent/like?tweet_id=";

// Application state
let timerInSec = 5;
let isPlaying = true;
let currentQuote = null;

// DOM Elements (cached for performance)
const elements = {
  quote: document.getElementById('quote'),
  author: document.getElementById('author'),
  tLike: document.getElementById('t_like'),
  tRetweet: document.getElementById('t_retweet'),
  tTweet: document.getElementById('t_tweet'),
  progressBar: document.getElementById('timer'),
  timerInput: document.getElementById('timer-sec'),
  pauseControl: document.getElementById('pause'),
  playControl: document.getElementById('play')
};

/**
 * Smoothly transitions between quotes with fade animation
 * @param {Function} updateCallback - Function to call during transition
 */
async function smoothTransition(updateCallback) {
  // Fade out current quote
  elements.quote.classList.add('fade-out');
  elements.author.classList.add('fade-out');

  // Wait for fade out animation
  await new Promise(resolve => setTimeout(resolve, 400));

  // Update content
  updateCallback();

  // Remove fade-out class and let CSS handle fade-in
  elements.quote.classList.remove('fade-out');
  elements.author.classList.remove('fade-out');
}

/**
 * Displays a quote - either from hash or random with smooth transition
 * @param {string} hash - Optional hash to display specific quote
 * @param {boolean} skipTransition - Skip animation for initial load
 */
async function displayQuote(hash, skipTransition = false) {
  console.log("isPlaying = " + isPlaying);

  if (!isPlaying) return;

  // Hide Twitter buttons initially
  elements.tLike.style.display = 'none';
  elements.tRetweet.style.display = 'none';
  elements.tTweet.style.display = 'none';

  let quote;

  if (hash) {
    // Find quote by hash
    quote = quotes.find(q => "#" + btoa(encodeURIComponent(q.quote)) === hash);
    if (quote) playStopAction();
  } else {
    // Get random quote (avoid repeating the same quote)
    let attempts = 0;
    do {
      quote = quotes[Math.floor(Math.random() * quotes.length)];
      attempts++;
    } while (currentQuote && quote.quote === currentQuote.quote && attempts < 5);
  }

  if (!quote) return;

  currentQuote = quote;

  // Function to update quote content
  const updateContent = () => {
    // Display quote content
    elements.quote.textContent = quote.quote;
    elements.author.textContent = quote.author;

    // Prepare tweet text
    const twitterHandle = quote.twitter_handle ? '@' + quote.twitter_handle : quote.author;
    const tQuote = `"${quote.quote}" - ${twitterHandle}`;

    // Update tweet button
    elements.tTweet.href = `${T_TWEET}&text=${encodeURIComponent(tQuote)}&url=https://areguig.github.io/wisdom`;
    elements.tTweet.style.display = 'block';

    // Update Open Graph meta tags
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogDescription) ogDescription.content = tQuote;
    if (ogUrl) ogUrl.content = window.location.href;

    // Update URL hash
    window.location.hash = btoa(encodeURIComponent(quote.quote));

    // Show retweet and like buttons if tweet_id exists
    if (quote.tweet_id) {
      elements.tRetweet.href = T_RETWEET + quote.tweet_id;
      elements.tRetweet.style.display = 'block';
      elements.tLike.href = T_LIKE + quote.tweet_id;
      elements.tLike.style.display = 'block';
    }
  };

  // Apply transition or immediate update
  if (skipTransition) {
    updateContent();
  } else {
    await smoothTransition(updateContent);
  }

  // Reset progress bar with smooth animation
  const timer = elements.progressBar.querySelector('::after') || elements.progressBar;
  elements.progressBar.style.width = '100%';
  elements.progressBar.setAttribute('data-timer', timerInSec);
}

/**
 * Toggles play/pause state
 */
function playStopAction() {
  isPlaying = !isPlaying;

  if (isPlaying) {
    if (elements.playControl) elements.playControl.style.display = 'block';
    if (elements.pauseControl) elements.pauseControl.style.display = 'none';
    if (elements.timerInput) {
      timerInSec = parseInt(elements.timerInput.value) || 17;
    }
    elements.progressBar.setAttribute('data-timer', timerInSec);
  } else {
    if (elements.playControl) elements.playControl.style.display = 'none';
    if (elements.pauseControl) elements.pauseControl.style.display = 'block';
  }
}

/**
 * Handles the progress bar countdown with smooth animation
 */
function progressBarHandler() {
  let currentTime = parseInt(elements.progressBar.getAttribute('data-timer'));

  if (isPlaying && currentTime > 0) {
    const percentage = (currentTime / timerInSec) * 100;
    // Update CSS custom property for smooth animation
    elements.progressBar.style.setProperty('--progress-width', percentage + '%');

    // For ::after pseudo-element, we use width on the parent
    const afterWidth = percentage + '%';
    elements.progressBar.style.width = afterWidth;

    elements.progressBar.setAttribute('data-timer', currentTime - 1);
  } else if (isPlaying && currentTime <= 0) {
    elements.progressBar.style.width = '0%';
    console.log("reset - loading new quote");
    displayQuote();
  }
}

/**
 * Adds ripple effect on click
 */
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');

  button.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎨 Wisdom Quotes - Modern Edition 2025');

  // Display initial quote without transition
  displayQuote(window.location.hash, true);

  // Start progress bar timer
  setInterval(progressBarHandler, 1000);

  // Keyboard event - Space bar to pause/play
  document.body.addEventListener('keyup', (e) => {
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      playStopAction();
    }
  });

  // Click on quote to pause/play with accessibility
  if (elements.quote) {
    elements.quote.addEventListener('click', playStopAction);

    // Also support Enter key for accessibility
    elements.quote.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        playStopAction();
      }
    });
  }

  // Add ripple effect to social buttons
  const socialButtons = document.querySelectorAll('.tbutton a');
  socialButtons.forEach(button => {
    button.addEventListener('click', createRipple);
  });

  // Timer input validation
  if (elements.timerInput) {
    elements.timerInput.addEventListener('change', (e) => {
      let value = parseInt(e.target.value);
      if (value < 5) value = 5;
      if (value > 60) value = 60;
      e.target.value = value;
      timerInSec = value;
    });
  }

  // Preload next quote for smoother transitions
  let preloadedQuote = null;
  setInterval(() => {
    if (isPlaying) {
      preloadedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }
  }, 5000);

  // Auto-animate card with gentle breathing effect (no mouse needed)
  const main = document.querySelector('main');
  if (main) {
    let animationTime = 0;

    // Continuous gentle animation loop
    setInterval(() => {
      animationTime += 0.02;

      // Gentle floating/breathing effect
      const floatY = Math.sin(animationTime) * 8;
      const rotateZ = Math.sin(animationTime * 0.5) * 1;
      const scale = 1 + Math.sin(animationTime * 0.3) * 0.01;

      main.style.transform = `translateY(${floatY}px) rotateZ(${rotateZ}deg) scale(${scale})`;
    }, 50);
  }
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
