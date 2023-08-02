export const isLinkExternal = (link: string) =>
  link.trim().startsWith("http") ||
  link.trim().startsWith("mailto") ||
  link.trim().startsWith("tel")
