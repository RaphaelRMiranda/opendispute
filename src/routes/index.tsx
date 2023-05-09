import { usePathname } from "next/navigation";
import { TRoutes } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

import Layout from "@/components/Layout";

import Login from "@/views/Login";
import Listing from "@/views/Listing";
import Register from "@/views/Register";
import Users from "@/views/Users";
import Create from "@/views/Create";
import { useUser } from "@/context/User";
import Context from "@/context";

const Routers = () => {
  const { user } = useUser();

  const pathname = usePathname();

  const routes: TRoutes = {
    "/": Login,
    "/listing": Listing,
    "/register": Register,
    "/users": Users,
    "/create": Create,
    // "404": "404",
  };

  const Route = user ? routes[pathname as keyof TRoutes | "404"] : routes["/"];

  return (
    <ThemeProvider theme={theme}>
      <Context>
        {user ? (
          <Layout>
            <Route />
          </Layout>
        ) : (
          <Route />
        )}
      </Context>
    </ThemeProvider>
  );
};

export default Routers;
