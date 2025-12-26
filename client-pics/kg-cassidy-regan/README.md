# Client Photos: Cassidy Regan

## Instructions

Upload 8-9 photos to this directory. Name them anything you want - the carousel will display them in alphabetical/numerical order.

### Recommended Naming
- `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg`, `7.jpg`, `8.jpg`
- Or any descriptive names: `progress-1.jpg`, `photo-a.jpg`, etc.

Photos display in the order they're listed in the case file's `photos` array (not by filename).

## Format Guidelines

- **File format**: JPG or PNG
- **Recommended size**: 1200-2000px on longest side
- **Aspect ratio**: Any (carousel handles automatically, but 4:5 portrait recommended)
- **File size**: < 2MB per image (optimize for web)
- **Typical count**: 8-9 photos per client

## Privacy

- Ensure client has provided written consent for photo sharing
- Verify `clientConsent: true` in the case file
- Remove any identifying information from filenames or EXIF data

## Usage

After uploading photos (e.g., `1.jpg` through `8.jpg`), reference them in `/cases/kg-cassidy-regan.js`:

```javascript
photos: [
  { src: "./client-pics/kg-cassidy-regan/1.jpg", alt: "Client progress photo", label: "" },
  { src: "./client-pics/kg-cassidy-regan/2.jpg", alt: "Client progress photo", label: "" },
  { src: "./client-pics/kg-cassidy-regan/3.jpg", alt: "Client progress photo", label: "" },
  { src: "./client-pics/kg-cassidy-regan/4.jpg", alt: "Client progress photo", label: "" },
  { src: "./client-pics/kg-cassidy-regan/5.jpg", alt: "Client progress photo", label: "" },
  { src: "./client-pics/kg-cassidy-regan/6.jpg", alt: "Client progress photo", label: "" },
  { src: "./client-pics/kg-cassidy-regan/7.jpg", alt: "Client progress photo", label: "" },
  { src: "./client-pics/kg-cassidy-regan/8.jpg", alt: "Client progress photo", label: "" }
]
```

Photos display in the order listed above. Set `label: ""` to hide labels, or add text like `"Week 4"` for overlays.
