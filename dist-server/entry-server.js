import { StrictMode, useEffect } from "react";
import { renderToString } from "react-dom/server";
import { Link, Outlet, Route, Routes, StaticRouter, useParams } from "react-router-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/data/site.ts
var siteConfig = {
	name: "SceneShift",
	domain: "sceneshift.org",
	url: "https://sceneshift.org",
	loginUrl: "https://login.sceneshift.org",
	legalTermsUrl: "https://login.sceneshift.org/terms",
	legalPrivacyUrl: "https://login.sceneshift.org/privacy",
	primaryEmail: "contact@sceneshift.org",
	supportEmail: "contact@sceneshift.org",
	primaryPhoneLabel: "(515) 579-5378",
	primaryPhoneHref: "+15155795378",
	region: "Ames, Iowa",
	areaServed: [
		"Ames, Iowa",
		"Iowa",
		"United States"
	],
	indexNowKey: "b44f0c99429d41d9896cfd3cfc07933e",
	ogImagePath: "/assets/images/page-title/des-moines-iowa-usa-capitol-building-on-a-misty-2026-03-24-11-27-15-utc.jpg"
};
siteConfig.legalTermsUrl, siteConfig.legalPrivacyUrl;
//#endregion
//#region src/components/seo/SeoHeader.tsx
/**
* Lite header for SEO pages. No scroll listeners, no Lenis hooks, no GSAP.
* Pure SSR-safe markup for fast first paint and Core Web Vitals.
*/
function SeoHeader() {
	return /* @__PURE__ */ jsxs("header", {
		className: "seo-header",
		children: [/* @__PURE__ */ jsx("div", {
			className: "seo-header__top",
			children: /* @__PURE__ */ jsx("div", {
				className: "container",
				children: /* @__PURE__ */ jsxs("ul", {
					className: "seo-header__contact",
					children: [
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
							className: "seo-header__contact-label",
							children: "Call"
						}), /* @__PURE__ */ jsx("a", {
							href: `tel:${siteConfig.primaryPhoneHref}`,
							children: siteConfig.primaryPhoneLabel
						})] }),
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
							className: "seo-header__contact-label",
							children: "Email"
						}), /* @__PURE__ */ jsx("a", {
							href: `mailto:${siteConfig.primaryEmail}`,
							children: siteConfig.primaryEmail
						})] }),
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
							className: "seo-header__contact-label",
							children: "Based in"
						}), /* @__PURE__ */ jsx("span", { children: siteConfig.region })] })
					]
				})
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "seo-header__main",
			children: /* @__PURE__ */ jsx("div", {
				className: "container",
				children: /* @__PURE__ */ jsxs("div", {
					className: "seo-header__row",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "seo-header__logo",
							children: /* @__PURE__ */ jsx("img", {
								alt: `${siteConfig.name} logo`,
								src: "/assets/images/logo.svg",
								width: 110,
								height: 20
							})
						}),
						/* @__PURE__ */ jsx("nav", {
							className: "seo-header__nav",
							"aria-label": "Primary",
							children: /* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/services",
									children: "Services"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/packages",
									children: "Packages"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/industries",
									children: "Industries"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/iowa",
									children: "Iowa"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/about-us",
									children: "About"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									children: "Contact"
								}) })
							] })
						}),
						/* @__PURE__ */ jsx("a", {
							href: siteConfig.loginUrl,
							className: "seo-header__login",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Login"
						})
					]
				})
			})
		})]
	});
}
//#endregion
//#region src/components/seo/SeoFooter.tsx
/**
* Lite footer with NAP (Name / Address / Phone) consistency block — a critical
* E-E-A-T trust signal that appears on every SEO page.
*
* NAP must be byte-identical across the site for local search trust signals
* to compound. All values pull from [src/data/site.ts] (single source).
*/
function SeoFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "seo-footer",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "seo-footer__cta",
					children: /* @__PURE__ */ jsx("h2", { children: "The future of small business is here. Don't get left behind." })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "seo-footer__grid",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "seo-footer__brand",
							children: [/* @__PURE__ */ jsx("img", {
								alt: `${siteConfig.name} logo`,
								src: "/assets/images/logo.svg",
								width: 110,
								height: 20
							}), /* @__PURE__ */ jsxs("address", {
								className: "seo-footer__nap",
								itemScope: true,
								itemType: "https://schema.org/LocalBusiness",
								children: [
									/* @__PURE__ */ jsx("p", {
										itemProp: "name",
										children: siteConfig.name
									}),
									/* @__PURE__ */ jsxs("p", { children: ["Based in ", /* @__PURE__ */ jsx("span", {
										itemProp: "addressLocality",
										children: siteConfig.region
									})] }),
									/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", {
										href: `tel:${siteConfig.primaryPhoneHref}`,
										itemProp: "telephone",
										children: siteConfig.primaryPhoneLabel
									}) }),
									/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", {
										href: `mailto:${siteConfig.primaryEmail}`,
										itemProp: "email",
										children: siteConfig.primaryEmail
									}) }),
									/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", {
										href: siteConfig.url,
										itemProp: "url",
										children: siteConfig.domain
									}) })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-footer__column",
							children: [/* @__PURE__ */ jsx("h3", { children: "Services" }), /* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/services/24-7-web-concierge",
									children: "24/7 Web Concierge"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/services/always-on-receptionist",
									children: "Always-On Receptionist"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/services/speed-to-lead-outbound",
									children: "Speed-to-Lead Outbound"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/services/hands-off-reviews",
									children: "Hands-Off Reviews"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/services/autonomous-salesman",
									children: "Autonomous Salesman"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/services",
									children: "All services"
								}) })
							] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-footer__column",
							children: [/* @__PURE__ */ jsx("h3", { children: "Packages" }), /* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/packages/main-street-startup",
									children: "Main Street Startup"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/packages/always-on-capture",
									children: "Always-On Capture"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/packages/autonomous-sales-floor",
									children: "Autonomous Sales Floor"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/packages",
									children: "Compare packages"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/pricing",
									children: "Pricing"
								}) })
							] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-footer__column",
							children: [/* @__PURE__ */ jsx("h3", { children: "Iowa" }), /* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/iowa",
									children: "All 99 counties"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/iowa/cities/des-moines",
									children: "Des Moines"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/iowa/cities/cedar-rapids",
									children: "Cedar Rapids"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/iowa/cities/ames",
									children: "Ames"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/iowa/cities/iowa-city",
									children: "Iowa City"
								}) })
							] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "seo-footer__column",
							children: [/* @__PURE__ */ jsx("h3", { children: "Company" }), /* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/about-us",
									children: "About"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/about/founder",
									children: "Founder"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/about/editorial-policy",
									children: "Editorial policy"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									children: "Contact"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: siteConfig.legalTermsUrl,
									rel: "noopener noreferrer",
									children: "Terms"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: siteConfig.legalPrivacyUrl,
									rel: "noopener noreferrer",
									children: "Privacy"
								}) })
							] })]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "seo-footer__bottom",
					children: /* @__PURE__ */ jsxs("p", { children: [
						/* @__PURE__ */ jsx("a", {
							href: siteConfig.url,
							children: siteConfig.name
						}),
						" ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						". All rights reserved."
					] })
				})
			]
		})
	});
}
//#endregion
//#region src/pages/layouts/SeoShellLayout.tsx
/**
* Lite layout for SEO/AIO pages.
*
* Loads ONLY the components and providers needed to render content:
* no Lenis, no GSAP, no Swiper, no Isotope, no LightGallery, no OGL,
* no hover-effect, no odometer. This is the difference between failing
* and passing Core Web Vitals on the new pages — the existing
* [InnerPagesLayout] (and the heavy provider stack in [src/App.tsx]) ships
* 600KB+ of animation JS that has no place on a content page.
*
* Pages routed under this layout work in two modes:
*  - Server-side (build-time): rendered via `react-dom/server.renderToString`
*    by [scripts/prerender-seo-pages.mjs] for SEO/AIO crawlers.
*  - Client-side: hydrated/re-rendered in the SPA after JS loads.
*/
function SeoShellLayout() {
	return /* @__PURE__ */ jsxs("div", {
		className: "seo-shell",
		children: [
			/* @__PURE__ */ jsx(SeoHeader, {}),
			/* @__PURE__ */ jsx("main", {
				className: "seo-shell__main",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(SeoFooter, {})
		]
	});
}
//#endregion
//#region src/components/seo/AnswerFirstBlock.tsx
/**
* AIO-targeted answer-first block.
*
* Renders the page's primary question (H1) followed by a concise 40-60 word
* answer optimized for citation in Google AI Overviews, Perplexity, and
* ChatGPT search. The corresponding `QAPage` JSON-LD is emitted by the page's
* metadata builder so the structured data stays aligned with visible content.
*/
function AnswerFirstBlock({ question, answer }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "seo-answer-first",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "seo-answer-first__question",
			children: question
		}), /* @__PURE__ */ jsx("p", {
			className: "seo-answer-first__answer",
			children: answer
		})]
	});
}
//#endregion
//#region src/components/seo/Breadcrumbs.tsx
/**
* Visible breadcrumbs that match the BreadcrumbList JSON-LD emitted by the
* page metadata builder. Always pair these together for the schema/visible
* alignment that Google specifically rewards.
*/
function Breadcrumbs({ items }) {
	if (items.length === 0) return null;
	return /* @__PURE__ */ jsx("nav", {
		className: "seo-breadcrumbs",
		"aria-label": "Breadcrumb",
		children: /* @__PURE__ */ jsx("ol", {
			className: "seo-breadcrumbs__list",
			children: items.map((item, idx) => {
				const isLast = idx === items.length - 1;
				return /* @__PURE__ */ jsxs("li", {
					className: "seo-breadcrumbs__item",
					children: [item.href && !isLast ? /* @__PURE__ */ jsx(Link, {
						to: item.href,
						children: item.label
					}) : /* @__PURE__ */ jsx("span", {
						"aria-current": isLast ? "page" : void 0,
						children: item.label
					}), !isLast && /* @__PURE__ */ jsx("span", {
						className: "seo-breadcrumbs__sep",
						children: "/"
					})]
				}, `${item.label}-${idx}`);
			})
		})
	});
}
//#endregion
//#region src/data/authors.ts
/**
* Author / founder records used for `Person` schema and visible bylines.
*
* Important for E-E-A-T: Google's 2026 Helpful Content System gives substantial
* weight to verifiable, named authors with public profiles. Every SEO page in
* the network bylines back to an author here.
*/
var AUTHORS = [{
	slug: "founder",
	name: "SceneShift Team",
	jobTitle: "Founder, SceneShift",
	bio: "SceneShift was started in Ames, Iowa to help small businesses respond faster, follow up consistently, and stay easy to choose against larger, better-resourced competitors. We work hands-on with home-service operators, MedSpas, professional-services firms, and local manufacturers across Iowa.",
	sameAs: []
}];
var PRIMARY_AUTHOR_SLUG = "founder";
function getAuthor(slug) {
	return AUTHORS.find((a) => a.slug === slug);
}
function getPrimaryAuthor() {
	const author = getAuthor(PRIMARY_AUTHOR_SLUG);
	if (!author) throw new Error(`Primary author "${PRIMARY_AUTHOR_SLUG}" not defined in authors.ts`);
	return author;
}
//#endregion
//#region src/components/seo/Byline.tsx
/**
* Visible "Last reviewed [date] by [author]" line. This is a meaningful E-E-A-T
* and AIO citation signal — Google and AI Overview crawlers consistently
* prioritize content with explicit authorship and review dates over
* anonymous, undated pages.
*
* The Person and dateModified JSON-LD that pairs with this is emitted by the
* page metadata builder so structured data and visible content stay aligned.
*/
function Byline({ lastReviewed }) {
	const author = getPrimaryAuthor();
	const date = new Date(lastReviewed);
	return /* @__PURE__ */ jsxs("p", {
		className: "seo-byline",
		children: [
			"Last reviewed ",
			/* @__PURE__ */ jsx("time", {
				dateTime: lastReviewed,
				children: Number.isNaN(date.getTime()) ? lastReviewed : date.toLocaleDateString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric"
				})
			}),
			" by",
			" ",
			/* @__PURE__ */ jsx("span", {
				className: "seo-byline__author",
				children: author.name
			}),
			" ",
			/* @__PURE__ */ jsxs("span", {
				className: "seo-byline__title",
				children: [
					"(",
					author.jobTitle,
					")"
				]
			})
		]
	});
}
//#endregion
//#region src/components/seo/InterlinkGrid.tsx
/**
* Tiered interlink grid — the structural component that distributes link
* equity across the SceneShift content network.
*
* Each rail is a labeled group of related internal links. The page-level
* caller chooses which rails to render based on the page's tier (see plan
* "Tiered linking" section). Rails accept any URL — services, packages,
* industries, crosshairs, counties, cities, hubs.
*/
function InterlinkGrid({ rails, ctaHref = "/contact", ctaLabel = "Book a call" }) {
	const realRails = rails.filter((rail) => rail.items.length > 0);
	if (realRails.length === 0) return null;
	return /* @__PURE__ */ jsxs("section", {
		className: "seo-interlink",
		children: [/* @__PURE__ */ jsx("div", {
			className: "seo-interlink__rails",
			children: realRails.map((rail) => /* @__PURE__ */ jsxs("div", {
				className: "seo-interlink__rail",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "seo-interlink__heading",
					children: rail.heading
				}), /* @__PURE__ */ jsx("ul", {
					className: "seo-interlink__list",
					children: rail.items.map((item) => /* @__PURE__ */ jsx("li", {
						className: "seo-interlink__item",
						children: /* @__PURE__ */ jsxs(Link, {
							to: item.href,
							className: "seo-interlink__link",
							children: [/* @__PURE__ */ jsx("span", {
								className: "seo-interlink__label",
								children: item.label
							}), item.hook && /* @__PURE__ */ jsx("span", {
								className: "seo-interlink__hook",
								children: item.hook
							})]
						})
					}, item.href))
				})]
			}, rail.heading))
		}), /* @__PURE__ */ jsx("div", {
			className: "seo-interlink__cta",
			children: /* @__PURE__ */ jsx(Link, {
				to: ctaHref,
				className: "ibt-btn ibt-btn-dark",
				children: /* @__PURE__ */ jsx("span", { children: ctaLabel })
			})
		})]
	});
}
//#endregion
//#region src/data/services-catalog.ts
var SERVICES = [
	{
		slug: "24-7-web-concierge",
		name: "24/7 Web Concierge",
		h1: "How do you answer website visitors when no one is at the office?",
		answer: "The 24/7 Web Concierge is an AI-powered chat widget on your existing site. It answers FAQs, captures contact details, and books appointments at 2 AM the same way it does at 2 PM, so a Gen-Z visitor who would never call you can still become a customer.",
		hookOneLiner: "An AI chat that turns silent web visitors into booked appointments around the clock.",
		painPoints: [
			"Younger buyers won't call. They text or close the tab.",
			"Web forms that say 'we'll get back in 24 hours' lose to competitors who answer in 24 seconds.",
			"After-hours questions go unanswered and never come back."
		],
		mechanism: [
			{
				name: "Install on your existing site",
				text: "We add a small script tag to your current website. No replatforming, no downtime, no rebuild."
			},
			{
				name: "Train on your real questions",
				text: "We seed the chat with your actual top FAQs, service area, hours, and pricing rules so answers match how your team would respond."
			},
			{
				name: "Capture and route",
				text: "When a visitor wants more, the chat asks for name, phone, email, and the job they need. That goes straight into Easy CRM and pings you on phone or email."
			},
			{
				name: "Book the appointment",
				text: "If the visitor is ready, the chat checks your calendar and books the slot with a confirmation text or email."
			}
		],
		outcomes: [
			"Web leads captured 24/7, including weekends and holidays",
			"First response measured in seconds, not hours",
			"A clean record of every chat conversation in Easy CRM"
		],
		comparison: {
			title: "AI Web Concierge vs. a contact form",
			oursLabel: "Web Concierge",
			theirsLabel: "Static contact form",
			rows: [
				{
					feature: "Response time after hours",
					ours: "Seconds, automated",
					theirs: "Whenever someone reads the inbox"
				},
				{
					feature: "Books appointments",
					ours: "Yes, on your calendar",
					theirs: "No"
				},
				{
					feature: "Answers FAQs",
					ours: "Yes, in your voice",
					theirs: "No"
				},
				{
					feature: "Captures phone + email",
					ours: "Yes, structured",
					theirs: "Yes, in a flat blob"
				}
			]
		},
		faqs: [
			{
				question: "Does the 24/7 Web Concierge work on my current website?",
				answer: "Yes. It is a small script that sits on top of your existing WordPress, Webflow, Shopify, Squarespace, or custom site. We do not need to rebuild anything to install it."
			},
			{
				question: "What happens if the AI cannot answer a question?",
				answer: "The chat collects the visitor's name, phone, and the question, then alerts your team by text or email so a human can follow up while the lead is still warm."
			},
			{
				question: "Can the chat book directly into my calendar?",
				answer: "Yes. We connect to Google Calendar, Outlook, Calendly, or your scheduling tool of choice and the chat only books available time slots."
			},
			{
				question: "Do you log the conversations?",
				answer: "Every chat is saved to your Easy CRM contact record so you can review what was asked and what was answered."
			}
		],
		includedInPackages: [
			"main-street-startup",
			"always-on-capture",
			"autonomous-sales-floor"
		],
		naturalCompanions: [
			"always-on-receptionist",
			"invisible-personal-assistant",
			"speed-to-lead-outbound"
		],
		industries: [
			"home-services-iowa",
			"professional-services-iowa",
			"medspas-and-clinics-iowa"
		],
		primarySources: [{
			label: "Iowa SBDC small business resources",
			url: "https://www.iowasbdc.org/"
		}],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "always-on-receptionist",
		name: "The Always-On Receptionist",
		h1: "How do small businesses stop losing money to missed phone calls?",
		answer: "The Always-On Receptionist is an AI phone system that answers your business line when no one else can. It greets the caller in your business voice, answers common questions, pre-qualifies the buyer, books appointments on your calendar, and sends you a clean note about the call.",
		hookOneLiner: "An AI phone receptionist that catches every missed call, qualifies the buyer, and books the appointment.",
		painPoints: [
			"Crews on jobs cannot answer the phone, and a competitor picks up first.",
			"Voicemail kills 80% of inbound interest before you ever hear it.",
			"Hiring a full-time receptionist costs more than the calls are worth most months."
		],
		mechanism: [
			{
				name: "Forward your business line",
				text: "We give you a number to forward unanswered calls to (or use as your main line). Your existing number stays the same."
			},
			{
				name: "Greet in your voice",
				text: "We script the greeting around how your team actually answers — not a generic 'hello, please hold' that screams call center."
			},
			{
				name: "Qualify and route",
				text: "The AI asks the questions you would ask: what is the address, what is the issue, when do they need it done. Emergencies get escalated, non-emergencies get scheduled."
			},
			{
				name: "Book or hand off",
				text: "If the caller is ready, the AI books the appointment on your calendar. If not, the call summary is texted or emailed to you within seconds."
			}
		],
		outcomes: [
			"Zero missed-call voicemails for inbound new business",
			"Every caller gets a real, helpful experience even at 9 PM on a Saturday",
			"Clean call summaries instead of vague voicemails"
		],
		comparison: {
			title: "AI Receptionist vs. a traditional answering service",
			oursLabel: "Always-On Receptionist",
			theirsLabel: "Traditional answering service",
			rows: [
				{
					feature: "Cost per month",
					ours: "Flat predictable rate",
					theirs: "Per-minute, scales with volume"
				},
				{
					feature: "Books appointments",
					ours: "Yes, directly on your calendar",
					theirs: "Usually no, takes a message"
				},
				{
					feature: "Pre-qualifies buyers",
					ours: "Yes, asks your questions",
					theirs: "No, just records details"
				},
				{
					feature: "Available at 2 AM",
					ours: "Yes",
					theirs: "Sometimes, with surcharges"
				},
				{
					feature: "Sounds like your business",
					ours: "Custom greeting, your tone",
					theirs: "Generic call-center scripts"
				}
			]
		},
		faqs: [
			{
				question: "Will my customers know they are talking to an AI?",
				answer: "We are honest about it when asked, and we script the greeting so the experience feels professional regardless. Most callers care that they got an answer at all — not whether the answer came from a human."
			},
			{
				question: "Does this replace my front desk?",
				answer: "No. It backs up your front desk on missed calls, after hours, lunch breaks, and overflow. Your team handles what they want to handle and the AI catches the rest."
			},
			{
				question: "Can it route emergency calls differently?",
				answer: "Yes. We define what an emergency sounds like for your business — water leak, lockout, dental pain — and the AI escalates those calls to a live person on your team immediately."
			},
			{
				question: "What if the AI gets a question wrong?",
				answer: "Every call summary lands in Easy CRM. You can flag the call, we review the script weekly, and we tune answers as your business changes."
			}
		],
		includedInPackages: [
			"main-street-startup",
			"always-on-capture",
			"autonomous-sales-floor"
		],
		naturalCompanions: [
			"24-7-web-concierge",
			"invisible-admin",
			"invisible-personal-assistant"
		],
		industries: [
			"home-services-iowa",
			"professional-services-iowa",
			"medspas-and-clinics-iowa",
			"local-logistics-and-warehousing-iowa"
		],
		primarySources: [{
			label: "BLS Occupational Outlook on receptionists",
			url: "https://www.bls.gov/ooh/office-and-administrative-support/receptionists.htm"
		}],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "invisible-admin",
		name: "The Invisible Admin",
		h1: "How do you keep your CRM and customers updated without admin work?",
		answer: "The Invisible Admin keeps your CRM in sync the second something happens. New leads, updated appointments, customer questions — the system writes them into your CRM, alerts your team on phone or email, and texts your customers their reminders without anyone touching a keyboard.",
		hookOneLiner: "Your CRM updates itself, your team gets notified, and your customers get reminders — automatically.",
		painPoints: [
			"Leads that come in through chat, calls, and forms never make it into the CRM the same way.",
			"Customers no-show because nobody texted them a reminder.",
			"Your team finds out about a new appointment when the customer arrives."
		],
		mechanism: [
			{
				name: "Connect your CRM",
				text: "We connect to your existing CRM (or our Easy CRM if you do not have one) and define exactly what gets written, where."
			},
			{
				name: "Listen to every channel",
				text: "Web chat, phone, web form, calendar booking, and review request — every event gets normalized into a single contact record."
			},
			{
				name: "Notify your team",
				text: "New leads and changes ping your team on phone or email in the format your team actually wants — not a flood of generic 'a thing happened' emails."
			},
			{
				name: "Remind your customer",
				text: "Customers get appointment confirmations, day-before reminders, prep instructions, and follow-ups by text or email automatically."
			}
		],
		outcomes: [
			"Every lead in the CRM, structured and searchable",
			"Lower no-show rates from automated reminders",
			"Less Sunday-night admin catching up on the week"
		],
		faqs: [
			{
				question: "Which CRMs do you support?",
				answer: "We connect to most modern CRMs (HubSpot, GoHighLevel, ServiceTitan, Jobber, Housecall Pro, Salesforce, Pipedrive, Keap, Monday) and to our own Easy CRM if you do not have one yet."
			},
			{
				question: "Can I customize what reminders go out?",
				answer: "Yes. We tune timing, copy, and channel (text vs. email) per appointment type. Plumbing emergency does not get the same reminder as a cosmetic consult."
			},
			{
				question: "What if the customer replies to a reminder?",
				answer: "Replies route to your inbox or to The Always-On Receptionist if they call back, and the conversation is logged on the contact record."
			},
			{
				question: "Will this break if I switch CRMs later?",
				answer: "No. We rebuild the integration without changing the customer experience."
			}
		],
		includedInPackages: [
			"main-street-startup",
			"always-on-capture",
			"autonomous-sales-floor"
		],
		naturalCompanions: [
			"always-on-receptionist",
			"invisible-personal-assistant",
			"easy-crm"
		],
		industries: [
			"home-services-iowa",
			"professional-services-iowa",
			"medspas-and-clinics-iowa"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "invisible-personal-assistant",
		name: "The Invisible Personal Assistant",
		h1: "How do you fill your calendar with appointments without doing it yourself?",
		answer: "The Invisible Personal Assistant takes lead activity from chat, phone, forms, and outbound calls and turns it into appointments on your calendar of choice. It checks availability, respects your buffers and travel time, and only books slots you would actually take.",
		hookOneLiner: "An AI assistant that turns lead activity into actual appointments on your calendar.",
		painPoints: [
			"Back-and-forth scheduling emails kill momentum on hot leads.",
			"Double-bookings and travel-time problems eat the day.",
			"Calendars stay empty even when leads keep coming in."
		],
		mechanism: [
			{
				name: "Connect your calendar",
				text: "Google Calendar, Outlook, Calendly, Acuity, or your scheduling tool — we connect to what you already use."
			},
			{
				name: "Define rules",
				text: "Buffers, travel-time, service durations, blackouts, and which appointment types go where on which days."
			},
			{
				name: "Book from any source",
				text: "Web chat, phone calls, web form submissions, and outbound qualification all feed into one booking flow."
			},
			{
				name: "Confirm and follow through",
				text: "Confirmation goes out by text or email, the appointment lands in your CRM, and reminders fire automatically."
			}
		],
		outcomes: [
			"A fuller calendar without manual scheduling",
			"Fewer scheduling errors and travel-time conflicts",
			"Faster booking on hot leads — measured in minutes, not days"
		],
		faqs: [
			{
				question: "What calendars do you support?",
				answer: "Google Calendar, Outlook/Microsoft 365, Calendly, Acuity, Square Appointments, ServiceTitan, Jobber, Housecall Pro, and most major scheduling tools."
			},
			{
				question: "Can different appointment types have different rules?",
				answer: "Yes. A 90-minute consult can require different buffers and locations than a 15-minute follow-up. We model that explicitly."
			},
			{
				question: "What about travel time between job sites?",
				answer: "We add configurable buffers based on service area zones so the calendar does not book back-to-back jobs across town."
			}
		],
		includedInPackages: [
			"main-street-startup",
			"always-on-capture",
			"autonomous-sales-floor"
		],
		naturalCompanions: [
			"24-7-web-concierge",
			"always-on-receptionist",
			"invisible-admin"
		],
		industries: [
			"home-services-iowa",
			"medspas-and-clinics-iowa",
			"professional-services-iowa"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "easy-crm",
		name: "Easy CRM",
		h1: "What CRM should a small business use if they have never used one?",
		answer: "Easy CRM is the SceneShift web portal you already get with any package. It tracks every customer, every conversation across chat/phone/email, every appointment, and the revenue tied to each contact — without the setup pain of a full enterprise CRM.",
		hookOneLiner: "A complementary CRM that tracks customers, conversations, and revenue without setup pain.",
		painPoints: [
			"Customer details live across spreadsheets, sticky notes, and three different inboxes.",
			"Enterprise CRMs cost more than the leads they help close.",
			"Nobody has time to set up Salesforce."
		],
		mechanism: [
			{
				name: "Comes pre-loaded",
				text: "Easy CRM is included with every SceneShift package. There is no separate setup project."
			},
			{
				name: "Single contact record",
				text: "Every chat, call, form fill, appointment, and review request shows up on one customer record."
			},
			{
				name: "Revenue tracking",
				text: "Tag jobs and invoices to a contact and see which leads actually become paying customers."
			},
			{
				name: "Search and filter",
				text: "Find every customer in a zip code, every appointment last week, every customer who has not been called in 90 days."
			}
		],
		outcomes: [
			"One source of truth for customer data",
			"Real visibility into which lead sources actually drive revenue",
			"No additional CRM subscription to pay for"
		],
		faqs: [
			{
				question: "Do I have to use Easy CRM?",
				answer: "No. If you have HubSpot, GoHighLevel, ServiceTitan, Jobber, Housecall Pro, or another CRM you like, The Invisible Admin syncs into that one instead. Easy CRM is the default if you do not have a CRM yet."
			},
			{
				question: "Is there an extra fee for Easy CRM?",
				answer: "No. It is bundled with every SceneShift package at no extra cost."
			},
			{
				question: "Can I export my data later?",
				answer: "Yes. Your data is yours. Export to CSV anytime, including conversation history and revenue records."
			}
		],
		includedInPackages: [
			"main-street-startup",
			"always-on-capture",
			"autonomous-sales-floor"
		],
		naturalCompanions: [
			"invisible-admin",
			"always-on-receptionist",
			"24-7-web-concierge"
		],
		industries: [
			"home-services-iowa",
			"professional-services-iowa",
			"medspas-and-clinics-iowa",
			"niche-ecommerce-iowa"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "speed-to-lead-outbound",
		name: "Speed-to-Lead Outbound",
		h1: "How fast should you call back a website lead?",
		answer: "Within five minutes — and most small businesses miss that window by hours or days. Speed-to-Lead Outbound calls a new web-form submission inside one minute, qualifies the lead, answers their questions, and books the appointment while they are still on your website.",
		hookOneLiner: "An AI calls every new web lead within sixty seconds and books the appointment while they are still hot.",
		painPoints: [
			"Leads cool off in hours. Most small businesses respond in days.",
			"Hot buyers fill out three forms at once. The first call wins.",
			"After-hours form submissions often never get a callback at all."
		],
		mechanism: [
			{
				name: "Listen for new submissions",
				text: "We hook into your contact form, quote form, or landing page so a submission triggers a call instantly."
			},
			{
				name: "Call within sixty seconds",
				text: "The Lead Qualification AI Agent dials the number on the form while the visitor is still on your site."
			},
			{
				name: "Qualify the buyer",
				text: "The AI confirms what they need, when, and where — the same questions you would ask if you picked up."
			},
			{
				name: "Book or hand off",
				text: "Qualified, ready-to-buy leads are booked directly. Complex situations get summarized and handed to your team while still warm."
			}
		],
		outcomes: [
			"First-call advantage on every web lead",
			"Higher show-rates because the booking happens during the same intent moment",
			"Real data on which traffic sources produce real buyers"
		],
		comparison: {
			title: "Speed-to-Lead vs. manual callback",
			oursLabel: "Speed-to-Lead Outbound",
			theirsLabel: "Team callback the next day",
			rows: [
				{
					feature: "Time to first contact",
					ours: "Under 60 seconds",
					theirs: "4 to 24 hours"
				},
				{
					feature: "Books while intent is hot",
					ours: "Yes",
					theirs: "Rarely"
				},
				{
					feature: "Works after hours",
					ours: "Yes",
					theirs: "No"
				},
				{
					feature: "Costs per lead",
					ours: "Flat package price",
					theirs: "Hours of staff time"
				}
			]
		},
		faqs: [
			{
				question: "Will customers be annoyed by an instant call?",
				answer: "The opposite. Studies of inbound lead behavior consistently show buyers prefer being contacted while their interest is still active."
			},
			{
				question: "What if the lead does not answer?",
				answer: "We retry on a configurable cadence and follow up by text and email. Every attempt is logged on the contact record."
			},
			{
				question: "Can it call from a local Iowa number?",
				answer: "Yes. We assign a local number so callers are more likely to pick up."
			},
			{
				question: "Does this work with my existing forms?",
				answer: "Yes. We integrate with most form tools (Gravity Forms, WPForms, Webflow, Typeform, HubSpot, Calendly)."
			}
		],
		includedInPackages: ["always-on-capture", "autonomous-sales-floor"],
		naturalCompanions: [
			"always-on-receptionist",
			"24-7-web-concierge",
			"autonomous-salesman"
		],
		industries: [
			"home-services-iowa",
			"medspas-and-clinics-iowa",
			"professional-services-iowa"
		],
		primarySources: [{
			label: "Harvard Business Review on lead response time",
			url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads"
		}],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "hands-off-reviews",
		name: "Hands-Off Reviews",
		h1: "How do you get more Google reviews without asking awkwardly?",
		answer: "Hands-Off Reviews calls or texts your customer after the job is done, asks how it went, and — if they say it went well — sends them a one-tap link to leave a Google review. The whole conversation runs without your team chasing it.",
		hookOneLiner: "An AI calls happy customers after the job and turns them into Google reviews.",
		painPoints: [
			"Asking for reviews feels awkward, so it does not happen consistently.",
			"Local SEO depends on review velocity, and competitors are pulling ahead.",
			"Customers say nice things in person but never type them on Google."
		],
		mechanism: [
			{
				name: "Trigger on completion",
				text: "When a job is marked complete in your CRM (or by a manual trigger), the review flow starts."
			},
			{
				name: "Quick check-in",
				text: "The AI calls or texts and asks one question: how did it go."
			},
			{
				name: "Route by sentiment",
				text: "Happy customers get a one-tap Google review link. Unhappy customers route to a private feedback path so you can fix the issue before it becomes a public review."
			},
			{
				name: "Track every request",
				text: "Easy CRM logs which customers were asked, how they responded, and how many reviews you actually earned."
			}
		],
		outcomes: [
			"More 5-star Google reviews, faster",
			"Negative experiences caught and resolved privately first",
			"A real review-pipeline metric you can report on"
		],
		faqs: [
			{
				question: "Is this against Google's review policy?",
				answer: "No. Google explicitly allows asking customers for reviews. What is not allowed is gating reviews — hiding the link from unhappy customers entirely. We route unhappy customers to a private feedback path that does NOT block them from leaving a public review if they want to."
			},
			{
				question: "When does the review request go out?",
				answer: "We tune timing per industry. Some businesses get the best response within an hour of completion. Others do better the next day. We test and adjust."
			},
			{
				question: "Does this work for Facebook reviews and the BBB too?",
				answer: "Yes. We can route happy customers to whichever review platform matters most for your business."
			}
		],
		includedInPackages: ["always-on-capture", "autonomous-sales-floor"],
		naturalCompanions: [
			"invisible-admin",
			"always-on-receptionist",
			"easy-crm"
		],
		industries: [
			"home-services-iowa",
			"medspas-and-clinics-iowa",
			"professional-services-iowa"
		],
		primarySources: [{
			label: "BrightLocal Local Consumer Review Survey",
			url: "https://www.brightlocal.com/research/local-consumer-review-survey/"
		}],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "autonomous-salesman",
		name: "The Autonomous Salesman",
		h1: "Can an AI agent run outbound sales calls for a small business?",
		answer: "Yes. Give The Autonomous Salesman a list of phone numbers and a few notes about who they are. The AI calls each one, qualifies, follows up across days and weeks if needed, and books the appointment when the prospect is ready — so your sales reps spend their day closing instead of dialing.",
		hookOneLiner: "An AI sales rep that works through your call list, follows up automatically, and books appointments.",
		painPoints: [
			"Expensive human reps spend most of the day leaving voicemails.",
			"Cold-list follow-up is inconsistent because nobody enjoys it.",
			"Hot prospects fall out of the pipeline because the eighth touch never happens."
		],
		mechanism: [
			{
				name: "Upload the list",
				text: "Give us a CSV of phone numbers with notes — past customers, expired warranties, dormant accounts, cold prospects."
			},
			{
				name: "Define the offer",
				text: "We script the qualification flow and the booking outcome together with you."
			},
			{
				name: "Work the list autonomously",
				text: "The AI calls, leaves voicemails, retries on a smart cadence, and follows up by text and email until the prospect either books or opts out."
			},
			{
				name: "Hand off the closed pipeline",
				text: "Booked appointments land on your calendar. Qualified-but-not-yet-ready prospects show up in Easy CRM with full call history."
			}
		],
		outcomes: [
			"Sales reps spend their hours on closing, not dialing",
			"Dormant lists get worked instead of decaying",
			"A predictable pipeline of pre-qualified appointments"
		],
		faqs: [
			{
				question: "Will it sound like a robot?",
				answer: "No. We use modern conversational AI that handles interruptions, accents, and natural speech patterns. Most prospects will not realize they are talking to AI unless they ask."
			},
			{
				question: "Is this compliant with TCPA / DNC rules?",
				answer: "We follow TCPA and Do Not Call requirements, scrub against the National DNC registry, and only call numbers you have permission to call."
			},
			{
				question: "How is this different from Speed-to-Lead Outbound?",
				answer: "Speed-to-Lead reacts to inbound web form submissions in real time. The Autonomous Salesman works a list of contacts you already have — past customers, leads from a trade show, expired accounts."
			}
		],
		includedInPackages: ["autonomous-sales-floor"],
		naturalCompanions: [
			"speed-to-lead-outbound",
			"invisible-admin",
			"easy-crm"
		],
		industries: [
			"professional-services-iowa",
			"local-logistics-and-warehousing-iowa",
			"niche-ecommerce-iowa"
		],
		lastReviewed: "2026-05-04"
	}
];
SERVICES.map((s) => s.slug);
function getServiceBySlug(slug) {
	return SERVICES.find((s) => s.slug === slug);
}
//#endregion
//#region src/data/packages-catalog.ts
var PACKAGES = [
	{
		slug: "main-street-startup",
		name: "The Main Street Startup",
		tagline: "Your AI front office: every call, chat, appointment, and customer update handled — without extra payroll.",
		idealFor: "Owner-operators with 1 to 5 employees and $100k to $500k in annual revenue, where missing one call on a job site can cost a week's groceries. Plumbers, roofers, electricians, salons, solo realtors, property managers, and any service business answering its own phone today.",
		pains: [
			"Calls go to voicemail while you are on a ladder, and the next number on Google picks up.",
			"Web visitors leave because nobody answered the chat at 9 PM.",
			"You spend Sunday night updating spreadsheets and texting reminders."
		],
		heroFeature: "The Always-On Receptionist plus Missed-Call Text Back — every missed call gets either an AI answer or an instant text from your business number.",
		includedServiceSlugs: [
			"24-7-web-concierge",
			"always-on-receptionist",
			"invisible-admin",
			"invisible-personal-assistant",
			"easy-crm"
		],
		priceHeadline: "$299",
		priceDetailLines: ["/month", "+ $500 one-time setup"],
		faqs: [
			{
				question: "What size business is this for?",
				answer: "Solo owner-operators up through about 5 employees. If you are still answering your own phone in the truck or between clients, this is built for you."
			},
			{
				question: "Does it lock me into a long contract?",
				answer: "Month to month after the initial setup. We earn the renewal every month."
			},
			{
				question: "What if I already have a CRM?",
				answer: "We sync into your existing CRM. Easy CRM is the default if you do not have one."
			}
		],
		bestFitIndustries: ["home-services-iowa", "professional-services-iowa"],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "always-on-capture",
		name: "Always-On Capture",
		tagline: "Everything in The Main Street Startup, plus instant outbound follow-up and automated 5-star reviews.",
		idealFor: "Multi-truck and multi-location small businesses with 5 to 20 employees and $500k to $2.5M revenue — multi-truck HVAC, plumbing, cleaning, pest control, MedSpas, dental, chiropractic, automotive, and local retail. The fix is no longer just answering the phone: you need to outrun bigger competitors on response time and on review velocity.",
		pains: [
			"You spend on Google ads, but leads cool off before anyone calls them back.",
			"Your competitor has 200 more 5-star reviews and is outranking you on Google Maps.",
			"Front-desk staff is stretched thin and follow-up is the first thing to drop."
		],
		heroFeature: "Speed-to-Lead Outbound plus Hands-Off Reviews — you call leads first and you collect reviews automatically.",
		includedServiceSlugs: [
			"24-7-web-concierge",
			"always-on-receptionist",
			"invisible-admin",
			"invisible-personal-assistant",
			"easy-crm",
			"speed-to-lead-outbound",
			"hands-off-reviews"
		],
		priceHeadline: "$599",
		priceDetailLines: ["/month", "+ $1,000 one-time setup"],
		faqs: [
			{
				question: "How much faster will leads be contacted?",
				answer: "Web form submissions are called within sixty seconds, day or night. Most small businesses currently respond in hours or days."
			},
			{
				question: "What review platforms are supported?",
				answer: "Google is the default — that is what most local SEO depends on. We can also route to Facebook, Yelp, BBB, or industry-specific platforms."
			},
			{
				question: "Will this work with my existing dispatch software?",
				answer: "Yes. We integrate with ServiceTitan, Jobber, Housecall Pro, GoHighLevel, and most modern field-service tools."
			}
		],
		bestFitIndustries: [
			"home-services-iowa",
			"medspas-and-clinics-iowa",
			"professional-services-iowa"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "autonomous-sales-floor",
		name: "The Autonomous Sales Floor",
		tagline: "Everything in Always-On Capture plus an autonomous AI sales rep working your call list — so your reps spend the day closing, not dialing.",
		idealFor: "Companies with 20 to 100+ employees and $3M to $15M+ revenue running an actual outbound sales motion: advanced manufacturing, ag-tech, equipment dealers, finance, and insurance brokerages. You have lists, you have a sales team, and you are wasting expensive humans on dialing voicemails.",
		pains: [
			"Sales reps making $80k spend most of their day leaving voicemails and chasing dead numbers.",
			"Dormant customer lists, expired warranties, and cold leads sit untouched for months.",
			"The eighth follow-up — the one that closes — never happens because nobody likes making it."
		],
		heroFeature: "The Autonomous Salesman — an AI SDR that works your call list, follows up across days and weeks, and books the appointment.",
		includedServiceSlugs: [
			"24-7-web-concierge",
			"always-on-receptionist",
			"invisible-admin",
			"invisible-personal-assistant",
			"easy-crm",
			"speed-to-lead-outbound",
			"hands-off-reviews",
			"autonomous-salesman"
		],
		priceHeadline: "$999",
		priceDetailLines: ["/month", "+ $1,500 one-time setup"],
		faqs: [
			{
				question: "Will my human sales reps lose their jobs?",
				answer: "No. The AI handles the prospecting and qualification work most reps actively dislike. Your reps spend their hours on the appointments the AI books — closing instead of dialing."
			},
			{
				question: "How is compliance handled?",
				answer: "We follow TCPA, scrub against the National Do Not Call registry, and only call numbers you have a legitimate basis to contact."
			},
			{
				question: "Can I bring my own scripts?",
				answer: "Yes. We will refine them with you, then keep tuning them based on what actually books appointments."
			}
		],
		bestFitIndustries: [
			"professional-services-iowa",
			"local-logistics-and-warehousing-iowa",
			"niche-ecommerce-iowa"
		],
		lastReviewed: "2026-05-04"
	}
];
PACKAGES.map((p) => p.slug);
function getPackageBySlug(slug) {
	return PACKAGES.find((p) => p.slug === slug);
}
//#endregion
//#region src/data/industries-catalog.ts
var INDUSTRIES = [
	{
		slug: "home-services-iowa",
		name: "Home Services in Iowa (HVAC, Plumbing, Roofing, Electrical)",
		decisionMaker: "Owner / Operations Manager",
		idealCompanySize: "$1M - $5M revenue, 5-20 technicians",
		bleedingNeck: "Missing after-hours calls and watching $5,000 jobs go to whoever picks up first; chaotic dispatch when calls overlap with crew workload.",
		hookOneLiner: "Capture every missed call, book the appointment, and stop losing jobs to whoever picked up the phone first.",
		productMatchSlugs: [
			"always-on-receptionist",
			"speed-to-lead-outbound",
			"hands-off-reviews",
			"invisible-admin"
		],
		crosshairSlugs: [
			"for-hvac-companies",
			"for-plumbers",
			"for-roofers",
			"for-home-services"
		],
		acquisitionChannel: "Direct video walkthrough, BNI groups, trade associations",
		faqs: [
			{
				question: "Do plumbers and HVAC companies actually lose jobs from missed calls?",
				answer: "Yes — and the data is brutal. The vast majority of customers who reach a voicemail will simply call the next contractor on the list rather than wait. For high-ticket emergency work, a single missed call routinely costs four-figure jobs."
			},
			{
				question: "Can the AI receptionist tell an emergency from a quote request?",
				answer: "Yes. We define what an emergency sounds like for your specific trade — water leak, gas smell, no heat in winter, roof storm damage — and those calls escalate to a live person on your team while routine quote requests get scheduled normally."
			},
			{
				question: "Will this work with ServiceTitan / Jobber / Housecall Pro?",
				answer: "Yes. We integrate appointments and customer records with the dispatch software you already use."
			},
			{
				question: "How does this help with my Google reviews?",
				answer: "Hands-Off Reviews calls your customer after the job is complete and routes happy customers to a Google review link — building review velocity for local SEO without your team chasing it."
			}
		],
		notableIowaCities: [
			"des-moines",
			"cedar-rapids",
			"davenport",
			"sioux-city",
			"iowa-city",
			"waterloo",
			"ames",
			"council-bluffs",
			"dubuque"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "professional-services-iowa",
		name: "Professional Services in Iowa (CPAs, Law Firms, Insurance)",
		decisionMaker: "Managing Partner / Founder",
		idealCompanySize: "$500k - $3M revenue, 3-15 staff",
		bleedingNeck: "Unbillable hours spent chasing clients for documents and signatures; new prospect calls go to voicemail during deep-work blocks.",
		hookOneLiner: "Stop billing yourself for chasing clients. Let the AI capture leads, book consults, and follow up automatically.",
		productMatchSlugs: [
			"always-on-receptionist",
			"24-7-web-concierge",
			"invisible-admin",
			"invisible-personal-assistant"
		],
		crosshairSlugs: ["for-cpa-firms", "for-law-firms"],
		acquisitionChannel: "LinkedIn outreach, association events, referral partners",
		faqs: [
			{
				question: "Will an AI receptionist sound professional enough for a law firm?",
				answer: "Yes. We script the greeting, the qualification questions, and the conflict-check intake to match how a professional intake coordinator would handle the call. Confidentiality is preserved and only routine intake is automated."
			},
			{
				question: "Can it screen out unqualified prospects before booking?",
				answer: "Absolutely. We define the conflict and qualification questions you would normally ask in a screening call, and the AI gathers them before any time gets booked."
			},
			{
				question: "Does this support intake for tax season volume spikes?",
				answer: "Yes — that is exactly when the system pays for itself. Volume scales without scaling staff."
			}
		],
		notableIowaCities: [
			"des-moines",
			"cedar-rapids",
			"iowa-city",
			"ames",
			"west-des-moines",
			"davenport"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "medspas-and-clinics-iowa",
		name: "MedSpas and Private Clinics in Iowa",
		decisionMaker: "Clinic Director / Owner",
		idealCompanySize: "$1M - $4M revenue",
		bleedingNeck: "High no-show rates on appointments; manual follow-ups eat staff time; consult requests sit in inbox until the lead has booked elsewhere.",
		hookOneLiner: "Sync your booking software with automated follow-up that kills no-shows and answers consult requests instantly.",
		productMatchSlugs: [
			"speed-to-lead-outbound",
			"invisible-personal-assistant",
			"invisible-admin",
			"hands-off-reviews"
		],
		crosshairSlugs: ["for-medspas"],
		acquisitionChannel: "Local ad agency partnerships, industry conferences",
		faqs: [
			{
				question: "Will this work with my booking software?",
				answer: "We integrate with most modern aesthetics and clinic booking platforms (Square Appointments, Boulevard, Aesthetic Record, Mindbody) so the AI books real available time."
			},
			{
				question: "Can it handle pre-treatment instructions?",
				answer: "Yes. The Invisible Admin sends the appointment-specific prep instructions automatically — fasting, no makeup, no blood thinners, whatever the procedure requires."
			},
			{
				question: "How do you reduce no-shows?",
				answer: "Confirmation immediately, day-before reminder, and a same-day check-in — all automated and tuned to the message format that drives the highest show-rate for your specific patient mix."
			}
		],
		notableIowaCities: [
			"des-moines",
			"west-des-moines",
			"ankeny",
			"urbandale",
			"cedar-rapids",
			"iowa-city",
			"davenport",
			"ames"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "local-logistics-and-warehousing-iowa",
		name: "Local Logistics and Warehousing in Iowa",
		decisionMaker: "General Manager / Owner",
		idealCompanySize: "$2M - $10M revenue",
		bleedingNeck: "Inventory counts do not match accounting. Manual Excel reporting eats hours. Customer service questions about shipments tie up the office.",
		hookOneLiner: "Connect your warehouse data to your books in real time and let an AI handle routine shipment questions.",
		productMatchSlugs: [
			"always-on-receptionist",
			"invisible-admin",
			"autonomous-salesman"
		],
		crosshairSlugs: [],
		acquisitionChannel: "Cold email, trade shows, industry publications",
		faqs: [{
			question: "Can this connect to QuickBooks?",
			answer: "Yes. We sync warehouse scanner data, dispatch records, and customer service activity with QuickBooks (and most major accounting tools)."
		}, {
			question: "Will an AI handle shipment status questions?",
			answer: "Yes. Routine 'where is my shipment' questions get answered without tying up your dispatcher, and exceptions escalate to a human."
		}],
		notableIowaCities: [
			"des-moines",
			"cedar-rapids",
			"davenport",
			"sioux-city",
			"council-bluffs",
			"waterloo"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "niche-ecommerce-iowa",
		name: "Niche E-Commerce and Local Retail in Iowa",
		decisionMaker: "Founder / E-commerce Director",
		idealCompanySize: "$1M - $5M revenue",
		bleedingNeck: "Over-ordering dead stock. Cannot calculate true ad-spend ROI. Customer service questions on Shopify, Instagram, and email never aggregate into one view.",
		hookOneLiner: "Get a single dashboard for daily profit across all platforms — and let an AI handle the support questions.",
		productMatchSlugs: [
			"24-7-web-concierge",
			"easy-crm",
			"invisible-admin",
			"autonomous-salesman"
		],
		crosshairSlugs: [],
		acquisitionChannel: "Cold email, e-commerce communities",
		faqs: [{
			question: "Does this connect to Shopify?",
			answer: "Yes. The 24/7 Web Concierge installs as a Shopify-friendly script and we sync customer activity into Easy CRM (or your CRM of choice)."
		}, {
			question: "Can this answer return and refund questions?",
			answer: "Yes — within the rules you set. Routine policy questions get answered automatically, edge cases route to your team."
		}],
		notableIowaCities: [
			"des-moines",
			"cedar-rapids",
			"iowa-city",
			"ames",
			"davenport"
		],
		lastReviewed: "2026-05-04"
	}
];
INDUSTRIES.map((i) => i.slug);
function getIndustryBySlug(slug) {
	return INDUSTRIES.find((i) => i.slug === slug);
}
//#endregion
//#region src/data/crosshairs-catalog.ts
/**
* Service x Industry crosshair pages — the highest commercial-intent pages
* in the network. These match queries like "answering service for plumbers"
* and "speed to lead software for medspas" that buyers actually type.
*
* `slug` is the sub-path under the parent service (e.g. "for-hvac-companies"
* lives at /services/always-on-receptionist/for-hvac-companies).
*
* Only build crosshairs that match real commercial intent. Do not generate
* the full 8x5 cross-product.
*/
var CROSSHAIRS = [
	{
		slug: "for-hvac-companies",
		serviceSlug: "always-on-receptionist",
		industrySlug: "home-services-iowa",
		h1: "What is the best AI answering service for HVAC companies?",
		answer: "An AI answering service for HVAC companies catches missed calls during furnace season, qualifies the homeowner, escalates true emergencies (no heat in winter, gas smell) to a live tech, and books routine service onto your dispatch software — so a $5,000 system replacement does not go to whichever competitor happened to pick up first.",
		industryPains: [
			"Furnace-season call volume spikes overwhelm office staff and crews on rooftops cannot pick up.",
			"Voicemail at 9 PM in January means the homeowner calls the next HVAC company on the list — with cash in hand.",
			"Dispatch chaos when emergency and routine calls collide."
		],
		uniqueAngle: "We script the AI to ask the same emergency-screening questions a senior dispatcher would — last temperature reading, furnace age, any odd smells, kids or elderly in the house — so emergencies escalate instantly and routine quote calls get booked normally.",
		faqs: [
			{
				question: "Will the AI know not to keep an emergency on hold for a quote?",
				answer: "Yes. We define your emergency keywords (no heat, water leak from boiler, gas smell, electrical sparks) and those calls bypass the qualification flow entirely and ring a tech directly."
			},
			{
				question: "Does this integrate with ServiceTitan or Housecall Pro?",
				answer: "Yes. Appointments and customer records sync into your existing dispatch software so the field crew sees the same record the AI took."
			},
			{
				question: "How does this handle storm-event call surges?",
				answer: "The AI scales to handle every concurrent call. There is no busy signal during a derecho or polar vortex — every caller gets answered."
			}
		],
		siblingCrosshairFullPaths: [
			"/services/always-on-receptionist/for-plumbers",
			"/services/always-on-receptionist/for-roofers",
			"/services/speed-to-lead-outbound/for-hvac-companies"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "for-plumbers",
		serviceSlug: "always-on-receptionist",
		industrySlug: "home-services-iowa",
		h1: "Do plumbers need an AI answering service?",
		answer: "Yes — most plumbing emergencies happen at the worst possible time (Friday night, holiday morning, 3 AM Tuesday) and homeowners with a flooding basement call until someone picks up. An AI answering service catches every one of those calls, escalates real emergencies to your on-call plumber, and books routine work on your dispatch software.",
		industryPains: [
			"After-hours flood calls go to whoever picks up first — and you are not it.",
			"Daytime calls get missed because the licensed plumber is under a sink.",
			"Voicemails are vague: you cannot tell a clogged sink from a burst pipe until you call back."
		],
		uniqueAngle: "Every call summary captures the address, the issue, the urgency, and any prior service history — so when your tech rolls the truck they already know what to bring.",
		faqs: [
			{
				question: "Can the AI dispatch an emergency truck?",
				answer: "It escalates the call to your on-call plumber's mobile within seconds and texts a structured summary so the plumber can decide whether to roll out — without playing voicemail roulette."
			},
			{
				question: "How is this different from a traditional answering service?",
				answer: "Traditional answering services take messages. The AI books appointments directly on your calendar, qualifies the call, and only wakes you up for actual emergencies."
			},
			{
				question: "Will it know our service area?",
				answer: "Yes. We define your service zip codes and the AI politely declines or refers calls outside your radius."
			}
		],
		siblingCrosshairFullPaths: [
			"/services/always-on-receptionist/for-hvac-companies",
			"/services/always-on-receptionist/for-roofers",
			"/services/speed-to-lead-outbound/for-hvac-companies"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "for-roofers",
		serviceSlug: "always-on-receptionist",
		industrySlug: "home-services-iowa",
		h1: "How should a roofing company handle storm-season call volume?",
		answer: "After a hailstorm or windstorm, roofing companies in Iowa get a year of phone calls in a week. An AI answering service handles every call concurrently, captures the address and damage description, schedules the inspection, and routes urgent tarp-call situations to a live crew — without busy signals or voicemail backlog.",
		industryPains: [
			"Storm-event call volume melts office staff for two weeks straight.",
			"Insurance-adjuster scheduling chaos when you have 200 inspections to book.",
			"Lead-stealing competitors call your missed callers an hour after the voicemail."
		],
		uniqueAngle: "We pre-script the storm-response intake — when did damage occur, what does the homeowner see, did they file a claim, who is the carrier — so by the time your sales rep calls back, the file is already populated.",
		faqs: [{
			question: "Can the AI handle insurance scheduling?",
			answer: "It captures the carrier, claim number, and adjuster contact — and books the inspection slot. Your team handles adjuster coordination from a complete file rather than a vague voicemail."
		}, {
			question: "What if the call is for a leak right now?",
			answer: "Active leaks escalate to a live person on your team while routine inspection requests are scheduled normally."
		}],
		siblingCrosshairFullPaths: [
			"/services/always-on-receptionist/for-hvac-companies",
			"/services/always-on-receptionist/for-plumbers",
			"/services/hands-off-reviews/for-home-services"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "for-medspas",
		serviceSlug: "always-on-receptionist",
		industrySlug: "medspas-and-clinics-iowa",
		h1: "Should a MedSpa have an AI receptionist for after-hours consults?",
		answer: "Yes. MedSpa consultation requests pile up on Instagram and missed calls every weekend. An AI receptionist answers the line in your clinic's voice, screens for fit (procedure, age, contraindications), and books the consult on your booking software — so a Monday-morning inbox is not full of leads who already booked elsewhere.",
		industryPains: [
			"Weekend and after-hours consult requests sit until Monday — by then the lead already booked at a competitor.",
			"Front-desk staff cannot answer the phone while doing patient intake.",
			"Pre-treatment screening questions get inconsistent results when handled ad hoc."
		],
		uniqueAngle: "Pre-treatment qualification — pregnancy, blood thinners, past procedures, contraindications — gets asked consistently every time, so the consult slot only gets booked when the patient actually qualifies.",
		faqs: [{
			question: "Will it handle questions about specific procedures?",
			answer: "Yes — within the FAQ library you approve. Specific medical advice is always routed to a clinician."
		}, {
			question: "Can it integrate with Boulevard or Aesthetic Record?",
			answer: "Yes. Bookings sync into your existing platform and treatment notes stay where they belong."
		}],
		siblingCrosshairFullPaths: ["/services/speed-to-lead-outbound/for-medspas", "/services/24-7-web-concierge/for-medspas"],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "for-cpa-firms",
		serviceSlug: "always-on-receptionist",
		industrySlug: "professional-services-iowa",
		h1: "Can an AI receptionist handle CPA firm intake during tax season?",
		answer: "Yes — and tax season is exactly when it pays for itself. The AI handles every prospect call concurrently, captures entity type, services needed, prior preparer, and rough revenue, and books the discovery call only after the prospect qualifies — so your senior CPAs spend their hours on returns, not screening calls.",
		industryPains: [
			"April-15 phone volume swallows the office.",
			"Junior staff get pulled off billable work to screen prospect calls.",
			"Discovery calls happen with prospects you would have disqualified upfront."
		],
		uniqueAngle: "Conflict-check questions, entity type, and rough scope all get captured upfront — so when a partner takes the call, it is a real introduction, not a screening session.",
		faqs: [{
			question: "Will it sound professional enough for our brand?",
			answer: "Yes. We script the greeting and tone in writing with you before going live, and we adjust based on real recorded calls."
		}, {
			question: "How do you handle confidential information?",
			answer: "We do not collect SSNs, account numbers, or financial detail in the intake call — those get gathered in a secure portal after the discovery call books."
		}],
		siblingCrosshairFullPaths: ["/services/24-7-web-concierge/for-cpa-firms", "/services/always-on-receptionist/for-medspas"],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "for-hvac-companies",
		serviceSlug: "speed-to-lead-outbound",
		industrySlug: "home-services-iowa",
		h1: "How fast should HVAC companies call back a website lead?",
		answer: "Inside one minute. Homeowners shopping for furnace or AC replacement frequently fill out 3-4 contractor forms in a single sitting, and the first call back almost always wins the appointment. Speed-to-Lead Outbound auto-dials the lead within sixty seconds and books the in-home estimate before they finish reading the second tab.",
		industryPains: [
			"Quote forms submitted at 7 PM go unanswered until the next business day.",
			"Homeowners contact 3-4 HVAC companies and hire whoever calls back first.",
			"Manual call-back queues drift to hours or days during peak season."
		],
		uniqueAngle: "Tied to the dispatch calendar — if a slot is open tomorrow afternoon, the AI books it during the same call, while the homeowner is still on your website looking at financing.",
		faqs: [{
			question: "Will leads be annoyed by an instant call?",
			answer: "No. People who just hit submit on a quote form expect contact — that is why they hit submit. The data consistently shows higher conversion when you call within minutes versus hours."
		}, {
			question: "What if my installers are booked solid for the week?",
			answer: "The AI books the next available slot and the homeowner's deposit holds it. You never lose the lead to lack of immediate availability."
		}],
		siblingCrosshairFullPaths: [
			"/services/always-on-receptionist/for-hvac-companies",
			"/services/speed-to-lead-outbound/for-roofers",
			"/services/speed-to-lead-outbound/for-medspas"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "for-medspas",
		serviceSlug: "speed-to-lead-outbound",
		industrySlug: "medspas-and-clinics-iowa",
		h1: "How do MedSpas convert website consult requests into booked appointments?",
		answer: "Speed wins. A consult request submitted at 9 PM that sits until Monday is mostly dead — the patient has scrolled five other clinic websites by then. Speed-to-Lead Outbound calls within sixty seconds, screens for procedure fit, and books the in-clinic consult while the patient is still on your booking page.",
		industryPains: [
			"Weekend consult forms cool off into Monday-morning ghosts.",
			"Patients shop multiple clinics in one Instagram session.",
			"Booking happens at the moment of intent — or it does not happen."
		],
		uniqueAngle: "The screening flow asks the questions a senior aesthetician would ask before time gets reserved — so consult slots fill with qualified patients, not lookie-loos.",
		faqs: [{
			question: "Will calling at 9 PM upset patients?",
			answer: "We respect quiet hours. The AI calls during the patient's reasonable contact window — usually inside the same evening if it is before 9 PM, otherwise first thing the next morning."
		}, {
			question: "What if the patient wants to think about it?",
			answer: "The AI sends pre-treatment information and a one-tap booking link, then follows up by text on a configurable cadence."
		}],
		siblingCrosshairFullPaths: [
			"/services/always-on-receptionist/for-medspas",
			"/services/24-7-web-concierge/for-medspas",
			"/services/speed-to-lead-outbound/for-hvac-companies"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "for-roofers",
		serviceSlug: "speed-to-lead-outbound",
		industrySlug: "home-services-iowa",
		h1: "How do roofing companies win storm-event leads before competitors?",
		answer: "Within minutes of a homeowner submitting a damage report, Speed-to-Lead Outbound calls them, captures the carrier and claim number, and books the inspection — usually before the storm-chaser door knockers have even arrived in the neighborhood.",
		industryPains: [
			"Door-knockers and lead-aggregators race you to every damaged roof.",
			"Hailstorm leads come in faster than your office can call them back.",
			"By the time you call back, the homeowner has signed with a competitor."
		],
		uniqueAngle: "Storm-season call cadence built in — the AI scales to handle 100 concurrent inbound calls and follows up with text-and-email sequences for any homeowner who could not pick up the first time.",
		faqs: [{
			question: "Can it work with my insurance-adjuster scheduling?",
			answer: "Yes. The AI captures carrier, claim number, and adjuster contact — your team handles the coordination from a complete file."
		}, {
			question: "How does this scale during a major storm event?",
			answer: "There is no human bottleneck. Volume spikes that would melt a 5-person office get handled the same way as a normal Tuesday."
		}],
		siblingCrosshairFullPaths: [
			"/services/always-on-receptionist/for-roofers",
			"/services/speed-to-lead-outbound/for-hvac-companies",
			"/services/hands-off-reviews/for-home-services"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "for-medspas",
		serviceSlug: "24-7-web-concierge",
		industrySlug: "medspas-and-clinics-iowa",
		h1: "Should a MedSpa website have an AI chat for after-hours questions?",
		answer: "Yes. Most MedSpa consult research happens between 9 PM and midnight on a phone, and visitors who would never call a clinic are happy to chat. An AI Web Concierge answers procedure questions, captures contact details, and books the consult on your booking software while the visitor is still on the page.",
		industryPains: [
			"Late-night Instagram scrollers leave your site without booking because nobody is around to answer.",
			"Patients have specific procedure questions and feel awkward calling for them.",
			"Form-only contact pages convert at a fraction of what they could."
		],
		uniqueAngle: "Procedure FAQs answered in your clinic's voice — recovery times, candidacy basics, pricing ranges — without committing to medical advice that should come from a clinician.",
		faqs: [{
			question: "Will the chat give medical advice?",
			answer: "No. We script the chat to answer general procedure information and explicitly route any clinical question to a consult with a licensed provider."
		}, {
			question: "Can it book directly to my booking software?",
			answer: "Yes. Boulevard, Aesthetic Record, Mindbody, Square Appointments, and most modern aesthetics platforms."
		}],
		siblingCrosshairFullPaths: ["/services/always-on-receptionist/for-medspas", "/services/speed-to-lead-outbound/for-medspas"],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "for-cpa-firms",
		serviceSlug: "24-7-web-concierge",
		industrySlug: "professional-services-iowa",
		h1: "Should a CPA firm have an AI chat on its website during tax season?",
		answer: "Yes. Tax-season prospects research at 11 PM, and the firm whose website actually answers their questions wins the discovery call. An AI Web Concierge fields entity-type and services questions, captures contact details, and books the discovery call directly — without partners needing to be online.",
		industryPains: [
			"Tax-season prospects research after the office closes.",
			"Forms-only contact pages lose leads who want a quick answer first.",
			"Partners cannot be on chat all day — and should not be."
		],
		uniqueAngle: "The chat collects the entity type, current preparer, and services needed before the discovery call books — so partners walk into a real introduction, not a screening session.",
		faqs: [{
			question: "Will it answer specific tax questions?",
			answer: "No — and intentionally so. Tax advice is licensed work. The chat answers process and engagement questions ('what does your discovery call look like') and routes specific advice to a CPA."
		}, {
			question: "Can it pre-screen for fit?",
			answer: "Yes. Entity type, services needed, rough revenue range, and prior preparer all get captured before the discovery call books."
		}],
		siblingCrosshairFullPaths: ["/services/always-on-receptionist/for-cpa-firms", "/services/24-7-web-concierge/for-medspas"],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "for-home-services",
		serviceSlug: "hands-off-reviews",
		industrySlug: "home-services-iowa",
		h1: "How do home-service businesses get more 5-star Google reviews?",
		answer: "Ask every customer, every time — automatically. Hands-Off Reviews calls or texts the customer after the job is marked complete in your CRM, asks how it went, and routes happy customers to a one-tap Google review link while routing unhappy customers to a private feedback path so problems can be fixed before they show up publicly.",
		industryPains: [
			"Asking for reviews feels awkward, so it gets done unevenly.",
			"Local-pack ranking depends on review velocity, and competitors are pulling ahead.",
			"Customers say great things in person but never type them on Google."
		],
		uniqueAngle: "Triggered by job completion in your dispatch software (ServiceTitan, Jobber, Housecall Pro) — so the request goes out at the optimal post-completion moment, not days later when memory has faded.",
		faqs: [{
			question: "Is this against Google's review policy?",
			answer: "No. Asking customers for reviews is explicitly allowed. What is not allowed is gating — preventing unhappy customers from leaving a public review. Our private-feedback path does not block the public review option for anyone."
		}, {
			question: "How many extra reviews can we expect per month?",
			answer: "It depends on how many jobs you complete per month. A typical 5-truck HVAC company sees a 5-10x increase in monthly review volume."
		}],
		siblingCrosshairFullPaths: [
			"/services/always-on-receptionist/for-hvac-companies",
			"/services/always-on-receptionist/for-roofers",
			"/services/speed-to-lead-outbound/for-roofers"
		],
		lastReviewed: "2026-05-04"
	},
	{
		slug: "for-manufacturing",
		serviceSlug: "autonomous-salesman",
		industrySlug: "local-logistics-and-warehousing-iowa",
		h1: "Can an AI sales agent run outbound for an Iowa manufacturer?",
		answer: "Yes. An AI sales agent works through prospect lists at scale — past customers, expired contracts, dormant accounts, and cold prospects from trade shows — and books qualified appointments while your human reps spend their hours on the appointments that already booked.",
		industryPains: [
			"Industrial sales reps spend the day leaving voicemails on dormant accounts.",
			"Trade-show lead lists go untouched until the next quarter.",
			"Reorder reminders for past customers fall through the cracks."
		],
		uniqueAngle: "Built for long sales cycles — the AI follows up across days and weeks with text and email mixed into the call cadence, so the eighth touch (the one that closes) actually happens.",
		faqs: [{
			question: "Will this sound like a robot calling our buyers?",
			answer: "No. Modern conversational AI handles industrial-buyer conversations without the give-away robotic cadence. Most prospects do not realize they are talking to AI unless they ask directly."
		}, {
			question: "Is this TCPA-compliant for B2B calling?",
			answer: "Yes. We follow TCPA and only call numbers you have a legitimate business basis to contact, with proper consent management."
		}],
		siblingCrosshairFullPaths: ["/services/speed-to-lead-outbound/for-hvac-companies", "/services/always-on-receptionist/for-cpa-firms"],
		lastReviewed: "2026-05-04"
	}
];
/** Returns the canonical full path for a crosshair (e.g. "/services/foo/for-bar"). */
function crosshairFullPath(c) {
	return `/services/${c.serviceSlug}/${c.slug}`;
}
function getCrosshair(serviceSlug, slug) {
	return CROSSHAIRS.find((c) => c.serviceSlug === serviceSlug && c.slug === slug);
}
//#endregion
//#region src/data/iowa/counties.ts
/**
* All 99 Iowa counties. Population figures are approximate based on US Census
* 2020 data and may be refreshed during the kill-criteria 90-day review.
*
* Region buckets (NW/NE/Central/SW/SE) are SceneShift internal groupings
* used to organize the /iowa hub. They do not match every state agency's
* regional definition — they exist for navigation and link-rail rotation.
*
* `neighboringCountySlugs` lists adjacent counties (border-touching). Used
* for the county-page interlink rail. Border counties may include fewer.
*
* `topCitySlugs` references slugs from `cities.ts` only. Counties without
* a 5,000+ population city in our indexable set show only the directory.
*/
var COUNTIES = [
	{
		slug: "polk",
		name: "Polk",
		seatCity: "Des Moines",
		population: 492401,
		region: "Central",
		neighboringCountySlugs: [
			"dallas",
			"warren",
			"madison",
			"story",
			"boone",
			"jasper"
		],
		topCitySlugs: [
			"des-moines",
			"west-des-moines",
			"ankeny",
			"urbandale",
			"johnston"
		],
		notableEmployers: ["Insurance and finance", "State government"],
		localBusinessCategories: [
			"Home services and trades",
			"MedSpas and clinics",
			"Professional services",
			"Property services"
		],
		regionalContext: "Iowa's most populous county, anchored by the state capital and a national insurance and finance corridor. Polk County small businesses compete in a dense, competitive market where response time and review velocity decide who wins the next job."
	},
	{
		slug: "linn",
		name: "Linn",
		seatCity: "Cedar Rapids",
		population: 230299,
		region: "Central",
		neighboringCountySlugs: [
			"benton",
			"buchanan",
			"delaware",
			"jones",
			"cedar",
			"johnson",
			"iowa"
		],
		topCitySlugs: ["cedar-rapids", "marion"],
		notableEmployers: [
			"Manufacturing",
			"Aerospace",
			"Food processing"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Manufacturing services",
			"MedSpas and dental",
			"Auto repair"
		],
		regionalContext: "Iowa's second-largest county and home to Cedar Rapids' manufacturing and aerospace base. Linn County trades and clinics serve a population spread across Cedar Rapids, Marion, and the rapidly growing eastern suburbs."
	},
	{
		slug: "scott",
		name: "Scott",
		seatCity: "Davenport",
		population: 174669,
		region: "SE",
		neighboringCountySlugs: [
			"clinton",
			"cedar",
			"muscatine"
		],
		topCitySlugs: ["davenport", "bettendorf"],
		notableEmployers: [
			"Healthcare",
			"Manufacturing",
			"Riverboat tourism"
		],
		localBusinessCategories: [
			"Home services and trades",
			"MedSpas and aesthetic clinics",
			"Manufacturing services",
			"Hospitality services"
		],
		regionalContext: "The Iowa side of the Quad Cities along the Mississippi River, with a manufacturing and healthcare economy. Scott County's mix of working-class Davenport and upscale Bettendorf creates distinct service-business markets within a single county."
	},
	{
		slug: "johnson",
		name: "Johnson",
		seatCity: "Iowa City",
		population: 152854,
		region: "SE",
		neighboringCountySlugs: [
			"linn",
			"cedar",
			"muscatine",
			"louisa",
			"washington",
			"iowa"
		],
		topCitySlugs: ["iowa-city", "coralville"],
		notableEmployers: ["University of Iowa", "Academic medical center"],
		localBusinessCategories: [
			"Professional services and CPA firms",
			"MedSpas and clinics",
			"Property management",
			"Restaurants and hospitality"
		],
		regionalContext: "A college-town economy built around the University of Iowa and UIHC, with high-density professional services and student-housing property management. Johnson County's service businesses operate around a 30,000-student academic calendar."
	},
	{
		slug: "black-hawk",
		name: "Black Hawk",
		seatCity: "Waterloo",
		population: 131228,
		region: "NE",
		neighboringCountySlugs: [
			"bremer",
			"buchanan",
			"benton",
			"tama",
			"grundy",
			"butler"
		],
		topCitySlugs: ["waterloo", "cedar-falls"],
		notableEmployers: [
			"John Deere",
			"Tyson Foods",
			"University of Northern Iowa"
		],
		localBusinessCategories: [
			"Industrial and manufacturing services",
			"Home services and trades",
			"Healthcare clinics",
			"Auto repair and dealerships"
		],
		regionalContext: "The Cedar Valley's industrial heart, shared between blue-collar Waterloo and college-town Cedar Falls. Black Hawk County trades work in the shadow of John Deere's massive Waterloo Works."
	},
	{
		slug: "story",
		name: "Story",
		seatCity: "Nevada",
		population: 98537,
		region: "Central",
		neighboringCountySlugs: [
			"hamilton",
			"hardin",
			"marshall",
			"jasper",
			"polk",
			"boone"
		],
		topCitySlugs: ["ames", "huxley"],
		notableEmployers: ["Iowa State University", "Mary Greeley Medical Center"],
		localBusinessCategories: [
			"Professional services",
			"Home services and trades",
			"MedSpas and clinics",
			"Property management"
		],
		regionalContext: "SceneShift's home county, anchored by Iowa State University in Ames and a network of small Story County towns — including Huxley, Slater, Nevada, and Story City — that share a tight-knit small-business community."
	},
	{
		slug: "dallas",
		name: "Dallas",
		seatCity: "Adel",
		population: 99678,
		region: "Central",
		neighboringCountySlugs: [
			"polk",
			"madison",
			"guthrie",
			"greene",
			"boone"
		],
		topCitySlugs: [],
		notableEmployers: ["Suburban growth", "Insurance and finance commuter base"],
		localBusinessCategories: [
			"Home services and trades",
			"Real estate",
			"Family clinics",
			"Restaurants and retail"
		],
		regionalContext: "Iowa's fastest-growing county for over a decade, Dallas County wraps Des Moines' western suburbs. New-construction subdivisions in Waukee, West Des Moines, and Grimes drive heavy demand for trades and family services."
	},
	{
		slug: "warren",
		name: "Warren",
		seatCity: "Indianola",
		population: 52403,
		region: "Central",
		neighboringCountySlugs: [
			"polk",
			"madison",
			"marion",
			"lucas",
			"clarke"
		],
		topCitySlugs: [],
		notableEmployers: ["Simpson College", "Des Moines commuter base"],
		localBusinessCategories: [
			"Home services and trades",
			"Real estate",
			"Family clinics"
		],
		regionalContext: "Just south of Polk County, Warren County combines Des Moines bedroom-community growth with Indianola's college-town center and the rural communities along the Des Moines River."
	},
	{
		slug: "boone",
		name: "Boone",
		seatCity: "Boone",
		population: 26491,
		region: "Central",
		neighboringCountySlugs: [
			"story",
			"dallas",
			"polk",
			"greene",
			"webster",
			"hamilton"
		],
		topCitySlugs: [],
		notableEmployers: ["Boone County Hospital", "Fareway Stores corporate"],
		localBusinessCategories: [
			"Home services",
			"Family clinics",
			"Auto repair"
		],
		regionalContext: "A Central Iowa county west of Story, anchored by the city of Boone (childhood home of Mamie Eisenhower) and Iowa Speedway country. Service businesses serve a mix of Boone-residents and Ames/Des Moines commuters."
	},
	{
		slug: "marshall",
		name: "Marshall",
		seatCity: "Marshalltown",
		population: 39369,
		region: "Central",
		neighboringCountySlugs: [
			"hardin",
			"tama",
			"poweshiek",
			"jasper",
			"story"
		],
		topCitySlugs: ["marshalltown"],
		notableEmployers: [
			"JBS USA",
			"Lennox Industries",
			"Emerson Process"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Manufacturing services",
			"Family healthcare"
		],
		regionalContext: "A Central Iowa manufacturing county recovering from a 2018 EF-3 tornado that hit downtown Marshalltown. Service businesses here have weathered storm rebuilding, JBS workforce shifts, and a tight regional labor market."
	},
	{
		slug: "jasper",
		name: "Jasper",
		seatCity: "Newton",
		population: 37425,
		region: "Central",
		neighboringCountySlugs: [
			"polk",
			"marshall",
			"poweshiek",
			"mahaska",
			"marion",
			"story"
		],
		topCitySlugs: [],
		notableEmployers: ["Iowa Speedway", "TPI Composites"],
		localBusinessCategories: [
			"Home services and trades",
			"Manufacturing services",
			"Auto repair"
		],
		regionalContext: "East of Polk County, Jasper County is Newton's manufacturing-and-motorsports country. Local trades support the Maytag-era housing stock and Newton's modern light-manufacturing tenants."
	},
	{
		slug: "madison",
		name: "Madison",
		seatCity: "Winterset",
		population: 16548,
		region: "Central",
		neighboringCountySlugs: [
			"polk",
			"dallas",
			"warren",
			"clarke",
			"union",
			"adair"
		],
		topCitySlugs: [],
		notableEmployers: ["Tourism (covered bridges)", "Des Moines commuter base"],
		localBusinessCategories: [
			"Home services",
			"Hospitality and tourism",
			"Real estate"
		],
		regionalContext: "Famous for the Bridges of Madison County and as John Wayne's birthplace. Madison County combines tourism, Des Moines bedroom-community growth, and a working agricultural base."
	},
	{
		slug: "hamilton",
		name: "Hamilton",
		seatCity: "Webster City",
		population: 14998,
		region: "Central",
		neighboringCountySlugs: [
			"webster",
			"humboldt",
			"wright",
			"hardin",
			"story",
			"boone"
		],
		topCitySlugs: [],
		notableEmployers: ["Van Diest Supply", "Webster City Hospital"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Auto repair"
		],
		regionalContext: "North of Story County, Hamilton County is a Central Iowa farming county anchored by Webster City — the former Electrolux town that rebuilt its local economy after a major plant closure."
	},
	{
		slug: "hardin",
		name: "Hardin",
		seatCity: "Eldora",
		population: 16846,
		region: "Central",
		neighboringCountySlugs: [
			"franklin",
			"butler",
			"grundy",
			"marshall",
			"story",
			"hamilton",
			"wright"
		],
		topCitySlugs: [],
		notableEmployers: ["Iowa State Training School (Eldora)", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Auto repair"
		],
		regionalContext: "A Central Iowa farming county along the Iowa River. Service businesses serve Eldora, Iowa Falls (a town of 5,000+ split across Hardin/Franklin), and the surrounding rural communities."
	},
	{
		slug: "grundy",
		name: "Grundy",
		seatCity: "Grundy Center",
		population: 12453,
		region: "NE",
		neighboringCountySlugs: [
			"butler",
			"black-hawk",
			"tama",
			"marshall",
			"hardin"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small farming county southwest of Waterloo. Grundy County small businesses operate alongside the Cedar Valley's larger commercial economy."
	},
	{
		slug: "tama",
		name: "Tama",
		seatCity: "Toledo",
		population: 17027,
		region: "Central",
		neighboringCountySlugs: [
			"benton",
			"iowa",
			"poweshiek",
			"marshall",
			"grundy",
			"black-hawk"
		],
		topCitySlugs: [],
		notableEmployers: ["Meskwaki Bingo Casino Hotel", "Iowa Premium beef"],
		localBusinessCategories: [
			"Home services",
			"Hospitality services",
			"Agricultural services"
		],
		regionalContext: "Home of the Sac and Fox (Meskwaki) Nation in central Iowa. The Meskwaki Casino is a major regional employer and the surrounding rural communities are served by a network of independent trades."
	},
	{
		slug: "poweshiek",
		name: "Poweshiek",
		seatCity: "Montezuma",
		population: 18504,
		region: "Central",
		neighboringCountySlugs: [
			"tama",
			"iowa",
			"keokuk",
			"mahaska",
			"jasper",
			"marshall"
		],
		topCitySlugs: [],
		notableEmployers: ["Grinnell College", "Brownells (firearms accessories)"],
		localBusinessCategories: [
			"Home services",
			"Professional services",
			"Light manufacturing"
		],
		regionalContext: "Home of Grinnell College and a county economy shaped by the college-town small businesses around it. Brownells, headquartered in Grinnell, is a national name with Iowa roots."
	},
	{
		slug: "marion",
		name: "Marion",
		seatCity: "Knoxville",
		population: 33309,
		region: "Central",
		neighboringCountySlugs: [
			"polk",
			"warren",
			"lucas",
			"monroe",
			"mahaska",
			"jasper"
		],
		topCitySlugs: [],
		notableEmployers: ["Pella Corporation", "Vermeer (Pella)"],
		localBusinessCategories: [
			"Home services and trades",
			"Manufacturing services",
			"Tourism services"
		],
		regionalContext: "Anchored by Pella's Dutch heritage and the Pella Corporation / Vermeer manufacturing base. Marion County combines manufacturing, tourism (Tulip Time), and a working agricultural economy."
	},
	{
		slug: "mahaska",
		name: "Mahaska",
		seatCity: "Oskaloosa",
		population: 22095,
		region: "Central",
		neighboringCountySlugs: [
			"marion",
			"poweshiek",
			"keokuk",
			"wapello",
			"monroe"
		],
		topCitySlugs: [],
		notableEmployers: ["Musco Lighting", "Pella manufacturing satellite"],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Family healthcare"
		],
		regionalContext: "A Central Iowa manufacturing and agricultural county, anchored by Oskaloosa and home to Musco Lighting (the global stadium-lighting company)."
	},
	{
		slug: "guthrie",
		name: "Guthrie",
		seatCity: "Guthrie Center",
		population: 10674,
		region: "Central",
		neighboringCountySlugs: [
			"dallas",
			"audubon",
			"adair",
			"cass",
			"carroll",
			"greene"
		],
		topCitySlugs: [],
		notableEmployers: ["Lake Panorama recreation", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Hospitality services",
			"Agricultural services"
		],
		regionalContext: "A small western-Central Iowa county along the South Raccoon River. Lake Panorama brings second-home demand for trades and recreation services."
	},
	{
		slug: "greene",
		name: "Greene",
		seatCity: "Jefferson",
		population: 8896,
		region: "Central",
		neighboringCountySlugs: [
			"webster",
			"boone",
			"dallas",
			"guthrie",
			"carroll",
			"calhoun"
		],
		topCitySlugs: [],
		notableEmployers: ["Wild Rose Casino (Jefferson)", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Hospitality services",
			"Agricultural services"
		],
		regionalContext: "A small central-Iowa farming county with Wild Rose Casino in Jefferson driving regional hospitality services."
	},
	{
		slug: "woodbury",
		name: "Woodbury",
		seatCity: "Sioux City",
		population: 105941,
		region: "NW",
		neighboringCountySlugs: [
			"plymouth",
			"ida",
			"monona",
			"cherokee"
		],
		topCitySlugs: ["sioux-city"],
		notableEmployers: [
			"Tyson Foods",
			"Smithfield Foods",
			"MercyOne Siouxland"
		],
		localBusinessCategories: [
			"Logistics services",
			"Home services and trades",
			"Healthcare clinics",
			"Agricultural services"
		],
		regionalContext: "Iowa's far-western anchor at the tri-state corner with Nebraska and South Dakota. Woodbury County's economy runs on meat processing, ag-logistics, and the trades that serve them."
	},
	{
		slug: "plymouth",
		name: "Plymouth",
		seatCity: "Le Mars",
		population: 25553,
		region: "NW",
		neighboringCountySlugs: [
			"sioux",
			"obrien",
			"cherokee",
			"woodbury"
		],
		topCitySlugs: [],
		notableEmployers: ["Wells Enterprises (Blue Bunny ice cream)", "Tyson"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Manufacturing services"
		],
		regionalContext: "Anchored by Le Mars — the self-styled Ice Cream Capital of the World, home to Wells Enterprises (Blue Bunny). Plymouth County's economy mixes ice-cream manufacturing with a strong farm-services base."
	},
	{
		slug: "sioux",
		name: "Sioux",
		seatCity: "Orange City",
		population: 35872,
		region: "NW",
		neighboringCountySlugs: [
			"lyon",
			"obrien",
			"plymouth"
		],
		topCitySlugs: [],
		notableEmployers: ["Northwestern College", "Diamond Vogel Paint"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Manufacturing services"
		],
		regionalContext: "A Northwest Iowa county with deep Dutch heritage centered on Orange City and Sioux Center. Northwestern College, Dordt University, and a strong dairy and pork sector shape the local business mix."
	},
	{
		slug: "lyon",
		name: "Lyon",
		seatCity: "Rock Rapids",
		population: 11581,
		region: "NW",
		neighboringCountySlugs: [
			"osceola",
			"obrien",
			"sioux"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "Iowa's far-northwest corner county, bordering Minnesota and South Dakota. Small farming communities served by independent trades."
	},
	{
		slug: "osceola",
		name: "Osceola",
		seatCity: "Sibley",
		population: 6014,
		region: "NW",
		neighboringCountySlugs: [
			"lyon",
			"dickinson",
			"obrien"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "One of Iowa's smallest counties by population, in the far Northwest along the Minnesota border."
	},
	{
		slug: "dickinson",
		name: "Dickinson",
		seatCity: "Spirit Lake",
		population: 17703,
		region: "NW",
		neighboringCountySlugs: [
			"osceola",
			"emmet",
			"clay",
			"obrien"
		],
		topCitySlugs: [],
		notableEmployers: ["Iowa Great Lakes tourism", "Polaris (Spirit Lake)"],
		localBusinessCategories: [
			"Home services",
			"Hospitality services",
			"Manufacturing services"
		],
		regionalContext: "The Iowa Great Lakes county — Spirit Lake and Okoboji draw lake-tourism dollars from across the Upper Midwest, supporting hospitality, marine services, and second-home trades."
	},
	{
		slug: "obrien",
		name: "O'Brien",
		seatCity: "Primghar",
		population: 13770,
		region: "NW",
		neighboringCountySlugs: [
			"osceola",
			"dickinson",
			"clay",
			"cherokee",
			"plymouth",
			"sioux",
			"lyon"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services", "Light manufacturing"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A Northwest Iowa farming county. Service businesses operate across multiple small towns rather than one regional hub."
	},
	{
		slug: "clay",
		name: "Clay",
		seatCity: "Spencer",
		population: 16229,
		region: "NW",
		neighboringCountySlugs: [
			"dickinson",
			"palo-alto",
			"buena-vista",
			"obrien"
		],
		topCitySlugs: [],
		notableEmployers: ["Clay County Fair tourism", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Hospitality services"
		],
		regionalContext: "Anchored by Spencer and the Clay County Fair (the largest county fair in the United States). Service businesses ramp up significantly during fair week."
	},
	{
		slug: "palo-alto",
		name: "Palo Alto",
		seatCity: "Emmetsburg",
		population: 9131,
		region: "NW",
		neighboringCountySlugs: [
			"emmet",
			"kossuth",
			"humboldt",
			"pocahontas",
			"clay"
		],
		topCitySlugs: [],
		notableEmployers: ["POET Biorefining", "Iowa Lakes Community College"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Manufacturing services"
		],
		regionalContext: "A Northwest farming county with Emmetsburg as the regional small-town hub. POET's biofuels facility brings light-industrial trades work."
	},
	{
		slug: "emmet",
		name: "Emmet",
		seatCity: "Estherville",
		population: 9226,
		region: "NW",
		neighboringCountySlugs: [
			"dickinson",
			"kossuth",
			"palo-alto"
		],
		topCitySlugs: [],
		notableEmployers: ["Iowa Lakes Community College", "Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small Northwest county on the Minnesota border. Estherville anchors regional services for the surrounding farming communities."
	},
	{
		slug: "kossuth",
		name: "Kossuth",
		seatCity: "Algona",
		population: 14813,
		region: "NW",
		neighboringCountySlugs: [
			"emmet",
			"winnebago",
			"hancock",
			"humboldt",
			"palo-alto"
		],
		topCitySlugs: [],
		notableEmployers: ["Algona Hospital", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Family healthcare"
		],
		regionalContext: "Iowa's largest county by area, in the north-central farming belt. Algona is the regional hub for trades, healthcare, and ag-services."
	},
	{
		slug: "humboldt",
		name: "Humboldt",
		seatCity: "Dakota City",
		population: 9542,
		region: "NW",
		neighboringCountySlugs: [
			"kossuth",
			"wright",
			"webster",
			"pocahontas",
			"palo-alto"
		],
		topCitySlugs: [],
		notableEmployers: ["Humboldt County Memorial Hospital", "Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small farming county in north-central Iowa. The city of Humboldt anchors trade-services for the surrounding rural communities."
	},
	{
		slug: "pocahontas",
		name: "Pocahontas",
		seatCity: "Pocahontas",
		population: 6757,
		region: "NW",
		neighboringCountySlugs: [
			"palo-alto",
			"humboldt",
			"calhoun",
			"sac",
			"buena-vista"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small Northwest Iowa farming county. Trade services operate across multiple small towns rather than one hub."
	},
	{
		slug: "buena-vista",
		name: "Buena Vista",
		seatCity: "Storm Lake",
		population: 19620,
		region: "NW",
		neighboringCountySlugs: [
			"clay",
			"pocahontas",
			"sac",
			"ida",
			"cherokee"
		],
		topCitySlugs: [],
		notableEmployers: ["Tyson Fresh Meats", "Buena Vista University"],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Agricultural services"
		],
		regionalContext: "Anchored by Storm Lake — a manufacturing town with an unusually diverse population for rural Iowa due to Tyson's workforce. Service businesses operate across language and cultural lines."
	},
	{
		slug: "sac",
		name: "Sac",
		seatCity: "Sac City",
		population: 9809,
		region: "NW",
		neighboringCountySlugs: [
			"buena-vista",
			"pocahontas",
			"calhoun",
			"carroll",
			"crawford",
			"ida"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small Northwest farming county. Sac City anchors regional services."
	},
	{
		slug: "ida",
		name: "Ida",
		seatCity: "Ida Grove",
		population: 7050,
		region: "NW",
		neighboringCountySlugs: [
			"cherokee",
			"buena-vista",
			"sac",
			"crawford",
			"monona",
			"woodbury"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small farming county between Sioux City and Storm Lake."
	},
	{
		slug: "cherokee",
		name: "Cherokee",
		seatCity: "Cherokee",
		population: 11185,
		region: "NW",
		neighboringCountySlugs: [
			"obrien",
			"buena-vista",
			"ida",
			"woodbury",
			"plymouth"
		],
		topCitySlugs: [],
		notableEmployers: ["Cherokee Mental Health Institute", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Healthcare services"
		],
		regionalContext: "A Northwest Iowa farming county anchored by the city of Cherokee."
	},
	{
		slug: "calhoun",
		name: "Calhoun",
		seatCity: "Rockwell City",
		population: 9668,
		region: "NW",
		neighboringCountySlugs: [
			"pocahontas",
			"humboldt",
			"webster",
			"greene",
			"carroll",
			"sac"
		],
		topCitySlugs: [],
		notableEmployers: ["Iowa Speedway region", "Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small farming county in north-central Iowa."
	},
	{
		slug: "carroll",
		name: "Carroll",
		seatCity: "Carroll",
		population: 20813,
		region: "NW",
		neighboringCountySlugs: [
			"sac",
			"calhoun",
			"greene",
			"guthrie",
			"audubon",
			"crawford"
		],
		topCitySlugs: [],
		notableEmployers: ["St. Anthony Regional Hospital", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Healthcare services",
			"Agricultural services"
		],
		regionalContext: "A western Iowa county anchored by the city of Carroll, with German Catholic heritage and a regional hospital serving multiple counties."
	},
	{
		slug: "crawford",
		name: "Crawford",
		seatCity: "Denison",
		population: 16654,
		region: "NW",
		neighboringCountySlugs: [
			"ida",
			"sac",
			"carroll",
			"shelby",
			"harrison",
			"monona"
		],
		topCitySlugs: [],
		notableEmployers: ["Smithfield (Denison)", "Tyson"],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Agricultural services"
		],
		regionalContext: "Anchored by Denison, a meat-processing town with a diverse multilingual workforce. Trade services operate across language barriers."
	},
	{
		slug: "monona",
		name: "Monona",
		seatCity: "Onawa",
		population: 8615,
		region: "NW",
		neighboringCountySlugs: [
			"woodbury",
			"ida",
			"crawford",
			"harrison"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A Missouri River farming county between Sioux City and Council Bluffs."
	},
	{
		slug: "dubuque",
		name: "Dubuque",
		seatCity: "Dubuque",
		population: 99266,
		region: "NE",
		neighboringCountySlugs: [
			"clayton",
			"delaware",
			"jones",
			"jackson"
		],
		topCitySlugs: ["dubuque"],
		notableEmployers: [
			"John Deere Dubuque Works",
			"MercyOne Dubuque",
			"Cottingham & Butler"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Manufacturing services",
			"Healthcare clinics",
			"Hospitality services"
		],
		regionalContext: "Iowa's oldest city anchors a Mississippi River economy of manufacturing, healthcare, and tourism. Dubuque County's tri-state position (Iowa, Wisconsin, Illinois) shapes a unique cross-border service-business market."
	},
	{
		slug: "cerro-gordo",
		name: "Cerro Gordo",
		seatCity: "Mason City",
		population: 42450,
		region: "NE",
		neighboringCountySlugs: [
			"worth",
			"mitchell",
			"floyd",
			"franklin",
			"hancock"
		],
		topCitySlugs: ["mason-city"],
		notableEmployers: [
			"MercyOne North Iowa",
			"Cargill",
			"Kraft Heinz"
		],
		localBusinessCategories: [
			"Home services",
			"Healthcare services",
			"Manufacturing services"
		],
		regionalContext: "North-central Iowa's regional hub. Mason City's healthcare and food-processing economy serves the surrounding agricultural counties."
	},
	{
		slug: "winneshiek",
		name: "Winneshiek",
		seatCity: "Decorah",
		population: 20336,
		region: "NE",
		neighboringCountySlugs: [
			"allamakee",
			"fayette",
			"chickasaw",
			"howard"
		],
		topCitySlugs: [],
		notableEmployers: ["Luther College", "Decorah Hospital"],
		localBusinessCategories: [
			"Home services",
			"Professional services",
			"Hospitality services"
		],
		regionalContext: "A Northeast Iowa county with Norwegian heritage centered on Decorah and Luther College, plus dramatic driftless-region geography that supports a tourism economy."
	},
	{
		slug: "allamakee",
		name: "Allamakee",
		seatCity: "Waukon",
		population: 13687,
		region: "NE",
		neighboringCountySlugs: ["winneshiek", "clayton"],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services", "Hospitality services"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Hospitality services"
		],
		regionalContext: "Iowa's far-northeast corner along the Mississippi, with driftless-region tourism and small-town agricultural communities."
	},
	{
		slug: "clayton",
		name: "Clayton",
		seatCity: "Elkader",
		population: 17549,
		region: "NE",
		neighboringCountySlugs: [
			"allamakee",
			"fayette",
			"delaware",
			"dubuque"
		],
		topCitySlugs: [],
		notableEmployers: ["Hospitality and tourism services"],
		localBusinessCategories: [
			"Home services",
			"Hospitality services",
			"Agricultural services"
		],
		regionalContext: "A scenic driftless-region county along the Mississippi, with significant river-town tourism in Guttenberg and McGregor."
	},
	{
		slug: "fayette",
		name: "Fayette",
		seatCity: "West Union",
		population: 19509,
		region: "NE",
		neighboringCountySlugs: [
			"winneshiek",
			"clayton",
			"delaware",
			"buchanan",
			"bremer",
			"chickasaw"
		],
		topCitySlugs: [],
		notableEmployers: ["Upper Iowa University (Fayette)"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A Northeast Iowa farming county with Upper Iowa University in Fayette and small-town communities served by independent trades."
	},
	{
		slug: "chickasaw",
		name: "Chickasaw",
		seatCity: "New Hampton",
		population: 11875,
		region: "NE",
		neighboringCountySlugs: [
			"howard",
			"winneshiek",
			"fayette",
			"bremer",
			"butler",
			"floyd"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A Northeast Iowa farming county. New Hampton anchors regional trade services."
	},
	{
		slug: "howard",
		name: "Howard",
		seatCity: "Cresco",
		population: 9437,
		region: "NE",
		neighboringCountySlugs: [
			"mitchell",
			"winneshiek",
			"chickasaw"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services", "Light manufacturing"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small Northeast Iowa county on the Minnesota border. Cresco anchors regional services."
	},
	{
		slug: "mitchell",
		name: "Mitchell",
		seatCity: "Osage",
		population: 10544,
		region: "NE",
		neighboringCountySlugs: [
			"worth",
			"howard",
			"floyd"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small Northeast Iowa farming county on the Minnesota border."
	},
	{
		slug: "worth",
		name: "Worth",
		seatCity: "Northwood",
		population: 7569,
		region: "NE",
		neighboringCountySlugs: [
			"winnebago",
			"mitchell",
			"cerro-gordo"
		],
		topCitySlugs: [],
		notableEmployers: ["Diamond Jo Casino (Northwood)"],
		localBusinessCategories: [
			"Home services",
			"Hospitality services",
			"Agricultural services"
		],
		regionalContext: "A small Northeast Iowa county on the Minnesota border, with Diamond Jo Casino driving regional hospitality services."
	},
	{
		slug: "winnebago",
		name: "Winnebago",
		seatCity: "Forest City",
		population: 10663,
		region: "NE",
		neighboringCountySlugs: [
			"worth",
			"kossuth",
			"hancock"
		],
		topCitySlugs: [],
		notableEmployers: ["Winnebago Industries"],
		localBusinessCategories: ["Home services", "Manufacturing services"],
		regionalContext: "Home of Winnebago Industries — the iconic motorhome manufacturer based in Forest City. Local trades support a manufacturing economy."
	},
	{
		slug: "hancock",
		name: "Hancock",
		seatCity: "Garner",
		population: 10630,
		region: "NE",
		neighboringCountySlugs: [
			"winnebago",
			"kossuth",
			"wright",
			"franklin",
			"cerro-gordo"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small north-central farming county."
	},
	{
		slug: "wright",
		name: "Wright",
		seatCity: "Clarion",
		population: 12562,
		region: "NE",
		neighboringCountySlugs: [
			"hancock",
			"kossuth",
			"humboldt",
			"hamilton",
			"franklin"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small north-central farming county. Clarion is the regional hub."
	},
	{
		slug: "franklin",
		name: "Franklin",
		seatCity: "Hampton",
		population: 10070,
		region: "NE",
		neighboringCountySlugs: [
			"wright",
			"cerro-gordo",
			"butler",
			"hardin"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small north-central farming county anchored by Hampton."
	},
	{
		slug: "butler",
		name: "Butler",
		seatCity: "Allison",
		population: 14439,
		region: "NE",
		neighboringCountySlugs: [
			"franklin",
			"floyd",
			"bremer",
			"black-hawk",
			"grundy",
			"hardin",
			"chickasaw"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services", "Cedar Valley commuter base"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A Northeast Iowa farming county adjacent to the Cedar Valley. Service businesses serve a mix of farm and Waterloo-Cedar Falls commuter populations."
	},
	{
		slug: "floyd",
		name: "Floyd",
		seatCity: "Charles City",
		population: 15589,
		region: "NE",
		neighboringCountySlugs: [
			"mitchell",
			"chickasaw",
			"butler",
			"cerro-gordo"
		],
		topCitySlugs: [],
		notableEmployers: ["Cambrex (pharmaceuticals)", "Floyd County Hospital"],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Healthcare services"
		],
		regionalContext: "A Northeast Iowa county anchored by Charles City, with a pharmaceutical manufacturing and farming base."
	},
	{
		slug: "bremer",
		name: "Bremer",
		seatCity: "Waverly",
		population: 25062,
		region: "NE",
		neighboringCountySlugs: [
			"chickasaw",
			"fayette",
			"buchanan",
			"black-hawk",
			"butler"
		],
		topCitySlugs: [],
		notableEmployers: ["Wartburg College", "CUNA Mutual Group (Waverly)"],
		localBusinessCategories: [
			"Home services",
			"Professional services",
			"Healthcare services"
		],
		regionalContext: "A Cedar Valley adjacent county anchored by Waverly and Wartburg College."
	},
	{
		slug: "buchanan",
		name: "Buchanan",
		seatCity: "Independence",
		population: 21175,
		region: "NE",
		neighboringCountySlugs: [
			"fayette",
			"delaware",
			"linn",
			"benton",
			"black-hawk",
			"bremer"
		],
		topCitySlugs: [],
		notableEmployers: ["Buchanan County Health Center", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Healthcare services"
		],
		regionalContext: "A Northeast Iowa county anchored by Independence, between the Cedar Valley and Cedar Rapids."
	},
	{
		slug: "delaware",
		name: "Delaware",
		seatCity: "Manchester",
		population: 17488,
		region: "NE",
		neighboringCountySlugs: [
			"fayette",
			"clayton",
			"dubuque",
			"jones",
			"linn",
			"buchanan"
		],
		topCitySlugs: [],
		notableEmployers: ["Henderson Products (Manchester)"],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Agricultural services"
		],
		regionalContext: "A Northeast Iowa county anchored by Manchester."
	},
	{
		slug: "jones",
		name: "Jones",
		seatCity: "Anamosa",
		population: 20583,
		region: "NE",
		neighboringCountySlugs: [
			"delaware",
			"dubuque",
			"jackson",
			"cedar",
			"linn"
		],
		topCitySlugs: [],
		notableEmployers: ["Anamosa State Penitentiary", "Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A Northeast Iowa county anchored by Anamosa, between Cedar Rapids and Dubuque."
	},
	{
		slug: "jackson",
		name: "Jackson",
		seatCity: "Maquoketa",
		population: 19290,
		region: "NE",
		neighboringCountySlugs: [
			"dubuque",
			"jones",
			"clinton"
		],
		topCitySlugs: [],
		notableEmployers: ["Maquoketa Caves tourism", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Hospitality services",
			"Agricultural services"
		],
		regionalContext: "A Mississippi River county anchored by Maquoketa, with Maquoketa Caves State Park drawing regional tourism."
	},
	{
		slug: "benton",
		name: "Benton",
		seatCity: "Vinton",
		population: 25229,
		region: "NE",
		neighboringCountySlugs: [
			"black-hawk",
			"buchanan",
			"linn",
			"iowa",
			"tama"
		],
		topCitySlugs: [],
		notableEmployers: ["Iowa Braille School (Vinton)"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A Northeast Iowa county anchored by Vinton, between the Cedar Valley and Cedar Rapids."
	},
	{
		slug: "iowa",
		name: "Iowa",
		seatCity: "Marengo",
		population: 16184,
		region: "Central",
		neighboringCountySlugs: [
			"benton",
			"linn",
			"johnson",
			"washington",
			"keokuk",
			"poweshiek",
			"tama"
		],
		topCitySlugs: [],
		notableEmployers: ["Amana Colonies tourism", "Whirlpool"],
		localBusinessCategories: [
			"Home services",
			"Hospitality services",
			"Manufacturing services"
		],
		regionalContext: "Home of the Amana Colonies — seven historic German-heritage villages drawing tourism and supporting a hospitality and craft economy."
	},
	{
		slug: "cedar",
		name: "Cedar",
		seatCity: "Tipton",
		population: 18452,
		region: "SE",
		neighboringCountySlugs: [
			"jones",
			"linn",
			"johnson",
			"muscatine",
			"scott",
			"clinton"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "An eastern Iowa farming county between Cedar Rapids and the Quad Cities."
	},
	{
		slug: "des-moines",
		name: "Des Moines",
		seatCity: "Burlington",
		population: 38910,
		region: "SE",
		neighboringCountySlugs: [
			"louisa",
			"henry",
			"lee"
		],
		topCitySlugs: ["burlington"],
		notableEmployers: [
			"Great River Health",
			"Case New Holland",
			"American Ordnance"
		],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Healthcare services"
		],
		regionalContext: "Not the city — Des Moines County (named for the river) is in southeast Iowa, anchored by Burlington on the Mississippi."
	},
	{
		slug: "lee",
		name: "Lee",
		seatCity: "Fort Madison & Keokuk",
		population: 33555,
		region: "SE",
		neighboringCountySlugs: [
			"des-moines",
			"henry",
			"van-buren"
		],
		topCitySlugs: [],
		notableEmployers: ["Iowa State Penitentiary (Fort Madison)", "Roquette America"],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Healthcare services"
		],
		regionalContext: "Iowa's southeastern corner along the Mississippi, with two county seats (Fort Madison and Keokuk) and a manufacturing economy."
	},
	{
		slug: "henry",
		name: "Henry",
		seatCity: "Mount Pleasant",
		population: 20144,
		region: "SE",
		neighboringCountySlugs: [
			"des-moines",
			"louisa",
			"washington",
			"jefferson",
			"van-buren",
			"lee"
		],
		topCitySlugs: [],
		notableEmployers: ["Iowa Wesleyan University", "Hearth & Home Technologies"],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Professional services"
		],
		regionalContext: "A southeast Iowa county anchored by Mount Pleasant."
	},
	{
		slug: "louisa",
		name: "Louisa",
		seatCity: "Wapello",
		population: 11077,
		region: "SE",
		neighboringCountySlugs: [
			"muscatine",
			"johnson",
			"washington",
			"henry",
			"des-moines"
		],
		topCitySlugs: [],
		notableEmployers: ["Tyson Foods (Columbus Junction)"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small Mississippi River farming county."
	},
	{
		slug: "muscatine",
		name: "Muscatine",
		seatCity: "Muscatine",
		population: 42664,
		region: "SE",
		neighboringCountySlugs: [
			"scott",
			"cedar",
			"johnson",
			"louisa"
		],
		topCitySlugs: ["muscatine"],
		notableEmployers: [
			"HNI Corporation",
			"Bandag",
			"Kent Corporation"
		],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Agricultural services"
		],
		regionalContext: "A Mississippi River manufacturing county anchored by the city of Muscatine, historically known as the Pearl Button Capital of the World."
	},
	{
		slug: "washington",
		name: "Washington",
		seatCity: "Washington",
		population: 21965,
		region: "SE",
		neighboringCountySlugs: [
			"johnson",
			"louisa",
			"henry",
			"jefferson",
			"keokuk",
			"iowa"
		],
		topCitySlugs: [],
		notableEmployers: ["Modine Manufacturing", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Agricultural services"
		],
		regionalContext: "A Southeast Iowa farming and manufacturing county."
	},
	{
		slug: "jefferson",
		name: "Jefferson",
		seatCity: "Fairfield",
		population: 17672,
		region: "SE",
		neighboringCountySlugs: [
			"washington",
			"henry",
			"van-buren",
			"davis",
			"wapello",
			"keokuk"
		],
		topCitySlugs: [],
		notableEmployers: ["Maharishi International University", "Cambridge Investment Research"],
		localBusinessCategories: [
			"Home services",
			"Professional services",
			"Wellness services"
		],
		regionalContext: "Fairfield is unusual in rural Iowa — Maharishi International University and a creative-class community shape an economy of professional services and wellness clinics."
	},
	{
		slug: "van-buren",
		name: "Van Buren",
		seatCity: "Keosauqua",
		population: 7204,
		region: "SE",
		neighboringCountySlugs: [
			"jefferson",
			"henry",
			"lee",
			"davis"
		],
		topCitySlugs: [],
		notableEmployers: ["Lake Sugema tourism", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Hospitality services",
			"Agricultural services"
		],
		regionalContext: "A small Southeast Iowa county along the Des Moines River, with Villages-of-Van-Buren tourism."
	},
	{
		slug: "davis",
		name: "Davis",
		seatCity: "Bloomfield",
		population: 8753,
		region: "SE",
		neighboringCountySlugs: [
			"wapello",
			"jefferson",
			"van-buren",
			"appanoose"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small Southeast Iowa county on the Missouri border, with a significant Amish community."
	},
	{
		slug: "wapello",
		name: "Wapello",
		seatCity: "Ottumwa",
		population: 35376,
		region: "SE",
		neighboringCountySlugs: [
			"mahaska",
			"keokuk",
			"jefferson",
			"davis",
			"appanoose",
			"monroe"
		],
		topCitySlugs: ["ottumwa"],
		notableEmployers: [
			"JBS Ottumwa",
			"Pinnacle Foods",
			"Ottumwa Regional Health"
		],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Healthcare services"
		],
		regionalContext: "Southeastern Iowa's regional hub on the Des Moines River, anchored by Ottumwa."
	},
	{
		slug: "keokuk",
		name: "Keokuk",
		seatCity: "Sigourney",
		population: 9908,
		region: "SE",
		neighboringCountySlugs: [
			"iowa",
			"washington",
			"jefferson",
			"wapello",
			"mahaska",
			"poweshiek"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small Southeast Iowa farming county (not to be confused with the city of Keokuk in Lee County)."
	},
	{
		slug: "monroe",
		name: "Monroe",
		seatCity: "Albia",
		population: 7682,
		region: "SE",
		neighboringCountySlugs: [
			"mahaska",
			"wapello",
			"appanoose",
			"lucas",
			"marion"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small Southeast Iowa county anchored by Albia."
	},
	{
		slug: "appanoose",
		name: "Appanoose",
		seatCity: "Centerville",
		population: 12426,
		region: "SE",
		neighboringCountySlugs: [
			"monroe",
			"wapello",
			"davis",
			"wayne",
			"lucas"
		],
		topCitySlugs: [],
		notableEmployers: ["Centerville Drive-In tourism", "Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small Southeast Iowa county on the Missouri border, anchored by Centerville."
	},
	{
		slug: "lucas",
		name: "Lucas",
		seatCity: "Chariton",
		population: 8479,
		region: "SE",
		neighboringCountySlugs: [
			"warren",
			"marion",
			"monroe",
			"appanoose",
			"wayne",
			"clarke"
		],
		topCitySlugs: [],
		notableEmployers: ["Hy-Vee distribution (historic)"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small Southeast Iowa county. Chariton was the original headquarters of Hy-Vee."
	},
	{
		slug: "wayne",
		name: "Wayne",
		seatCity: "Corydon",
		population: 6497,
		region: "SE",
		neighboringCountySlugs: [
			"lucas",
			"appanoose",
			"decatur"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small Southeast Iowa farming county on the Missouri border."
	},
	{
		slug: "decatur",
		name: "Decatur",
		seatCity: "Leon",
		population: 7702,
		region: "SE",
		neighboringCountySlugs: [
			"clarke",
			"wayne",
			"ringgold"
		],
		topCitySlugs: [],
		notableEmployers: ["Graceland University (Lamoni)"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small south-central farming county on the Missouri border, with Graceland University in Lamoni."
	},
	{
		slug: "clarke",
		name: "Clarke",
		seatCity: "Osceola",
		population: 9397,
		region: "SE",
		neighboringCountySlugs: [
			"warren",
			"madison",
			"union",
			"decatur",
			"wayne",
			"lucas"
		],
		topCitySlugs: [],
		notableEmployers: ["Hy-Vee distribution center", "Lakeside Casino"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Hospitality services"
		],
		regionalContext: "A small south-central Iowa county anchored by Osceola (not to be confused with the Northwest Iowa Osceola County)."
	},
	{
		slug: "clinton",
		name: "Clinton",
		seatCity: "Clinton",
		population: 46365,
		region: "SE",
		neighboringCountySlugs: [
			"jackson",
			"scott",
			"cedar"
		],
		topCitySlugs: ["clinton"],
		notableEmployers: [
			"ADM Clinton",
			"Nestlé Purina",
			"Mercy Medical Center - Clinton"
		],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Logistics services"
		],
		regionalContext: "A Mississippi River industrial county anchored by Clinton."
	},
	{
		slug: "pottawattamie",
		name: "Pottawattamie",
		seatCity: "Council Bluffs",
		population: 93474,
		region: "SW",
		neighboringCountySlugs: [
			"harrison",
			"shelby",
			"cass",
			"mills"
		],
		topCitySlugs: ["council-bluffs"],
		notableEmployers: [
			"Union Pacific Railroad",
			"Google data center",
			"MercyOne Council Bluffs"
		],
		localBusinessCategories: [
			"Logistics services",
			"Home services",
			"Healthcare services"
		],
		regionalContext: "Anchored by Council Bluffs across the Missouri River from Omaha. Pottawattamie's economy runs on rail logistics and the trades that serve a binational metro."
	},
	{
		slug: "webster",
		name: "Webster",
		seatCity: "Fort Dodge",
		population: 35904,
		region: "Central",
		neighboringCountySlugs: [
			"humboldt",
			"wright",
			"hamilton",
			"boone",
			"greene",
			"calhoun",
			"pocahontas"
		],
		topCitySlugs: ["fort-dodge"],
		notableEmployers: [
			"UnityPoint Trinity Regional",
			"Cargill",
			"CertainTeed"
		],
		localBusinessCategories: [
			"Home services",
			"Manufacturing services",
			"Healthcare services"
		],
		regionalContext: "North-central Iowa's regional hub anchored by Fort Dodge — a working-class manufacturing and ag-services town."
	},
	{
		slug: "shelby",
		name: "Shelby",
		seatCity: "Harlan",
		population: 11454,
		region: "SW",
		neighboringCountySlugs: [
			"crawford",
			"audubon",
			"cass",
			"pottawattamie",
			"harrison"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A southwest Iowa farming county anchored by Harlan."
	},
	{
		slug: "harrison",
		name: "Harrison",
		seatCity: "Logan",
		population: 14049,
		region: "SW",
		neighboringCountySlugs: [
			"monona",
			"crawford",
			"shelby",
			"pottawattamie"
		],
		topCitySlugs: [],
		notableEmployers: ["Loess Hills tourism", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Hospitality services",
			"Agricultural services"
		],
		regionalContext: "A Missouri River western Iowa county, with Loess Hills tourism and Missouri-Valley-region farming."
	},
	{
		slug: "mills",
		name: "Mills",
		seatCity: "Glenwood",
		population: 14951,
		region: "SW",
		neighboringCountySlugs: [
			"pottawattamie",
			"cass",
			"montgomery",
			"fremont"
		],
		topCitySlugs: [],
		notableEmployers: ["Glenwood Resource Center", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Healthcare services",
			"Agricultural services"
		],
		regionalContext: "A southwest Iowa county anchored by Glenwood, just south of Council Bluffs."
	},
	{
		slug: "fremont",
		name: "Fremont",
		seatCity: "Sidney",
		population: 6722,
		region: "SW",
		neighboringCountySlugs: ["mills", "page"],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "Iowa's far-southwest corner, on the Missouri-Nebraska border."
	},
	{
		slug: "page",
		name: "Page",
		seatCity: "Clarinda",
		population: 15008,
		region: "SW",
		neighboringCountySlugs: [
			"fremont",
			"mills",
			"montgomery",
			"taylor"
		],
		topCitySlugs: [],
		notableEmployers: ["Clarinda Academy"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A southwest Iowa farming county anchored by Clarinda."
	},
	{
		slug: "taylor",
		name: "Taylor",
		seatCity: "Bedford",
		population: 6121,
		region: "SW",
		neighboringCountySlugs: [
			"page",
			"adams",
			"ringgold"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small southwest Iowa farming county."
	},
	{
		slug: "ringgold",
		name: "Ringgold",
		seatCity: "Mount Ayr",
		population: 4663,
		region: "SW",
		neighboringCountySlugs: [
			"taylor",
			"union",
			"decatur",
			"adams"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "Iowa's least-populous county, in the south on the Missouri border."
	},
	{
		slug: "union",
		name: "Union",
		seatCity: "Creston",
		population: 11979,
		region: "SW",
		neighboringCountySlugs: [
			"adair",
			"madison",
			"clarke",
			"ringgold",
			"taylor",
			"adams"
		],
		topCitySlugs: [],
		notableEmployers: ["Southwestern Community College", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Healthcare services"
		],
		regionalContext: "A southwest Iowa county anchored by Creston."
	},
	{
		slug: "adams",
		name: "Adams",
		seatCity: "Corning",
		population: 3704,
		region: "SW",
		neighboringCountySlugs: [
			"cass",
			"adair",
			"union",
			"taylor",
			"page",
			"montgomery",
			"ringgold"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "Iowa's smallest county by population, anchored by Corning."
	},
	{
		slug: "adair",
		name: "Adair",
		seatCity: "Greenfield",
		population: 7496,
		region: "SW",
		neighboringCountySlugs: [
			"audubon",
			"guthrie",
			"dallas",
			"madison",
			"union",
			"adams",
			"cass"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A southwest Iowa farming county anchored by Greenfield."
	},
	{
		slug: "cass",
		name: "Cass",
		seatCity: "Atlantic",
		population: 13104,
		region: "SW",
		neighboringCountySlugs: [
			"audubon",
			"adair",
			"adams",
			"montgomery",
			"pottawattamie",
			"shelby"
		],
		topCitySlugs: [],
		notableEmployers: ["Cass County Memorial Hospital", "Agricultural services"],
		localBusinessCategories: [
			"Home services",
			"Agricultural services",
			"Healthcare services"
		],
		regionalContext: "A southwest Iowa farming county anchored by Atlantic."
	},
	{
		slug: "audubon",
		name: "Audubon",
		seatCity: "Audubon",
		population: 5496,
		region: "SW",
		neighboringCountySlugs: [
			"carroll",
			"guthrie",
			"adair",
			"cass",
			"shelby",
			"crawford"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small western Iowa farming county."
	},
	{
		slug: "montgomery",
		name: "Montgomery",
		seatCity: "Red Oak",
		population: 9917,
		region: "SW",
		neighboringCountySlugs: [
			"pottawattamie",
			"cass",
			"adams",
			"page",
			"mills"
		],
		topCitySlugs: [],
		notableEmployers: ["Agricultural services"],
		localBusinessCategories: ["Home services", "Agricultural services"],
		regionalContext: "A small southwest Iowa farming county anchored by Red Oak."
	}
];
COUNTIES.map((c) => c.slug);
function getCountyBySlug(slug) {
	return COUNTIES.find((c) => c.slug === slug);
}
function getCountiesByRegion(region) {
	return COUNTIES.filter((c) => c.region === region);
}
var IOWA_REGIONS = [
	"Central",
	"NW",
	"NE",
	"SE",
	"SW"
];
//#endregion
//#region src/data/iowa/cities.ts
/**
* Iowa city pages — top by population plus founder-defined featuredSmallTowns.
*
* Per the iowa-seo-aio-pages plan kill-criteria policy:
*  - Population-ranked cities ship `noindex, follow` initially. They are
*    crawled and contribute to internal linking, but do not dilute crawl
*    budget or quality signals. Promote to `index, follow` after they earn
*    Search Console impressions.
*  - `featuredSmallTowns` ship `index, follow` because they carry a real
*    E-E-A-T signal (founder local ties).
*
* To promote a city, flip its `indexable` flag to true and add to the
* change log in [documentation/seo-kill-criteria.md].
*/
var FEATURED_SMALL_TOWNS = ["huxley"];
/**
* Internal city records. The `indexable` flag below is the LAUNCH default —
* it gets overridden at export time so only `featuredSmallTowns` ship
* indexed. To manually promote a population-ranked city to indexed (after
* Search Console shows real impressions per the kill-criteria policy), add
* its slug to `MANUALLY_PROMOTED_CITIES` below.
*/
var MANUALLY_PROMOTED_CITIES = [];
/**
* Final exported city list with `indexable` derived from launch policy:
* featuredSmallTowns + manually-promoted cities ship indexed; everything
* else ships noindex,follow until promoted.
*/
var CITIES = [
	{
		slug: "des-moines",
		name: "Des Moines",
		countySlug: "polk",
		population: 214133,
		lat: 41.5868,
		lon: -93.625,
		intro: "Iowa's capital and largest city, anchored by the Iowa State Capitol and a downtown insurance and finance corridor that drives Polk County's economy.",
		anchorEmployers: [
			"Principal Financial Group",
			"Wells Fargo",
			"MercyOne Des Moines",
			"UnityPoint Health",
			"State of Iowa government"
		],
		localBusinessCategories: [
			"HVAC and home services",
			"Plumbing and electrical contractors",
			"Roofing and storm restoration",
			"MedSpas and aesthetic clinics",
			"CPA and law firms",
			"Auto dealerships and repair",
			"Salons and barbershops"
		],
		indexable: true
	},
	{
		slug: "cedar-rapids",
		name: "Cedar Rapids",
		countySlug: "linn",
		population: 137710,
		lat: 41.9779,
		lon: -91.6656,
		intro: "Iowa's second-largest city, often called the City of Five Seasons, with a manufacturing and food-processing base anchored by Quaker Oats, Collins Aerospace, and a strong cluster of independent contractors and trades.",
		anchorEmployers: [
			"Collins Aerospace",
			"Transamerica",
			"Quaker Oats / PepsiCo",
			"UnityPoint Health - St. Luke's",
			"Mercy Medical Center"
		],
		localBusinessCategories: [
			"Manufacturing services",
			"Home services and trades",
			"MedSpas and dental clinics",
			"Insurance and financial services",
			"Auto and truck repair"
		],
		indexable: true
	},
	{
		slug: "davenport",
		name: "Davenport",
		countySlug: "scott",
		population: 101724,
		lat: 41.5236,
		lon: -90.5776,
		intro: "The largest of the Quad Cities along the Mississippi River, with a riverfront economy that blends advanced manufacturing, healthcare, and a dense network of trades and home-service businesses.",
		anchorEmployers: [
			"Genesis Health System",
			"Arconic",
			"Tyson Foods",
			"John Deere (regional offices)"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Healthcare clinics and MedSpas",
			"Manufacturing services",
			"Real estate and property management"
		],
		indexable: true
	},
	{
		slug: "sioux-city",
		name: "Sioux City",
		countySlug: "woodbury",
		population: 85791,
		lat: 42.4999,
		lon: -96.4003,
		intro: "Western Iowa's hub at the Missouri River tri-state intersection, with a regional economy built on meat processing, agribusiness logistics, and the trades that serve them.",
		anchorEmployers: [
			"Tyson Foods",
			"Smithfield Foods",
			"MercyOne Siouxland",
			"UnityPoint Health - St. Luke's"
		],
		localBusinessCategories: [
			"Logistics and trucking services",
			"Home services and trades",
			"Agricultural services",
			"Healthcare and dental clinics"
		],
		indexable: true
	},
	{
		slug: "iowa-city",
		name: "Iowa City",
		countySlug: "johnson",
		population: 74828,
		lat: 41.6611,
		lon: -91.5302,
		intro: "Home of the University of Iowa and the UIHC academic medical center — a college town with a high-density professional services and clinic economy serving students, faculty, and the surrounding region.",
		anchorEmployers: [
			"University of Iowa",
			"UI Hospitals and Clinics",
			"ACT Inc",
			"Pearson"
		],
		localBusinessCategories: [
			"Professional services and CPA firms",
			"MedSpas and dental practices",
			"Property management",
			"Restaurants and hospitality",
			"Home services and trades"
		],
		indexable: true
	},
	{
		slug: "waterloo",
		name: "Waterloo",
		countySlug: "black-hawk",
		population: 67314,
		lat: 42.4928,
		lon: -92.3426,
		intro: "An industrial Cedar Valley city with deep manufacturing roots — John Deere's Waterloo Works is one of the largest tractor-assembly operations in the world.",
		anchorEmployers: [
			"John Deere",
			"Tyson Foods",
			"MercyOne Northeast Iowa",
			"UnityPoint Health - Allen Hospital"
		],
		localBusinessCategories: [
			"Industrial and manufacturing services",
			"Home services and trades",
			"Auto repair and dealerships",
			"Healthcare and family clinics"
		],
		indexable: true
	},
	{
		slug: "ames",
		name: "Ames",
		countySlug: "story",
		population: 66427,
		lat: 42.0308,
		lon: -93.6319,
		intro: "Home of Iowa State University and SceneShift's headquarters — a college town with a high concentration of professional services, technology businesses, and home-service trades serving Central Iowa.",
		anchorEmployers: [
			"Iowa State University",
			"Mary Greeley Medical Center",
			"Workiva",
			"Danfoss Power Solutions"
		],
		localBusinessCategories: [
			"Professional services",
			"Home services and trades",
			"MedSpas and clinics",
			"Property management for student housing",
			"Restaurants and retail"
		],
		indexable: true
	},
	{
		slug: "west-des-moines",
		name: "West Des Moines",
		countySlug: "polk",
		population: 68723,
		lat: 41.5772,
		lon: -93.7113,
		intro: "A fast-growing Des Moines suburb with high-income demographics, a major insurance and finance employment cluster, and a dense network of MedSpas, professional services, and home-service contractors.",
		anchorEmployers: [
			"Wells Fargo (regional)",
			"Hy-Vee corporate",
			"Athene",
			"FBL Financial Group"
		],
		localBusinessCategories: [
			"MedSpas and aesthetic clinics",
			"Professional services and CPA firms",
			"Home services and trades",
			"Real estate",
			"Restaurants and retail"
		],
		indexable: true
	},
	{
		slug: "council-bluffs",
		name: "Council Bluffs",
		countySlug: "pottawattamie",
		population: 62799,
		lat: 41.2619,
		lon: -95.8608,
		intro: "Across the Missouri River from Omaha, with a logistics and rail-served distribution economy alongside Iowa-side trades, casinos, and healthcare.",
		anchorEmployers: [
			"Union Pacific Railroad",
			"Google data center",
			"MercyOne Council Bluffs",
			"Methodist Jennie Edmundson Hospital"
		],
		localBusinessCategories: [
			"Logistics and warehousing",
			"Home services and trades",
			"Healthcare and family clinics",
			"Retail and hospitality"
		],
		indexable: true
	},
	{
		slug: "dubuque",
		name: "Dubuque",
		countySlug: "dubuque",
		population: 59667,
		lat: 42.5006,
		lon: -90.6648,
		intro: "Iowa's oldest city, on the Mississippi at the tri-state corner, with a manufacturing and tourism economy and a strong base of independent home-service businesses.",
		anchorEmployers: [
			"John Deere Dubuque Works",
			"MercyOne Dubuque",
			"UnityPoint Health - Finley Hospital",
			"Cottingham & Butler"
		],
		localBusinessCategories: [
			"Manufacturing services",
			"Home services and trades",
			"Healthcare and dental clinics",
			"Hospitality and tourism services"
		],
		indexable: true
	},
	{
		slug: "ankeny",
		name: "Ankeny",
		countySlug: "polk",
		population: 67887,
		lat: 41.7297,
		lon: -93.6058,
		intro: "One of Iowa's fastest-growing suburbs, just north of Des Moines, with new-construction neighborhoods that drive heavy demand for home-services trades, real estate, and family-oriented MedSpas and clinics.",
		anchorEmployers: [
			"John Deere Des Moines Works",
			"DMACC (community college)",
			"Casey's General Stores corporate"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Real estate and property services",
			"MedSpas and pediatric clinics",
			"Restaurants and family retail"
		],
		indexable: true
	},
	{
		slug: "urbandale",
		name: "Urbandale",
		countySlug: "polk",
		population: 45580,
		lat: 41.6266,
		lon: -93.7122,
		intro: "A close-in Des Moines suburb with a high-income demographic and a dense cluster of independent service businesses, professional services, and family healthcare.",
		anchorEmployers: [
			"FBL Financial Group",
			"Heartland Co-op",
			"Berkshire Hathaway Energy"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Professional services",
			"MedSpas and family clinics",
			"Auto repair and dealerships"
		],
		indexable: true
	},
	{
		slug: "cedar-falls",
		name: "Cedar Falls",
		countySlug: "black-hawk",
		population: 40713,
		lat: 42.5277,
		lon: -92.4453,
		intro: "Home of the University of Northern Iowa, sharing the Cedar Valley with neighboring Waterloo and supporting a college-town economy of professional services and trades.",
		anchorEmployers: [
			"University of Northern Iowa",
			"Target Distribution Center",
			"Western Home Communities"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Professional services",
			"Property management for student housing",
			"Healthcare and clinics"
		],
		indexable: true
	},
	{
		slug: "marion",
		name: "Marion",
		countySlug: "linn",
		population: 41535,
		lat: 42.0341,
		lon: -91.5969,
		intro: "An eastern Cedar Rapids suburb with rapid residential growth and a strong base of home-service contractors serving new-construction neighborhoods.",
		anchorEmployers: ["Marion Independent School District", "Linn-Mar Community Schools"],
		localBusinessCategories: [
			"Home services and trades",
			"Real estate and property services",
			"Family clinics and dental",
			"Restaurants and retail"
		],
		indexable: true
	},
	{
		slug: "bettendorf",
		name: "Bettendorf",
		countySlug: "scott",
		population: 39102,
		lat: 41.5236,
		lon: -90.5151,
		intro: "The Iowa side of the Quad Cities' upscale residential corridor, with a high-income demographic and concentrated demand for MedSpas, professional services, and home-service trades.",
		anchorEmployers: [
			"Genesis Medical Center Bettendorf",
			"Isle Casino Hotel",
			"Pleasant Valley schools"
		],
		localBusinessCategories: [
			"MedSpas and aesthetic clinics",
			"Professional services",
			"Home services and trades",
			"Hospitality and dining"
		],
		indexable: true
	},
	{
		slug: "mason-city",
		name: "Mason City",
		countySlug: "cerro-gordo",
		population: 27338,
		lat: 43.1536,
		lon: -93.2008,
		intro: "North-central Iowa's regional hub, with a healthcare and manufacturing economy and the surrounding agricultural communities that look to Mason City for trades and professional services.",
		anchorEmployers: [
			"MercyOne North Iowa Medical Center",
			"Cargill",
			"Kraft Heinz"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Healthcare and clinics",
			"Agricultural services",
			"Auto and equipment repair"
		],
		indexable: true
	},
	{
		slug: "marshalltown",
		name: "Marshalltown",
		countySlug: "marshall",
		population: 27591,
		lat: 42.0494,
		lon: -92.9079,
		intro: "A central-Iowa manufacturing town anchored by JBS Pork (formerly Swift) and a long history of light manufacturing, with a working-class home-services and trades economy.",
		anchorEmployers: [
			"JBS USA",
			"Lennox Industries",
			"Emerson Process Management",
			"Iowa Veterans Home"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Auto repair",
			"Manufacturing services",
			"Family healthcare"
		],
		indexable: true
	},
	{
		slug: "clinton",
		name: "Clinton",
		countySlug: "clinton",
		population: 24469,
		lat: 41.8444,
		lon: -90.1887,
		intro: "A Mississippi River industrial town with rail-served manufacturing and shipping logistics, plus a steady base of independent trades and home-service contractors.",
		anchorEmployers: [
			"ADM Clinton",
			"Nestlé Purina PetCare",
			"Mercy Medical Center - Clinton"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Manufacturing services",
			"Logistics services",
			"Family healthcare"
		],
		indexable: true
	},
	{
		slug: "burlington",
		name: "Burlington",
		countySlug: "des-moines",
		population: 23982,
		lat: 40.8076,
		lon: -91.1129,
		intro: "Southeastern Iowa's largest city, on the Mississippi at the Illinois border, with a manufacturing economy and a regional medical center serving the river towns south of the Quad Cities.",
		anchorEmployers: [
			"Great River Health System",
			"Case New Holland",
			"American Ordnance"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Healthcare and clinics",
			"Manufacturing services",
			"Auto repair"
		],
		indexable: true
	},
	{
		slug: "ottumwa",
		name: "Ottumwa",
		countySlug: "wapello",
		population: 25529,
		lat: 41.0203,
		lon: -92.4113,
		intro: "Southeastern Iowa's regional hub on the Des Moines River, with a meat-processing and manufacturing base and the surrounding rural counties looking to Ottumwa for trades and healthcare.",
		anchorEmployers: [
			"JBS Ottumwa",
			"Pinnacle Foods",
			"Ottumwa Regional Health Center"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Manufacturing services",
			"Healthcare clinics",
			"Auto and equipment repair"
		],
		indexable: true
	},
	{
		slug: "fort-dodge",
		name: "Fort Dodge",
		countySlug: "webster",
		population: 24168,
		lat: 42.5,
		lon: -94.1788,
		intro: "North-central Iowa's regional center for ag-services, gypsum mining, and meat processing, with a working-class trades and home-services economy.",
		anchorEmployers: [
			"UnityPoint Health - Trinity Regional",
			"Cargill Meat Solutions",
			"Koch Industries (CertainTeed)"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Agricultural services",
			"Manufacturing services",
			"Healthcare clinics"
		],
		indexable: true
	},
	{
		slug: "muscatine",
		name: "Muscatine",
		countySlug: "muscatine",
		population: 23797,
		lat: 41.4248,
		lon: -91.0432,
		intro: "A Mississippi River manufacturing town historically known as the Pearl Button Capital of the World, with a global manufacturing and ag-processing base.",
		anchorEmployers: [
			"HNI Corporation",
			"Bandag (Bridgestone)",
			"Kent Corporation",
			"Muscatine Power and Water"
		],
		localBusinessCategories: [
			"Home services and trades",
			"Manufacturing services",
			"Agricultural services",
			"Healthcare and dental"
		],
		indexable: true
	},
	{
		slug: "coralville",
		name: "Coralville",
		countySlug: "johnson",
		population: 22318,
		lat: 41.6764,
		lon: -91.5803,
		intro: "An Iowa City suburb with the Coralville Strip retail corridor and the Iowa River Landing development, supporting MedSpas, family clinics, and a college-town trades economy.",
		anchorEmployers: [
			"Iowa River Landing development",
			"ACT Inc (regional)",
			"Heartland Inn (hospitality)"
		],
		localBusinessCategories: [
			"MedSpas and aesthetic clinics",
			"Home services and trades",
			"Hospitality and dining",
			"Property management"
		],
		indexable: true
	},
	{
		slug: "johnston",
		name: "Johnston",
		countySlug: "polk",
		population: 24064,
		lat: 41.6722,
		lon: -93.6977,
		intro: "A growing Des Moines suburb with the Pioneer / Corteva agribusiness corporate campus and a high-income demographic driving demand for premium home services and aesthetic clinics.",
		anchorEmployers: ["Corteva Agriscience (Pioneer Hi-Bred)", "Iowa Public Television"],
		localBusinessCategories: [
			"Home services and trades",
			"MedSpas and aesthetic clinics",
			"Professional services",
			"Family healthcare"
		],
		indexable: true
	},
	{
		slug: "huxley",
		name: "Huxley",
		countySlug: "story",
		population: 3614,
		lat: 41.8908,
		lon: -93.6094,
		intro: "A small Story County town between Ames and Ankeny along the High Trestle Trail, with rapid residential growth driven by Des Moines and Ames commuters and a tight-knit small-business community.",
		anchorEmployers: ["Ballard Community Schools", "Story County Medical Center (regional)"],
		localBusinessCategories: [
			"Home services and trades",
			"Real estate and property services",
			"Family healthcare",
			"Local restaurants and retail"
		],
		indexable: true
	}
].map((c) => ({
	...c,
	indexable: FEATURED_SMALL_TOWNS.includes(c.slug) || MANUALLY_PROMOTED_CITIES.includes(c.slug)
}));
CITIES.map((c) => c.slug);
function getCityBySlug(slug) {
	return CITIES.find((c) => c.slug === slug);
}
/** Haversine distance in km between two lat/lon pairs. */
function distanceKm(a, b) {
	const toRad = (x) => x * Math.PI / 180;
	const R = 6371;
	const dLat = toRad(b.lat - a.lat);
	const dLon = toRad(b.lon - a.lon);
	const lat1 = toRad(a.lat);
	const lat2 = toRad(b.lat);
	const h = Math.sin(dLat / 2) ** 2 + Math.sin(dLon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
	return 2 * R * Math.asin(Math.sqrt(h));
}
/** Returns the N nearest sibling city slugs (excluding self). */
function getNearbyCitySlugs(slug, n = 4) {
	const self = getCityBySlug(slug);
	if (!self) return [];
	return CITIES.filter((c) => c.slug !== slug).map((c) => ({
		slug: c.slug,
		distance: distanceKm(self, c)
	})).sort((a, b) => a.distance - b.distance).slice(0, n).map((c) => c.slug);
}
//#endregion
//#region src/data/iowa/index.ts
/** All city slugs that live inside a given county. */
function getCitySlugsInCounty(countySlug) {
	return CITIES.filter((c) => c.countySlug === countySlug).map((c) => c.slug);
}
//#endregion
//#region src/data/seoMetadata.ts
/**
* Per-route metadata builders for the SceneShift SEO/AIO content network.
*
* Every new page type has a builder that returns a `RouteMetadata` record
* containing:
*   - the canonical path
*   - title and description (within length budgets)
*   - whether the page should be indexed
*   - a JSON-LD `@graph` array with the correct schema types
*
* This file is the single source of truth for what gets crawled and how
* structured data attaches to it. The build pipeline reads from here through
* a generated JSON snapshot at `scripts/data/route-metadata.json`.
*/
var ORG_ID = `${siteConfig.url}/#organization`;
var WEBSITE_ID = `${siteConfig.url}/#website`;
var PERSON_ID = `${siteConfig.url}/#founder`;
var LOCAL_BUSINESS_ID = `${siteConfig.url}/#localbusiness`;
function absoluteUrl$1(path) {
	return new URL(path, siteConfig.url).toString();
}
function organizationNode() {
	return {
		"@type": ["Organization", "ProfessionalService"],
		"@id": ORG_ID,
		name: siteConfig.name,
		url: siteConfig.url,
		email: siteConfig.primaryEmail,
		telephone: siteConfig.primaryPhoneHref,
		areaServed: siteConfig.areaServed,
		serviceType: [
			"AI CRM automation",
			"Lead response automation",
			"Sales follow-up systems",
			"Small business workflow automation"
		]
	};
}
function websiteNode() {
	return {
		"@type": "WebSite",
		"@id": WEBSITE_ID,
		name: siteConfig.name,
		url: siteConfig.url,
		publisher: { "@id": ORG_ID }
	};
}
function personNode() {
	const author = getPrimaryAuthor();
	return {
		"@type": "Person",
		"@id": PERSON_ID,
		name: author.name,
		jobTitle: author.jobTitle,
		description: author.bio,
		sameAs: author.sameAs,
		worksFor: { "@id": ORG_ID }
	};
}
/**
* Single-source LocalBusiness node. Lives only on the home page and the
* founder page. Per-page service entries use `areaServed` to extend reach
* without duplicating the LocalBusiness across hundreds of city pages.
*/
function localBusinessNode() {
	return {
		"@type": "LocalBusiness",
		"@id": LOCAL_BUSINESS_ID,
		name: siteConfig.name,
		url: siteConfig.url,
		email: siteConfig.primaryEmail,
		telephone: siteConfig.primaryPhoneHref,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Ames",
			addressRegion: "IA",
			addressCountry: "US"
		},
		areaServed: siteConfig.areaServed
	};
}
function breadcrumbList(items) {
	return {
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, idx) => ({
			"@type": "ListItem",
			position: idx + 1,
			name: item.name,
			item: item.url
		}))
	};
}
function faqPage(faqs) {
	return {
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer
			}
		}))
	};
}
function howToFromMechanism(name, mechanism) {
	return {
		"@type": "HowTo",
		name,
		step: mechanism.map((step, idx) => ({
			"@type": "HowToStep",
			position: idx + 1,
			name: step.name,
			text: step.text
		}))
	};
}
function qaPage(question, answer) {
	return {
		"@type": "QAPage",
		mainEntity: {
			"@type": "Question",
			name: question,
			acceptedAnswer: {
				"@type": "Answer",
				text: answer
			}
		}
	};
}
function citationsFromSources(sources) {
	if (!sources || sources.length === 0) return void 0;
	return sources.map((s) => ({
		"@type": "CreativeWork",
		name: s.label,
		url: s.url
	}));
}
function clip(s, max) {
	if (s.length <= max) return s;
	const cut = s.slice(0, max - 1);
	const lastSpace = cut.lastIndexOf(" ");
	return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + "...";
}
function buildServiceMeta(svc) {
	const path = `/services/${svc.slug}`;
	const url = absoluteUrl$1(path);
	const title = clip(`${svc.name} for Iowa Small Businesses | SceneShift`, 60);
	const description = clip(svc.hookOneLiner + " " + svc.outcomes[0], 158);
	const serviceNode = {
		"@type": "Service",
		"@id": `${url}#service`,
		name: svc.name,
		description: svc.hookOneLiner,
		provider: { "@id": ORG_ID },
		areaServed: siteConfig.areaServed,
		audience: {
			"@type": "BusinessAudience",
			audienceType: "Small business"
		},
		serviceType: svc.name,
		offers: {
			"@type": "Offer",
			availability: "https://schema.org/InStock",
			priceCurrency: "USD"
		},
		citation: citationsFromSources(svc.primarySources)
	};
	const webPage = {
		"@type": "WebPage",
		"@id": `${url}#webpage`,
		url,
		name: title,
		description,
		isPartOf: { "@id": WEBSITE_ID },
		about: { "@id": ORG_ID },
		primaryImageOfPage: void 0,
		dateModified: svc.lastReviewed,
		author: { "@id": PERSON_ID },
		inLanguage: "en-US",
		breadcrumb: breadcrumbList([
			{
				name: "Home",
				url: absoluteUrl$1("/")
			},
			{
				name: "Services",
				url: absoluteUrl$1("/services")
			},
			{
				name: svc.name,
				url
			}
		])
	};
	return {
		path,
		title,
		description,
		index: true,
		changefreq: "monthly",
		priority: .8,
		jsonLd: {
			"@context": "https://schema.org",
			"@graph": [
				organizationNode(),
				websiteNode(),
				personNode(),
				serviceNode,
				howToFromMechanism(`How ${svc.name} works`, svc.mechanism),
				qaPage(svc.h1, svc.answer),
				faqPage(svc.faqs),
				webPage
			]
		}
	};
}
function buildPackageMeta(pkg) {
	const path = `/packages/${pkg.slug}`;
	const url = absoluteUrl$1(path);
	const title = clip(`${pkg.name} | SceneShift AI Package`, 60);
	const description = clip(pkg.tagline, 158);
	const offerCatalog = {
		"@type": "OfferCatalog",
		name: pkg.name,
		itemListElement: pkg.includedServiceSlugs.map((slug) => {
			return {
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: SERVICES.find((s) => s.slug === slug)?.name ?? slug,
					url: absoluteUrl$1(`/services/${slug}`)
				}
			};
		})
	};
	const serviceNode = {
		"@type": "Service",
		"@id": `${url}#service`,
		name: pkg.name,
		description: pkg.tagline,
		provider: { "@id": ORG_ID },
		areaServed: siteConfig.areaServed,
		hasOfferCatalog: offerCatalog
	};
	const webPage = {
		"@type": "WebPage",
		"@id": `${url}#webpage`,
		url,
		name: title,
		description,
		isPartOf: { "@id": WEBSITE_ID },
		about: { "@id": ORG_ID },
		dateModified: pkg.lastReviewed,
		author: { "@id": PERSON_ID },
		inLanguage: "en-US",
		breadcrumb: breadcrumbList([
			{
				name: "Home",
				url: absoluteUrl$1("/")
			},
			{
				name: "Packages",
				url: absoluteUrl$1("/packages")
			},
			{
				name: pkg.name,
				url
			}
		])
	};
	return {
		path,
		title,
		description,
		index: true,
		changefreq: "monthly",
		priority: .9,
		jsonLd: {
			"@context": "https://schema.org",
			"@graph": [
				organizationNode(),
				websiteNode(),
				personNode(),
				serviceNode,
				faqPage(pkg.faqs),
				webPage
			]
		}
	};
}
function buildIndustryMeta(ind) {
	const path = `/industries/${ind.slug}`;
	const url = absoluteUrl$1(path);
	const title = clip(`${ind.name} | SceneShift`, 60);
	const description = clip(ind.hookOneLiner, 158);
	const serviceNode = {
		"@type": "Service",
		"@id": `${url}#service`,
		name: ind.name,
		description: ind.hookOneLiner,
		provider: { "@id": ORG_ID },
		areaServed: ["Iowa", "United States"],
		audience: {
			"@type": "BusinessAudience",
			audienceType: ind.decisionMaker
		}
	};
	const webPage = {
		"@type": "WebPage",
		"@id": `${url}#webpage`,
		url,
		name: title,
		description,
		isPartOf: { "@id": WEBSITE_ID },
		about: { "@id": ORG_ID },
		dateModified: ind.lastReviewed,
		author: { "@id": PERSON_ID },
		inLanguage: "en-US",
		breadcrumb: breadcrumbList([
			{
				name: "Home",
				url: absoluteUrl$1("/")
			},
			{
				name: "Industries",
				url: absoluteUrl$1("/industries")
			},
			{
				name: ind.name,
				url
			}
		])
	};
	return {
		path,
		title,
		description,
		index: true,
		changefreq: "monthly",
		priority: .7,
		jsonLd: {
			"@context": "https://schema.org",
			"@graph": [
				organizationNode(),
				websiteNode(),
				personNode(),
				serviceNode,
				faqPage(ind.faqs),
				webPage
			]
		}
	};
}
function buildCrosshairMeta(c) {
	const svc = SERVICES.find((s) => s.slug === c.serviceSlug);
	const ind = INDUSTRIES.find((i) => i.slug === c.industrySlug);
	if (!svc || !ind) throw new Error(`Crosshair ${c.serviceSlug}/${c.slug} references unknown service or industry`);
	const path = crosshairFullPath(c);
	const url = absoluteUrl$1(path);
	const title = clip(`${svc.name} ${c.slug.replace(/-/g, " ")} | SceneShift`, 60);
	const description = clip(c.answer, 158);
	const serviceNode = {
		"@type": "Service",
		"@id": `${url}#service`,
		name: `${svc.name} ${c.slug.replace(/-/g, " ")}`,
		description: c.answer,
		provider: { "@id": ORG_ID },
		areaServed: siteConfig.areaServed,
		audience: {
			"@type": "BusinessAudience",
			audienceType: ind.decisionMaker
		},
		serviceType: svc.name
	};
	const webPage = {
		"@type": "WebPage",
		"@id": `${url}#webpage`,
		url,
		name: title,
		description,
		isPartOf: { "@id": WEBSITE_ID },
		about: { "@id": ORG_ID },
		dateModified: c.lastReviewed,
		author: { "@id": PERSON_ID },
		inLanguage: "en-US",
		breadcrumb: breadcrumbList([
			{
				name: "Home",
				url: absoluteUrl$1("/")
			},
			{
				name: "Services",
				url: absoluteUrl$1("/services")
			},
			{
				name: svc.name,
				url: absoluteUrl$1(`/services/${svc.slug}`)
			},
			{
				name: c.h1,
				url
			}
		])
	};
	return {
		path,
		title,
		description,
		index: true,
		changefreq: "monthly",
		priority: .85,
		jsonLd: {
			"@context": "https://schema.org",
			"@graph": [
				organizationNode(),
				websiteNode(),
				personNode(),
				serviceNode,
				qaPage(c.h1, c.answer),
				faqPage(c.faqs),
				webPage
			]
		}
	};
}
function buildCountyMeta(co) {
	const path = `/iowa/counties/${co.slug}`;
	const url = absoluteUrl$1(path);
	const title = clip(`Small Business AI Automation in ${co.name} County, Iowa | SceneShift`, 60);
	const description = clip(`${co.name} County small businesses use SceneShift to capture missed calls, respond faster to web leads, and automate follow-up. Serving ${co.seatCity} and surrounding communities.`, 158);
	const serviceNode = {
		"@type": "Service",
		"@id": `${url}#service`,
		name: `Small business AI automation in ${co.name} County, Iowa`,
		description,
		provider: { "@id": ORG_ID },
		areaServed: {
			"@type": "AdministrativeArea",
			name: `${co.name} County, Iowa`,
			containedInPlace: {
				"@type": "State",
				name: "Iowa"
			}
		},
		audience: {
			"@type": "BusinessAudience",
			audienceType: "Small business"
		}
	};
	const webPage = {
		"@type": "WebPage",
		"@id": `${url}#webpage`,
		url,
		name: title,
		description,
		isPartOf: { "@id": WEBSITE_ID },
		about: { "@id": ORG_ID },
		dateModified: "2026-05-04",
		author: { "@id": PERSON_ID },
		inLanguage: "en-US",
		breadcrumb: breadcrumbList([
			{
				name: "Home",
				url: absoluteUrl$1("/")
			},
			{
				name: "Iowa",
				url: absoluteUrl$1("/iowa")
			},
			{
				name: `${co.name} County`,
				url
			}
		])
	};
	return {
		path,
		title,
		description,
		index: true,
		changefreq: "monthly",
		priority: .5,
		jsonLd: {
			"@context": "https://schema.org",
			"@graph": [
				organizationNode(),
				websiteNode(),
				personNode(),
				serviceNode,
				webPage
			]
		}
	};
}
function buildCityMeta(city) {
	const path = `/iowa/cities/${city.slug}`;
	const url = absoluteUrl$1(path);
	const county = COUNTIES.find((c) => c.slug === city.countySlug);
	const title = clip(`Small Business AI Automation in ${city.name}, Iowa | SceneShift`, 60);
	const description = clip(`${city.name} small businesses use SceneShift to capture missed calls and respond faster to web leads. ${city.intro}`, 158);
	const serviceNode = {
		"@type": "Service",
		"@id": `${url}#service`,
		name: `Small business AI automation in ${city.name}, Iowa`,
		description,
		provider: { "@id": ORG_ID },
		areaServed: {
			"@type": "City",
			name: city.name,
			geo: {
				"@type": "GeoCoordinates",
				latitude: city.lat,
				longitude: city.lon
			},
			containedInPlace: county ? {
				"@type": "AdministrativeArea",
				name: `${county.name} County, Iowa`,
				containedInPlace: {
					"@type": "State",
					name: "Iowa"
				}
			} : {
				"@type": "State",
				name: "Iowa"
			}
		},
		audience: {
			"@type": "BusinessAudience",
			audienceType: "Small business"
		}
	};
	const webPage = {
		"@type": "WebPage",
		"@id": `${url}#webpage`,
		url,
		name: title,
		description,
		isPartOf: { "@id": WEBSITE_ID },
		about: { "@id": ORG_ID },
		dateModified: "2026-05-04",
		author: { "@id": PERSON_ID },
		inLanguage: "en-US",
		breadcrumb: breadcrumbList([
			{
				name: "Home",
				url: absoluteUrl$1("/")
			},
			{
				name: "Iowa",
				url: absoluteUrl$1("/iowa")
			},
			...county ? [{
				name: `${county.name} County`,
				url: absoluteUrl$1(`/iowa/counties/${county.slug}`)
			}] : [],
			{
				name: city.name,
				url
			}
		])
	};
	return {
		path,
		title,
		description,
		index: city.indexable,
		changefreq: "monthly",
		priority: city.indexable ? .5 : .3,
		jsonLd: {
			"@context": "https://schema.org",
			"@graph": [
				organizationNode(),
				websiteNode(),
				personNode(),
				serviceNode,
				webPage
			]
		}
	};
}
function buildServicesHubMeta() {
	const path = "/services";
	const url = absoluteUrl$1(path);
	const title = "AI Services for Iowa Small Businesses | SceneShift";
	const description = "AI services that capture missed calls, answer chat 24/7, qualify leads in 60 seconds, book appointments, and earn 5-star reviews for Iowa small businesses.";
	return {
		path,
		title,
		description,
		index: true,
		changefreq: "weekly",
		priority: .9,
		jsonLd: {
			"@context": "https://schema.org",
			"@graph": [
				organizationNode(),
				websiteNode(),
				personNode(),
				{
					"@type": "CollectionPage",
					"@id": `${url}#webpage`,
					url,
					name: title,
					description,
					isPartOf: { "@id": WEBSITE_ID },
					author: { "@id": PERSON_ID },
					inLanguage: "en-US",
					breadcrumb: breadcrumbList([{
						name: "Home",
						url: absoluteUrl$1("/")
					}, {
						name: "Services",
						url
					}]),
					hasPart: SERVICES.map((s) => ({
						"@type": "Service",
						name: s.name,
						url: absoluteUrl$1(`/services/${s.slug}`)
					}))
				}
			]
		}
	};
}
function buildPackagesHubMeta() {
	const path = "/packages";
	const url = absoluteUrl$1(path);
	const title = "AI Automation Packages for Iowa Small Businesses | SceneShift";
	const description = "Compare SceneShift packages: Main Street Startup ($299/mo), Always-On Capture ($599/mo), and Autonomous Sales Floor ($999/mo). Built for Iowa small businesses.";
	return {
		path,
		title,
		description,
		index: true,
		changefreq: "weekly",
		priority: .9,
		jsonLd: {
			"@context": "https://schema.org",
			"@graph": [
				organizationNode(),
				websiteNode(),
				personNode(),
				{
					"@type": "CollectionPage",
					"@id": `${url}#webpage`,
					url,
					name: title,
					description,
					isPartOf: { "@id": WEBSITE_ID },
					inLanguage: "en-US",
					breadcrumb: breadcrumbList([{
						name: "Home",
						url: absoluteUrl$1("/")
					}, {
						name: "Packages",
						url
					}])
				}
			]
		}
	};
}
function buildIndustriesHubMeta() {
	const path = "/industries";
	const url = absoluteUrl$1(path);
	const title = "Industries We Serve in Iowa | SceneShift";
	const description = "SceneShift AI automation for Iowa home-services, professional services, MedSpas, local logistics, and niche e-commerce — translated into each industry's real workflow.";
	return {
		path,
		title,
		description,
		index: true,
		changefreq: "monthly",
		priority: .7,
		jsonLd: {
			"@context": "https://schema.org",
			"@graph": [
				organizationNode(),
				websiteNode(),
				personNode(),
				{
					"@type": "CollectionPage",
					"@id": `${url}#webpage`,
					url,
					name: title,
					description,
					isPartOf: { "@id": WEBSITE_ID },
					inLanguage: "en-US",
					breadcrumb: breadcrumbList([{
						name: "Home",
						url: absoluteUrl$1("/")
					}, {
						name: "Industries",
						url
					}])
				}
			]
		}
	};
}
function buildIowaHubMeta() {
	const path = "/iowa";
	const url = absoluteUrl$1(path);
	const title = "Iowa Small Business AI Automation by County | SceneShift";
	const description = "AI automation for small businesses in all 99 Iowa counties and major cities. Capture missed calls, answer chat, follow up automatically — and stay easy to choose.";
	return {
		path,
		title,
		description,
		index: true,
		changefreq: "monthly",
		priority: .6,
		jsonLd: {
			"@context": "https://schema.org",
			"@graph": [
				organizationNode(),
				websiteNode(),
				personNode(),
				{
					"@type": "CollectionPage",
					"@id": `${url}#webpage`,
					url,
					name: title,
					description,
					isPartOf: { "@id": WEBSITE_ID },
					inLanguage: "en-US",
					breadcrumb: breadcrumbList([{
						name: "Home",
						url: absoluteUrl$1("/")
					}, {
						name: "Iowa",
						url
					}])
				}
			]
		}
	};
}
function buildFounderMeta() {
	const path = "/about/founder";
	const url = absoluteUrl$1(path);
	const title = "About the Founder | SceneShift Iowa";
	const description = "SceneShift was started in Ames, Iowa to help small businesses respond faster, follow up consistently, and stay easy to choose against larger competitors.";
	return {
		path,
		title,
		description,
		index: true,
		changefreq: "yearly",
		priority: .5,
		jsonLd: {
			"@context": "https://schema.org",
			"@graph": [
				organizationNode(),
				websiteNode(),
				localBusinessNode(),
				personNode(),
				{
					"@type": "AboutPage",
					"@id": `${url}#webpage`,
					url,
					name: title,
					description,
					isPartOf: { "@id": WEBSITE_ID },
					mainEntity: { "@id": PERSON_ID },
					breadcrumb: breadcrumbList([
						{
							name: "Home",
							url: absoluteUrl$1("/")
						},
						{
							name: "About",
							url: absoluteUrl$1("/about-us")
						},
						{
							name: "Founder",
							url
						}
					])
				}
			]
		}
	};
}
function buildEditorialPolicyMeta() {
	const path = "/about/editorial-policy";
	const url = absoluteUrl$1(path);
	const title = "SceneShift Editorial Policy | Iowa AI Automation";
	const description = "How SceneShift writes, reviews, and updates the AI automation guidance published on this site. Sources, review cadence, and corrections process.";
	return {
		path,
		title,
		description,
		index: true,
		changefreq: "yearly",
		priority: .4,
		jsonLd: {
			"@context": "https://schema.org",
			"@graph": [
				organizationNode(),
				websiteNode(),
				personNode(),
				{
					"@type": "AboutPage",
					"@id": `${url}#webpage`,
					url,
					name: title,
					description,
					isPartOf: { "@id": WEBSITE_ID },
					breadcrumb: breadcrumbList([
						{
							name: "Home",
							url: absoluteUrl$1("/")
						},
						{
							name: "About",
							url: absoluteUrl$1("/about-us")
						},
						{
							name: "Editorial policy",
							url
						}
					])
				}
			]
		}
	};
}
//#endregion
//#region src/utils/seoHead.ts
/**
* Runtime helper used by SEO page components to set <head> metadata when the
* route is reached via SPA navigation (build-time prerender already injects
* the same tags into static HTML). Mirror of [src/data/pages.ts]'s
* `getPageMetadata` but consumes a `RouteMetadata` from
* [src/data/seoMetadata.ts].
*/
function upsertMetaName(name, content) {
	let el = document.head.querySelector(`meta[name="${name}"]`);
	if (!el) {
		el = document.createElement("meta");
		el.name = name;
		document.head.appendChild(el);
	}
	el.content = content;
}
function upsertMetaProperty(property, content) {
	let el = document.head.querySelector(`meta[property="${property}"]`);
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute("property", property);
		document.head.appendChild(el);
	}
	el.content = content;
}
function upsertLink(rel, href) {
	let el = document.head.querySelector(`link[rel="${rel}"]`);
	if (!el) {
		el = document.createElement("link");
		el.rel = rel;
		document.head.appendChild(el);
	}
	el.href = href;
}
function setJsonLd(value) {
	let el = document.getElementById("seo-json-ld");
	if (!el) {
		el = document.createElement("script");
		el.type = "application/ld+json";
		el.id = "seo-json-ld";
		document.head.appendChild(el);
	}
	el.text = JSON.stringify(value);
}
function absoluteUrl(path) {
	return new URL(path, siteConfig.url).toString();
}
function applySeoMetadata(meta) {
	if (typeof document === "undefined") return;
	const canonicalUrl = absoluteUrl(meta.path);
	const ogImageUrl = absoluteUrl(siteConfig.ogImagePath);
	document.title = meta.title;
	upsertMetaName("description", meta.description);
	upsertMetaName("robots", meta.index ? "index, follow, max-image-preview:large" : "noindex, follow");
	upsertLink("canonical", canonicalUrl);
	upsertMetaProperty("og:type", "website");
	upsertMetaProperty("og:site_name", siteConfig.name);
	upsertMetaProperty("og:title", meta.title);
	upsertMetaProperty("og:description", meta.description);
	upsertMetaProperty("og:url", canonicalUrl);
	upsertMetaProperty("og:image", ogImageUrl);
	upsertMetaName("twitter:card", "summary_large_image");
	upsertMetaName("twitter:title", meta.title);
	upsertMetaName("twitter:description", meta.description);
	setJsonLd(meta.jsonLd);
}
//#endregion
//#region src/utils/seoLinks.ts
function serviceItem(slug) {
	const svc = getServiceBySlug(slug);
	if (!svc) return void 0;
	return {
		href: `/services/${svc.slug}`,
		label: svc.name,
		hook: svc.hookOneLiner
	};
}
function packageItem(slug) {
	const pkg = getPackageBySlug(slug);
	if (!pkg) return void 0;
	return {
		href: `/packages/${pkg.slug}`,
		label: pkg.name,
		hook: pkg.tagline
	};
}
function industryItem(slug) {
	const ind = getIndustryBySlug(slug);
	if (!ind) return void 0;
	return {
		href: `/industries/${ind.slug}`,
		label: ind.name,
		hook: ind.hookOneLiner
	};
}
function crosshairItem(serviceSlug, crosshairSlug) {
	const c = getCrosshair(serviceSlug, crosshairSlug);
	if (!c) return void 0;
	return {
		href: crosshairFullPath(c),
		label: c.h1
	};
}
/** Looks up a crosshair by its full path "/services/svc/cross". */
function crosshairItemFromPath(path) {
	const match = path.match(/^\/services\/([^/]+)\/([^/]+)$/);
	if (!match) return void 0;
	return crosshairItem(match[1], match[2]);
}
function countyItem(slug) {
	const co = getCountyBySlug(slug);
	if (!co) return void 0;
	return {
		href: `/iowa/counties/${co.slug}`,
		label: `${co.name} County`,
		hook: `Seat: ${co.seatCity}`
	};
}
function cityItem(slug) {
	const c = getCityBySlug(slug);
	if (!c) return void 0;
	return {
		href: `/iowa/cities/${c.slug}`,
		label: c.name,
		hook: `Pop. ${c.population.toLocaleString()}`
	};
}
function compact(items) {
	return items.filter((x) => x !== void 0);
}
/**
* Service detail rails — 3 rotated siblings, all packages, 2 industries,
* 2 most-relevant crosshairs.
*/
function serviceDetailRails(serviceSlug) {
	const svc = getServiceBySlug(serviceSlug);
	if (!svc) return [];
	const siblings = svc.naturalCompanions.slice(0, 3);
	const industries = svc.industries.slice(0, 2);
	const crosshairs = CROSSHAIRS.filter((c) => c.serviceSlug === serviceSlug).slice(0, 2).map((c) => ({
		href: crosshairFullPath(c),
		label: c.h1
	}));
	return [
		{
			heading: "Other services",
			items: compact(siblings.map(serviceItem))
		},
		{
			heading: "All packages include this",
			items: compact(svc.includedInPackages.map(packageItem))
		},
		{
			heading: "Industries we serve",
			items: compact(industries.map(industryItem))
		},
		...crosshairs.length > 0 ? [{
			heading: "Built for",
			items: crosshairs
		}] : []
	];
}
/** Package detail — all included services, other packages, 2 industries. */
function packageDetailRails(packageSlug) {
	const pkg = getPackageBySlug(packageSlug);
	if (!pkg) return [];
	const otherPackages = PACKAGES.filter((p) => p.slug !== packageSlug).slice(0, 2).map((p) => ({
		href: `/packages/${p.slug}`,
		label: p.name,
		hook: p.tagline
	}));
	return [
		{
			heading: "What's included",
			items: compact(pkg.includedServiceSlugs.map(serviceItem))
		},
		{
			heading: "Other packages",
			items: otherPackages
		},
		{
			heading: "Best fit for",
			items: compact(pkg.bestFitIndustries.map(industryItem))
		}
	];
}
/** Industry detail — matched services, all packages, crosshairs, Iowa hub. */
function industryDetailRails(industrySlug) {
	const ind = getIndustryBySlug(industrySlug);
	if (!ind) return [];
	const crosshairs = CROSSHAIRS.filter((c) => c.industrySlug === industrySlug).slice(0, 4).map((c) => ({
		href: crosshairFullPath(c),
		label: c.h1
	}));
	return [
		{
			heading: "Services that fit",
			items: compact(ind.productMatchSlugs.map(serviceItem))
		},
		{
			heading: "Packages",
			items: PACKAGES.map((p) => ({
				href: `/packages/${p.slug}`,
				label: p.name,
				hook: p.tagline
			}))
		},
		...crosshairs.length > 0 ? [{
			heading: "Built specifically for this industry",
			items: crosshairs
		}] : [],
		{
			heading: "Iowa coverage",
			items: [{
				href: "/iowa",
				label: "Where we work in Iowa"
			}]
		}
	];
}
/** Crosshair detail — parent service, parent industry, 2 sibling crosshairs, 2 packages. */
function crosshairDetailRails(serviceSlug, crosshairSlug) {
	const c = getCrosshair(serviceSlug, crosshairSlug);
	if (!c) return [];
	const siblings = c.siblingCrosshairFullPaths.slice(0, 2).map((p) => crosshairItemFromPath(p)).filter((x) => Boolean(x));
	return [
		{
			heading: "The parent service",
			items: compact([serviceItem(serviceSlug)])
		},
		{
			heading: "Industry overview",
			items: compact([industryItem(c.industrySlug)])
		},
		{
			heading: "Related solutions",
			items: siblings
		},
		{
			heading: "Bundle with a package",
			items: PACKAGES.slice(0, 2).map((p) => ({
				href: `/packages/${p.slug}`,
				label: p.name,
				hook: p.tagline
			}))
		}
	];
}
/** County page — its cities, 4 neighboring counties, 2 services, 1 industry. */
function countyDetailRails(countySlug) {
	const co = getCountyBySlug(countySlug);
	if (!co) return [];
	const cities = getCitySlugsInCounty(countySlug).map(cityItem).filter((x) => Boolean(x));
	const neighbors = co.neighboringCountySlugs.slice(0, 4).map(countyItem).filter((x) => Boolean(x));
	return [
		...cities.length > 0 ? [{
			heading: "Cities in this county",
			items: cities
		}] : [],
		{
			heading: "Neighboring counties",
			items: neighbors
		},
		{
			heading: "Services for this region",
			items: compact([serviceItem("always-on-receptionist"), serviceItem("speed-to-lead-outbound")])
		},
		{
			heading: "By industry",
			items: compact([industryItem("home-services-iowa")])
		}
	];
}
/** City page — its county, 4 nearest siblings, 2 services, 1 industry. */
function cityDetailRails(citySlug) {
	const city = getCityBySlug(citySlug);
	if (!city) return [];
	const co = getCountyBySlug(city.countySlug);
	const siblings = getNearbyCitySlugs(citySlug, 4).map(cityItem).filter((x) => Boolean(x));
	return [
		...co ? [{
			heading: "County",
			items: [{
				href: `/iowa/counties/${co.slug}`,
				label: `${co.name} County`,
				hook: `Seat: ${co.seatCity}`
			}]
		}] : [],
		{
			heading: "Nearby cities",
			items: siblings
		},
		{
			heading: "Services we run here",
			items: compact([serviceItem("always-on-receptionist"), serviceItem("speed-to-lead-outbound")])
		},
		{
			heading: "By industry",
			items: compact([industryItem("home-services-iowa")])
		}
	];
}
function servicesHubRails() {
	return [{
		heading: "All services",
		items: SERVICES.map((s) => ({
			href: `/services/${s.slug}`,
			label: s.name,
			hook: s.hookOneLiner
		}))
	}, {
		heading: "Bundle into a package",
		items: PACKAGES.map((p) => ({
			href: `/packages/${p.slug}`,
			label: p.name,
			hook: p.tagline
		}))
	}];
}
function packagesHubRails() {
	return [{
		heading: "All packages",
		items: PACKAGES.map((p) => ({
			href: `/packages/${p.slug}`,
			label: p.name,
			hook: p.tagline
		}))
	}, {
		heading: "Or pick services à la carte",
		items: SERVICES.slice(0, 4).map((s) => ({
			href: `/services/${s.slug}`,
			label: s.name,
			hook: s.hookOneLiner
		}))
	}];
}
function industriesHubRails() {
	return [{
		heading: "Industries we serve",
		items: INDUSTRIES.map((i) => ({
			href: `/industries/${i.slug}`,
			label: i.name,
			hook: i.hookOneLiner
		}))
	}, {
		heading: "Or browse by service",
		items: SERVICES.slice(0, 4).map((s) => ({
			href: `/services/${s.slug}`,
			label: s.name,
			hook: s.hookOneLiner
		}))
	}];
}
function iowaHubRails() {
	return [
		{
			heading: "Featured Iowa cities",
			items: CITIES.filter((c) => c.indexable).slice(0, 6).map((c) => ({
				href: `/iowa/cities/${c.slug}`,
				label: c.name,
				hook: `Pop. ${c.population.toLocaleString()}`
			}))
		},
		{
			heading: "All 99 counties",
			items: COUNTIES.slice(0, 6).map((co) => ({
				href: `/iowa/counties/${co.slug}`,
				label: `${co.name} County`,
				hook: co.seatCity
			}))
		},
		{
			heading: "Services across Iowa",
			items: SERVICES.slice(0, 3).map((s) => ({
				href: `/services/${s.slug}`,
				label: s.name,
				hook: s.hookOneLiner
			}))
		}
	];
}
//#endregion
//#region src/pages/seo/services/ServicesHub.tsx
function ServicesHub() {
	useEffect(() => {
		applySeoMetadata(buildServicesHubMeta());
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [{
				label: "Home",
				href: "/"
			}, { label: "Services" }] }),
			/* @__PURE__ */ jsx(AnswerFirstBlock, {
				question: "What AI services does SceneShift offer Iowa small businesses?",
				answer: "SceneShift offers eight AI services for Iowa small businesses: a 24/7 web chat concierge, an always-on AI receptionist, automatic CRM updates, calendar booking, our included Easy CRM, sixty-second outbound speed-to-lead calls, hands-off Google review collection, and an autonomous AI sales rep that works your call list."
			}),
			/* @__PURE__ */ jsx(Byline, { lastReviewed: "2026-05-04" }),
			/* @__PURE__ */ jsx("p", {
				className: "seo-page__intro",
				children: "Each service installs on top of your existing tools — no replatforming, no new website. Pick one to learn more, or compare our packages to see how the services bundle together."
			}),
			/* @__PURE__ */ jsx("h2", { children: "All services" }),
			/* @__PURE__ */ jsx("div", {
				className: "seo-page__grid-cards",
				children: SERVICES.map((s) => /* @__PURE__ */ jsxs("article", {
					className: "seo-page__card",
					children: [
						/* @__PURE__ */ jsx("h3", { children: s.name }),
						/* @__PURE__ */ jsx("p", { children: s.hookOneLiner }),
						/* @__PURE__ */ jsx(Link, {
							to: `/services/${s.slug}`,
							children: "Learn more →"
						})
					]
				}, s.slug))
			}),
			/* @__PURE__ */ jsx(InterlinkGrid, { rails: servicesHubRails() })
		]
	});
}
//#endregion
//#region src/components/seo/ComparisonTable.tsx
function ComparisonTable({ title, oursLabel, theirsLabel, rows }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "seo-compare",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "seo-compare__title",
			children: title
		}), /* @__PURE__ */ jsx("div", {
			className: "seo-compare__scroll",
			children: /* @__PURE__ */ jsxs("table", {
				className: "seo-compare__table",
				children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
					/* @__PURE__ */ jsx("th", {
						scope: "col",
						children: "Feature"
					}),
					/* @__PURE__ */ jsx("th", {
						scope: "col",
						children: oursLabel
					}),
					/* @__PURE__ */ jsx("th", {
						scope: "col",
						children: theirsLabel
					})
				] }) }), /* @__PURE__ */ jsx("tbody", { children: rows.map((row) => /* @__PURE__ */ jsxs("tr", { children: [
					/* @__PURE__ */ jsx("th", {
						scope: "row",
						children: row.feature
					}),
					/* @__PURE__ */ jsx("td", { children: row.ours }),
					/* @__PURE__ */ jsx("td", { children: row.theirs })
				] }, row.feature)) })]
			})
		})]
	});
}
//#endregion
//#region src/components/seo/FaqBlock.tsx
function FaqBlock({ faqs, heading = "Frequently asked questions" }) {
	if (faqs.length === 0) return null;
	return /* @__PURE__ */ jsxs("section", {
		className: "seo-faq",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "seo-faq__heading",
			children: heading
		}), /* @__PURE__ */ jsx("div", {
			className: "seo-faq__list",
			children: faqs.map((faq) => /* @__PURE__ */ jsxs("details", {
				className: "seo-faq__item",
				children: [/* @__PURE__ */ jsx("summary", {
					className: "seo-faq__question",
					children: faq.question
				}), /* @__PURE__ */ jsx("div", {
					className: "seo-faq__answer",
					children: /* @__PURE__ */ jsx("p", { children: faq.answer })
				})]
			}, faq.question))
		})]
	});
}
//#endregion
//#region src/components/seo/PainMechanismOutcome.tsx
function PainMechanismOutcome({ painPoints, mechanism, outcomes }) {
	return /* @__PURE__ */ jsx("section", {
		className: "seo-pmo",
		children: /* @__PURE__ */ jsxs("div", {
			className: "seo-pmo__grid",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "seo-pmo__col",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "seo-pmo__heading",
						children: "What is actually costing you money"
					}), /* @__PURE__ */ jsx("ul", {
						className: "seo-pmo__list",
						children: painPoints.map((pain) => /* @__PURE__ */ jsx("li", { children: pain }, pain))
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "seo-pmo__col",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "seo-pmo__heading",
						children: "How it works"
					}), /* @__PURE__ */ jsx("ol", {
						className: "seo-pmo__steps",
						children: mechanism.map((step) => /* @__PURE__ */ jsxs("li", { children: [
							/* @__PURE__ */ jsxs("strong", { children: [step.name, "."] }),
							" ",
							step.text
						] }, step.name))
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "seo-pmo__col",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "seo-pmo__heading",
						children: "What you can expect"
					}), /* @__PURE__ */ jsx("ul", {
						className: "seo-pmo__list",
						children: outcomes.map((outcome) => /* @__PURE__ */ jsx("li", { children: outcome }, outcome))
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/seo/PrimarySources.tsx
function PrimarySources({ sources }) {
	if (sources.length === 0) return null;
	return /* @__PURE__ */ jsxs("section", {
		className: "seo-sources",
		"aria-label": "Primary sources",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "seo-sources__heading",
			children: "Sources cited"
		}), /* @__PURE__ */ jsx("ul", {
			className: "seo-sources__list",
			children: sources.map((source) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
				href: source.url,
				rel: "nofollow noopener noreferrer",
				target: "_blank",
				children: source.label
			}) }, source.url))
		})]
	});
}
//#endregion
//#region src/pages/seo/_shared/NotFound.tsx
/** Minimal not-found view used by SEO detail pages when slug doesn't resolve. */
function NotFound({ title = "Page not found" }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx("h1", { children: title }),
			/* @__PURE__ */ jsx("p", { children: "That page does not exist or has moved." }),
			/* @__PURE__ */ jsxs("p", { children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/services",
					children: "Browse our services"
				}),
				" ",
				"or ",
				/* @__PURE__ */ jsx(Link, {
					to: "/iowa",
					children: "see Iowa coverage"
				}),
				"."
			] })
		]
	});
}
//#endregion
//#region src/pages/seo/services/ServiceDetail.tsx
function ServiceDetail() {
	const { slug } = useParams();
	const svc = slug ? getServiceBySlug(slug) : void 0;
	useEffect(() => {
		if (svc) applySeoMetadata(buildServiceMeta(svc));
	}, [svc]);
	if (!svc) return /* @__PURE__ */ jsx(NotFound, { title: "Service not found" });
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: "Services",
					href: "/services"
				},
				{ label: svc.name }
			] }),
			/* @__PURE__ */ jsx(AnswerFirstBlock, {
				question: svc.h1,
				answer: svc.answer
			}),
			/* @__PURE__ */ jsx(Byline, { lastReviewed: svc.lastReviewed }),
			/* @__PURE__ */ jsx(PainMechanismOutcome, {
				painPoints: svc.painPoints,
				mechanism: svc.mechanism,
				outcomes: svc.outcomes
			}),
			svc.comparison && /* @__PURE__ */ jsx(ComparisonTable, {
				title: svc.comparison.title,
				oursLabel: svc.comparison.oursLabel,
				theirsLabel: svc.comparison.theirsLabel,
				rows: svc.comparison.rows
			}),
			/* @__PURE__ */ jsx(FaqBlock, { faqs: svc.faqs }),
			svc.primarySources && /* @__PURE__ */ jsx(PrimarySources, { sources: svc.primarySources }),
			/* @__PURE__ */ jsx(InterlinkGrid, { rails: serviceDetailRails(svc.slug) })
		]
	});
}
//#endregion
//#region src/pages/seo/services/CrosshairDetail.tsx
function CrosshairDetail() {
	const params = useParams();
	const c = params.slug && params.crosshair ? getCrosshair(params.slug, params.crosshair) : void 0;
	useEffect(() => {
		if (c) applySeoMetadata(buildCrosshairMeta(c));
	}, [c]);
	if (!c) return /* @__PURE__ */ jsx(NotFound, { title: "Page not found" });
	const svc = getServiceBySlug(c.serviceSlug);
	const ind = getIndustryBySlug(c.industrySlug);
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: "Services",
					href: "/services"
				},
				...svc ? [{
					label: svc.name,
					href: `/services/${svc.slug}`
				}] : [],
				{ label: c.h1 }
			] }),
			/* @__PURE__ */ jsx(AnswerFirstBlock, {
				question: c.h1,
				answer: c.answer
			}),
			/* @__PURE__ */ jsx(Byline, { lastReviewed: c.lastReviewed }),
			ind && /* @__PURE__ */ jsx("section", {
				className: "seo-hero",
				children: /* @__PURE__ */ jsxs("p", {
					className: "seo-hero__hook",
					children: [
						/* @__PURE__ */ jsx("strong", { children: "Built for:" }),
						" ",
						ind.decisionMaker,
						" at",
						" ",
						ind.idealCompanySize
					]
				})
			}),
			/* @__PURE__ */ jsx("h2", { children: "What's actually breaking in this industry" }),
			/* @__PURE__ */ jsx("ul", { children: c.industryPains.map((p) => /* @__PURE__ */ jsx("li", { children: p }, p)) }),
			/* @__PURE__ */ jsx("h2", { children: "Why this version is different" }),
			/* @__PURE__ */ jsx("p", { children: c.uniqueAngle }),
			/* @__PURE__ */ jsx(FaqBlock, { faqs: c.faqs }),
			/* @__PURE__ */ jsx(InterlinkGrid, { rails: crosshairDetailRails(c.serviceSlug, c.slug) })
		]
	});
}
//#endregion
//#region src/pages/seo/packages/PackagesHub.tsx
function PackagesHub() {
	useEffect(() => {
		applySeoMetadata(buildPackagesHubMeta());
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [{
				label: "Home",
				href: "/"
			}, { label: "Packages" }] }),
			/* @__PURE__ */ jsx(AnswerFirstBlock, {
				question: "Which SceneShift package is right for my Iowa business?",
				answer: "If you have 1-5 employees and miss calls while on jobs, start with The Main Street Startup ($299/mo). 5-20 employees losing leads to slow response time should choose Always-On Capture ($599/mo). 20+ employees running outbound sales should run The Autonomous Sales Floor ($999/mo)."
			}),
			/* @__PURE__ */ jsx(Byline, { lastReviewed: "2026-05-04" }),
			/* @__PURE__ */ jsx("p", {
				className: "seo-page__intro",
				children: "Three packages, each building on the last. Pick the one that matches where your business is bleeding time and money today."
			}),
			/* @__PURE__ */ jsx("h2", { children: "Compare packages" }),
			/* @__PURE__ */ jsx("div", {
				className: "seo-page__grid-cards",
				children: PACKAGES.map((p) => /* @__PURE__ */ jsxs("article", {
					className: "seo-page__card",
					children: [
						/* @__PURE__ */ jsx("h3", { children: p.name }),
						/* @__PURE__ */ jsx("p", { children: p.tagline }),
						/* @__PURE__ */ jsxs("p", { children: [
							/* @__PURE__ */ jsx("strong", { children: p.priceHeadline }),
							" ",
							p.priceDetailLines.join(" ")
						] }),
						/* @__PURE__ */ jsx(Link, {
							to: `/packages/${p.slug}`,
							children: "See what's included →"
						})
					]
				}, p.slug))
			}),
			/* @__PURE__ */ jsx(InterlinkGrid, { rails: packagesHubRails() })
		]
	});
}
//#endregion
//#region src/pages/seo/packages/PackageDetail.tsx
function PackageDetail() {
	const { slug } = useParams();
	const pkg = slug ? getPackageBySlug(slug) : void 0;
	useEffect(() => {
		if (pkg) applySeoMetadata(buildPackageMeta(pkg));
	}, [pkg]);
	if (!pkg) return /* @__PURE__ */ jsx(NotFound, { title: "Package not found" });
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: "Packages",
					href: "/packages"
				},
				{ label: pkg.name }
			] }),
			/* @__PURE__ */ jsx(AnswerFirstBlock, {
				question: `What's included in ${pkg.name}?`,
				answer: pkg.tagline
			}),
			/* @__PURE__ */ jsx(Byline, { lastReviewed: pkg.lastReviewed }),
			/* @__PURE__ */ jsx("section", {
				className: "seo-hero",
				children: /* @__PURE__ */ jsx("p", {
					className: "seo-hero__hook",
					children: pkg.idealFor
				})
			}),
			/* @__PURE__ */ jsx("h2", { children: "What it costs" }),
			/* @__PURE__ */ jsxs("div", {
				className: "seo-price",
				children: [/* @__PURE__ */ jsx("p", {
					className: "seo-price__headline",
					children: pkg.priceHeadline
				}), /* @__PURE__ */ jsx("ul", {
					className: "seo-price__detail",
					children: pkg.priceDetailLines.map((line) => /* @__PURE__ */ jsx("li", { children: line }, line))
				})]
			}),
			/* @__PURE__ */ jsx("h2", { children: "What it solves" }),
			/* @__PURE__ */ jsx("ul", { children: pkg.pains.map((p) => /* @__PURE__ */ jsx("li", { children: p }, p)) }),
			/* @__PURE__ */ jsx("h2", { children: "Hero feature" }),
			/* @__PURE__ */ jsx("p", { children: pkg.heroFeature }),
			/* @__PURE__ */ jsx("h2", { children: "Every service included" }),
			/* @__PURE__ */ jsx("ul", { children: pkg.includedServiceSlugs.map((s) => {
				const svc = getServiceBySlug(s);
				if (!svc) return null;
				return /* @__PURE__ */ jsxs("li", { children: [
					/* @__PURE__ */ jsx(Link, {
						to: `/services/${svc.slug}`,
						children: /* @__PURE__ */ jsx("strong", { children: svc.name })
					}),
					" — ",
					svc.hookOneLiner
				] }, s);
			}) }),
			/* @__PURE__ */ jsx(FaqBlock, { faqs: pkg.faqs }),
			/* @__PURE__ */ jsx(InterlinkGrid, { rails: packageDetailRails(pkg.slug) })
		]
	});
}
//#endregion
//#region src/pages/seo/industries/IndustriesHub.tsx
function IndustriesHub() {
	useEffect(() => {
		applySeoMetadata(buildIndustriesHubMeta());
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [{
				label: "Home",
				href: "/"
			}, { label: "Industries" }] }),
			/* @__PURE__ */ jsx(AnswerFirstBlock, {
				question: "Which industries does SceneShift work with in Iowa?",
				answer: "SceneShift works with Iowa home-services trades (HVAC, plumbing, roofing, electrical), professional services (CPAs, law firms, insurance), MedSpas and private clinics, local logistics and warehousing, and niche e-commerce. Each industry has a distinct bleeding-neck problem we solve."
			}),
			/* @__PURE__ */ jsx(Byline, { lastReviewed: "2026-05-04" }),
			/* @__PURE__ */ jsx("p", {
				className: "seo-page__intro",
				children: "Generic AI doesn't fit your trade. Pick your industry to see how we translate the same eight services into the specific workflow your team actually runs."
			}),
			/* @__PURE__ */ jsx("h2", { children: "Industries we serve" }),
			/* @__PURE__ */ jsx("div", {
				className: "seo-page__grid-cards",
				children: INDUSTRIES.map((i) => /* @__PURE__ */ jsxs("article", {
					className: "seo-page__card",
					children: [
						/* @__PURE__ */ jsx("h3", { children: i.name }),
						/* @__PURE__ */ jsxs("p", { children: [
							/* @__PURE__ */ jsx("strong", { children: "The bleeding neck:" }),
							" ",
							i.bleedingNeck
						] }),
						/* @__PURE__ */ jsx("p", { children: i.hookOneLiner }),
						/* @__PURE__ */ jsx(Link, {
							to: `/industries/${i.slug}`,
							children: "See the fit →"
						})
					]
				}, i.slug))
			}),
			/* @__PURE__ */ jsx(InterlinkGrid, { rails: industriesHubRails() })
		]
	});
}
//#endregion
//#region src/pages/seo/industries/IndustryDetail.tsx
function IndustryDetail() {
	const { slug } = useParams();
	const ind = slug ? getIndustryBySlug(slug) : void 0;
	useEffect(() => {
		if (ind) applySeoMetadata(buildIndustryMeta(ind));
	}, [ind]);
	if (!ind) return /* @__PURE__ */ jsx(NotFound, { title: "Industry not found" });
	const crosshairs = CROSSHAIRS.filter((c) => c.industrySlug === ind.slug);
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: "Industries",
					href: "/industries"
				},
				{ label: ind.name }
			] }),
			/* @__PURE__ */ jsx(AnswerFirstBlock, {
				question: `How does SceneShift help ${ind.name.toLowerCase()}?`,
				answer: ind.hookOneLiner
			}),
			/* @__PURE__ */ jsx(Byline, { lastReviewed: ind.lastReviewed }),
			/* @__PURE__ */ jsx("section", {
				className: "seo-hero",
				children: /* @__PURE__ */ jsx("p", {
					className: "seo-hero__hook",
					children: ind.bleedingNeck
				})
			}),
			/* @__PURE__ */ jsx("h2", { children: "Who this is for" }),
			/* @__PURE__ */ jsxs("ul", { children: [/* @__PURE__ */ jsxs("li", { children: [
				/* @__PURE__ */ jsx("strong", { children: "Decision maker:" }),
				" ",
				ind.decisionMaker
			] }), /* @__PURE__ */ jsxs("li", { children: [
				/* @__PURE__ */ jsx("strong", { children: "Ideal company size:" }),
				" ",
				ind.idealCompanySize
			] })] }),
			/* @__PURE__ */ jsx("h2", { children: "Services that fit this industry" }),
			/* @__PURE__ */ jsx("ul", { children: ind.productMatchSlugs.map((s) => {
				const svc = getServiceBySlug(s);
				if (!svc) return null;
				return /* @__PURE__ */ jsxs("li", { children: [
					/* @__PURE__ */ jsx(Link, {
						to: `/services/${svc.slug}`,
						children: /* @__PURE__ */ jsx("strong", { children: svc.name })
					}),
					" — ",
					svc.hookOneLiner
				] }, s);
			}) }),
			crosshairs.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h2", { children: "Built specifically for this industry" }), /* @__PURE__ */ jsx("ul", { children: crosshairs.map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
				to: crosshairFullPath(c),
				children: c.h1
			}) }, c.slug)) })] }),
			ind.notableIowaCities.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("h2", { children: [
				"Iowa cities where ",
				ind.name.toLowerCase(),
				" are concentrated"
			] }), /* @__PURE__ */ jsx("ul", { children: ind.notableIowaCities.map((s) => {
				const city = getCityBySlug(s);
				if (!city) return null;
				return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
					to: `/iowa/cities/${city.slug}`,
					children: city.name
				}) }, s);
			}) })] }),
			/* @__PURE__ */ jsx(FaqBlock, { faqs: ind.faqs }),
			/* @__PURE__ */ jsx(InterlinkGrid, { rails: industryDetailRails(ind.slug) })
		]
	});
}
//#endregion
//#region src/pages/seo/iowa/IowaHub.tsx
var REGION_LABELS = {
	Central: "Central Iowa",
	NW: "Northwest Iowa",
	NE: "Northeast Iowa",
	SE: "Southeast Iowa",
	SW: "Southwest Iowa"
};
function IowaHub() {
	useEffect(() => {
		applySeoMetadata(buildIowaHubMeta());
	}, []);
	const indexableCities = CITIES.filter((c) => c.indexable);
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [{
				label: "Home",
				href: "/"
			}, { label: "Iowa" }] }),
			/* @__PURE__ */ jsx(AnswerFirstBlock, {
				question: "Which Iowa cities and counties does SceneShift serve?",
				answer: `SceneShift serves Iowa small businesses statewide. We have published guides for all 99 Iowa counties and ${indexableCities.length} cities — from Des Moines and Cedar Rapids down to small towns like Huxley — covering missed-call recovery, AI reception, web chat, and follow-up automation in each market.`
			}),
			/* @__PURE__ */ jsx(Byline, { lastReviewed: "2026-05-04" }),
			/* @__PURE__ */ jsx("p", {
				className: "seo-page__intro",
				children: "Iowa is 99 counties and almost a thousand incorporated cities. SceneShift's small-business AI services work the same way in every one of them — answer faster, follow up consistently, stay easy to choose. Find your county or city below."
			}),
			/* @__PURE__ */ jsx("h2", { children: "Featured Iowa cities" }),
			/* @__PURE__ */ jsx("div", {
				className: "seo-page__grid-cards",
				children: indexableCities.slice(0, 12).map((c) => /* @__PURE__ */ jsxs("article", {
					className: "seo-page__card",
					children: [
						/* @__PURE__ */ jsx("h3", { children: c.name }),
						/* @__PURE__ */ jsx("p", { children: c.intro }),
						/* @__PURE__ */ jsxs(Link, {
							to: `/iowa/cities/${c.slug}`,
							children: [
								"See ",
								c.name,
								" businesses we serve →"
							]
						})
					]
				}, c.slug))
			}),
			/* @__PURE__ */ jsx("h2", { children: "All 99 Iowa counties by region" }),
			/* @__PURE__ */ jsx("div", {
				className: "seo-page__regions",
				children: IOWA_REGIONS.map((region) => {
					const counties = getCountiesByRegion(region);
					if (counties.length === 0) return null;
					return /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h3", { children: REGION_LABELS[region] ?? region }), /* @__PURE__ */ jsx("ul", {
						className: "seo-page__county-grid",
						children: counties.map((co) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsxs(Link, {
							to: `/iowa/counties/${co.slug}`,
							children: [co.name, " County"]
						}), /* @__PURE__ */ jsxs("span", {
							className: "seo-page__county-meta",
							children: [
								"Seat: ",
								co.seatCity,
								" · Pop. ",
								co.population.toLocaleString()
							]
						})] }, co.slug))
					})] }, region);
				})
			}),
			/* @__PURE__ */ jsxs("p", { children: [
				"Showing ",
				COUNTIES.length,
				" counties and ",
				indexableCities.length,
				" cities."
			] }),
			/* @__PURE__ */ jsx(InterlinkGrid, { rails: iowaHubRails() })
		]
	});
}
//#endregion
//#region src/pages/seo/iowa/CountyDetail.tsx
function CountyDetail() {
	const { slug } = useParams();
	const county = slug ? getCountyBySlug(slug) : void 0;
	useEffect(() => {
		if (county) applySeoMetadata(buildCountyMeta(county));
	}, [county]);
	if (!county) return /* @__PURE__ */ jsx(NotFound, { title: "County not found" });
	const cities = getCitySlugsInCounty(county.slug).map((s) => getCityBySlug(s)).filter((c) => Boolean(c));
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: "Iowa",
					href: "/iowa"
				},
				{ label: `${county.name} County` }
			] }),
			/* @__PURE__ */ jsx(AnswerFirstBlock, {
				question: `How does ${county.name} County, Iowa benefit from small-business AI automation?`,
				answer: `${county.name} County small businesses ${county.regionalContext.split(".")[0].toLowerCase()}. SceneShift's AI receptionist, 24/7 web chat, and speed-to-lead outbound let ${county.seatCity}-area trades and clinics catch every missed call, answer every web inquiry, and follow up automatically — without adding office staff.`
			}),
			/* @__PURE__ */ jsx(Byline, { lastReviewed: "2026-05-04" }),
			/* @__PURE__ */ jsxs("h2", { children: [
				"About ",
				county.name,
				" County"
			] }),
			/* @__PURE__ */ jsxs("p", { children: [
				/* @__PURE__ */ jsx("strong", { children: "County seat:" }),
				" ",
				county.seatCity,
				" · ",
				/* @__PURE__ */ jsx("strong", { children: "Population:" }),
				" ",
				county.population.toLocaleString(),
				" · ",
				/* @__PURE__ */ jsx("strong", { children: "Region:" }),
				" ",
				county.region,
				" Iowa"
			] }),
			/* @__PURE__ */ jsx("p", { children: county.regionalContext }),
			county.notableEmployers.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h2", { children: "Notable employers and industries" }), /* @__PURE__ */ jsx("ul", { children: county.notableEmployers.map((e) => /* @__PURE__ */ jsx("li", { children: e }, e)) })] }),
			/* @__PURE__ */ jsx("h2", { children: "Small businesses we typically serve here" }),
			/* @__PURE__ */ jsx("ul", { children: county.localBusinessCategories.map((cat) => /* @__PURE__ */ jsx("li", { children: cat }, cat)) }),
			cities.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("h2", { children: [
				"Cities in ",
				county.name,
				" County"
			] }), /* @__PURE__ */ jsx("ul", {
				className: "seo-page__county-grid",
				children: cities.map((c) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Link, {
					to: `/iowa/cities/${c.slug}`,
					children: c.name
				}), /* @__PURE__ */ jsxs("span", {
					className: "seo-page__county-meta",
					children: ["Pop. ", c.population.toLocaleString()]
				})] }, c.slug))
			})] }),
			/* @__PURE__ */ jsxs("h2", { children: [
				"What SceneShift does for ",
				county.name,
				" County businesses"
			] }),
			/* @__PURE__ */ jsxs("p", { children: [
				"Whether you run an HVAC company in ",
				county.seatCity,
				" or a CPA practice in a smaller ",
				county.name,
				" County town, the daily losses look the same: missed calls, slow follow-ups, and review velocity falling behind larger competitors."
			] }),
			/* @__PURE__ */ jsx("p", { children: "SceneShift installs an AI receptionist on your existing phone line, an AI chat on your existing website, and an automation layer that calls every web lead within sixty seconds — so your team spends the day on actual jobs instead of triage." }),
			/* @__PURE__ */ jsx(InterlinkGrid, { rails: countyDetailRails(county.slug) })
		]
	});
}
//#endregion
//#region src/pages/seo/iowa/CityDetail.tsx
function CityDetail() {
	const { slug } = useParams();
	const city = slug ? getCityBySlug(slug) : void 0;
	useEffect(() => {
		if (city) applySeoMetadata(buildCityMeta(city));
	}, [city]);
	if (!city) return /* @__PURE__ */ jsx(NotFound, { title: "City not found" });
	const county = getCountyBySlug(city.countySlug);
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: "Iowa",
					href: "/iowa"
				},
				...county ? [{
					label: `${county.name} County`,
					href: `/iowa/counties/${county.slug}`
				}] : [],
				{ label: city.name }
			] }),
			/* @__PURE__ */ jsx(AnswerFirstBlock, {
				question: `How can ${city.name}, Iowa small businesses use AI to capture more leads?`,
				answer: `${city.name} small businesses use SceneShift to catch every missed call, answer web chat 24/7, and call new web leads within sixty seconds — so a homeowner shopping for a plumber at 9 PM books with you instead of whoever picks up first. ${city.intro}`
			}),
			/* @__PURE__ */ jsx(Byline, { lastReviewed: "2026-05-04" }),
			!city.indexable && /* @__PURE__ */ jsx("p", {
				style: {
					fontSize: 13,
					color: "var(--seo-fg-muted)"
				},
				children: "This page is currently in pre-launch mode and is not yet promoted in search."
			}),
			/* @__PURE__ */ jsxs("h2", { children: ["About ", city.name] }),
			/* @__PURE__ */ jsxs("p", { children: [
				/* @__PURE__ */ jsx("strong", { children: "Population:" }),
				" ",
				city.population.toLocaleString(),
				county && /* @__PURE__ */ jsxs(Fragment, { children: [
					" · ",
					/* @__PURE__ */ jsx("strong", { children: "County:" }),
					" ",
					/* @__PURE__ */ jsxs(Link, {
						to: `/iowa/counties/${county.slug}`,
						children: [county.name, " County"]
					})
				] })
			] }),
			/* @__PURE__ */ jsx("p", { children: city.intro }),
			city.anchorEmployers.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h2", { children: "Anchor employers" }), /* @__PURE__ */ jsx("ul", { children: city.anchorEmployers.map((e) => /* @__PURE__ */ jsx("li", { children: e }, e)) })] }),
			/* @__PURE__ */ jsxs("h2", { children: ["Small businesses we typically serve in ", city.name] }),
			/* @__PURE__ */ jsx("ul", { children: city.localBusinessCategories.map((cat) => /* @__PURE__ */ jsx("li", { children: cat }, cat)) }),
			/* @__PURE__ */ jsxs("h2", { children: [
				"What SceneShift does for ",
				city.name,
				" businesses"
			] }),
			/* @__PURE__ */ jsxs("p", { children: [
				"Whether you run a multi-truck operation or a single-location clinic in",
				" ",
				city.name,
				", the same set of daily problems compound: a call missed while you are with a customer, a web form filled out at 8 PM that nobody answers, a job completed without ever asking for the Google review. We install systems that close those gaps without adding people to your front desk."
			] }),
			/* @__PURE__ */ jsx(InterlinkGrid, { rails: cityDetailRails(city.slug) })
		]
	});
}
//#endregion
//#region src/pages/seo/about/Founder.tsx
function Founder() {
	useEffect(() => {
		applySeoMetadata(buildFounderMeta());
	}, []);
	const author = getPrimaryAuthor();
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: "About",
					href: "/about-us"
				},
				{ label: "Founder" }
			] }),
			/* @__PURE__ */ jsx(AnswerFirstBlock, {
				question: "Who is behind SceneShift?",
				answer: `${author.bio}`
			}),
			/* @__PURE__ */ jsx(Byline, { lastReviewed: "2026-05-04" }),
			/* @__PURE__ */ jsx("h2", { children: "Who we are" }),
			/* @__PURE__ */ jsx("p", { children: author.bio }),
			/* @__PURE__ */ jsx("h2", { children: "Why this exists" }),
			/* @__PURE__ */ jsx("p", { children: "Buyers still choose businesses they trust, but the way they shop has changed. People expect quick answers, clear next steps, and follow-up that does not fall apart. If your business is slower to respond than the next option on the list, great work can lose before you ever get the chance to prove it." }),
			/* @__PURE__ */ jsx("p", { children: "Most owners are not losing because they care less or work less. They lose when calls go unanswered, details get trapped in inboxes, and follow-up depends on whoever happens to remember it. Faster first response and a cleaner handoff usually matter more than big promises about transformation." }),
			/* @__PURE__ */ jsx("h2", { children: "How to reach us" }),
			/* @__PURE__ */ jsxs("p", { children: [
				"SceneShift is based in ",
				siteConfig.region,
				"."
			] }),
			/* @__PURE__ */ jsxs("ul", { children: [
				/* @__PURE__ */ jsxs("li", { children: [
					"Phone:",
					" ",
					/* @__PURE__ */ jsx("a", {
						href: `tel:${siteConfig.primaryPhoneHref}`,
						children: siteConfig.primaryPhoneLabel
					})
				] }),
				/* @__PURE__ */ jsxs("li", { children: [
					"Email:",
					" ",
					/* @__PURE__ */ jsx("a", {
						href: `mailto:${siteConfig.primaryEmail}`,
						children: siteConfig.primaryEmail
					})
				] }),
				/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
					to: "/contact",
					children: "Book a call"
				}) })
			] }),
			/* @__PURE__ */ jsx(InterlinkGrid, { rails: [
				{
					heading: "Editorial standards",
					items: [{
						href: "/about/editorial-policy",
						label: "Editorial policy",
						hook: "How we write, review, and update content"
					}]
				},
				{
					heading: "What we build",
					items: [{
						href: "/services",
						label: "All services",
						hook: "Eight AI services for Iowa small businesses"
					}, {
						href: "/packages",
						label: "Packages",
						hook: "Three bundles starting at $299/mo"
					}]
				},
				{
					heading: "Where we work",
					items: [{
						href: "/iowa",
						label: "Iowa coverage",
						hook: "All 99 counties"
					}]
				}
			] })
		]
	});
}
//#endregion
//#region src/pages/seo/about/EditorialPolicy.tsx
function EditorialPolicy() {
	useEffect(() => {
		applySeoMetadata(buildEditorialPolicyMeta());
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "container",
		children: [
			/* @__PURE__ */ jsx(Breadcrumbs, { items: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: "About",
					href: "/about-us"
				},
				{ label: "Editorial policy" }
			] }),
			/* @__PURE__ */ jsx(AnswerFirstBlock, {
				question: "How does SceneShift write and review the content on this site?",
				answer: "SceneShift content is written by the founding team based on hands-on experience deploying these systems with Iowa small businesses. Every page is reviewed at least every 90 days, dated visibly, and updated when prices, integrations, or recommended workflows change."
			}),
			/* @__PURE__ */ jsx(Byline, { lastReviewed: "2026-05-04" }),
			/* @__PURE__ */ jsx("h2", { children: "Authorship" }),
			/* @__PURE__ */ jsx("p", { children: "Every guidance page on this site bylines back to a named author with a public profile. We do not publish anonymous content." }),
			/* @__PURE__ */ jsx("h2", { children: "Review cadence" }),
			/* @__PURE__ */ jsx("p", { children: "Service, package, industry, and crosshair pages are reviewed at least every 90 days. County and city pages are reviewed every 180 days. The visible \"Last reviewed\" date on each page reflects the most recent editorial pass, not just a code change." }),
			/* @__PURE__ */ jsx("h2", { children: "Sources" }),
			/* @__PURE__ */ jsx("p", { children: "Where we cite statistics or research, we link the primary source — government data (BLS, Census, Iowa SBDC), peer-reviewed research, or named industry studies. We do not cite \"studies show\" without a traceable link." }),
			/* @__PURE__ */ jsx("h2", { children: "Corrections" }),
			/* @__PURE__ */ jsxs("p", { children: [
				"If you find an error, email",
				" ",
				/* @__PURE__ */ jsx("a", {
					href: `mailto:${siteConfig.primaryEmail}`,
					children: siteConfig.primaryEmail
				}),
				". Material corrections are dated in the affected page's \"Last reviewed\" line and noted in our internal change log."
			] }),
			/* @__PURE__ */ jsx("h2", { children: "AI use" }),
			/* @__PURE__ */ jsx("p", { children: "We use AI tools to help draft and structure content, but every page is reviewed and edited by a person before it goes live. We do not publish unedited AI output." }),
			/* @__PURE__ */ jsx("h2", { children: "Disclosure" }),
			/* @__PURE__ */ jsx("p", { children: "SceneShift sells the AI services described on this site. Pages describing those services are not third-party reviews — they are our own product pages, written to help small-business buyers understand whether the service fits their workflow." }),
			/* @__PURE__ */ jsx(InterlinkGrid, { rails: [{
				heading: "About",
				items: [{
					href: "/about/founder",
					label: "Founder",
					hook: "Who is behind SceneShift"
				}, {
					href: "/about-us",
					label: "About SceneShift",
					hook: "What we do and why"
				}]
			}, {
				heading: "Browse the site",
				items: [
					{
						href: "/services",
						label: "All services"
					},
					{
						href: "/packages",
						label: "Packages"
					},
					{
						href: "/iowa",
						label: "Iowa coverage"
					}
				]
			}] })
		]
	});
}
//#endregion
//#region src/entry-server.tsx
/**
* Server entry for build-time prerendering.
*
* `vite build --ssr src/entry-server.tsx` produces a Node-compatible bundle
* that exports `render(url)`. [scripts/prerender-seo-pages.mjs] imports that
* bundle and calls `render(url)` for every canonical SEO route, then writes
* the resulting body HTML into the static index.html shell.
*
* The server tree intentionally renders ONLY the SEO pages — none of the
* heavy animation/Lenis/GSAP layers. The client bundle still runs the full
* App on hydration, so when a user lands on a prerendered page their first
* paint is the SSR markup and then the client takes over.
*/
function ServerRoutes() {
	return /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, {
		element: /* @__PURE__ */ jsx(SeoShellLayout, {}),
		children: [
			/* @__PURE__ */ jsx(Route, {
				path: "/services",
				element: /* @__PURE__ */ jsx(ServicesHub, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/services/:slug",
				element: /* @__PURE__ */ jsx(ServiceDetail, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/services/:slug/:crosshair",
				element: /* @__PURE__ */ jsx(CrosshairDetail, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/packages",
				element: /* @__PURE__ */ jsx(PackagesHub, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/packages/:slug",
				element: /* @__PURE__ */ jsx(PackageDetail, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/industries",
				element: /* @__PURE__ */ jsx(IndustriesHub, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/industries/:slug",
				element: /* @__PURE__ */ jsx(IndustryDetail, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/iowa",
				element: /* @__PURE__ */ jsx(IowaHub, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/iowa/counties/:slug",
				element: /* @__PURE__ */ jsx(CountyDetail, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/iowa/cities/:slug",
				element: /* @__PURE__ */ jsx(CityDetail, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/about/founder",
				element: /* @__PURE__ */ jsx(Founder, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/about/editorial-policy",
				element: /* @__PURE__ */ jsx(EditorialPolicy, {})
			})
		]
	}) });
}
/**
* Render the SEO tree for a given URL to a static HTML body string.
* The string is wrapped in <div id="root">{html}</div> by the prerender script
* before being written to disk.
*/
function render(url) {
	return renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, {
		location: url,
		children: /* @__PURE__ */ jsx(ServerRoutes, {})
	}) }));
}
//#endregion
export { render };
