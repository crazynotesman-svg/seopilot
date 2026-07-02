/**
 * SEOPilot — Shared Header & Footer Injection
 */

(function() {
  var cfg = window.SEOPILOT_CONFIG || {};
  var siteName = cfg.siteName || 'SEOPilot';
  var siteUrl = cfg.siteUrl || '';

  // ---- Header ----
  var header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML =
    '<div class="container">' +
      '<a href="/" class="site-logo">' +
        '<span class="site-logo-icon">&#128269;</span>' +
        '<span>' + siteName + '</span>' +
      '</a>' +
      '<button class="mobile-menu-btn" onclick="this.nextElementSibling.classList.toggle(\'open\')">&#9776;</button>' +
      '<nav class="site-nav" id="siteNav">' +
        '<a href="/">Home</a>' +
        '<a href="/tools/">Tools</a>' +
        '<a href="/blog/">Blog</a>' +
        '<a href="/about/">About</a>' +
      '</nav>' +
    '</div>';

  // ---- Highlight active nav ----
  setTimeout(function() {
    var path = window.location.pathname;
    var links = header.querySelectorAll('.site-nav a');
    links.forEach(function(a) {
      var href = a.getAttribute('href');
      if (href === '/') {
        if (path === '/' || path === '') a.classList.add('active');
      } else if (path.startsWith(href)) {
        a.classList.add('active');
      }
    });
  }, 10);

  // ---- Footer ----
  var footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML =
    '<div class="container">' +
      '<div class="footer-brand">' +
        '<h3>&#128269; ' + siteName + '</h3>' +
        '<p>Free SEO tools for content creators, bloggers, and website owners. No sign-up required. Built to help you rank higher.</p>' +
      '</div>' +
      '<div class="footer-links">' +
        '<h4>Tools</h4>' +
        '<ul>' +
          '<li><a href="/tools/serp-preview/">SERP Preview</a></li>' +
          '<li><a href="/tools/meta-tags-generator/">Meta Tags Generator</a></li>' +
          '<li><a href="/tools/keyword-difficulty/">Keyword Difficulty</a></li>' +
          '<li><a href="/tools/ai-title-generator/">AI Title Generator</a></li>' +
          '<li><a href="/tools/readability-checker/">Readability Checker</a></li>' +
        '</ul>' +
      '</div>' +
      '<div class="footer-links">' +
        '<h4>Company</h4>' +
        '<ul>' +
          '<li><a href="/about/">About</a></li>' +
          '<li><a href="/blog/">Blog</a></li>' +
          '<li><a href="/privacy/">Privacy Policy</a></li>' +
          '<li><a href="mailto:' + (cfg.contactEmail || 'crazynotesman@gmail.com') + '">Contact</a></li>' +
        '</ul>' +
      '</div>' +
    '</div>' +
    '<div class="footer-bottom">&copy; ' + (cfg.copyrightYear || '2026') + ' ' + siteName + '. All rights reserved.</div>';

  // Inject into page
  var placeholder = document.getElementById('header-placeholder');
  if (placeholder) {
    placeholder.parentNode.replaceChild(header, placeholder);
  } else {
    document.body.insertBefore(header, document.body.firstChild);
  }

  var footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.parentNode.replaceChild(footer, footerPlaceholder);
  } else {
    document.body.appendChild(footer);
  }
})();
