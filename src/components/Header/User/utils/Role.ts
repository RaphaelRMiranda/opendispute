import { UserRole } from "@/context/User/types";

const Role = (role: UserRole) => {
  switch (role) {
    case "admin":
      return "ADM | Administrator";
    case "service":
      return "USER | Service";
    case "processor":
      return "MOD | Moderator";
    case "dev":
      return "DEV | Developer";
    case "ceo":
      return "CEO | Administrator";
    default:
      return "Não definido";
  }
};

export default Role;