import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/v1": {
        target: "https://youtubeclone-axvb.onrender.com/api",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
