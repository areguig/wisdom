// Twitter Intent URLs
const T_TWEET = "https://twitter.com/intent/tweet?hashtags=wisdom";
const T_RETWEET = "https://twitter.com/intent/retweet?tweet_id=";
const T_LIKE = "https://twitter.com/intent/like?tweet_id=";

// Application state
let timerInSec = 17;
let isPlaying = true;

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
 * Displays a quote - either from hash or random
 * @param {string} hash - Optional hash to display specific quote
 */
function displayQuote(hash) {
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
    // Get random quote
    quote = quotes[Math.floor(Math.random() * quotes.length)];
  }

  if (!quote) return;

  // Display quote content
  elements.quote.innerHTML = quote.quote;
  elements.author.innerHTML = '— ' + quote.author;

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

  // Reset progress bar
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
 * Handles the progress bar countdown
 */
function progressBarHandler() {
  let currentTime = parseInt(elements.progressBar.getAttribute('data-timer'));
  console.log(currentTime);

  if (isPlaying && currentTime > 0) {
    const percentage = (currentTime / timerInSec) * 100;
    elements.progressBar.style.width = percentage + '%';
    elements.progressBar.setAttribute('data-timer', currentTime - 1);
  } else if (isPlaying && currentTime <= 0) {
    elements.progressBar.style.width = '0px';
    console.log("reset");
    displayQuote();
  }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  // Display initial quote
  displayQuote(window.location.hash);

  // Start progress bar timer
  setInterval(progressBarHandler, 1000);

  // Keyboard event - Space bar to pause/play
  document.body.addEventListener('keyup', (e) => {
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      playStopAction();
    }
  });

  // Click on quote to pause/play
  if (elements.quote) {
    elements.quote.addEventListener('click', (e) => {
      playStopAction();
    });
  }
});
