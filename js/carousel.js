/**
 * Reusable Image Carousel Component
 * Used in: About page, Client modals, Full report pages
 */

export class ImageCarousel {
  constructor(container, images, options = {}) {
    this.container = container;
    this.images = images;
    this.currentIndex = 0;
    this.options = {
      showLabels: options.showLabels !== undefined ? options.showLabels : true,
      showArrows: options.showArrows !== undefined ? options.showArrows : true,
      showDots: options.showDots !== undefined ? options.showDots : true,
      autoHide: options.autoHide !== undefined ? options.autoHide : true, // Hide controls if only 1 image
      aspectRatio: options.aspectRatio || 'auto', // 'auto', '4/5', '16/9', etc.
      ...options
    };
    
    this.init();
  }
  
  init() {
    this.render();
    this.attachEventListeners();
  }
  
  render() {
    const hideControls = this.options.autoHide && this.images.length === 1;
    
    this.container.innerHTML = `
      <div class="carousel-container">
        <div class="carousel-images">
          ${this.images.map((img, index) => `
            <img 
              src="${img.src}" 
              alt="${img.alt || ''}"
              class="carousel-image ${index === 0 ? 'active' : ''}"
              loading="${index === 0 ? 'eager' : 'lazy'}"
              style="${this.options.aspectRatio !== 'auto' ? `aspect-ratio: ${this.options.aspectRatio};` : ''}"
            >
          `).join('')}
        </div>
        
        ${!hideControls && this.options.showArrows && this.images.length > 1 ? `
          <button class="carousel-btn carousel-btn--prev" aria-label="Previous image">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button class="carousel-btn carousel-btn--next" aria-label="Next image">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        ` : ''}
        
        ${this.options.showLabels && this.images[this.currentIndex].label ? `
          <div class="carousel-label">${this.images[this.currentIndex].label}</div>
        ` : ''}
        
        ${!hideControls && this.options.showDots && this.images.length > 1 ? `
          <div class="carousel-dots">
            ${this.images.map((_, index) => `
              <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to image ${index + 1}"></button>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
    
    this.cacheElements();
  }
  
  cacheElements() {
    this.imageElements = this.container.querySelectorAll('.carousel-image');
    this.dotElements = this.container.querySelectorAll('.carousel-dot');
    this.labelElement = this.container.querySelector('.carousel-label');
    this.prevBtn = this.container.querySelector('.carousel-btn--prev');
    this.nextBtn = this.container.querySelector('.carousel-btn--next');
  }
  
  attachEventListeners() {
    // Arrow buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }
    
    // Dots
    this.dotElements.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        this.goTo(index);
      });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.isInView()) return;
      
      if (e.key === 'ArrowLeft') {
        this.prev();
      } else if (e.key === 'ArrowRight') {
        this.next();
      }
    });
    
    // Swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    this.container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    this.container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    });
    
    const handleSwipe = () => {
      if (touchEndX < touchStartX - 50) {
        this.next();
      }
      if (touchEndX > touchStartX + 50) {
        this.prev();
      }
    };
    
    this.handleSwipe = handleSwipe;
  }
  
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateDisplay();
  }
  
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateDisplay();
  }
  
  goTo(index) {
    this.currentIndex = index;
    this.updateDisplay();
  }
  
  updateDisplay() {
    // Update images
    this.imageElements.forEach((img, index) => {
      img.classList.toggle('active', index === this.currentIndex);
    });
    
    // Update dots
    this.dotElements.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
    
    // Update label
    if (this.labelElement && this.images[this.currentIndex].label) {
      this.labelElement.textContent = this.images[this.currentIndex].label;
    }
  }
  
  isInView() {
    const rect = this.container.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  destroy() {
    // Clean up event listeners if needed
    this.container.innerHTML = '';
  }
}
