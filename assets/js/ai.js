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

      // Stop when close enough
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
  // Hover Expand: neighbors spread apart
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
  // Floating Timeline Popup
  // ==========================================
  const popup = document.createElement('div');
  popup.className = 'timeline-float-popup';
  popup.innerHTML = '<div class="timeline-popup-title" id="float-title"></div><p id="float-desc"></p>';
  document.body.appendChild(popup);

  let popupVisible = false;
  let currentNode = null;

  nodes.forEach(node => {
    node.addEventListener('mouseenter', function () {
      const title = this.dataset.popupTitle;
      const desc = this.dataset.popupDesc;
      if (!title) return;

      document.getElementById('float-title').textContent = title;
      document.getElementById('float-desc').textContent = desc;

      const rect = this.getBoundingClientRect();
      popup.style.left = (rect.left + rect.width / 2) + 'px';
      popup.style.top = rect.top + 'px';

      popup.classList.add('visible');
      popupVisible = true;
      currentNode = this;
    });

    node.addEventListener('mouseleave', function () {
      popup.classList.remove('visible');
      popupVisible = false;
      currentNode = null;
    });
  });

  // Update popup position during scroll
  document.querySelector('.timeline-scroll')?.addEventListener('scroll', function () {
    if (popupVisible && currentNode) {
      const rect = currentNode.getBoundingClientRect();
      popup.style.left = (rect.left + rect.width / 2) + 'px';
      popup.style.top = rect.top + 'px';
    }
  });
});
