document.addEventListener("DOMContentLoaded", function () {
    // ==========================================
    // Theme Toggle
    // ==========================================
    const toggleBtn = document.getElementById("theme-toggle");
    const html = document.documentElement;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        html.setAttribute("data-theme", savedTheme);
        if (savedTheme === "light" && toggleBtn) toggleBtn.textContent = "🌙";
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const cur = html.getAttribute("data-theme");
            const next = cur === "light" ? "dark" : "light";
            html.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
            toggleBtn.textContent = next === "light" ? "🌙" : "☀️";
        });
    }

    if (window.SiteI18n) {
        window.SiteI18n.init();
    }

    // ==========================================
    // Smooth Horizontal Scrolling (with inertia)
    // ==========================================
    document.querySelectorAll('.timeline-scroll, .shelf-scroll, .game-tabs-container').forEach(container => {
        let targetScroll = container.scrollLeft;
        let currentScroll = container.scrollLeft;
        let animating = false;

        function lerp(start, end, factor) {
            return start + (end - start) * factor;
        }

        function smoothStep() {
            currentScroll = lerp(currentScroll, targetScroll, 0.12);

            if (Math.abs(currentScroll - targetScroll) < 0.5) {
                currentScroll = targetScroll;
                container.scrollLeft = currentScroll;
                animating = false;
                return;
            }

            container.scrollLeft = currentScroll;
            requestAnimationFrame(smoothStep);
        }

        container.addEventListener('wheel', function (e) {
            if (container.scrollWidth > container.clientWidth) {
                e.preventDefault();
                targetScroll = Math.max(
                    0,
                    Math.min(
                        container.scrollWidth - container.clientWidth,
                        targetScroll + e.deltaY * 1.5
                    )
                );

                if (!animating) {
                    animating = true;
                    currentScroll = container.scrollLeft;
                    requestAnimationFrame(smoothStep);
                }
            }
        }, { passive: false });
    });

    // ==========================================
    // Game Projects Tab Gallery Logic
    // ==========================================
    const gameTabs = document.querySelectorAll('.game-tab');
    const gameCards = document.querySelectorAll('.game-card');

    // Helper function to extract average color from an image using Canvas
    function getAverageColor(imgElement) {
        if (!imgElement || !imgElement.complete || imgElement.naturalWidth === 0) {
            return null; // Image not loaded yet
        }

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = imgElement.naturalWidth;
        canvas.height = imgElement.naturalHeight;

        try {
            ctx.drawImage(imgElement, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            let r = 0, g = 0, b = 0, count = 0;

            // Sample every 4th pixel to improve performance
            for (let i = 0; i < data.length; i += 16) {
                // Ignore overly dark pixels to keep the glow bright
                if (data[i] > 20 || data[i + 1] > 20 || data[i + 2] > 20) {
                    r += data[i];
                    g += data[i + 1];
                    b += data[i + 2];
                    count++;
                }
            }

            if (count > 0) {
                r = Math.floor(r / count);
                g = Math.floor(g / count);
                b = Math.floor(b / count);
                return `rgba(${r}, ${g}, ${b}, 0.35)`; // Adding 0.35 alpha for the glow effect
            }
        } catch (e) {
            // CORS issues can prevent reading canvas data if image is from another domain
            console.warn("Could not extract average color due to CORS or other error.", e);
        }
        return null;
    }

    gameTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            const isActive = tab.classList.contains('active');
            const imgEl = tab.querySelector('img');

            // 1. Remove active class from all tabs and cards
            gameTabs.forEach(t => t.classList.remove('active'));
            gameCards.forEach(c => c.classList.remove('active'));

            // 2. If it wasn't already active, activate it and its corresponding card
            if (!isActive) {
                tab.classList.add('active');
                const targetCard = document.getElementById(targetId);

                // Attempt to get dynamic color, fallback to data-color, fallback to default
                let glowColor = getAverageColor(imgEl);
                if (!glowColor) {
                    glowColor = tab.getAttribute('data-color') || 'rgba(255, 255, 255, 0.05)';
                }

                if (targetCard) {
                    targetCard.style.setProperty('--glow-color', glowColor);
                    targetCard.classList.add('active');
                }
            }
        });
    });

    // ==========================================
    // Timeline: Hover Expand
    // ==========================================
    const nodes = document.querySelectorAll('.timeline-node');

    nodes.forEach((node, index) => {
        node.addEventListener('mouseenter', () => {
            nodes.forEach((n, i) => {
                if (i === index) {
                    n.classList.add('tl-active');
                } else if (i === index - 1) {
                    n.classList.add('tl-neighbor-left');
                } else if (i === index + 1) {
                    n.classList.add('tl-neighbor-right');
                } else {
                    n.classList.add('tl-dimmed');
                }
            });
        });

        node.addEventListener('mouseleave', () => {
            nodes.forEach(n => {
                n.classList.remove('tl-active', 'tl-neighbor-left', 'tl-neighbor-right', 'tl-dimmed');
            });
        });
    });

    // ==========================================
    // Floating Popup (Timeline & Shelf)
    // ==========================================
    const popup = document.createElement('div');
    popup.className = 'timeline-float-popup';
    popup.innerHTML = '<div class="timeline-popup-title" id="float-title"></div><p id="float-desc"></p>';
    document.body.appendChild(popup);

    let popupVisible = false;
    let currentTarget = null;

    const hoverElements = document.querySelectorAll('.timeline-node, .shelf-item');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', function () {
            const title = this.dataset.popupTitle || (localStorage.getItem('lang') === 'en' ? "💡 Open" : "💡 点击进入");
            const desc = this.dataset.popupDesc;
            if (!desc) return; // Only show if there's a description

            document.getElementById('float-title').textContent = title;
            document.getElementById('float-desc').textContent = desc;

            const rect = this.getBoundingClientRect();
            popup.style.left = (rect.left + rect.width / 2) + 'px';
            popup.style.top = rect.top + 'px';

            popup.classList.add('visible');
            popupVisible = true;
            currentTarget = this;
        });

        el.addEventListener('mouseleave', function () {
            popup.classList.remove('visible');
            popupVisible = false;
            currentTarget = null;
        });
    });

    // Update popup position during scroll
    window.addEventListener('scroll', function () {
        if (popupVisible && currentTarget) {
            const rect = currentTarget.getBoundingClientRect();
            popup.style.left = (rect.left + rect.width / 2) + 'px';
            popup.style.top = rect.top + 'px';
        }
    }, true);

    // ==========================================
    // Game Card: Thumbnail Gallery
    // ==========================================
    document.querySelectorAll('.game-card').forEach(card => {
        const mainImg = card.querySelector('.game-card-main-img');
        const thumbs = card.querySelectorAll('.game-card-thumb');

        if (!mainImg || thumbs.length === 0) return;

        thumbs.forEach(thumb => {
            thumb.addEventListener('click', function () {
                // Swap main image src
                mainImg.src = this.dataset.full || this.src;

                // Update active state
                thumbs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Set first thumb as active
        if (thumbs[0]) thumbs[0].classList.add('active');
    });
});
