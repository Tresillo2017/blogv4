const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Tomasps Blog",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Teenager developer",
    bio: "A teenager developer who enjoys it.",
    email: "contact@tomasps.tk",
    linkedin: "",
    github: "tresillo2017",
    instagram: "toomas_ps",
  },
  projects: [
    {
      name: ``,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "TomasPS Blog",
    description: "welcome to TomasPS Blog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://blog.tomasps.tk",
  since: 2023, // If leave this empty, current year will be used.
  lang: "es-ES", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
