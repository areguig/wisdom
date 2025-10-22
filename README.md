# Wisdom - Developer Quotes

> A modern, responsive web application displaying hand-picked IT & Computer Science quotes.

**Live Demo:** [https://areguig.github.io/wisdom/](https://areguig.github.io/wisdom/)

## Features

- **Auto-rotating Quotes**: Displays a new quote every 17 seconds with a visual progress bar
- **Interactive Controls**: Click on quote or press Space to pause/play
- **Social Sharing**: Share quotes directly to Twitter with one click
- **Dark Mode Support**: Automatically adapts to system color scheme preferences
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Modern Tech Stack**: Built with latest web standards and best practices

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

## Recent Modernization (2025)

This application has been completely modernized with the following improvements:

### Security & Dependencies
✅ Updated Jekyll from 3.4.3 → 4.3+ (fixed security vulnerabilities)
✅ Upgraded Bootstrap from 3.3.0 → 5.3.2 (7 years of updates)
✅ Removed jQuery dependency (better performance)
✅ Updated Font Awesome from 4.x → 6.5.1
✅ All CDN links now use HTTPS with integrity checks

### Code Quality
✅ Migrated from ES5 to modern ES6+ JavaScript
✅ Removed 4 duplicate quotes from dataset
✅ Fixed typo in config (githib.io → github.io)
✅ Added comprehensive JSDoc comments
✅ Implemented proper error handling

### Modern Features
✅ CSS Variables for easy theming
✅ Automatic dark mode support
✅ Responsive design with clamp() for fluid typography
✅ Smooth animations and transitions
✅ Reduced motion support for accessibility
✅ Better mobile experience

### Accessibility
✅ Semantic HTML5 structure
✅ ARIA labels and roles
✅ Keyboard navigation (Space to pause/play)
✅ Focus indicators
✅ Screen reader friendly
✅ WCAG 2.1 compliance

### Performance
✅ No jQuery (reduced bundle size)
✅ Modern, efficient vanilla JavaScript
✅ Optimized CSS with better selectors
✅ Lazy loading for Twitter widgets

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
