
// Function to handle email click
function sendEmail() {
    const email = 'sumitkumar042006@gmail.com';
    const subject = "Let's Connect";
    const body = "Hi Sumit,\n\nI would like to connect with you.\n\nBest regards";

    // Create mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;
}

// Rotating text for hero section
class RotatingText {
    constructor() {
        this.texts = ['Website Developer', 'Problem Solver', 'UI/UX Designer', 'Creative Developer', 'Frontend Expert', 'Backend Enthusiast', 'Video Editor', 'Graphic Designer'];
        this.textElement = document.getElementById('rotatingText');
        this.currentIndex = 0;
        this.isDeleting = false;
        this.speed = 100;
        this.deleteSpeed = 50;
        this.delayBetweenWords = 2000;

        this.init();
    }

    init() {
        // Start typing after a short delay
        setTimeout(() => this.typeEffect(), 500);
    }

    typeEffect() {
        const currentText = this.texts[this.currentIndex];
        const displayText = this.textElement.textContent;

        if (!this.isDeleting) {
            // Typing
            if (displayText.length < currentText.length) {
                this.textElement.textContent = currentText.substring(0, displayText.length + 1);
                setTimeout(() => this.typeEffect(), this.speed);
            } else {
                // Pause before deleting
                this.isDeleting = true;
                setTimeout(() => this.typeEffect(), this.delayBetweenWords);
            }
        } else {
            // Deleting
            if (displayText.length > 0) {
                this.textElement.textContent = displayText.substring(0, displayText.length - 1);
                setTimeout(() => this.typeEffect(), this.deleteSpeed);
            } else {
                // Move to next text
                this.isDeleting = false;
                this.currentIndex = (this.currentIndex + 1) % this.texts.length;
                setTimeout(() => this.typeEffect(), 500);
            }
        }
    }
}

// animation sequence controller
class SplashScreen {
    constructor() {
        this.dotsContainer = document.getElementById('dotsContainer');
        this.loadingContainer = document.getElementById('loadingContainer');
        this.sumitContainer = document.getElementById('sumitContainer');
        this.loadingText = document.getElementById('loadingText');
        this.sumitText = document.getElementById('sumitText');

        this.init();
    }

    init() {
        // animation sequence start hoga
        this.showDots();
    }

    showDots() {
        // dots dikhega with animation
        this.dotsContainer.classList.add('active');

        // dots hide hoga jb 2 seconds ke baad
        setTimeout(() => {
            this.hideDots();
        }, 2000);
    }

    hideDots() {
        this.dotsContainer.classList.add('hidden');

        // loading text dikhega jb fade out complete hoga
        setTimeout(() => {
            this.dotsContainer.style.display = 'none';
            this.showLoading();
        }, 1000);
    }

    showLoading() {
        this.loadingContainer.classList.add('visible');
        this.typeText('loading...', this.loadingText, () => {
            // loading hide hoga jb typing complete hoga
            setTimeout(() => {
                this.hideLoading();
            }, 1000);
        });
    }

    hideLoading() {
        this.loadingContainer.classList.add('hidden');

        // Sumit text dikhega jb fade out complete hoga
        setTimeout(() => {
            this.loadingContainer.style.display = 'none';
            this.showSumit();
        }, 500);
    }

    showSumit() {
        this.sumitContainer.classList.add('visible');
        this.typeText('Sumit', this.sumitText, () => {
            // cursor remove hoga jb typing complete hoga
            setTimeout(() => {
                this.sumitText.classList.add('typing-complete');
                // zoom animation start hoga
                setTimeout(() => {
                    this.zoomS();
                }, 1000);
            }, 500);
        });
    }

    zoomS() {
        const zoomSOverlay = document.getElementById('zoomSOverlay');
        const sumitText = this.sumitText.textContent;

        // sumit text ke computed styles measure hoga
        const computedStyle = window.getComputedStyle(this.sumitText);
        const fontSize = computedStyle.fontSize;
        const fontWeight = computedStyle.fontWeight;
        const fontFamily = computedStyle.fontFamily;

        // sumit container ke position measure hoga
        const containerRect = this.sumitContainer.getBoundingClientRect();
        const textRect = this.sumitText.getBoundingClientRect();

        // "S" extract hoga "Sumit" se
        const sLetter = sumitText.charAt(0);

        // temporary element create hoga jisse "S" width measure hoga
        const tempS = document.createElement('span');
        tempS.style.position = 'absolute';
        tempS.style.visibility = 'hidden';
        tempS.style.fontSize = fontSize;
        tempS.style.fontWeight = fontWeight;
        tempS.style.fontFamily = fontFamily;
        tempS.textContent = sLetter;
        document.body.appendChild(tempS);
        const sWidth = tempS.offsetWidth;
        document.body.removeChild(tempS);

        // zoom S element create hoga
        const zoomS = document.createElement('span');
        zoomS.className = 'zoom-s';
        zoomS.textContent = sLetter;
        zoomS.style.fontSize = fontSize;
        zoomS.style.fontWeight = fontWeight;
        zoomS.style.fontFamily = fontFamily;
        zoomS.style.color = '#ffffff';
        zoomS.style.position = 'absolute';

        // "S" same location me hoga jisme original "S" hoga
        // "S" text ke start me hoga, to left edge me hoga
        zoomS.style.left = textRect.left + 'px';
        zoomS.style.top = textRect.top + 'px';

        // sumit container hide hoga
        this.sumitContainer.style.opacity = '0';

        // zoom S overlay me add hoga
        zoomSOverlay.appendChild(zoomS);
        zoomSOverlay.classList.add('active');

        // zoom animation start hoga
        setTimeout(() => {
            zoomS.classList.add('zooming');

            //background white hoga jb zoom complete hoga
            setTimeout(() => {
                zoomSOverlay.classList.add('zoomed');

                // home section dikhega jb zoom complete hoga
                setTimeout(() => {
                    this.showHomeSection();
                }, 100);
            }, 700);
        }, 50);
    }

    showHomeSection() {
        const splashScreen = document.getElementById('splashScreen');
        const homeSection = document.getElementById('homeSection');

        // splash screen hide hoga
        splashScreen.style.display = 'none';

        //  home section dikhega
        homeSection.classList.add('visible');

        // navbar open hoga
        this.initNavbar();

        // Start rotating text
        new RotatingText();

        // Initialize smooth scrolling
        this.initSmoothScroll();
    }

    initNavbar() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            // menu close hoga jb bahar click krenge
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
        }
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    typeText(text, element, callback) {
        let index = 0;
        element.textContent = '';

        const typingInterval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
            } else {
                clearInterval(typingInterval);
                if (callback) {
                    callback();
                }
            }
        }, 150); // 150ms per character typing speed
    }

}

// Initialize splash screen when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SplashScreen();
});
