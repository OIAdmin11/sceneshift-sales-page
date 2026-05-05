import type { AuthorRecord } from "@/types/seo";

/**
 * Author / founder records used for `Person` schema and visible bylines.
 *
 * Important for E-E-A-T: Google's 2026 Helpful Content System gives substantial
 * weight to verifiable, named authors with public profiles. Every SEO page in
 * the network bylines back to an author here.
 */
export const AUTHORS: readonly AuthorRecord[] = [
  {
    slug: "founder",
    name: "SceneShift Team",
    jobTitle: "Founder, SceneShift",
    bio: "SceneShift was started in Ames, Iowa to help small businesses respond faster, follow up consistently, and stay easy to choose against larger, better-resourced competitors. We work hands-on with home-service operators, MedSpas, professional-services firms, and local manufacturers across Iowa.",
    sameAs: [],
  },
] as const;

export const PRIMARY_AUTHOR_SLUG = "founder" as const;

export function getAuthor(slug: string): AuthorRecord | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}

export function getPrimaryAuthor(): AuthorRecord {
  const author = getAuthor(PRIMARY_AUTHOR_SLUG);
  if (!author) {
    throw new Error(
      `Primary author "${PRIMARY_AUTHOR_SLUG}" not defined in authors.ts`,
    );
  }
  return author;
}
