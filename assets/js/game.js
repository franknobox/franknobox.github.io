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

    // ==========================================
    // Smooth Horizontal Scrolling (with inertia)
    // ==========================================
    document.querySelectorAll('.timeline-scroll, .shelf-scroll').forEach(container => {
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
            const title = this.dataset.popupTitle || "💡 点击进入";
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
