import { TOption } from "@/components/Selects/types";

const CSFD1 = [
  {
    label: "Select a closing statement",
    value: null,
  },
  {
    label:
      "Please send me an updated credit report along with the results of your investigation.",
    value:
      "Please send me an updated credit report along with the results of your investigation.",
  },
  {
    label:
      "Please send an updated copy of my credit report to the above address. According to the act, there shall be no charge for this updated report. I also request that you please send notices of corrections to anyone who received my credit report in the past six months.",
    value:
      "Please send an updated copy of my credit report to the above address. According to the act, there shall be no charge for this updated report. I also request that you please send notices of corrections to anyone who received my credit report in the past six months.",
  },
  {
    label:
      "If possible, would you mind sending me an updated version of my credit report to the address mentioned above? As per the act, there won't be any charge required for this updated report. Moreover, I kindly request that you send notices of any corrections to all recipients of my credit report within the previous six months.",
    value:
      "If possible, would you mind sending me an updated version of my credit report to the address mentioned above? As per the act, there won't be any charge required for this updated report. Moreover, I kindly request that you send notices of any corrections to all recipients of my credit report within the previous six months.",
  },
  {
    label:
      "I'd really appreciate it if you could send me an updated version of my credit report to the address provided above. As stated in the act, there won't be any cost associated with this updated report.",
    value:
      "I'd really appreciate it if you could send me an updated version of my credit report to the address provided above. As stated in the act, there won't be any cost associated with this updated report.",
  },
  {
    label:
      "It would be really helpful if you could send me an updated version of my credit report to the address provided above.",
    value:
      "It would be really helpful if you could send me an updated version of my credit report to the address provided above.",
  },
  {
    label:
      "I'd really appreciate it if you could send me an updated version of my credit report to the address provided above.",
    value:
      "I'd really appreciate it if you could send me an updated version of my credit report to the address provided above.",
  },
  {
    label:
      "I would be grateful if you could provide me with an updated credit report and the results of the investigation you carried out.",
    value:
      "I would be grateful if you could provide me with an updated credit report and the results of the investigation you carried out.",
  },
  {
    label:
      "I kindly request that you send me an updated credit report, along with the outcomes of your investigation.",
    value:
      "I kindly request that you send me an updated credit report, along with the outcomes of your investigation.",
  },
  {
    label:
      "Could you please forward me an updated credit report and share the results of your investigation?",
    value:
      "Could you please forward me an updated credit report and share the results of your investigation?",
  },
];

const CSFD2 = [
  {
    label: "Select a closing statement",
    value: null,
  },
  {
    label: "I am waiting for a newly updated report now.",
    value: "I am waiting for a newly updated report now.",
  },
  {
    label: "At this point I am waiting for an updated report now.",
    value: "At this point I am waiting for an updated report now.",
  },
  {
    label: "Send me a new report once you have finalized your investigation.",
    value: "Send me a new report once you have finalized your investigation.",
  },
  {
    label:
      "Please forward me a new report once you have concluded your investigation. ",
    value:
      "Please forward me a new report once you have concluded your investigation.",
  },
  {
    label:
      "Once your investigation is finished, could you please send me a new report?",
    value:
      "Once your investigation is finished, could you please send me a new report?",
  },
  {
    label:
      "Please send me an updated report with the above referenced information removed from my credit report.",
    value:
      "Please send me an updated report with the above referenced information removed from my credit report.",
  },
  {
    label:
      "Please send me an updated report that has the mentioned information removed from my credit report.",
    value:
      "Please send me an updated report that has the mentioned information removed from my credit report.",
  },
  {
    label:
      "Could you please provide me with an updated report that excludes the information referenced above from my credit report?",
    value:
      "Could you please provide me with an updated report that excludes the information referenced above from my credit report?",
  },
  {
    label:
      "I would appreciate it if you could send me an updated report wherein the information referred to above has been eliminated from my credit report.",
    value:
      "I would appreciate it if you could send me an updated report wherein the information referred to above has been eliminated from my credit report.",
  },
];

