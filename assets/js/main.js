document.addEventListener("DOMContentLoaded", function () {
    // ==========================================
    // Theme Toggle Logic
    // ==========================================
    const toggleBtn = document.getElementById("theme-toggle");
    const html = document.documentElement;

    // 1. Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        html.setAttribute("data-theme", savedTheme);
        if (savedTheme === "light") {
            if (toggleBtn) toggleBtn.textContent = "🌙";
        }
    }

    // 2. Toggle event
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const currentTheme = html.getAttribute("data-theme");
            const newTheme = currentTheme === "light" ? "dark" : "light";

            html.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);

            toggleBtn.textContent = newTheme === "light" ? "🌙" : "☀️";
        });
    }

    if (window.SiteI18n) {
        window.SiteI18n.init();
    }

    // ==========================================
    // Widget System Logic
    // ==========================================
    const widgets = document.querySelectorAll(".widget");
    const defaultWidgetId = "widget-status";
    let currentWidgetId = defaultWidgetId;
    let hoverTimer = null;

    // Helper to show a specific widget
    function showWidget(widgetId) {
        if (currentWidgetId === widgetId) return;

        // Hide all widgets
        widgets.forEach((w) => {
            w.classList.remove("widget-visible");
            w.classList.add("widget-hidden");
        });

        // Show target widget
        const target = document.getElementById(widgetId);
        if (target) {
            target.classList.remove("widget-hidden");
            target.classList.add("widget-visible");
            currentWidgetId = widgetId;
        }
    }

    // Populate data into detail widgets
    function populateWidgetData(trigger, widgetId) {
        const targetWidget = document.getElementById(widgetId);
        if (!targetWidget) return;

        // Helper to safely set text content
        const setText = (selector, value) => {
            const el = targetWidget.querySelector(selector);
            if (el) el.textContent = value || '';
        };

        if (widgetId === 'widget-news-detail') {
            setText('#news-date', trigger.dataset.date);
            setText('#news-content', trigger.dataset.content);
        }

        if (widgetId === 'widget-education-detail') {
            setText('#edu-school', trigger.dataset.school);
            setText('#edu-major', trigger.dataset.major);
            setText('#edu-time', trigger.dataset.time);
            setText('#edu-desc', trigger.dataset.desc);
        }

        if (widgetId === 'widget-internship-detail') {
            setText('#intern-company', trigger.dataset.company);
            setText('#intern-role', trigger.dataset.role);
            setText('#intern-time', trigger.dataset.time);
            setText('#intern-desc', trigger.dataset.desc);
        }

        if (widgetId === 'widget-project-detail') {
            const role = trigger.dataset.role ? ' - ' + trigger.dataset.role : '';
            setText('#project-role', trigger.dataset.title + role);
            setText('#project-desc', trigger.dataset.desc);

            const stackEl = targetWidget.querySelector('#project-stack');
            if (stackEl) {
                stackEl.innerHTML = '';
                if (trigger.dataset.stack) {
                    const tags = trigger.dataset.stack.split(',');
                    tags.forEach(tag => {
                        const span = document.createElement('span');
                        span.textContent = tag.trim();
                        stackEl.appendChild(span);
                    });
                }
            }

            const linkEl = targetWidget.querySelector('#project-link');
            if (linkEl) {
                if (trigger.dataset.link) {
                    linkEl.href = trigger.dataset.link;
                    linkEl.parentElement.style.display = 'block';
                } else {
                    linkEl.parentElement.style.display = 'none';
                }
            }
        }

        if (widgetId === 'widget-interest-detail') {
            setText('#interest-name', trigger.dataset.name);
            setText('#interest-desc', trigger.dataset.desc);
        }
    }

    // Event Delegation for better reliability
    document.body.addEventListener('mouseover', function (e) {
        // Find the closest ancestor with data-widget attribute
        const trigger = e.target.closest('[data-widget]');

        if (trigger) {
            clearTimeout(hoverTimer);
            const widgetId = trigger.dataset.widget;

            if (widgetId && widgetId.includes("-detail")) {
                populateWidgetData(trigger, widgetId);
            }

            if (widgetId) {
                showWidget(widgetId);
            }
        }
    });

    // Removed mouseout logic to persist widget state

    // Reset to default widget when scrolling to top
    window.addEventListener('scroll', () => {
        if (window.scrollY < 50) {
            showWidget(defaultWidgetId);
        }
    });

    // ==========================================
    // News Expand/Collapse Logic
    // ==========================================
    const newsMoreBtn = document.getElementById("news-more-btn");
    const newsMoreContainer = document.getElementById("news-more-container");
    if (newsMoreBtn && newsMoreContainer) {
        newsMoreBtn.addEventListener("click", () => {
            const currentLang = localStorage.getItem('lang') || 'zh';
            const labels = window.SiteI18n?.i18nData?.[currentLang];
            if (newsMoreContainer.style.display === "none") {
                newsMoreContainer.style.display = "block";
                newsMoreBtn.textContent = labels?.news_less || "less";
            } else {
                newsMoreContainer.style.display = "none";
                newsMoreBtn.textContent = labels?.news_more || "more";
            }
        });
    }
});
