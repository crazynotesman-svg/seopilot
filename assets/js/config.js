/**
 * SEOPilot Configuration
 * ======================
 * Edit this file with your own settings before deploying.
 * All configuration is centralized here for easy management.
 */

window.SEOPILOT_CONFIG = {
  // ===== Site Info =====
  siteName: 'SEOPilot',
  siteTagline: 'Free SEO Tools — No Sign-up Required',
  siteUrl: 'https://seopilot.crazynotesman.workers.dev',
  contactEmail: 'crazynotesman@gmail.com',
  copyrightYear: '2026',

  // ===== AI Provider: DeepSeek =====
  // Get your API key at https://platform.deepseek.com/api_keys
  // DeepSeek is OpenAI-compatible. Pricing: ~$0.14/1M input tokens
  deepseek: {
    apiKey: 'sk-2e5cbcd6a2e04d3eaa35dc6850b62aee',
    apiEndpoint: 'https://api.deepseek.com/chat/completions',
    model: 'deepseek-chat',              // or 'deepseek-reasoner' for reasoning
    maxTokens: 1024,
    temperature: 0.7
  },

  // ===== Analytics (Phase 2+) =====
  googleAnalyticsId: '',   // e.g. 'G-XXXXXXXXXX'
  googleSearchConsole: '', // Verification code

  // ===== Monetization (Phase 3+) =====
  adsensePublisherId: '',  // e.g. 'ca-pub-XXXXXXXXXXXXXXXX'

  // ===== Feature Flags =====
  phase: 1,
  features: {
    ads: false,
    proSubscription: false,
    userAccounts: false,
    batchProcessing: false
  }
};
