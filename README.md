# Wisdom - Developer Quotes

> A modern, responsive web application displaying hand-picked IT & Computer Science quotes.

**Live Demo:** [https://areguig.github.io/wisdom/](https://areguig.github.io/wisdom/)

## Features

### 🎨 Stunning 2025 Design
- **Glassmorphism UI**: Modern frosted glass effect with backdrop blur
- **Animated Gradient Background**: Dynamic mesh gradient that shifts smoothly
- **Smooth Transitions**: Elegant fade animations between quotes
- **Parallax Effects**: Subtle 3D tilt effect on mouse movement
- **Micro-interactions**: Ripple effects, hover animations, and delightful details

### ⚡ Core Features
- **Auto-rotating Quotes**: Displays wisdom with configurable timer (5-60 seconds)
- **Interactive Controls**: Click quote or press Space to pause/play
- **Social Sharing**: Beautiful glassmorphic buttons to share on Twitter
- **Dark Mode Support**: Automatically adapts to system color scheme
- **Fully Responsive**: Perfect on any screen size from mobile to 4K displays
- **Accessible**: WCAG 2.1 compliant with screen reader support

### 💎 Premium Experience
- **Modern Typography**: Beautiful Playfair Display + Inter font pairing
- **Smooth Progress Bar**: Elegant animated progress indicator
- **No Repeated Quotes**: Smart algorithm avoids showing the same quote twice
- **Optimized Performance**: No jQuery, pure vanilla ES6+ JavaScript

## Technology Stack

### Frontend
- **Jekyll 4.3+**: Modern static site generator
- **Bootstrap 5.3**: Latest responsive framework
- **Vanilla JavaScript (ES6+)**: No jQuery dependency, modern JavaScript
- **Font Awesome 6.5**: Updated icon library
- **CSS Variables**: For theming and dark mode support

### Accessibility
- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Reduced motion support for accessibility preferences

## Getting Started

### Prerequisites
- Ruby (version specified in Gemfile)
- Bundler gem

### Installation

1. Clone the repository:
```bash
git clone https://github.com/areguig/wisdom.git
cd wisdom
```

2. Install dependencies:
```bash
bundle install
```

3. Run the development server:
```bash
bundle exec jekyll serve
```

4. Open your browser to `http://localhost:4000/wisdom`

## Project Structure

```
wisdom/
├── _data/
│   └── quotes.yml          # All quotes data
├── _layouts/
│   └── quotes.html         # Main layout template
├── css/
│   └── quotes.css          # Styles with dark mode support
├── js/
│   └── quotes.js           # Modern vanilla JavaScript
├── font/                   # Font files (Font Awesome)
├── _config.yml            # Jekyll configuration
├── index.md               # Homepage
└── README.md              # This file
```

## Adding Quotes

All quotes are stored in `_data/quotes.yml`. To add a new quote:

1. Open `_data/quotes.yml`
2. Add your quote following this format:

```yaml
- quote: "Your quote text here"
  author: Author Name
  twitter_handle: optional_twitter_handle
  tweet_id: optional_tweet_id
```

3. Submit a Pull Request or open an Issue

## Design Philosophy

**Built for Tech Spaces**: This application is specifically designed to be displayed in open tech offices, coworking spaces, and innovation hubs. The stunning visual design captures attention while delivering thoughtful wisdom to inspire developers and tech professionals.

**2025 Design Standards**:
- Glassmorphism and frosted glass effects
- Smooth animations and micro-interactions
- Modern gradient backgrounds with ambient effects
- Elegant typography with professional font pairings
- Responsive design that looks stunning on any display

## Recent Modernization (2025)

This application has been completely redesigned and modernized with the following improvements:

### 🎨 Visual Design (2025)
✅ **Glassmorphism UI** - Frosted glass cards with backdrop blur
✅ **Animated Gradients** - Dynamic mesh gradient backgrounds
✅ **Smooth Transitions** - Fade in/out animations between quotes
✅ **Parallax Effects** - 3D tilt on mouse movement
✅ **Micro-interactions** - Ripple effects, heart beat animations
✅ **Modern Typography** - Playfair Display + Inter fonts
✅ **Ambient Effects** - Floating particles and subtle animations

### 🔒 Security & Dependencies
✅ Updated Jekyll from 3.4.3 → 4.3+ (fixed security vulnerabilities)
✅ Upgraded Bootstrap from 3.3.0 → 5.3.2 (7 years of updates)
✅ Removed jQuery dependency (better performance)
✅ Updated Font Awesome from 4.x → 6.5.1
✅ All CDN links now use HTTPS with integrity checks
✅ Removed outdated tracking scripts

### 💻 Code Quality
✅ Migrated from ES5 to modern ES6+ JavaScript
✅ Async/await for smooth transitions
✅ Removed 4 duplicate quotes from dataset
✅ Fixed typo in config (githib.io → github.io)
✅ Added comprehensive JSDoc comments
✅ Smart quote randomization (no immediate repeats)

### ✨ Modern Features
✅ CSS Variables for dynamic theming
✅ Automatic dark mode with elegant color schemes
✅ Responsive design with clamp() for fluid typography
✅ Smooth animations and transitions
✅ Progress bar with glow effects
✅ Configurable timer (5-60 seconds)
✅ Reduced motion support for accessibility

### ♿ Accessibility
✅ Semantic HTML5 structure
✅ ARIA labels and roles
✅ Keyboard navigation (Space to pause/play, Enter support)
✅ Focus indicators with modern styling
✅ Screen reader friendly
✅ WCAG 2.1 AA compliance

### ⚡ Performance
✅ No jQuery (60KB+ saved)
✅ Modern, efficient vanilla JavaScript
✅ Optimized CSS with better selectors
✅ Hardware-accelerated animations
✅ Preloading for smoother transitions

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue if you:
- Want to add a new quote
- Find a bug
- Have a feature suggestion
- Want to improve documentation

## License

This project is open source and available under the MIT License.

## Author

**Akli Reguig**
- Twitter: [@aklireguig](https://twitter.com/aklireguig)
- GitHub: [@areguig](https://github.com/areguig)

## Acknowledgments

- All the amazing developers and thinkers who contributed these quotes
- The open-source community for the tools that make this possible
