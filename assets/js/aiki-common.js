// 🦖 AIKI Common JavaScript - Shared utilities and functions 🔫

/**
 * AIKI Common Utilities
 * Provides shared functionality across all AIKI applications
 */

// Global AIKI namespace
window.AIKI = window.AIKI || {};

// Configuration (will be overridden by config.js)
AIKI.config = {
    version: '1.0.0',
    debug: true,
    animations: true,
    sounds: false,
    theme: 'dark'
};

/**
 * Utility Functions
 */
AIKI.utils = {
    
    /**
     * Format Norwegian currency
     * @param {number} number - The number to format
     * @returns {string} Formatted currency string
     */
    formatNOK: function(number) {
        if (isNaN(number)) return '0 kr';
        return new Intl.NumberFormat('nb-NO', {
            style: 'currency',
            currency: 'NOK',
            maximumFractionDigits: 0
        }).format(number);
    },

    /**
     * Format large numbers with Norwegian formatting
     * @param {number} number - The number to format
     * @returns {string} Formatted number string
     */
    formatNumber: function(number) {
        if (isNaN(number)) return '0';
        return new Intl.NumberFormat('nb-NO').format(number);
    },

    /**
     * Format percentage
     * @param {number} number - The number to format as percentage
     * @param {number} decimals - Number of decimal places (default: 1)
     * @returns {string} Formatted percentage string
     */
    formatPercent: function(number, decimals = 1) {
        if (isNaN(number)) return '0%';
        return number.toFixed(decimals) + '%';
    },

    /**
     * Create delay/sleep function
     * @param {number} ms - Milliseconds to delay
     * @returns {Promise} Promise that resolves after delay
     */
    delay: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    /**
     * Debounce function calls
     * @param {Function} func - Function to debounce
     * @param {number} wait - Milliseconds to wait
     * @returns {Function} Debounced function
     */
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Generate random ID
     * @param {number} length - Length of ID (default: 8)
     * @returns {string} Random ID string
     */
    generateId: function(length = 8) {
        return Math.random().toString(36).substr(2, length).toUpperCase();
    },

    /**
     * Validate Norwegian organization number
     * @param {string} orgnr - Organization number to validate
     * @returns {boolean} True if valid
     */
    validateOrgnr: function(orgnr) {
        if (!orgnr || orgnr.length !== 9) return false;
        const weights = [3, 2, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        
        for (let i = 0; i < 8; i++) {
            sum += parseInt(orgnr[i]) * weights[i];
        }
        
        const remainder = sum % 11;
        const checkDigit = remainder < 2 ? remainder : 11 - remainder;
        
        return checkDigit === parseInt(orgnr[8]);
    },

    /**
     * Calculate business days between two dates
     * @param {Date} startDate - Start date
     * @param {Date} endDate - End date
     * @returns {number} Business days count
     */
    businessDaysBetween: function(startDate, endDate) {
        let count = 0;
        const curDate = new Date(startDate);
        
        while (curDate <= endDate) {
            const dayOfWeek = curDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) count++;
            curDate.setDate(curDate.getDate() + 1);
        }
        
        return count;
    }
};

/**
 * DOM Utilities
 */
AIKI.dom = {
    
    /**
     * Safe query selector
     * @param {string} selector - CSS selector
     * @param {Element} parent - Parent element (optional)
     * @returns {Element|null} Found element or null
     */
    $: function(selector, parent = document) {
        return parent.querySelector(selector);
    },

    /**
     * Safe query selector all
     * @param {string} selector - CSS selector
     * @param {Element} parent - Parent element (optional)
     * @returns {NodeList} Found elements
     */
    $$: function(selector, parent = document) {
        return parent.querySelectorAll(selector);
    },

    /**
     * Add event listener with automatic cleanup
     * @param {Element} element - Element to add listener to
     * @param {string} event - Event name
     * @param {Function} handler - Event handler
     * @param {Object} options - Event options
     */
    on: function(element, event, handler, options = {}) {
        if (!element) return;
        element.addEventListener(event, handler, options);
        
        // Store for cleanup
        if (!element._aikiListeners) element._aikiListeners = [];
        element._aikiListeners.push({ event, handler, options });
    },

    /**
     * Remove all AIKI event listeners from element
     * @param {Element} element - Element to clean up
     */
    cleanup: function(element) {
        if (!element || !element._aikiListeners) return;
        
        element._aikiListeners.forEach(({ event, handler, options }) => {
            element.removeEventListener(event, handler, options);
        });
        
        delete element._aikiListeners;
    },

    /**
     * Create element with attributes and content
     * @param {string} tag - HTML tag name
     * @param {Object} attributes - Element attributes
     * @param {string|Element} content - Element content
     * @returns {Element} Created element
     */
    create: function(tag, attributes = {}, content = '') {
        const element = document.createElement(tag);
        
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === 'className') {
                element.className = value;
            } else if (key === 'dataset') {
                Object.entries(value).forEach(([dataKey, dataValue]) => {
                    element.dataset[dataKey] = dataValue;
                });
            } else {
                element.setAttribute(key, value);
            }
        });
        
        if (typeof content === 'string') {
            element.innerHTML = content;
        } else if (content instanceof Element) {
            element.appendChild(content);
        }
        
        return element;
    }
};

