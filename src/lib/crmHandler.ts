/**
 * CRM Handler - Supports multiple CRM platforms
 */

interface LeadData {
  name: string;
  phone: string;
  email?: string;
  travelers?: string;
  travelDate?: string;
  description?: string;
  source?: string;
}

// Google Sheets Handler
async function submitToGoogleSheets(data: LeadData): Promise<{ success: boolean; message?: string; error?: string }> {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    return {
      success: false,
      error: 'Database URL not configured',
    };
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: 'Lead saved to Database successfully',
      };
    } else {
      return {
        success: false,
        error: result.error || 'Failed to save to Database',
      };
    }
  } catch (error) {
    console.error('Database error:', error);
    return {
      success: false,
      error: 'Failed to connect to Database',
    };
  }
}

// HubSpot Handler (Placeholder for future use)
async function submitToHubSpot(data: LeadData): Promise<{ success: boolean; message?: string; error?: string }> {
  // Implementation for HubSpot
  return {
    success: false,
    error: 'HubSpot integration coming soon',
  };
}

// Zoho Handler (Placeholder for future use)
async function submitToZoho(data: LeadData): Promise<{ success: boolean; message?: string; error?: string }> {
  // Implementation for Zoho
  return {
    success: false,
    error: 'Zoho integration coming soon',
  };
}

// Main CRM Handler
export async function submitToCRM(
  data: LeadData,
  crmType: 'google_sheets' | 'hubspot' | 'zoho' = 'google_sheets'
): Promise<{ success: boolean; message?: string; error?: string }> {
  switch (crmType) {
    case 'google_sheets':
      return submitToGoogleSheets(data);
    case 'hubspot':
      return submitToHubSpot(data);
    case 'zoho':
      return submitToZoho(data);
    default:
      return {
        success: false,
        error: `Unknown CRM type: ${crmType}`,
      };
  }
}
