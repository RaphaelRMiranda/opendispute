import { usePathname } from "next/navigation";
import { TRoutes } from "./types";

import Listing from "@/views/Listing";
import Register from "@/views/Register";
import Users from "@/views/Users";
import Create from "@/views/Create";
import Success from "@/views/Success";

const Routers = () => {
  const pathname = usePathname();

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

  const Route = routes[pathname as keyof TRoutes | "404"];

  return <Route />;
};

export default Routers;
