import { usePathname } from "next/navigation";
import { TRoutes } from "./types";

import Listing from "@/views/Listing";
import Register from "@/views/Register";
import Users from "@/views/Users";
import Create from "@/views/Create";
import Success from "@/views/Success";
import { useUser } from "@/context/User";

const Routers = () => {
  const { user } = useUser();

  const pathname = usePathname();

  const isPermitted = (pathname: string) => {
    const permittedRoutes = [
      "/",
      "/listing",
      "/create",
      "/update",
      "/factual",
      "/success",
    ];

    if (user?.role !== "service") return true;

    return permittedRoutes.indexOf(pathname) >= 0;
  };

  const routes: TRoutes = {
    "/": Listing,
    "/listing": Listing,
    "/register": Register,
    "/users": Users,
    "/create": Create,
    "/update": Create,
    "/factual": Create,
    "/success": Success,
    // "404": "404",
  };

  if (!isPermitted(pathname)) return <Listing />;

  const Route = routes[pathname as keyof TRoutes | "404"];

  return <Route />;
};

export default Routers;
