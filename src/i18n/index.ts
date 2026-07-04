/* ==========================================================
   APEX WEB STUDIOS — Internacionalización
   La interface Dictionary es el CONTRATO: si a un idioma le
   falta una clave, TypeScript lo marca como error.
   ========================================================== */

import { en } from "./en";
import { es } from "./es";

/* ---------- Tipos de las piezas de contenido ---------- */

export interface NavLink {
	label: string;
	href: string; // ancla interna, ej. "#work"
}

export interface Stat {
	value: string; // "140+" — string, no number: lleva sufijos como "+" o "%"
	label: string;
}

export interface Project {
	name: string;
	category: string;
	year: string;
}

export interface Service {
	title: string;
	description: string;
	tags: string[];
}

export interface ProcessStep {
	title: string;
	description: string;
}

export interface TeamMember {
	name: string;
	role: string;
	since: string;
}

/* ---------- El contrato completo de un idioma ---------- */

export interface Dictionary {
	meta: { title: string; description: string };
	nav: { links: NavLink[]; cta: string };
	hero: {
		tag: string;
		est: string;
		location: string;
		lines: [string, string, string]; // la línea 2 (índice 1) va en lima
		paragraph: string;
		viewWork: string;
		cta: string;
		scroll: string;
	};
	marquee: string[];
	stats: Stat[];
	portfolio: {
		label: string;
		title: string;
		allProjects: string;
		projects: Project[];
	};
	services: { label: string; title: string; items: Service[] };
	process: { label: string; title: string; steps: ProcessStep[] };
	studio: {
		label: string;
		title: string;
		intro: string;
		location: string;
		est: string;
		team: TeamMember[];
	};
	ctaBand: { title: string; cta: string };
	contact: {
		label: string;
		title: string;
		blurb: string;
		email: string;
		phone: string;
		address: string;
		socials: string[];
		form: {
			firstName: string;
			lastName: string;
			email: string;
			projectType: string;
			projectTypes: string[];
			message: string;
			submit: string;
		};
	};
	footer: { rights: string; links: string[] };
}

/* ---------- Registro de idiomas y helpers ---------- */

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, Dictionary> = { en, es };

/** Devuelve el diccionario del idioma activo (inglés si no se reconoce). */
export function getDict(locale?: string): Dictionary {
	return dictionaries[(locale as Locale) ?? defaultLocale] ?? dictionaries.en;
}

/** Ruta raíz de cada idioma: "/" para el defecto, "/es/" para español. */
export function localeHome(locale: Locale): string {
	return locale === defaultLocale ? "/" : `/${locale}/`;
}
