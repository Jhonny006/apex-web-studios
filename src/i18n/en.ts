import type { Dictionary } from "./index";

export const en: Dictionary = {
	meta: {
		title: "Apex Web Studios — We Build Websites That Convert",
		description:
			"Apex Web Studios designs and engineers high-performance digital products for ambitious brands. Est. 2026, Brooklyn, NY.",
	},

	nav: {
		links: [
			{ label: "Work", href: "#work" },
			{ label: "Services", href: "#services" },
			{ label: "Process", href: "#process" },
			{ label: "Contact", href: "#contact" },
		],
		cta: "Start a Project",
	},

	hero: {
		tag: "Premier Web Studio",
		est: "Est. 2019",
		location: "Brooklyn, NY",
		lines: ["We Build", "Websites", "that drive more customers to your business."],
		paragraph:
			"Apex Web Studios designs and engineers high-performance digital products for ambitious brands. No templates. No shortcuts. Every project, built from first principles.",
		viewWork: "View Our Work",
		cta: "Start a Project",
		scroll: "Scroll",
	},

	marquee: [
		"Web Design",
		"Development",
		"Branding",
		"UX Strategy",
		"Performance",
		"Motion",
	],

	stats: [
		{ value: "140+", label: "Projects Shipped" },
		{ value: "98%", label: "Client Retention" },
		{ value: "6yr", label: "Studio Age" },
		{ value: "12", label: "Team Members" },
	],

	portfolio: {
		label: "Selected Work",
		title: "Portfolio",
		allProjects: "All Projects",
		projects: [
			{ name: "Meridian Capital", category: "Finance / Web App", year: "2025" },
			{
				name: "Sola Architecture",
				category: "Design Studio / Brand",
				year: "2024",
			},
			{ name: "Vanta Logistics", category: "SaaS / Dashboard", year: "2024" },
			{ name: "Ore & Iron", category: "E-Commerce / Brand", year: "2023" },
		],
	},

	services: {
		label: "What We Do",
		title: "Services",
		items: [
			{
				title: "Web Design",
				description:
					"Pixel-precise interfaces built for conversion. Every interaction is deliberate, every transition earns its place.",
				tags: ["UI/UX", "Figma", "Prototyping"],
			},
			{
				title: "Development",
				description:
					"Production-grade code. React, Astro, TypeScript — no shortcuts, no vendor lock-in, no bloat.",
				tags: ["React", "Astro", "TypeScript"],
			},
			{
				title: "Digital Strategy",
				description:
					"We map the full user journey. From brand architecture to analytics, your digital presence runs as a system.",
				tags: ["Strategy", "SEO", "Analytics"],
			},
			{
				title: "Performance",
				description:
					"Sub-second loads. 100 Lighthouse scores. We treat performance as a design constraint, not an afterthought.",
				tags: ["Core Web Vitals", "CDN", "Optimization"],
			},
		],
	},

	process: {
		label: "How We Work",
		title: "Process",
		steps: [
			{
				title: "Discovery",
				description:
					"Two-week immersion. We audit your market position, interview stakeholders, and map every touchpoint before a single pixel is placed.",
			},
			{
				title: "Architecture",
				description:
					"Information hierarchy, user flows, and technical scaffolding. The skeleton that makes everything else possible.",
			},
			{
				title: "Design",
				description:
					"High-fidelity Figma systems. Every state, every breakpoint, every edge case — documented and approved before development begins.",
			},
			{
				title: "Build",
				description:
					"Clean, reviewed, tested code. We deploy to staging, run Lighthouse audits, and QA across 12 device and browser configurations.",
			},
			{
				title: "Launch",
				description:
					"Monitored rollout with a dedicated Slack channel. We don't disappear at handoff — post-launch support is baked in.",
			},
		],
	},

	studio: {
		label: "The Team",
		title: "Studio",
		intro:
			"We're a focused team of twelve — designers, engineers, and strategists working from Brooklyn. Small enough to care deeply, large enough to move fast. We take on six new projects per quarter, and we're selective about it.",
		location: "Brooklyn, NY",
		est: "Est. 2019",
		team: [
			{
				name: "Reece Aldeman",
				role: "Founder / Creative Director",
				since: "2019",
			},
			{ name: "Mara Szabó", role: "Lead Developer", since: "2020" },
			{ name: "Kwame Osei", role: "Head of Strategy", since: "2021" },
			{ name: "Lucia Ferretti", role: "Senior Designer", since: "2022" },
		],
	},

	ctaBand: {
		title: "Ready to Build Something Exceptional?",
		cta: "Start a Project",
	},

	contact: {
		label: "Get in Touch",
		title: "Contact",
		blurb:
			"We open our books to new projects quarterly. Tell us what you're building — we'll respond within 48 hours with a discovery call invitation.",
		email: "hello@apexwebstudios.com",
		phone: "+1 (718) 555-0147",
		address: "74 Wythe Ave, Brooklyn, NY 11249",
		socials: ["Dribbble", "Twitter", "Behance", "Instagram", "LinkedIn"],
		form: {
			firstName: "First Name",
			lastName: "Last Name",
			email: "Email",
			projectType: "Project Type",
			projectTypes: [
				"Web Design",
				"Development",
				"Design + Development",
				"Digital Strategy",
				"Something else",
			],
			message: "Message",
			submit: "Send Inquiry",
		},
	},

	footer: {
		rights: "All rights reserved.",
		links: ["Privacy", "Terms"],
	},
};
