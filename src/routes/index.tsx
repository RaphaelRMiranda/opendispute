import { usePathname } from "next/navigation";
import { TRoutes } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

import Layout from "@/components/Layout";

import Login from "@/views/Login";
import Listing from "@/views/Listing";

const Routers = () => {
  const pathname = usePathname();

  const routes: TRoutes = {
    "/": Login,
    "/listing": Listing,
    // "404": "404",
  };

  const Route = routes[pathname as keyof TRoutes | "404"];

  return (
    <ThemeProvider theme={theme}>
      {false ? (
        <Layout>
          <Route />
        </Layout>
      ) : (
        <Route />
      )}
    </ThemeProvider>
  );
};

export default Routers;
