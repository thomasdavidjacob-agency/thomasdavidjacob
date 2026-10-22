import type { NextConfig } from "next";

// Older blog posts merged into a stronger post on the same topic (2026-10-21).
// Permanent (308) so old links, bookmarks and rankings carry over.
const mergedPosts: Record<string, string> = {
  "why-oregon-business-needs-ai-system-not-website": "website-is-now-the-least-important-thing-we-build",
  "ai-skills-gap-businesses-need-outside-help": "why-oregon-businesses-need-ai-integration-expert",
  "best-time-to-start-ai-integration-oregon-business": "signs-business-ready-for-ai",
  "how-to-prepare-business-for-ai-era": "signs-business-ready-for-ai",
  "future-of-small-business-ai-oregon": "hidden-cost-of-not-adopting-ai",
  "ai-creating-new-class-business-owner-oregon": "ai-great-equalizer-small-business-oregon",
  "ai-automation-replacing-staff-costs-oregon": "ai-automation-vs-hiring-oregon-business",
  "ai-customer-service-oregon-business": "ai-customer-service-systems-oregon-businesses",
  "ai-automate-sales-funnel-oregon": "ai-lead-generation-oregon",
  "ai-tools-oregon-small-business": "most-powerful-ai-automations-portland-metro",
  "automate-business-processes-portland": "most-powerful-ai-automations-portland-metro",
  "ai-business-integration-trends-2026": "what-ai-can-and-cannot-do-business-2026",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(mergedPosts).map(([from, to]) => ({
      source: `/blog/${from}`,
      destination: `/blog/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
