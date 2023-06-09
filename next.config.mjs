/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));
import { withAxiom } from "next-axiom";
import withBundleAnalyzerModule from "@next/bundle-analyzer";

/** @type {import("next").NextConfig} */
const config = withAxiom({
  reactStrictMode: true,

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = withBundleAnalyzerModule({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

export default withBundleAnalyzer(config);
