import Layout from "@/components/Layout";
import { usePathname } from "next/navigation";

import Greeting from "./Greeting";
import Closing from "./Closing";
import Action from "./Action";
import Justifyer from "./Justifyer";
import Types from "./Types";

const ViewSettings = () => {
  const pathname = usePathname();
  return (
    <Layout>
      {pathname === "/settings/greeting" && <Greeting />}
      {pathname === "/settings/closing" && <Closing />}
      {pathname === "/settings/actions" && <Action />}
      {pathname === "/settings/justifyers" && <Justifyer />}
      {pathname === "/settings/types" && <Types />}
    </Layout>
  );
};

export default ViewSettings;
