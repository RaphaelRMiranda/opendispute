import { usePathname } from "next/navigation";
import { TRoutes } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

import Layout from "@/components/Layout";

import Login from "@/views/Login";
import Listing from "@/views/Listing";
import Register from "@/views/Register";
import Users from "@/views/Users";

const Routers = () => {
  const pathname = usePathname();

  const routes: TRoutes = {
    "/": Login,
    "/listing": Listing,
    "/register": Register,
    "/users": Users,
    // "404": "404",
  };

  const Route = routes[pathname as keyof TRoutes | "404"];

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Route />
      </Layout>
    </ThemeProvider>
  );
};

export default Routers;
