/**
 * SEOPilot — Shared Utilities
 */

// DOM ready helper
function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

// Debounce
function debounce(fn, ms) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}

// Copy to clipboard (requires HTTPS or localhost)
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  }
}

// Show toast notification
function showToast(msg, type) {
  type = type || 'success';
  var toast = document.createElement('div');
  var bg = type === 'success' ? '#16a34a' : type === 'error' ? '#dc2626' : '#64748b';
  toast.textContent = msg;
  toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:'+bg+';color:white;padding:12px 20px;border-radius:8px;font-size:0.9rem;font-weight:600;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.2);transition:opacity 0.3s;';
  document.body.appendChild(toast);
  setTimeout(function() {
    toast.style.opacity = '0';
    setTimeout(function() { document.body.removeChild(toast); }, 300);
  }, 2500);
}

// Simple GET request (for free APIs like DataMuse)
async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}

// Count words in text
function wordCount(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

// Count sentences
function sentenceCount(text) {
  return text.trim() ? text.split(/[.!?]+/).filter(function(s) { return s.trim().length > 0; }).length : 0;
}

// Count syllables (approximate, English)
function syllableCount(word) {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  var syllables = word.match(/[aeiouy]{1,2}/g);
  return syllables ? syllables.length : 1;
}
