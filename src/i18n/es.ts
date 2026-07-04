import type { Dictionary } from "./index";

export const es: Dictionary = {
	meta: {
		title: "Apex Web Studios — Creamos Sitios Web Que Convierten",
		description:
			"Apex Web Studios diseña y construye productos digitales de alto rendimiento para marcas ambiciosas. Desde 2026, Brooklyn, NY.",
	},

	nav: {
		links: [
			{ label: "Trabajo", href: "#work" },
			{ label: "Servicios", href: "#services" },
			{ label: "Proceso", href: "#process" },
			{ label: "Estudio", href: "#studio" },
			{ label: "Contacto", href: "#contact" },
		],
		cta: "Inicia tu Proyecto",
	},

	hero: {
		tag: "Estudio Web Premier",
		est: "Desde 2019",
		location: "Brooklyn, NY",
		lines: ["Creamos", "Sitios Web", "que atraen más clientes a su negocio."],
		paragraph:
			"Apex Web Studios diseña y construye productos digitales de alto rendimiento para marcas ambiciosas. Sin plantillas. Sin atajos. Cada proyecto, construido desde los fundamentos.",
		viewWork: "Ver Nuestro Trabajo",
		cta: "Inicia tu Proyecto",
		scroll: "Scroll",
	},

	marquee: [
		"Diseño Web",
		"Desarrollo",
		"Branding",
		"Estrategia UX",
		"Rendimiento",
		"Motion",
	],

	stats: [
		{ value: "140+", label: "Proyectos Entregados" },
		{ value: "98%", label: "Retención de Clientes" },
		{ value: "6", label: "Años del Estudio" },
		{ value: "12", label: "Miembros del Equipo" },
	],

	portfolio: {
		label: "Trabajo Seleccionado",
		title: "Portafolio",
		allProjects: "Todos los Proyectos",
		projects: [
			{
				name: "Meridian Capital",
				category: "Finanzas / Web App",
				year: "2025",
			},
			{
				name: "Sola Architecture",
				category: "Estudio de Diseño / Marca",
				year: "2024",
			},
			{ name: "Vanta Logistics", category: "SaaS / Dashboard", year: "2024" },
			{ name: "Ore & Iron", category: "E-Commerce / Marca", year: "2023" },
		],
	},

	services: {
		label: "Qué Hacemos",
		title: "Servicios",
		items: [
			{
				title: "Diseño Web",
				description:
					"Interfaces de precisión milimétrica construidas para convertir. Cada interacción es deliberada, cada transición se gana su lugar.",
				tags: ["UI/UX", "Figma", "Prototipado"],
			},
			{
				title: "Desarrollo",
				description:
					"Código de nivel producción. React, Astro, TypeScript — sin atajos, sin dependencia de proveedores, sin lastre.",
				tags: ["React", "Astro", "TypeScript"],
			},
			{
				title: "Estrategia Digital",
				description:
					"Mapeamos el recorrido completo del usuario. De la arquitectura de marca a la analítica, tu presencia digital funciona como un sistema.",
				tags: ["Estrategia", "SEO", "Analítica"],
			},
			{
				title: "Rendimiento",
				description:
					"Cargas por debajo del segundo. Lighthouse en 100. Tratamos el rendimiento como una restricción de diseño, no como una ocurrencia tardía.",
				tags: ["Core Web Vitals", "CDN", "Optimización"],
			},
		],
	},

	process: {
		label: "Cómo Trabajamos",
		title: "Proceso",
		steps: [
			{
				title: "Descubrimiento",
				description:
					"Dos semanas de inmersión. Auditamos tu posición de mercado, entrevistamos a los interesados y mapeamos cada punto de contacto antes de colocar un solo píxel.",
			},
			{
				title: "Arquitectura",
				description:
					"Jerarquía de información, flujos de usuario y andamiaje técnico. El esqueleto que hace posible todo lo demás.",
			},
			{
				title: "Diseño",
				description:
					"Sistemas de Figma de alta fidelidad. Cada estado, cada breakpoint, cada caso límite — documentado y aprobado antes de comenzar el desarrollo.",
			},
			{
				title: "Construcción",
				description:
					"Código limpio, revisado y probado. Desplegamos a staging, corremos auditorías de Lighthouse y hacemos QA en 12 configuraciones de dispositivos y navegadores.",
			},
			{
				title: "Lanzamiento",
				description:
					"Salida monitorizada con un canal de Slack dedicado. No desaparecemos tras la entrega — el soporte post-lanzamiento viene incluido.",
			},
		],
	},

	studio: {
		label: "El Equipo",
		title: "Estudio",
		intro:
			"Somos un equipo enfocado de doce personas — diseñadores, ingenieros y estrategas trabajando desde Brooklyn. Lo bastante pequeños para cuidar cada detalle, lo bastante grandes para movernos rápido. Aceptamos seis proyectos nuevos por trimestre, y somos selectivos.",
		location: "Brooklyn, NY",
		est: "Desde 2019",
		team: [
			{
				name: "Reece Aldeman",
				role: "Fundador / Director Creativo",
				since: "2019",
			},
			{ name: "Mara Szabó", role: "Desarrolladora Líder", since: "2020" },
			{ name: "Kwame Osei", role: "Director de Estrategia", since: "2021" },
			{ name: "Lucia Ferretti", role: "Diseñadora Senior", since: "2022" },
		],
	},

	ctaBand: {
		title: "¿Listo para construir algo excepcional?",
		cta: "Inicia tu Proyecto",
	},

	contact: {
		label: "Hablemos",
		title: "Contacto",
		blurb:
			"Abrimos la agenda a nuevos proyectos cada trimestre. Cuéntanos qué estás construyendo — responderemos en menos de 48 horas con una invitación a una llamada de descubrimiento.",
		email: "hello@apexwebstudios.com",
		phone: "+1 (718) 555-0147",
		address: "74 Wythe Ave, Brooklyn, NY 11249",
		socials: ["Dribbble", "Twitter", "Behance", "Instagram", "LinkedIn"],
		form: {
			firstName: "Nombre",
			lastName: "Apellido",
			email: "Email",
			projectType: "Tipo de Proyecto",
			projectTypes: [
				"Diseño Web",
				"Desarrollo",
				"Diseño + Desarrollo",
				"Estrategia Digital",
				"Otra cosa",
			],
			message: "Mensaje",
			submit: "Enviar Consulta",
		},
	},

	footer: {
		rights: "Todos los derechos reservados.",
		links: ["Privacidad", "Términos"],
	},
};