const CSFD3 = [
  {
    label: "Select a closing statement",
    value: null,
  },
  {
    label: "V1",
    value: `I am extremely interested in understanding the basis for this erroneous conclusion. It would be greatly appreciated if you could provide me with a comprehensive list of all documents and correspondence related to this matter. Kindly include the names and contact information of all employees with whom you have had discussions during the course of this investigation.  

    Through my own research, I discovered that in the cases of Cushman v TransUnion, Stevenson v. TRW (Experian), and Richardson v. Fleet, Equifax, et al, the courts consistently ruled that credit reporting agencies (CRAs) cannot simply echo information provided by creditors and collection agencies. It is mandated that they conduct an independent and reasonable investigation to validate the debt's authenticity and assess the integrity of the creditor or collection agency in question. Sending a generic form lacking my dispute reasons via the e-Oscar system is far from reasonable. 
    
    As I am currently preparing for a legal case, it is crucial that I receive precise answers to the specific questions posed in this letter. I anticipate a response within 15 days upon receiving this letter, or else I will request the permanent removal of the item in question from all records.`,
  },
  {
    label: "V2",
    value: `It is of great importance to me to understand how you reached this erroneous conclusion. Therefore, I kindly request a complete list of all documents and correspondence pertaining to this investigation. Please ensure that it includes the names and contact information of all employees you have interacted with during the process. Based on my independent research, I found that in the cases of Cushman v TransUnion, Stevenson v. TRW (Experian), and Richardson v. Fleet, Equifax, et al, the courts have consistently ruled that credit reporting agencies (CRAs) are prohibited from merely parroting information supplied by creditors and collection agencies. Instead, they are required to conduct an independent and reasonable investigation to verify the legitimacy of the debt and evaluate the honesty and integrity of the creditor or collection agency. Sending a generic form through the e-Oscar system without even including my reasons for disputing is in clear violation of this standard.  

    In my own investigation, I discovered that in the cases of Cushman v TransUnion, Stevenson v. TRW (Experian), and Richardson v. Fleet, Equifax, et al, the courts consistently ruled that credit reporting agencies (CRAs) cannot simply replicate information provided by creditors and collection agencies. It is their responsibility to conduct an independent and reasonable investigation to ensure the accuracy of the debt and evaluate the credibility and integrity of the creditor or collection agency involved. The act of sending a generic form through the e-Oscar system that lacks my dispute reasons is not aligned with these court rulings and is, therefore, unreasonable. 
    
    Given that I am in the process of planning a legal case, it is imperative that I obtain detailed responses to the specific inquiries outlined in this letter. I anticipate receiving a response within 15 days of this letter's receipt, failing which I will insist on the immediate removal of the item from all records.`,
  },
  {
    label: "V3",
    value: `I am genuinely curious about the reasoning behind this erroneous conclusion. To facilitate my understanding, I would like to review a comprehensive list of all documents and correspondence associated with this investigation. Kindly provide the names and contact information of all employees you communicated with throughout the investigation.  

    My personal research revealed that in the cases of Cushman v TransUnion, Stevenson v. TRW (Experian), and Richardson v. Fleet, Equifax, et al, the courts consistently emphasized that credit reporting agencies (CRAs) must not merely repeat information furnished by creditors and collection agencies. They are obligated to conduct an independent and reasonable investigation to validate the debt's legitimacy and assess the honesty and integrity of the creditor or collection agency in question. Sending a generic form through the e-Oscar system without including my dispute reasons is clearly contrary to these court rulings and lacks reasonableness. 
    
    As I am actively strategizing for a legal case, it is vital for me to receive explicit answers to the specific questions stated in this letter. I have the expectation of receiving a response within 15 days upon your receipt of this letter; otherwise, I will demand the permanent removal of the item from all records.`,
  },
  {
    label: "V4",
    value: `I have a strong interest in learning how you arrived at this erroneous conclusion. To assist me in comprehending your decision-making process, I would appreciate receiving a complete list of all documents and correspondence pertaining to this investigation. It would be helpful if you could also include the names and contact information of the employees you consulted during this investigation.  

    In my own investigation, I discovered that in the cases of Cushman v TransUnion, Stevenson v. TRW (Experian), and Richardson v. Fleet, Equifax, et al, the courts consistently ruled that credit reporting agencies (CRAs) cannot simply replicate information provided by creditors and collection agencies. It is their responsibility to conduct an independent and reasonable investigation to ensure the accuracy of the debt and evaluate the credibility and integrity of the creditor or collection agency involved. The act of sending a generic form through the e-Oscar system that lacks my dispute reasons is not aligned with these court rulings and is, therefore, unreasonable. 
    
    Since I am currently preparing for a legal case, it is essential that I receive precise and targeted answers to the specific questions presented in this letter. I anticipate a response within 15 days from the date of receiving this letter, or else I will insist on the item in question being permanently expunged from all records.`,
  },
  {
    label: "V5",
    value: `Understanding how you arrived at this erroneous conclusion is of great interest to me. To gain clarity, I kindly request a thorough list of all documents and correspondence related to this investigation. Additionally, please include the names and contact information of the employees with whom you had discussions during this investigation.  

    From my own research, I learned that in the cases of Cushman v TransUnion, Stevenson v. TRW (Experian), and Richardson v. Fleet, Equifax, et al, the courts consistently ruled that credit reporting agencies (CRAs) cannot simply echo information provided by creditors and collection agencies. They are legally required to conduct an independent and reasonable investigation to verify the accuracy of the debt and ensure the honesty and integrity of the creditor or collection agency involved. Therefore, sending a generic form through the e-Oscar system without even including my reasons for disputing is clearly unreasonable according to these court decisions. 
    
    In light of my ongoing legal case preparations, it is of utmost importance that I obtain specific answers to the particular questions posed in this letter. I anticipate a response within 15 days upon the receipt of this letter, or I will demand the complete removal of the item in question from all records.`,
  },
  {
    label: "V6",
    value: `I am genuinely interested in comprehending the rationale behind this erroneous conclusion. Therefore, I kindly ask for a complete list of all documents and correspondence relevant to this investigation. It would be highly appreciated if you could include the names and contact information of the employees you conversed with during this investigation.  

    Based on the extensive research I conducted, I discovered that in the cases of Cushman v TransUnion, Stevenson v. TRW (Experian), and Richardson v. Fleet, Equifax, et al, the courts repeatedly ruled that credit reporting agencies (CRAs) cannot merely replicate information from creditors and collection agencies. They are obligated to perform an independent and reasonable investigation to establish the validity of the debt and assess the credibility and integrity of the creditor or collection agency involved. Hence, sending a generic form lacking my dispute reasons through the e-Oscar system is contrary to the requirements established by these court cases and, therefore, unreasonable. 
    
    Given that I am actively involved in planning a legal case, it is crucial that I receive specific and comprehensive answers to the questions addressed in this letter. I expect a response within 15 days of receiving this letter; otherwise, I will request the item in question to be permanently eradicated from all records.`,
  },
  {
    label: "V7",
    value: `Understanding the basis for this erroneous conclusion is of utmost importance to me. In light of this, I would appreciate receiving a comprehensive list of all documents and correspondence associated with this investigation. Please ensure that it includes the names and contact information of all employees involved in this investigation.  

    My research findings indicate that in the cases of Cushman v TransUnion, Stevenson v. TRW (Experian), and Richardson v. Fleet, Equifax, et al, the courts consistently held that credit reporting agencies (CRAs) must not simply parrot information provided by creditors and collection agencies. It is incumbent upon them to conduct an independent and reasonable investigation to ascertain the accuracy of the debt and evaluate the honesty and integrity of the creditor or collection agency in question. Hence, the act of sending a generic form through the e-Oscar system without including my reasons for disputing falls short of the mandated reasonableness outlined by these court rulings. 
    
    As I am in the process of planning a legal case, it is essential that I receive detailed and accurate responses to the specific questions addressed in this letter. I anticipate a response within 15 days of receiving this letter; otherwise, I will insist on the item in question being permanently removed from all records.`,
  },
  {
    label: "V8",
    value: `I am deeply interested in learning how this erroneous conclusion was reached. To aid in my understanding, I kindly request a complete list of all documents and correspondence pertaining to this investigation. It would be helpful if you could also provide the names and contact information of the employees you engaged with during this investigation.  

    From the research I conducted, I discovered that in the cases of Cushman v TransUnion, Stevenson v. TRW (Experian), and Richardson v. Fleet, Equifax, et al, the courts consistently ruled that credit reporting agencies (CRAs) are not allowed to simply replicate information provided by creditors and collection agencies. They are obliged to conduct an independent and reasonable investigation to verify the legitimacy of the debt and assess the honesty and integrity of the creditor or collection agency involved. Sending a generic form through the e-Oscar system without even including my dispute reasons is not reasonable and goes against the established legal precedents.  
    
    As I am in the process of preparing for a legal case, it is imperative that I receive explicit responses to the specific questions outlined in this letter. I anticipate a response within 15 days from the receipt of this letter; otherwise, I will insist on the immediate and permanent removal of the item in question from all records.`,
  },
  {
    label: "V9",
    value: `Gaining insight into the thought process behind this erroneous conclusion is of significant interest to me. Therefore, I kindly request a thorough list of all documents and correspondence related to this investigation. Please include the names and contact information of the employees you communicated with as part of this investigation.  

    Based on my own investigation, I found that in the cases of Cushman v TransUnion, Stevenson v. TRW (Experian), and Richardson v. Fleet, Equifax, et al, the courts repeatedly ruled that credit reporting agencies (CRAs) cannot merely mimic information supplied by creditors and collection agencies. It is mandatory for them to carry out an independent and reasonable investigation to ensure the accuracy of the debt and evaluate the honesty and integrity of the creditor or collection agency. Therefore, sending a generic form through the e-Oscar system without including my reasons for disputing is inconsistent with these court rulings and is deemed unreasonable. 
    
    Since I am currently engaged in planning a legal case, it is vital for me to receive specific and direct answers to the particular questions presented in this letter. I expect a response within 15 days upon the receipt of this letter; otherwise, I will demand the item in question to be permanently expunged from all records.`,
  },
  {
    label: "V10",
    value: `I am genuinely curious to know how you arrived at this erroneous conclusion. To assist me in comprehending your perspective, I kindly request a comprehensive list of all documents and correspondence pertaining to this investigation. It would be greatly appreciated if you could provide the names and contact information of the employees you consulted during this investigation.  

    My research into the cases of Cushman v TransUnion, Stevenson v. TRW (Experian), and Richardson v. Fleet, Equifax, et al revealed that the courts consistently held credit reporting agencies (CRAs) accountable for not solely parroting information provided by creditors and collection agencies. They are legally obligated to conduct an independent and reasonable investigation to verify the validity of the debt and assess the honesty and integrity of the creditor or collection agency involved. Sending a generic form through the e-Oscar system without even including my dispute reasons is clearly unreasonable and fails to meet the standards set by these court rulings. 
    
    Considering my ongoing preparations for a legal case, it is crucial that I obtain specific answers to the precise questions outlined in this letter. I expect to receive a response within 15 days of your receipt of this letter; failure to do so will result in my request for the permanent removal of the item from all records.`,
  },
];