/**
 * Animation Utilities
 */
AIKI.animations = {
    
    /**
     * Animate number value with easing
     * @param {Element} element - Element to animate
     * @param {number} start - Start value
     * @param {number} end - End value
     * @param {number} duration - Animation duration in ms
     * @param {Function} formatter - Value formatter function
     */
    animateValue: function(element, start, end, duration = 1000, formatter = null) {
        if (!element || !AIKI.config.animations) {
            if (element) element.textContent = formatter ? formatter(end) : end;
            return;
        }

        const startTime = performance.now();
        const change = end - start;

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out-cubic)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (change * easeOut);
            
            element.textContent = formatter ? formatter(current) : Math.round(current);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    },

    /**
     * Shake element animation
     * @param {Element} element - Element to shake
     * @param {number} duration - Animation duration in ms
     */
    shake: function(element, duration = 500) {
        if (!element || !AIKI.config.animations) return;
        
        element.style.animation = `aiki-shake ${duration}ms ease-in-out`;
        
        setTimeout(() => {
            element.style.animation = '';
        }, duration);
    },

    /**
     * Pulse element animation
     * @param {Element} element - Element to pulse
     * @param {number} duration - Animation duration in ms
     */
    pulse: function(element, duration = 1000) {
        if (!element || !AIKI.config.animations) return;
        
        element.style.animation = `aiki-pulse ${duration}ms ease-in-out`;
        
        setTimeout(() => {
            element.style.animation = '';
        }, duration);
    },

    /**
     * Glow effect animation
     * @param {Element} element - Element to add glow to
     * @param {number} duration - Animation duration in ms
     */
    glow: function(element, duration = 2000) {
        if (!element || !AIKI.config.animations) return;
        
        element.style.animation = `aiki-glow ${duration}ms ease-in-out`;
        
        setTimeout(() => {
            element.style.animation = '';
        }, duration);
    }
};

/**
 * Modal Management
 */
AIKI.modal = {
    
    /**
     * Show modal
     * @param {string|Element} modal - Modal selector or element
     */
    show: function(modal) {
        const modalEl = typeof modal === 'string' ? AIKI.dom.$(modal) : modal;
        if (!modalEl) return;
        
        modalEl.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Focus trap
        this._trapFocus(modalEl);
        
        // ESC key handling
        this._handleEscape = (e) => {
            if (e.key === 'Escape') this.hide(modalEl);
        };
        document.addEventListener('keydown', this._handleEscape);
    },

    /**
     * Hide modal
     * @param {string|Element} modal - Modal selector or element
     */
    hide: function(modal) {
        const modalEl = typeof modal === 'string' ? AIKI.dom.$(modal) : modal;
        if (!modalEl) return;
        
        modalEl.style.display = 'none';
        document.body.style.overflow = '';
        
        // Remove ESC key handling
        if (this._handleEscape) {
            document.removeEventListener('keydown', this._handleEscape);
            delete this._handleEscape;
        }
    },

    /**
     * Initialize modal system
     */
    init: function() {
        // Auto-initialize modals
        AIKI.dom.$$('.aiki-modal').forEach(modal => {
            // Close button
            const closeBtn = modal.querySelector('.aiki-modal-close');
            if (closeBtn) {
                AIKI.dom.on(closeBtn, 'click', () => this.hide(modal));
            }
            
            // Click outside to close
            AIKI.dom.on(modal, 'click', (e) => {
                if (e.target === modal) this.hide(modal);
            });
        });
    },

    /**
     * Trap focus within modal
     * @private
     */
    _trapFocus: function(modal) {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        firstElement.focus();
        
        const handleTab = (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        };
        
        modal.addEventListener('keydown', handleTab);
    }
};

/**
 * Form Utilities
 */
AIKI.forms = {
    
    /**
     * Get form data as object
     * @param {Element} form - Form element
     * @returns {Object} Form data object
     */
    getData: function(form) {
        const formData = new FormData(form);
        const data = {};
        
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        return data;
    },

    /**
     * Set form data from object
     * @param {Element} form - Form element
     * @param {Object} data - Data object
     */
    setData: function(form, data) {
        Object.entries(data).forEach(([key, value]) => {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = value;
                } else {
                    input.value = value;
                }
            }
        });
    },

    /**
     * Reset form with animation
     * @param {Element} form - Form element
     */
    reset: function(form) {
        form.reset();
        
        // Animate reset
        if (AIKI.config.animations) {
            form.style.opacity = '0.5';
            setTimeout(() => {
                form.style.opacity = '1';
            }, 200);
        }
    },

    /**
     * Validate form
     * @param {Element} form - Form element
     * @returns {Object} Validation result
     */
    validate: function(form) {
        const errors = {};
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                errors[input.name] = 'Dette feltet er påkrevd';
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
            
            // Email validation
            if (input.type === 'email' && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    errors[input.name] = 'Ugyldig e-postadresse';
                    input.classList.add('error');
                }
            }
        });
        
        return {
            isValid: Object.keys(errors).length === 0,
            errors
        };
    }
};

