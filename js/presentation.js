class PresentationController {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.totalSlides = this.slides.length;
        this.timerInterval = null;
        this.currentTheme = localStorage.getItem('ocuTheme') || 'light';
        this.hideControlsTimer = null;
        this.hideDelay = 2000; // 2 seconds of inactivity

        this.init();
    }

    init() {
        // Initialize theme FIRST before anything else
        this.initializeTheme();

        // Create merged top controls
        this.createTopControls();

        // Initialize slide counter display
        this.updateSlideCounter();

        // Show first slide
        this.showSlide(0);

        // Bind navigation buttons
        this.bindNavigationButtons();

        // Bind keyboard navigation
        this.bindKeyboardNavigation();

        // Initialize any timers if present
        this.initializeTimers();

        // Set up auto-hide controls
        this.initializeAutoHide();
    }

    initializeTheme() {
        // Apply saved theme immediately
        document.documentElement.setAttribute('data-theme', this.currentTheme);
    }

    createTopControls() {
        // Get lecture title from timer-display if it exists
        const timerDisplay = document.querySelector('.timer-display');
        const lectureTitle = timerDisplay ? timerDisplay.querySelector('#timer-text')?.childNodes[0]?.textContent?.trim() || 'Lecture' : 'Lecture';
        const homeButton = timerDisplay ? timerDisplay.querySelector('.home')?.innerHTML || '' : '';

        const controlsHTML = `
            <div class="top-controls">
                <div class="control-tab">⚙️</div>
                <div class="controls-row">
                    <div class="lecture-info">
                        <span>${lectureTitle}</span>
                        ${homeButton ? `<button class="home">${homeButton}</button>` : ''}
                    </div>
                    <div class="theme-toggle">
                        <span class="theme-toggle-label">Light</span>
                        <label class="theme-switch">
                            <input type="checkbox" id="theme-checkbox" ${this.currentTheme === 'dark' ? 'checked' : ''}>
                            <span class="theme-slider"></span>
                        </label>
                        <span class="theme-toggle-label">Dark</span>
                    </div>
                </div>
                <div class="timer-row" id="timer-row" style="display: none;">
                    <span class="timer-icon">⏱️</span>
                    <span id="timer-text" class="timer-text">Timer</span>
                    <button class="timer-stop-btn" onclick="presentation.stopTimer()">Stop</button>
                </div>
            </div>
        `;

        // Insert at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', controlsHTML);

        // Bind theme toggle
        setTimeout(() => {
            const themeToggle = document.querySelector('#theme-checkbox');
            if (themeToggle) {
                themeToggle.checked = this.currentTheme === 'dark';
                themeToggle.removeEventListener('change', this.handleThemeChange);
                themeToggle.addEventListener('change', this.handleThemeChange.bind(this));
            }
        }, 0);

        // Add tab to navigation
        const navigation = document.querySelector('.navigation');
        if (navigation && !navigation.querySelector('.nav-tab')) {
            navigation.insertAdjacentHTML('afterbegin', '<div class="nav-tab">◀▶</div>');
        }
    }

    handleThemeChange(e) {
        this.currentTheme = e.target.checked ? 'dark' : 'light';
        this.applyTheme();
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        
        // Update checkbox if it exists
        const checkbox = document.querySelector('#theme-checkbox');
        if (checkbox) {
            checkbox.checked = this.currentTheme === 'dark';
        }
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('ocuTheme', this.currentTheme);
    }

    showSlide(n) {
        // Hide current slide
        if (this.slides[this.currentSlide]) {
            this.slides[this.currentSlide].classList.remove('active');
        }

        // Calculate new slide index with wrapping
        this.currentSlide = (n + this.totalSlides) % this.totalSlides;

        // Show new slide
        this.slides[this.currentSlide].classList.add('active');

        // Update counter and button states
        this.updateSlideCounter();
        this.updateButtonStates();

        // Trigger slide change event for custom handlers
        this.triggerSlideChangeEvent();
    }

    changeSlide(direction) {
        this.showSlide(this.currentSlide + direction);
    }

    updateSlideCounter() {
        const currentSlideElement = document.getElementById('currentSlide');
        const totalSlidesElement = document.getElementById('totalSlides');

        if (currentSlideElement) {
            currentSlideElement.textContent = this.currentSlide + 1;
        }

        if (totalSlidesElement) {
            totalSlidesElement.textContent = this.totalSlides;
        }
    }

    updateButtonStates() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.disabled = this.currentSlide === 0;
        }

        if (nextBtn) {
            nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
        }
    }

    bindNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.onclick = null;
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.changeSlide(-1);
            });
        }

        if (nextBtn) {
            nextBtn.onclick = null;
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.changeSlide(1);
            });
        }
    }

    bindKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    if (this.currentSlide > 0) {
                        this.changeSlide(-1);
                    }
                    break;

                case 'ArrowRight':
                    if (this.currentSlide < this.totalSlides - 1) {
                        this.changeSlide(1);
                    }
                    break;

                case ' ':
                    e.preventDefault();
                    if (this.currentSlide < this.totalSlides - 1) {
                        this.changeSlide(1);
                    }
                    break;

                case 'Home':
                    e.preventDefault();
                    this.showSlide(0);
                    break;

                case 'End':
                    e.preventDefault();
                    this.showSlide(this.totalSlides - 1);
                    break;

                case 'f':
                case 'F':
                    e.preventDefault();
                    this.toggleFullscreen();
                    break;

                case 't':
                case 'T':
                    e.preventDefault();
                    this.toggleTheme();
                    break;

                case 'Escape':
                    if (document.fullscreenElement) {
                        document.exitFullscreen();
                    }
                    break;
            }
        });
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    initializeTimers() {
        // Look for timer buttons and bind them
        const timerButtons = document.querySelectorAll('[data-timer]');
        timerButtons.forEach(button => {
            button.addEventListener('click', () => {
                const minutes = parseInt(button.dataset.timer);
                this.startTimer(minutes);
            });
        });
    }

    startTimer(minutes) {
        const timerRow = document.getElementById('timer-row');
        const timerText = document.getElementById('timer-text');

        if (!timerRow || !timerText) return;

        timerRow.style.display = 'flex';
        let timeLeft = minutes * 60;

        // Clear existing timer if any
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.timerInterval = setInterval(() => {
            const mins = Math.floor(timeLeft / 60);
            const secs = timeLeft % 60;
            timerText.textContent = `Time: ${mins}:${secs.toString().padStart(2, '0')}`;

            if (timeLeft <= 0) {
                clearInterval(this.timerInterval);
                timerText.textContent = "Time's up!";
                this.playTimerSound();
            }

            timeLeft--;
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }

        const timerRow = document.getElementById('timer-row');
        if (timerRow) {
            timerRow.style.display = 'none';
        }
    }

    playTimerSound() {
        // Create a loud alarm ringing sound with multiple beeps
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // Create 6 beeps for alarm effect
            for (let i = 0; i < 6; i++) {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                // Alternate between two frequencies for ringing effect
                oscillator.frequency.value = i % 2 === 0 ? 880 : 1046.5; // A5 and C6
                oscillator.type = 'square'; // Square wave for more harsh/alarm sound

                const startTime = audioContext.currentTime + (i * 0.3);
                const duration = 0.25;

                // Louder volume
                gainNode.gain.setValueAtTime(0.6, startTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

                oscillator.start(startTime);
                oscillator.stop(startTime + duration);
            }

            // Trigger screen shake
            this.shakeScreen();
        } catch (e) {
            console.log('Could not play timer sound:', e);
        }
    }

    shakeScreen() {
        const container = document.querySelector('.presentation-container');
        if (container) {
            container.classList.add('shake');
            // Remove shake class after animation completes
            setTimeout(() => {
                container.classList.remove('shake');
            }, 2000);
        }
    }

    triggerSlideChangeEvent() {
        const event = new CustomEvent('slidechange', {
            detail: {
                currentSlide: this.currentSlide,
                totalSlides: this.totalSlides
            }
        });
        document.dispatchEvent(event);
    }

    // Public methods for external use
    getCurrentSlide() {
        return this.currentSlide;
    }

    getTotalSlides() {
        return this.totalSlides;
    }

    goToSlide(slideNumber) {
        if (slideNumber >= 0 && slideNumber < this.totalSlides) {
            this.showSlide(slideNumber);
        }
    }

    initializeAutoHide() {
        const topControls = document.querySelector('.top-controls');
        const navigation = document.querySelector('.navigation');
        const controlTab = document.querySelector('.control-tab');
        const navTab = document.querySelector('.nav-tab');

        if (!topControls || !navigation) return;

        // Show controls on activity
        const showControls = () => {
            topControls.classList.remove('controls-hidden');
            navigation.classList.remove('controls-hidden');
            this.resetHideTimer();
        };

        // Reset the hide timer
        this.resetHideTimer = () => {
            if (this.hideControlsTimer) {
                clearTimeout(this.hideControlsTimer);
            }
            this.hideControlsTimer = setTimeout(() => {
                topControls.classList.add('controls-hidden');
                navigation.classList.add('controls-hidden');
            }, this.hideDelay);
        };

        // Show controls on mouse movement
        document.addEventListener('mousemove', showControls);

        // Show controls on keyboard activity
        document.addEventListener('keydown', showControls);

        // Show controls when hovering over tabs
        if (controlTab) {
            controlTab.addEventListener('mouseenter', () => {
                topControls.classList.remove('controls-hidden');
            });
        }

        if (navTab) {
            navTab.addEventListener('mouseenter', () => {
                navigation.classList.remove('controls-hidden');
            });
        }

        // Keep controls visible when hovering over them
        topControls.addEventListener('mouseenter', () => {
            if (this.hideControlsTimer) {
                clearTimeout(this.hideControlsTimer);
            }
        });

        topControls.addEventListener('mouseleave', () => {
            this.resetHideTimer();
        });

        navigation.addEventListener('mouseenter', () => {
            if (this.hideControlsTimer) {
                clearTimeout(this.hideControlsTimer);
            }
        });

        navigation.addEventListener('mouseleave', () => {
            this.resetHideTimer();
        });

        // Start initial hide timer
        this.resetHideTimer();
    }
}

// Initialize presentation controller when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.presentation = new PresentationController();
});

// Helper function for quick timer creation
function createTimer(minutes, message = 'Work Time') {
    const button = document.createElement('button');
    button.textContent = `Start ${minutes}-Minute Timer`;
    button.dataset.timer = minutes;
    button.style.marginTop = '20px';
    return button;
}

// Expose startTimer function globally for onclick attributes
function startTimer(minutes) {
    if (window.presentation) {
        window.presentation.startTimer(minutes);
    }
}

// Expose changeSlide function globally for onclick attributes  
function changeSlide(direction) {
    if (window.presentation) {
        window.presentation.changeSlide(direction);
    }
}