const CSFD4 = [
  {
    label: "Select a closing statement",
    value: null,
  },
  {
    label: "I expect you to either send",
    value:
      "I expect you to either send me actual proof that an independent investigation took place this time or these inaccurate accounts better be removed from my credit report. I will take legal action if necessary because it’s your job to make sure a consumer’s credit profile is accurate.",
  },
  {
    label: "It is imperative that you furnish",
    value:
      "It is imperative that you furnish me with concrete evidence of an independent investigation being conducted this time, or else I demand the immediate removal of these erroneous accounts from my credit report. Failure to comply may result in legal consequences, as it is your responsibility to ensure the accuracy of a consumer's credit profile.",
  },
  {
    label: "Either provide me with substantiated",
    value:
      "Either provide me with substantiated proof of an independent investigation taking place now, or take swift action to eliminate these erroneous accounts from my credit report. I will not hesitate to resort to legal measures if required, as it is your duty to ensure the precision of a consumer's credit profile.",
  },
  {
    label: "I anticipate receiving tangible",
    value:
      "I anticipate receiving tangible evidence of a thorough independent investigation being carried out this time. Alternatively, I insist that you promptly delete these misleading accounts from my credit report. Failure to meet these expectations may result in legal repercussions, as it is your primary obligation to ensure the accuracy of a consumer's credit profile.",
  },
  {
    label: "You must furnish me with legitimate",
    value:
      "You must furnish me with legitimate evidence indicating the completion of an independent investigation, or else I demand the immediate removal of these inaccurate accounts from my credit report. I am prepared to take legal action, if necessary, as it is your responsibility to guarantee the precision of a consumer's credit profile.",
  },
  {
    label: "I expect you to provide me with",
    value:
      "I expect you to provide me with verifiable proof of an independent investigation having taken place this time. Failing to do so will require the prompt removal of these erroneous accounts from my credit report. If this demand is not met, I will not hesitate to pursue legal action, as it is your duty to ensure the accuracy of a consumer's credit profile.",
  },
  {
    label: "Either present me with actual evidence",
    value:
      "Either present me with actual evidence that an independent investigation has been conducted, or take immediate steps to rectify these inaccurate accounts on my credit report. I am prepared to initiate legal proceedings if necessary, as it is your responsibility to ensure the accuracy of a consumer's credit profile.",
  },
  {
    label: "I demand that you provide me with",
    value:
      "I demand that you provide me with concrete proof of an independent investigation having been carried out this time. If you fail to comply, I expect these erroneous accounts to be promptly expunged from my credit report. Should this not occur, I will not hesitate to take legal action, as it is your obligation to ensure the accuracy of a consumer's credit profile.",
  },
  {
    label: "I insist on receiving substantive proof",
    value:
      "I insist on receiving substantive proof of an independent investigation taking place this time. Alternatively, I expect the removal of these inaccurate accounts from my credit report without delay. If my demands are not met, I am fully prepared to pursue legal recourse, as it is your responsibility to ensure the accuracy of a consumer's credit profile.",
  },
  {
    label: "You are expected to furnish me",
    value:
      "You are expected to furnish me with legitimate evidence indicating that an independent investigation has been conducted. If you fail to meet this requirement, I demand the immediate removal of these misleading accounts from my credit report. Failure to comply may result in legal action, as it is your duty to ensure the accuracy of a consumer's credit profile.",
  },
  {
    label: "I demand that you either provide",
    value:
      "I demand that you either provide me with actual proof of an independent investigation or promptly eliminate these inaccurate accounts from my credit report. Failure to comply may lead to legal repercussions, as it is your responsibility to ensure the accuracy of a consumer's credit profile.",
  },
];

