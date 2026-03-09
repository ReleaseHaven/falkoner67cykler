import { ViteReactSSG } from "vite-react-ssg";
import App from "./App.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import "./index.css";

export const createRoot = ViteReactSSG({
  routes: [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Index /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
});
