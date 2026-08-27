
import type { Dictionary } from "./index";

export const es: Dictionary = {
	meta: {
		title: "Apex Web Studios — Sitios Web y Marketing Diseñados para Hacer Crecer tu Negocio",
		description: "Apex Web Studios diseña sitios web atractivos, construye herramientas de software personalizadas y gestiona campañas de marketing que te traen más clientes. Con sede en Nashville, TN.",
	},
	nav: {
		links: [
			{ label: "Proyectos", href: "#work" },
			{ label: "Servicios", href: "#services" },
			{ label: "Precios", href: "#pricing" },
			{ label: "Proceso", href: "#process" },
			{ label: "Estudio", href: "#studio" },
			{ label: "Preguntas Frecuentes", href: "#faq" },
			{ label: "Contacto", href: "#contact" },
		],
		cta: "Iniciar Proyecto",
	},
	hero: {
		tag: "Estudio Web Premier",
		est: "Est. 2025",
		location: "Nashville, TN",
		lines: ["Creamos", "Sitios Web", "que atraen más clientes a tu negocio."],
		paragraph: "Apex Web Studios diseña, desarrolla y optimiza productos digitales premium y estrategias de marketing basadas en datos para marcas en crecimiento. Sin atajos. Cada sistema construido desde cero.",
		viewWork: "Ver Nuestro Trabajo",
		cta: "Iniciar Proyecto",
		scroll: "Desplazar",
	},
	marquee: [
		"Diseño Web",
		"Páginas de Aterrizaje de Alta Conversión",
		"Marketing Digital",
		"Software para Negocios",
		"Gestión de Bases de Datos",
		"Estrategia de Crecimiento",
	],
	stats: [
		{ value: "5+", label: "Sistemas Entregados" },
		{ value: "100%", label: "Comunicación Directa" },
		{ value: "Est. 2025", label: "Lanzamiento del Estudio" },
		{ value: "2+", label: "Expertos Clave" },
	],
	portfolio: {
		label: "Trabajo Seleccionado",
		title: "Portafolio",
		allProjects: "Todos los Proyectos",
		projects: [
			{
				name: "Ecosistema Integrado de Inventario y Facturación",
				category: "Arquitectura Backend / Java & Spring Boot",
				year: "2026"
			},
		],
	},
	services: {
		label: "Qué Hacemos",
		title: "Servicios",
		items: [
			{
				title: "Diseño de Sitios Web",
				description: "Estructuras de sitios web profesionales y hechas a la medida para encajar con tu marca. Diseñamos interfaces fáciles de usar que capturan la atención de tus visitantes y construyen confianza inmediata.",
				tags: ["Diseños Personalizados", "Apto para Celulares", "Identidad de Marca"],
			},
			{
				title: "Software Comercial a la Medida",
				description: "Construimos herramientas digitales específicas para automatizar tus operaciones diarias. Desde sistemas automáticos de facturación a clientes y control de inventarios, hasta pasarelas de pago seguras.",
				tags: ["Sistemas de Pago", "Bases de Datos Seguras", "Herramientas Internas"],
			},
			{
				title: "Marketing Digital y Embudos de Venta",
				description: "Estrategias de marketing en línea inteligentes diseñadas para encontrar a tu público ideal. Creamos páginas de venta de alto rendimiento y campañas de anuncios que convierten el tráfico web diario en clientes de pago.",
				tags: ["Generación de Clientes", "Crecimiento de Ventas", "Adquisición de Usuarios"],
			},
			{
				title: "Optimización en Google y Velocidad",
				description: "Construimos sitios web que cargan al instante y están completamente preparados para aparecer más arriba en los motores de búsqueda. Esto hace que sea mucho más fácil para los clientes locales encontrar tu negocio primero.",
				tags: ["Posicionamiento Google (SEO)", "Carga Ultra-Rápida", "Actualizaciones de Rendimiento"],
			},
		],
	},
	pricing: {
		label: "Inversión",
		title: "Precios",
		intro: "Precios de partida transparentes. Cada proyecto se cotiza individualmente — estos son puntos de partida, no cotizaciones finales.",
		packages: [
			{
				name: "Landing Page",
				price: "Desde $750",
				description: "Una sola página de alta conversión diseñada para convertir visitantes en clientes potenciales o compradores.",
				features: [
					"Diseño personalizado y apoyo en redacción",
					"Optimizado para celular",
					"Formulario de contacto con integración de correo",
					"Configuración de analíticas",
				],
				cta: "Empezar",
			},
			{
				name: "Sitio Web de Negocio",
				price: "Desde $1,500",
				description: "Un sitio completo de varias páginas para negocios que necesitan más que una sola landing page.",
				features: [
					"Hasta 5 páginas",
					"Fundamentos de SEO",
					"Sistema de diseño personalizado",
					"Configuración de analíticas y seguimiento",
				],
				cta: "Empezar",
				featured: true,
			},
			{
				name: "Software a la Medida",
				price: "Cotización Personalizada",
				description: "Herramientas de negocio a la medida — sistemas de facturación, control de inventario, paneles internos.",
				features: [
					"Arquitectura backend personalizada",
					"Diseño de base de datos segura",
					"Integraciones de pago",
					"Soporte continuo disponible",
				],
				cta: "Agendar Llamada",
			},
		],
	},
	process: {
		label: "Cómo Trabajamos",
		title: "Proceso",
		steps: [
			{
				title: "Descubrimiento y Estrategia",
				description: "Inmersión profunda en tu mercado objetivo. Aislamos tus objetivos comerciales, analizamos a la competencia y estructuramos tu mapa de conversión antes de escribir código.",
			},
			{
				title: "Arquitectura",
				description: "Jerarquía de información, modelado de datos transaccionales y andamiaje técnico central. El esqueleto sólido que mantiene seguras y confiables las operaciones del software.",
			},
			{
				title: "Diseño",
				description: "Sistemas de diseño de componentes de alta fidelidad. Cada punto de interrupción, elemento interactivo y caso extremo se detalla y aprueba minuciosamente.",
			},
			{
				title: "Construcción",
				description: "Código fuente limpio, bien revisado y de calidad premium. Desplegamos en áreas de prueba aisladas, ejecutando estrictas pruebas en múltiples dispositivos y auditorías de rendimiento.",
			},
			{
				title: "Lanzamiento y Escala",
				description: "Despliegue de producto fluido junto con el seguimiento de analíticas en vivo y protocolos de optimización de marketing para garantizar una tracción operativa inmediata.",
			},
		],
	},
	studio: {
		label: "El Equipo",
		title: "Estudio",
		intro: "Somos un equipo pequeño y enfocado de ingenieros y estrategas de crecimiento que operamos desde Nashville, TN. Trabajamos con un número limitado de proyectos a la vez para que cada cliente reciba atención directa y personalizada desde el inicio hasta el lanzamiento.",
		location: "Nashville, TN",
		est: "Est. 2025",
		photoAlt: "Espacio de trabajo de desarrollo de software de Apex Web Studios en Nashville, TN",
		sinceLabel: "Desde",
		team: [
			{
				name: "Jhonny Trujillo",
				role: "Fundador / Ingeniero Principal de Software",
				since: "2026",
			},
			{
				name: "Kevin Perez",
				role: "Desarrollador Frontend Líder",
				since: "2026"
			},
		],
	},
	faq: {
		label: "Preguntas",
		title: "Preguntas Frecuentes",
		items: [
			{
				question: "¿Cuánto tiempo toma un proyecto normalmente?",
				answer: "Una landing page toma entre 1 y 2 semanas. Sitios completos o software a la medida toman entre 3 y 6 semanas dependiendo del alcance. Te daremos un tiempo estimado claro antes de empezar.",
			},
			{
				question: "¿Trabajan con negocios pequeños o que apenas empiezan?",
				answer: "Sí. Trabajamos con negocios de todos los tamaños, incluyendo startups y emprendedores independientes. Si apenas estás comenzando, te ayudamos a definir qué es lo que realmente necesitas.",
			},
			{
				question: "¿Qué pasa después de que mi sitio se lanza?",
				answer: "Seguimos involucrados después del lanzamiento — corrigiendo errores, haciendo pequeños ajustes y ayudándote a medir el rendimiento del sitio. Hay planes de soporte continuo disponibles si quieres que manejemos las actualizaciones a largo plazo.",
			},
			{
				question: "¿Pueden ayudarme con marketing también, no solo con el sitio web?",
				answer: "Sí. Además del diseño y desarrollo, configuramos analíticas, automatización de correo y campañas para ayudar a convertir visitantes en clientes que compran.",
			},
			{
				question: "¿Qué tanto tengo que involucrarme?",
				answer: "Tanto como quieras. La mayoría de los clientes participan en una llamada inicial, revisan los diseños en puntos clave y aprueban la versión final — nosotros nos encargamos del resto.",
			},
		],
	},
	ctaBand: {
		title: "¿Listo para Construir Algo Excepcional?",
		cta: "Iniciar Proyecto",
	},
	contact: {
		label: "Ponte en Contacto",
		title: "Contacto",
		blurb: "Abrimos nuestra agenda para nuevos proyectos corporativos cada trimestre. Describe los parámetros de tu proyecto a continuación y nuestro equipo de ingeniería se comunicará contigo en menos de 48 horas para programar una llamada de descubrimiento.",
		email: "apexwebstudioscontact@gmail.com",
		phone: "+1 (615) 647-0123",
		socials: ["Instagram"],
		infoLabels: { email: "Correo", phone: "Teléfono", address: "Ubicación" },
		form: {
			firstName: "Nombre",
			lastName: "Apellido",
			email: "Correo Electrónico",
			phone: "Número de Teléfono",
			projectType: "Tipo de Proyecto",
			projectTypes: [
				"Desarrollo de Páginas de Aterrizaje",
				"Software Backend Personalizado",
				"Campaña de Marketing Digital",
				"Diseño y Construcción Full-Stack",
				"Otra cosa",
			],
			selectOne: "Selecciona uno",
			message: "Detalles del Proyecto",
			submit: "Enviar Solicitud",
		},
	},
	footer: {
		rights: "Todos los derechos reservados.",
		links: ["Privacidad", "Términos"],
	},
};