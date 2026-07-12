const basePath =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const getImagePath = (path: string) => `${basePath}${path}`;