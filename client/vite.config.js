import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    proxy: {
      "/graphql": "http://localhost:3001",
=======
    port: 3000,
    open: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
>>>>>>> e4e97ccdcb3d71d478eb0286357a7046977b3785
    },
  },
});