const CSFD5 = [
  {
    label: "Select a closing statement",
    value: null,
  },
  {
    label:
      "I am waiting for a new credit report with the above-referenced inaccuracies removed.",
    value:
      "I am waiting for a new credit report with the above-referenced inaccuracies removed.",
  },
  {
    label:
      "I eagerly await a revised credit report wherein the aforementioned inaccuracies have been rectified.",
    value:
      "I eagerly await a revised credit report wherein the aforementioned inaccuracies have been rectified.",
  },
  {
    label:
      "I am patiently anticipating a fresh credit report that no longer contains the mentioned inaccuracies.",
    value:
      "I am patiently anticipating a fresh credit report that no longer contains the mentioned inaccuracies.",
  },
  {
    label:
      "My expectation is to receive a new credit report that has effectively addressed the mentioned inaccuracies.",
    value:
      "My expectation is to receive a new credit report that has effectively addressed the mentioned inaccuracies.",
  },
  {
    label:
      "I am currently in a state of anticipation, waiting for a revised credit report that excludes the inaccuracies mentioned above.",
    value:
      "I am currently in a state of anticipation, waiting for a revised credit report that excludes the inaccuracies mentioned above.",
  },
  {
    label:
      "I eagerly look forward to receiving an updated credit report with the removal of the inaccuracies referenced above.",
    value:
      "I eagerly look forward to receiving an updated credit report with the removal of the inaccuracies referenced above.",
  },
  {
    label:
      "I am eagerly awaiting the arrival of a new credit report wherein the inaccuracies highlighted above have been expunged.",
    value:
      "I am eagerly awaiting the arrival of a new credit report wherein the inaccuracies highlighted above have been expunged.",
  },
  {
    label:
      "I am patiently waiting for a revised credit report that reflects the removal of the inaccuracies mentioned earlier.",
    value:
      "I am patiently waiting for a revised credit report that reflects the removal of the inaccuracies mentioned earlier.",
  },
  {
    label:
      "I anxiously await a new credit report that has been rectified to eliminate the aforementioned inaccuracies.",
    value:
      "I anxiously await a new credit report that has been rectified to eliminate the aforementioned inaccuracies.",
  },
  {
    label:
      "I am eagerly anticipating the delivery of a credit report that no longer contains the inaccuracies mentioned above.",
    value:
      "I am eagerly anticipating the delivery of a credit report that no longer contains the inaccuracies mentioned above.",
  },
  {
    label:
      "My expectation is to receive a fresh credit report wherein the above-mentioned inaccuracies have been removed.",
    value:
      "My expectation is to receive a fresh credit report wherein the above-mentioned inaccuracies have been removed.",
  },
];

