import marketingCopy from "./marketing-copy.json";

export { marketingCopy };
export type SiteMarketingLocale = keyof typeof marketingCopy;
export const siteMarketingLocales = Object.keys(marketingCopy) as SiteMarketingLocale[];
export const screenshotKeys = Object.keys(marketingCopy.en.screenshots) as Array<keyof typeof marketingCopy.en.screenshots>;