/**
 * Local Storage Utilities
 */
AIKI.storage = {
    
    /**
     * Set item in localStorage with error handling
     * @param {string} key - Storage key
     * @param {*} value - Value to store
     */
    set: function(key, value) {
        try {
            localStorage.setItem(`aiki_${key}`, JSON.stringify(value));
        } catch (e) {
            console.error('AIKI Storage Error:', e);
        }
    },

    /**
     * Get item from localStorage with error handling
     * @param {string} key - Storage key
     * @param {*} defaultValue - Default value if not found
     * @returns {*} Stored value or default
     */
    get: function(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(`aiki_${key}`);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('AIKI Storage Error:', e);
            return defaultValue;
        }
    },

    /**
     * Remove item from localStorage
     * @param {string} key - Storage key
     */
    remove: function(key) {
        try {
            localStorage.removeItem(`aiki_${key}`);
        } catch (e) {
            console.error('AIKI Storage Error:', e);
        }
    },

    /**
     * Clear all AIKI storage
     */
    clear: function() {
        try {
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('aiki_')) {
                    localStorage.removeItem(key);
                }
            });
        } catch (e) {
            console.error('AIKI Storage Error:', e);
        }
    }
};

/**
 * Logger Utilities
 */
AIKI.logger = {
    
    /**
     * Debug log (only if debug enabled)
     * @param {...*} args - Arguments to log
     */
    debug: function(...args) {
        if (AIKI.config.debug) {
            console.log('🦖 AIKI DEBUG:', ...args);
        }
    },

    /**
     * Info log
     * @param {...*} args - Arguments to log
     */
    info: function(...args) {
        console.info('🦖 AIKI INFO:', ...args);
    },

    /**
     * Warning log
     * @param {...*} args - Arguments to log
     */
    warn: function(...args) {
        console.warn('🔫 AIKI WARNING:', ...args);
    },

    /**
     * Error log
     * @param {...*} args - Arguments to log
     */
    error: function(...args) {
        console.error('💥 AIKI ERROR:', ...args);
    },

    /**
     * Success log
     * @param {...*} args - Arguments to log
     */
    success: function(...args) {
        console.log('✅ AIKI SUCCESS:', ...args);
    }
};

/**
 * Theme Management
 */
AIKI.theme = {
    
    /**
     * Set theme
     * @param {string} theme - Theme name (dark/light)
     */
    set: function(theme) {
        document.body.setAttribute('data-theme', theme);
        AIKI.config.theme = theme;
        AIKI.storage.set('theme', theme);
    },

    /**
     * Get current theme
     * @returns {string} Current theme
     */
    get: function() {
        return AIKI.config.theme;
    },

    /**
     * Toggle theme
     */
    toggle: function() {
        const newTheme = this.get() === 'dark' ? 'light' : 'dark';
        this.set(newTheme);
    },

    /**
     * Initialize theme from storage
     */
    init: function() {
        const savedTheme = AIKI.storage.get('theme', 'dark');
        this.set(savedTheme);
    }
};

/**
 * Initialize AIKI Common
 */
AIKI.init = function() {
    AIKI.logger.info('Initializing AIKI Common v' + AIKI.config.version);
    
    // Initialize components
    AIKI.modal.init();
    AIKI.theme.init();
    
    // Add global event listeners
    document.addEventListener('DOMContentLoaded', () => {
        AIKI.logger.debug('DOM Content Loaded');
        
        // Initialize any auto-init components
        AIKI.dom.$$('[data-aiki-auto-init]').forEach(element => {
            const component = element.dataset.aikiAutoInit;
            if (AIKI[component] && AIKI[component].init) {
                AIKI[component].init(element);
            }
        });
    });
    
    // Easter egg: Konami code
    const konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            AIKI.logger.success('🦖 KONAMI CODE ACTIVATED! Dinosaur power unleashed! 💥');
            AIKI.animations.shake(document.body, 3000);
            
            // Show all dinosaurs
            AIKI.dom.$$('.aiki-dino-silhouette').forEach(dino => {
                dino.style.opacity = '0.3';
                dino.style.fontSize = '6rem';
                setTimeout(() => {
                    dino.style.opacity = '0.05';
                    dino.style.fontSize = '4rem';
                }, 3000);
            });
        }
    });
    
    AIKI.logger.success('AIKI Common initialized! Ready for dinosaur action! 🦖💥');
};

// Auto-initialize when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', AIKI.init);
} else {
    AIKI.init();
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIKI;
} 