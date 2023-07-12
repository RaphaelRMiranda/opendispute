import { TOption } from "@/components/Selects/types";

const ACO = [
  {
    label: "Select a action to be taken",
    value: null,
  },
  {
    label: "Delete this account for inaccuracy.",
    value: "Delete this account for inaccuracy.",
  },
  {
    label: "Remove this account for inaccuracy.",
    value: "Remove this account for inaccuracy.",
  },
  {
    label: "Please remove this account for inaccuracy.",
    value: "Please remove this account for inaccuracy.",
  },
  {
    label: "This account needs to be deleted, it's inaccurate.",
    value: "This account needs to be deleted, it's inaccurate.",
  },
  {
    label: "This account needs to be removed, it's inaccurate.",
    value: "This account needs to be removed, it's inaccurate.",
  },
  {
    label: "Please delete this account for inaccuracy.",
    value: "Please delete this account for inaccuracy.",
  },
  {
    label: "Delete this account, it's imcomplete.",
    value: "Delete this account, it's imcomplete.",
  },
  {
    label: "Remove this account, it's icomplete.",
    value: "Remove this account, it's icomplete.",
  },
  {
    label: "Please remove this from my credit report, it's incomplete.",
    value: "Please remove this from my credit report, it's incomplete.",
  },
  {
    label: "Please delete this from my credit report, it's incomplete.",
    value: "Please delete this from my credit report, it's incomplete.",
  },
  {
    label: "This account is incomplete, it needs to be removed from my report.",
    value: "This account is incomplete, it needs to be removed from my report.",
  },
  {
    label: "Remove this account for FCRA Violation.",
    value: "Remove this account for FCRA Violation.",
  },
  {
    label: "Delete this account for FCRA violation.",
    value: "Delete this account for FCRA violation.",
  },
  {
    label:
      "This account is violating my rights under FCRA laws, Delete it from my report.",
    value:
      "This account is violating my rights under FCRA laws, Delete it from my report.",
  },
  {
    label:
      "This account is violating my rights under FCRA laws, remove it from my report.",
    value:
      "This account is violating my rights under FCRA laws, remove it from my report.",
  },
];

const AIQ = [
  {
    label: "Select a action to be taken",
    value: null,
  },
  {
    label: "Delete this from my report",
    value: "Delete this from my report",
  },
  {
    label: "Remove this from my report.",
    value: "Remove this from my report.",
  },
  {
    label: "Delete it from my credit report.",
    value: "Delete it from my credit report.",
  },
  {
    label: "Remove it from my credit report.",
    value: "Remove it from my credit report.",
  },
  {
    label: "Delete this inquiry from my report.",
    value: "Delete this inquiry from my report.",
  },
  {
    label: "Remove this inquiry from my report.",
    value: "Remove this inquiry from my report.",
  },
  {
    label: "Get this off my report now.",
    value: "Get this off my report now.",
  },
  {
    label: "Remove this from my report now.",
    value: "Remove this from my report now.",
  },
];

const APR = [
  {
    label: "Select a action to be taken",
    value: null,
  },
  {
    label: "Delete this record for inaccuracy.",
    value: "Delete this record for inaccuracy.",
  },
  {
    label: "Remove this record for inaccuracy.",
    value: "Remove this record for inaccuracy.",
  },
  {
    label: "Please remove this record for inaccuracy.",
    value: "Please remove this record for inaccuracy.",
  },
  {
    label: "This record needs to be deleted, it's inaccurate.",
    value: "This record needs to be deleted, it's inaccurate.",
  },
  {
    label: "This record needs to be removed, it's inaccurate.",
    value: "This record needs to be removed, it's inaccurate.",
  },
  {
    label: "Please record this account for inaccuracy.",
    value: "Please record this account for inaccuracy.",
  },
  {
    label: "Delete this record, it's imcomplete.",
    value: "Delete this record, it's imcomplete.",
  },
  {
    label: "Remove this record, it's icomplete.",
    value: "Remove this record, it's icomplete.",
  },
  {
    label: "Please remove this from my credit report, it's incomplete.",
    value: "Please remove this from my credit report, it's incomplete.",
  },
  {
    label: "Please delete this from my credit report, it's incomplete.",
    value: "Please delete this from my credit report, it's incomplete.",
  },
  {
    label: "This record is incomplete, it needs to be removed from my report",
    value: "This record is incomplete, it needs to be removed from my report",
  },
  {
    label: "Remove this record for FCRA Violation.",
    value: "Remove this record for FCRA Violation.",
  },
  {
    label: "Delete this record for FCRA violation.",
    value: "Delete this record for FCRA violation.",
  },
  {
    label:
      "This record is violating my rights under FCRA laws, Delete it from my report.",
    value:
      "This record is violating my rights under FCRA laws, Delete it from my report.",
  },
  {
    label:
      "This account is violating my rights under FCRA laws, remove it from my report.",
    value:
      "This account is violating my rights under FCRA laws, remove it from my report.",
  },
];

