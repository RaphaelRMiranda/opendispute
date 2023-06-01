import ChargeOffTemplate from "../Disputes/templates/ChargeOff";
import RdPartyCollectorTemplate from "../Disputes/templates/RdPartyCollector";
import DebtBuyersTemplate from "../Disputes/templates/DebtBuyers";
import StudentLoansTemplate from "../Disputes/templates/StudentLoans";
import PersonalInfoTemplate from "../Disputes/templates/PersonalInfo";
import InquiriesTemplate from "../Disputes/templates/Inquiries";
import RepossessionsTemplate from "../Disputes/templates/Repossessions";
import PublicRecordsTemplate from "../Disputes/templates/PublicRecords";
import LatePaymentTemplate from "../Disputes/templates/LatePayment";
import BankrupctyTemplate from "../Disputes/templates/Bankrupcty";
import ChildSupportTemplate from "../Disputes/templates/ChildSupport";

const SwitchTemplate = (index: number, type: string, id: string) => {
  switch (type) {
    case "Charge-offs":
      return <ChargeOffTemplate index={index} disputeId={id} />;
    case "3rd Party Collector":
      return <RdPartyCollectorTemplate index={index} disputeId={id} />;
    case "Debt Buyers":
      return <DebtBuyersTemplate index={index} disputeId={id} />;
    case "Student Loans":
      return <StudentLoansTemplate index={index} disputeId={id} />;
    case "Personal Info":
      return <PersonalInfoTemplate index={index} disputeId={id} />;
    case "Inquiries":
      return <InquiriesTemplate index={index} disputeId={id} />;
    case "Repossessions":
      return <RepossessionsTemplate index={index} disputeId={id} />;
    case "Public Records":
      return <PublicRecordsTemplate index={index} disputeId={id} />;
    case "Late Payment":
      return <LatePaymentTemplate index={index} disputeId={id} />;
    case "Bankrupcty":
      return <BankrupctyTemplate index={index} disputeId={id} />;
    case "Child Support":
      return <ChildSupportTemplate index={index} disputeId={id} />;
    default:
      return <ChargeOffTemplate index={index} disputeId={id} />;
  }
};

export default SwitchTemplate;
