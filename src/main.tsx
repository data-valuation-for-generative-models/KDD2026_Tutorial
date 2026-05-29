import { ViteReactSSG } from "vite-react-ssg/single-page"
// import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

export const createRoot = ViteReactSSG(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
