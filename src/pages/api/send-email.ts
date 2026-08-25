import type { APIRoute } from 'astro';

export const prerender = false;

// Escapa caracteres HTML para que el contenido del formulario no pueda
// inyectar markup/scripts dentro del correo que se envía.
function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
    try {
        // 1. Tomamos la API Key desde el entorno seguro de Astro
        const apiKey = import.meta.env.RESEND_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ success: false, error: 'Falta la API Key en el archivo .env.' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 2. Procesamos el JSON enviado desde tu formulario
        const body = await request.json();
        const { firstName, lastName, email, phone, projectType, message } = body;

        // El teléfono es opcional (el input no tiene "required" en el formulario)
        if (!firstName || !lastName || !email || !projectType || !message) {
            return new Response(JSON.stringify({ success: false, error: 'Faltan campos obligatorios.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 2.1 Validamos el formato del email antes de mandarlo a Resend
        if (typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
            return new Response(JSON.stringify({ success: false, error: 'El email no tiene un formato válido.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const phoneDisplay = typeof phone === 'string' && phone.trim() !== ''
            ? escapeHtml(phone)
            : 'No proporcionado';

        // 3. FETCH directo y oficial a la API REST de Resend
        //    (URL corregida: era 'https://resend.com', debe ser 'https://api.resend.com/emails')
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Apex Pipeline <onboarding@resend.dev>',
                to: ['apexwebstudioscontact@gmail.com'], // Tu correo receptor
                subject: `🚀 New Enterprise Inquiry — ${projectType}`,
                reply_to: email, // Mapeado correctamente para Resend API
                html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #262626; padding: 30px; background-color: #0a0a0a; color: #f5f5f5; border-radius: 4px;">
            <h2 style="color: #aaff00; font-family: monospace; border-bottom: 1px solid #262626; padding-bottom: 15px; margin-top: 0;">
              // INTAKE_INQUIRY: APEX WEB STUDIOS
            </h2>
            <p style="margin: 15px 0;"><strong>CLIENT:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
            <p style="margin: 15px 0;"><strong>EMAIL:</strong> ${escapeHtml(email)}</p>
            <p style="margin: 15px 0;"><strong>PHONE:</strong> ${phoneDisplay}</p>
            <p style="margin: 15px 0;"><strong>SERVICE:</strong> ${escapeHtml(projectType)}</p>
            <div style="background-color: #141414; padding: 20px; border: 1px solid #262626; margin-top: 25px;">
              <p style="white-space: pre-wrap; color: #f5f5f5; font-size: 14px; margin: 0;">${escapeHtml(message)}</p>
            </div>
          </div>
        `,
            }),
        });

        const resendResult = await resendResponse.json();

        if (!resendResponse.ok) {
            return new Response(JSON.stringify({ success: false, error: resendResult.message || 'Error en Resend API' }), {
                status: resendResponse.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ success: true, data: resendResult }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
        return new Response(JSON.stringify({ success: false, error: errorMessage }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};