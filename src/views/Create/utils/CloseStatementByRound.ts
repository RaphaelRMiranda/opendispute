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

const CloseStatementByRound = (disputeRound: number) => {
  switch (disputeRound) {
    case 1:
      return CSFD1 as TOption[];
    case 2:
      return CSFD2 as TOption[];
    case 3:
      return CSFD3 as TOption[];
    default:
      return CSFD1 as TOption[];
  }
};

export default CloseStatementByRound;
