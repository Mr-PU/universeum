import { submitToCRM } from '@/lib/crmHandler';
import { config } from '@/config/config';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.phone) {
      return Response.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Submit to CRM
    const result = await submitToCRM(data, config.crm.type);

    if (result.success) {
      return Response.json({
        success: true,
        message: result.message || 'Lead submitted successfully',
      });
    } else {
      return Response.json(
        { success: false, error: result.error || 'Failed to submit lead' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