const CSFD6 = [
  {
    label: "Select a closing statement",
    value: null,
  },
  {
    label:
      "Enclosed, you will find copies of the formal complaint I have submitted to the CFPB for your reference. It is imperative that I receive an updated credit report in response to this complaint.",
    value:
      "Enclosed, you will find copies of the formal complaint I have submitted to the CFPB for your reference. It is imperative that I receive an updated credit report in response to this complaint.",
  },
  {
    label:
      "Attached herewith are the copies of the formal complaint I have forwarded to the CFPB. It is my expectation to receive an updated credit report in light of this complaint.",
    value:
      "Attached herewith are the copies of the formal complaint I have forwarded to the CFPB. It is my expectation to receive an updated credit report in light of this complaint.",
  },
  {
    label:
      "Please review the attached copies of the formal complaint that I have sent to the CFPB. In accordance with this complaint, I anticipate receiving an updated credit report promptly.",
    value:
      "Please review the attached copies of the formal complaint that I have sent to the CFPB. In accordance with this complaint, I anticipate receiving an updated credit report promptly.",
  },
  {
    label:
      "I have provided the attached copies of the formal complaint that I have lodged with the CFPB. As a result, I expect to receive an updated credit report in response to this complaint.",
    value:
      "I have provided the attached copies of the formal complaint that I have lodged with the CFPB. As a result, I expect to receive an updated credit report in response to this complaint.",
  },
  {
    label:
      "Kindly refer to the attached copies of the formal complaint I have submitted to the CFPB. I request that you take appropriate action by providing me with an updated credit report.",
    value:
      "Kindly refer to the attached copies of the formal complaint I have submitted to the CFPB. I request that you take appropriate action by providing me with an updated credit report.",
  },
  {
    label:
      "I hereby share with you the attached copies of the formal complaint that I have officially filed with the CFPB. Consequently, I expect to receive an updated credit report in order to address the concerns raised in this complaint.",
    value:
      "I hereby share with you the attached copies of the formal complaint that I have officially filed with the CFPB. Consequently, I expect to receive an updated credit report in order to address the concerns raised in this complaint.",
  },
  {
    label:
      "Please take a moment to review the attached copies of the formal complaint I have lodged with the CFPB. In light of this complaint, it is essential that I receive an updated credit report as a matter of urgency.",
    value:
      "Please take a moment to review the attached copies of the formal complaint I have lodged with the CFPB. In light of this complaint, it is essential that I receive an updated credit report as a matter of urgency.",
  },
  {
    label:
      "Enclosed, you will find the attached copies of the formal complaint that I have submitted to the CFPB. It is crucial that I receive an updated credit report in response to the concerns raised in this complaint.",
    value:
      "Enclosed, you will find the attached copies of the formal complaint that I have submitted to the CFPB. It is crucial that I receive an updated credit report in response to the concerns raised in this complaint.",
  },
  {
    label:
      "Attached herewith are the copies of the formal complaint I have forwarded to the CFPB for your attention. As a result, I anticipate receiving an updated credit report to address the issues mentioned in this complaint.",
    value:
      "Attached herewith are the copies of the formal complaint I have forwarded to the CFPB for your attention. As a result, I anticipate receiving an updated credit report to address the issues mentioned in this complaint.",
  },
  {
    label:
      "I have attached copies of the formal complaint that I have recently filed with the CFPB. In light of this complaint, I expect to receive an updated credit report to ensure that the concerns raised are appropriately addressed.",
    value:
      "I have attached copies of the formal complaint that I have recently filed with the CFPB. In light of this complaint, I expect to receive an updated credit report to ensure that the concerns raised are appropriately addressed.",
  },
];

const CloseStatementByRound = (disputeRound: number) => {
  switch (disputeRound) {
    case 1:
      return CSFD1 as TOption[];
    case 2:
      return CSFD2 as TOption[];
    case 3:
      return CSFD3 as TOption[];
    case 4:
      return CSFD4 as TOption[];
    case 5:
      return CSFD5 as TOption[];
    case 6:
      return CSFD6 as TOption[];
    default:
      return CSFD1 as TOption[];
  }
};

export default CloseStatementByRound;
