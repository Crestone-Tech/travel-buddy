import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open:true,
    proxy: {
      "/graphql": "http://localhost:3001",
    },
  },
});
