import type { NextConfig } from "next";
import { getPreviewOrigin } from "./scripts/preview-origin.mjs";

const previewOrigin = getPreviewOrigin();
const nextConfig: NextConfig = {
  allowedDevOrigins: previewOrigin ? [new URL(previewOrigin).hostname] : [],
  async headers() {
    // The app does not need CodeSandbox's optional localhost service worker.
    return previewOrigin
      ? [
          {
            source: "/:path*",
            headers: [{ key: "x-csb-no-sw-proxy", value: "1" }],
          },
        ]
      : [];
  },
};

export default nextConfig;