const API = [
  {
    label: "Select a action to be taken",
    value: null,
  },
  {
    label: "Please remove it from my credit report.",
    value: "Please remove it from my credit report.",
  },
  {
    label: "Remove it from my credit report.",
    value: "Remove it from my credit report.",
  },
  {
    label: "Please delete it from my credit report.",
    value: "Please delete it from my credit report.",
  },
  {
    label: "Delete this from my credit report.",
    value: "Delete this from my credit report.",
  },
  {
    label: "it needs to be removed from my credit report.",
    value: "it needs to be removed from my credit report.",
  },
  {
    label: "it needs to be deleted from my credit report.",
    value: "it needs to be deleted from my credit report.",
  },
  {
    label: "Erase this from my credit report.",
    value: "Erase this from my credit report.",
  },
  {
    label: "This needs to be erased from my credit report.",
    value: "This needs to be erased from my credit report.",
  },
  {
    label: "Please delete this employment information from my credit report.",
    value: "Please delete this employment information from my credit report.",
  },
  {
    label: "Please remove this employment information from my credit report.",
    value: "Please remove this employment information from my credit report.",
  },
  {
    label: "Please erase this employment information from my credit report.",
    value: "Please erase this employment information from my credit report.",
  },
  {
    label: "Delete this employment information from my credit report.",
    value: "Delete this employment information from my credit report.",
  },
  {
    label: "Remove this employment information from my credit report.",
    value: "Remove this employment information from my credit report.",
  },
  {
    label: "Erase this employment information from my credit report.",
    value: "Erase this employment information from my credit report.",
  },
  {
    label: "Please remove this phone number from my credit report.",
    value: "Please remove this phone number from my credit report.",
  },
  {
    label: "Please delete this phone number from my credit report.",
    value: "Please delete this phone number from my credit report.",
  },
  {
    label: "Please erase this phone number from my credit report.",
    value: "Please erase this phone number from my credit report.",
  },
  {
    label: "Please remove any social security variation from my credit report.",
    value: "Please remove any social security variation from my credit report.",
  },
  {
    label: "Please delete any social security variation from my credit report.",
    value: "Please delete any social security variation from my credit report.",
  },
  {
    label: "Please erase any social security variation from my credit report.",
    value: "Please erase any social security variation from my credit report.",
  },
  {
    label:
      "Please correct/remove any name variation or aliases from my credit report.",
    value:
      "Please correct/remove any name variation or aliases from my credit report.",
  },
];

const ALP = [
  {
    label: "Select a action to be taken",
    value: null,
  },
  {
    label: "Please Update should report as on time and never late",
    value: "Please Update should report as on time and never late",
  },
  {
    label: "Please remove this late payment from my credit report.",
    value: "Please remove this late payment from my credit report.",
  },
  {
    label: "Please update this late payment to current.",
    value: "Please update this late payment to current.",
  },
  {
    label: "Remove this late payment from my report.",
    value: "Remove this late payment from my report.",
  },
  {
    label: "Update this late payment to current.",
    value: "Update this late payment to current.",
  },
  {
    label: "Should state as current and never late.",
    value: "Should state as current and never late.",
  },
  {
    label: "This payment needs to be removed from my report.",
    value: "This payment needs to be removed from my report.",
  },
  {
    label: "Otherwise remove this late payment from my report. ",
    value: "Otherwise remove this late payment from my report. ",
  },
  {
    label:
      "Otherwise this account needs to be updated to on time and never late.",
    value:
      "Otherwise this account needs to be updated to on time and never late.",
  },
  {
    label: "You need to remove this from my credit report.",
    value: "You need to remove this from my credit report.",
  },
  {
    label: "Delete this account for inaccuracy.",
    value: "Delete this account for inaccuracy.",
  },
  {
    label: "Remove this account for inaccuracy.",
    value: "Remove this account for inaccuracy.",
  },
  {
    label: "you need to update to paid as agreed",
    value: "you need to update to paid as agreed",
  },
  {
    label: "or you need to remove these unverified late payments immediately",
    value: "or you need to remove these unverified late payments immediately",
  },
  {
    label: "Please provide proof or update to current and never late.",
    value: "Please provide proof or update to current and never late.",
  },
  {
    label: "this is inaccurate and all lates need to be removed",
    value: "this is inaccurate and all lates need to be removed",
  },
  {
    label:
      "and if you cannot furnish bank records that prove when my payments were accepted, the account needs to be removed",
    value:
      "and if you cannot furnish bank records that prove when my payments were accepted, the account needs to be removed",
  },
];

const ActionByType = (type: string) => {
  switch (type) {
    case "Charge-offs":
      return ACO as TOption[];
    case "3rd Party Collector":
      return ACO as TOption[];
    case "Debt Buyers":
      return ACO as TOption[];
    case "Student Loans":
      return ACO as TOption[];
    case "Personal Info":
      return API as TOption[];
    case "Inquiries":
      return AIQ as TOption[];
    case "Repossessions":
      return ACO as TOption[];
    case "Public Records":
      return APR as TOption[];
    case "Late Payment":
      return ALP as TOption[];
    case "Bankrupcty":
      return ACO as TOption[];
    case "Child Support":
      return ACO as TOption[];
    default:
      return ACO as TOption[];
  }
};

export default ActionByType;
