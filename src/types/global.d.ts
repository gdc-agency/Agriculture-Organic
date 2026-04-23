export {};

declare global {
  interface Window {
    jQuery: JQueryStatic;
  }
}

declare global {
  interface JQuery {
    mb_YTPlayer(options?: unknown): JQuery;
  }
}
