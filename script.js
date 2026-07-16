// Highlight the current page in the top nav.
document.addEventListener("DOMContentLoaded", () => {
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav .nav-link").forEach((link) => {
    if (link.getAttribute("href") === here) link.classList.add("active");
  });
});

/**
 * Renders a category page: a clickable list of metrics on the left,
 * and a detail panel on the right that crossfades between metrics.
 * `category` must match a key in CATEGORY_INFO / METRICS[].category.
 */
function renderCategoryPage(category) {
  const metrics = METRICS.filter((m) => m.category === category);
  const listEl = document.getElementById("metric-list");
  const panel = document.getElementById("metric-panel");
  const tableWrap = document.getElementById("metric-table");

  function panelHTML(metric) {
    return `
      <div class="metric-eyebrow">${CATEGORY_INFO[category].label}</div>
      <h2>${metric.number}. ${metric.title}</h2>
      <p class="blurb">${metric.blurb}</p>
      <div class="chart-frame">
        <img src="${metric.image}" alt="${metric.title} chart"
             onerror="this.onerror=null;this.src='assets/images/placeholder.svg';">
        <div class="caption">Figure — ${metric.figureCaption}</div>
      </div>
    `;
  }

  function tableHTML(metric) {
    const rows = metric.topTen
      .map(
        (row) => `
        <tr>
          <td class="rank">${row.rank}</td>
          <td>${row.party}</td>
          <td>${row.score}</td>
        </tr>`
      )
      .join("");

    return `
      <table class="top-ten">
        <thead>
          <tr><th>Rank</th><th>Party</th><th>Score</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  function setActive(slug) {
    listEl.querySelectorAll("li").forEach((li) => {
      li.classList.toggle("active", li.dataset.slug === slug);
    });
  }

  function showMetric(slug, { animate = true } = {}) {
    const metric = metrics.find((m) => m.slug === slug);
    if (!metric) return;
    setActive(slug);

    if (!animate) {
      panel.innerHTML = panelHTML(metric);
      tableWrap.innerHTML = tableHTML(metric);
      return;
    }

    panel.classList.remove("is-visible");
    panel.classList.add("is-fading");
    tableWrap.classList.remove("is-visible");
    tableWrap.classList.add("is-fading");

    window.setTimeout(() => {
      panel.innerHTML = panelHTML(metric);
      tableWrap.innerHTML = tableHTML(metric);
      panel.classList.remove("is-fading");
      panel.classList.add("is-visible");
      tableWrap.classList.remove("is-fading");
      tableWrap.classList.add("is-visible");
    }, 220);
  }

  // Build the sidebar list.
  listEl.innerHTML = metrics
    .map(
      (m) => `
      <li data-slug="${m.slug}">
        <button type="button">
          <span class="num">${m.number}</span>
          <span>${m.title}</span>
        </button>
      </li>`
    )
    .join("");

  listEl.querySelectorAll("li").forEach((li) => {
    li.querySelector("button").addEventListener("click", () => {
      showMetric(li.dataset.slug);
    });
  });

  // Show the first metric on load (no fade-in needed the first time).
  showMetric(metrics[0].slug, { animate: false });
  panel.classList.add("is-visible");
  tableWrap.classList.add("is-visible");
}
