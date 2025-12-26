# Image Carousel Component Documentation

## Overview

The `ImageCarousel` class is a reusable, responsive carousel component used throughout the site for displaying client photos.

## Usage

### Basic Implementation

```javascript
import { ImageCarousel } from './js/carousel.js';

const images = [
  { src: './path/to/image1.jpg', alt: 'Description', label: 'Before' },
  { src: './path/to/image2.jpg', alt: 'Description', label: 'After' }
];

const container = document.getElementById('carousel-container');
new ImageCarousel(container, images);
```

### With Options

```javascript
new ImageCarousel(container, images, {
  showLabels: true,          // Show label overlay (default: true)
  showArrows: true,          // Show prev/next buttons (default: true)
  showDots: true,            // Show dot indicators (default: true)
  autoHide: true,            // Hide controls if only 1 image (default: true)
  aspectRatio: '4/5'         // Set aspect ratio or 'auto' (default: 'auto')
});
```

## Image Object Structure

```javascript
{
  src: string,      // Required: Image path or URL
  alt: string,      // Required: Alt text for accessibility
  label: string     // Optional: Label overlay text (e.g., "Before", "Week 8")
}
```

## Options Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `showLabels` | boolean | `true` | Display label overlay on images |
| `showArrows` | boolean | `true` | Show prev/next navigation buttons |
| `showDots` | boolean | `true` | Show dot indicators at bottom |
| `autoHide` | boolean | `true` | Hide controls when only 1 image |
| `aspectRatio` | string | `'auto'` | CSS aspect ratio (e.g., '16/9', '4/5') |

## Features

### Navigation
- **Arrow Buttons**: Click prev/next buttons to navigate
- **Keyboard**: Use ← and → arrow keys
- **Swipe**: Swipe left/right on touch devices
- **Dots**: Click any dot to jump to that image

### Performance
- First image loads immediately (`loading="eager"`)
- Subsequent images lazy load (`loading="lazy"`)
- Smooth fade transitions between images

### Accessibility
- Proper ARIA labels on buttons
- Keyboard navigation support
- Alt text on all images

## Integration Points

### 1. Client Modals (`outcomes.html`)
```javascript
const carouselContainer = document.getElementById('modalCarousel');
new ImageCarousel(carouselContainer, caseData.photos, {
  aspectRatio: '4/5'
});
```

### 2. About Page (`about.html`)
```javascript
// Implementation already exists
// Uses same carousel component
```

### 3. Full Report Pages (`case-report.html`)
```javascript
// Future implementation
// Will use same carousel component
```

## Case File Integration

Update case files to use the `photos` array:

```javascript
// cases/kg-client-name.js
export default {
  // ... other fields
  
  photos: [
    { src: "./client-pics/kg-client-name/1.jpg", alt: "Client progress photo 1", label: "Photo 1" },
    { src: "./client-pics/kg-client-name/2.jpg", alt: "Client progress photo 2", label: "Photo 2" },
    { src: "./client-pics/kg-client-name/3.jpg", alt: "Client progress photo 3", label: "Photo 3" },
    { src: "./client-pics/kg-client-name/4.jpg", alt: "Client progress photo 4", label: "Photo 4" },
    { src: "./client-pics/kg-client-name/5.jpg", alt: "Client progress photo 5", label: "Photo 5" },
    { src: "./client-pics/kg-client-name/6.jpg", alt: "Client progress photo 6", label: "Photo 6" },
    { src: "./client-pics/kg-client-name/7.jpg", alt: "Client progress photo 7", label: "Photo 7" },
    { src: "./client-pics/kg-client-name/8.jpg", alt: "Client progress photo 8", label: "Photo 8" }
  ],
  
  // Deprecated but kept for backward compatibility
  images: {
    before: "...",
    after: "...",
    additional: []
  }
}
```

## Styling

Carousel styles are in `styles.css` under the **Carousel Styles (Reusable Component)** section.

### Key CSS Classes
- `.carousel-container` - Main container
- `.carousel-images` - Image wrapper
- `.carousel-image` - Individual image (use `.active` for current)
- `.carousel-btn` - Navigation buttons
- `.carousel-label` - Label overlay
- `.carousel-dots` - Dot indicators container
- `.carousel-dot` - Individual dot (use `.active` for current)

### Customization

Override styles for specific contexts:

```css
/* Modal-specific carousel adjustments */
.case-detail__carousel .carousel-container {
  max-height: 600px;
}

/* About page carousel adjustments */
.about-carousel .carousel-btn {
  width: 50px;
  height: 50px;
}
```

## Photo Management

### Directory Structure
```
client-pics/
├── kg-cassidy-regan/
│   ├── before.jpg
│   ├── after.jpg
│   ├── week-8.jpg
│   └── README.md
├── kg-jane-doe/
│   ├── before.jpg
│   └── after.jpg
└── kg-sarah-chen/
    └── ...
```

### Adding Photos

1. Create client directory: `/client-pics/kg-firstname-lastname/`
2. Upload 8-9 photos with any names (e.g., `1.jpg`, `2.jpg`, `3.jpg`, etc.)
3. Photos display in alphabetical/numerical order
4. Update case file `photos` array with all uploaded filenames
5. Deploy and test

### Photo Guidelines

- **Naming**: Any descriptive names (numbered files work great: `1.jpg`, `2.jpg`, etc.)
- **Quantity**: Typically 8-9 photos per client
- **Format**: JPG or PNG
- **Size**: 1200-2000px longest side
- **Aspect Ratio**: Any (4:5 portrait recommended)
- **File Size**: < 2MB (optimize for web)
- **Privacy**: Verify client consent before adding

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Touch/swipe support for mobile devices
- Keyboard navigation for accessibility
- Falls back gracefully if JavaScript disabled

## Methods

### `prev()`
Navigate to previous image

### `next()`
Navigate to next image

### `goTo(index)`
Jump to specific image by index

### `updateDisplay()`
Refresh the carousel display (called automatically)

### `destroy()`
Clean up and remove carousel

## Examples

### Single Image
```javascript
// Carousel works with 1 image, controls auto-hide
const singleImage = [
  { src: './photo.jpg', alt: 'Client Photo', label: 'Result' }
];
new ImageCarousel(container, singleImage);
```

### Multiple Images
```javascript
// Full carousel with all controls
const multipleImages = [
  { src: './before.jpg', alt: 'Before', label: 'Before' },
  { src: './during.jpg', alt: 'Week 8', label: 'Week 8' },
  { src: './after.jpg', alt: 'After', label: 'After' }
];
new ImageCarousel(container, multipleImages);
```

### Without Labels
```javascript
// Hide label overlays
new ImageCarousel(container, images, {
  showLabels: false
});
```

### Custom Aspect Ratio
```javascript
// Wide format for landscape photos
new ImageCarousel(container, images, {
  aspectRatio: '16/9'
});
```

## Troubleshooting

**Images not loading:**
- Check file paths are correct relative to HTML file
- Verify images exist in specified directories
- Check browser console for 404 errors

**Carousel not appearing:**
- Ensure container element exists before initialization
- Check that images array is not empty
- Verify carousel.js is imported correctly

**Controls not working:**
- Check JavaScript console for errors
- Verify event listeners are attached
- Test keyboard/swipe on appropriate devices

## Future Enhancements

- [ ] Autoplay functionality
- [ ] Thumbnail preview strip
- [ ] Zoom/lightbox integration
- [ ] Video support
- [ ] Lazy loading optimization
- [ ] Progress indicator for autoplay

---

**Last Updated**: 2025-01-26
