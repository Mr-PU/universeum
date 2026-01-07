/**
 * Application Configuration
 * Update the .env.local file to change these values
 */

export const config = {
  // Application Details
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'Universeum Expedition',
    companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@UniverseumExpedition.com',
    companyPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+91 98765 43210',
  },

  // CRM Configuration
  crm: {
    type: (process.env.NEXT_PUBLIC_CRM_TYPE || 'google_sheets') as 'google_sheets' | 'hubspot' | 'zoho',
    googleSheets: {
      scriptUrl: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '',
    },
    hubspot: {
      apiKey: process.env.HUBSPOT_API_KEY || '',
      portalId: process.env.HUBSPOT_PORTAL_ID || '',
    },
    zoho: {
      apiToken: process.env.ZOHO_API_TOKEN || '',
      orgId: process.env.ZOHO_ORG_ID || '',
    },
  },

  // Popup Configuration
  popup: {
    enabled: process.env.NEXT_PUBLIC_ENABLE_POPUP === 'true',
    delaySeconds: parseInt(process.env.NEXT_PUBLIC_POPUP_DELAY_SECONDS || '3', 10),
    maxWidth: process.env.NEXT_PUBLIC_POPUP_MAX_WIDTH || 'max-w-2xl',
  },

  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
  },
};

export default config;
