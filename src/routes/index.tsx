import { usePathname } from "next/navigation";
import { TRoutes } from "./types";

import Listing from "@/views/Listing";
import Register from "@/views/Register";
import Users from "@/views/Users";
import Create from "@/views/Create";
import Success from "@/views/Success";
import Viewer from "@/views/Viewer";

const Routers = () => {
  const pathname = usePathname();

  const routes: TRoutes = {
    "/": Listing,
    "/listing": Listing,
    "/register": Register,
    "/users": Users,
    "/create": Create,
    "/success": Success,
    // "/viewer": Viewer,
    // "404": "404",
  };

  const Route = routes[pathname as keyof TRoutes | "404"];

  return <Route />;
};

export default Routers;
