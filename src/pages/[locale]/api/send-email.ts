import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, params }) => {
    try {
        // 1. Tomamos la API Key directamente del entorno seguro de Astro
        const apiKey = import.meta.env.RESEND_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ success: false, error: 'Falta la API Key en el archivo .env.' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 2. Procesamos el JSON del formulario recibido desde el cliente
        const body = await request.json();
        const { firstName, lastName, email, projectType, message } = body;

        if (!firstName || !lastName || !email || !projectType || !message) {
            return new Response(JSON.stringify({ success: false, error: 'Faltan campos obligatorios.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 3. FETCH DIRECTO Y CORRECTO a los servidores de correo de Resend
        const resendResponse = await fetch('https://resend.com', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Apex Pipeline <onboarding@resend.dev>',
                to: ['apexwebstudioscontact@gmail.com'], // Debe coincidir con tu correo de login en Resend
                subject: `🚀 New Enterprise Inquiry — ${projectType}`,
                replyTo: email,
                html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #262626; padding: 30px; background-color: #0a0a0a; color: #f5f5f5; border-radius: 4px;">
            <h2 style="color: #aaff00; font-family: monospace; border-bottom: 1px solid #262626; padding-bottom: 15px; margin-top: 0;"> // INTAKE_INQUIRY: APEX WEB STUDIOS </h2>
            <p style="margin: 15px 0;"><strong>CLIENT:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 15px 0;"><strong>EMAIL:</strong> ${email}</p>
            <p style="margin: 15px 0;"><strong>SERVICE:</strong> ${projectType}</p>
            <div style="background-color: #141414; padding: 20px; border: 1px solid #262626; margin-top: 25px;">
              <p style="white-space: pre-wrap; color: #f5f5f5; font-size: 14px; margin: 0;">${message}</p>
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
