import { TOption } from "@/components/Selects/types";

const GSFD1 = [
  {
    label: "Select a greeting sequence",
    value: "",
  },
  {
    label: "Report Research",
    value:
      "I recently looked at my credit report and found something that seems weird. I found accounts that are inaccurate in my credit report. So, I am writing you this letter, because after doing some research I realized that I have the right as a consumer to dispute anything in my credit report that is inaccurately reported there. Please investigate the following accounts:",
  },
  {
    label: "Tried Buying a car",
    value:
      "I recently went to a car dealership and was told my credit was too low to get approved for a car loan with reasonable interest rates. Without any knowledge of why, I decided to look at my credit and wow there are so many inaccuracies there. Please investigate the following accounts:",
  },
  {
    label: "Denied Apartment",
    value:
      "I was recently denied on an application for an apartment and was told the reason for denial was because my credit is so low. I did not get where they got that idea from until I decided to look at my credit report and found a lot of inaccuracies there. Please investigate the following accounts:",
  },
  {
    label: "Denied Mortgage",
    value:
      "A while back I sat with a mortgage broker to prepare myself and see what a loan for a house would cost me. I was in disbelief when the loan officer told me what my credit was and that it would be extremely difficult to qualify for a mortgage with my current credit rating. So, I decided to take matters into my own hands and look at my report and wow! You folks will let anyone report anything on there. Investigate the following accounts:",
  },
  {
    label: "Inaccurate Reporting",
    value:
      "The following accounts seem to be reporting on my credit report in error. Please investigate the following inaccuracies:",
  },
  {
    label: "Denied Insurance",
    value:
      "I recently received an adverse action notice from my insurance company stating the reason my insurance premiums were high is due to my credit score. So, I decided to look at my credit report and found lots of items in error. Please investigate the following accounts:",
  },
  {
    label: "Monitoring my credit",
    value:
      "Recently I started to monitor my credit because I want to take more control of my financial future. I am not sure why some items are reporting on my credit, they seem inaccurate. Please investigate the following accounts:",
  },
  {
    label: "FCRA Right to dispute",
    value:
      "According to the Federal Credit Reporting Act, a consumer has the right to challenge any inaccurate, unverifiable, or incomplete information on their credit report. I am not sure why, but the following accounts are reporting inaccuracies on my credit report:",
  },
  {
    label: "Formal Complaint",
    value:
      "This letter is to be taken as my formal complaint that you are reporting inaccurate credit information on my credit file. ",
  },
];

const GSFD2 = [
  {
    label: "Select a greeting sequence",
    value: "",
  },
  {
    label: "I received your response",
    value:
      "I received your response regarding my previously sent dispute. I don’t understand something though. As I look through my report all the inaccuracies are still present. Did you even perform a proper investigation? Please investigate the following inaccuracies:",
  },
  {
    label: "I don't understand how",
    value:
      "I just don't understand how you are still reporting inaccurate information on my credit report. It is your responsibility to independently investigate any information a data furnisher reports on a consumer's credit. Please re-investigate the following information:",
  },
  {
    label: "I don't agree",
    value:
      "I am in total disagreement with your investigation response.  The incorrect items listed below still appear on my credit report, even after your investigation.  I would like these items immediately re-investigated and for good cause.  These inaccuracies are highly injurious to my credit rating.",
  },
  {
    label: "I'm not sure what to make of",
    value:
      "I’m not sure what to make of the dispute results you sent me. How are you verifying this information or even claiming this information is verified as accurate when my very own credit report shows otherwise? Please perform an actual investigation because the following accounts are inaccurate:",
  },
  {
    label: "I'm trying to wrap my head around",
    value:
      "I’m trying to wrap my head around the fact that You practically stated that every inaccurate account on my credit report was verified as accurate, yet all the inaccuracies and discrepancies are still there. I am not sure where you are getting your information from, but it seems you did not investigate anything. Please re-investigate the following accounts:",
  },
  {
    label: "I have asked you to investigate",
    value:
      "I have asked you to investigate these inaccuracies and judging by your response, it’s obvious no true investigation took place so now as a consumer I demand to see the proof that you investigated these accounts. These inaccuracies are still reporting on my credit report:",
  },
];

const GSFD3 = [
  {
    label: "Select a greeting sequence",
    value: "",
  },
  {
    label: "MOV1",
    value:
      "I recently received a response to the dispute I filed under FCRA 611 (a) regarding an erroneous item on my credit report. I was utterly surprised to discover that you verified the disputed item, and it continues to persist on my credit report. Had you conducted a thorough investigation instead of relying solely on your e-Oscar system, you would have been aware that the items listed below should have been removed during the initial investigation.",
  },
  {
    label: "MOV2",
    value:
      "Upon receiving a response to my dispute filed under FCRA 611 (a) concerning an erroneous entry on my credit report, I was taken aback to find that you somehow verified the disputed item, resulting in its presence on my credit report. If a comprehensive investigation had been carried out instead of solely relying on the e-Oscar system, you would have been informed that the items listed below were supposed to be removed in the initial investigation.",
  },
  {
    label: "MOV3",
    value:
      "I recently received a response to my dispute made under FCRA 611 (a) regarding an incorrect item on my credit report. To my astonishment, you verified the disputed item, which remains on my credit report despite its inaccuracy. In case you had conducted a proper investigation, rather than solely relying on the e-Oscar system, you would have discovered that the items listed below should have been eliminated during the initial investigation.",
  },
  {
    label: "MOV4",
    value:
      "After filing a dispute under FCRA 611 (a) to address an erroneous item on my credit report, I received a response indicating that you verified the disputed entry. I am shocked and disappointed to find that the item is still present on my credit report. If you had properly investigated, rather than solely relying on the e-Oscar system, you would have known that the items listed below were supposed to be removed as part of the initial investigation.",
  },
  {
    label: "MOV5",
    value:
      "I received a response to my dispute filed under FCRA 611 (a) regarding an incorrect item on my credit report. Much to my surprise, you verified the disputed item, resulting in its persistence on my credit report despite its inaccuracy. Had you conducted a thorough investigation instead of depending solely on the e-Oscar system, you would have been aware that the items listed below should have been eliminated during the initial investigation.",
  },
  {
    label: "MOV6",
    value:
      "Following my dispute filed under FCRA 611 (a) concerning an erroneous item on my credit report, I received a response indicating that you verified the disputed entry. I was shocked to discover that the item remains on my credit report despite its clear inaccuracies. If proper investigation procedures were followed, instead of solely relying on the e-Oscar system, you would have been informed that the items listed below should have been removed during the initial investigation.",
  },
  {
    label: "MOV7",
    value:
      "I recently received a response to my dispute made under FCRA 611 (a) regarding an erroneous item on my credit report. I was astounded to learn that you verified the disputed item, and it continues to appear on my credit report. If you had carried out a diligent investigation instead of solely relying on the e-Oscar system, you would have known that the items listed below were supposed to be removed in the initial investigation.",
  },
  {
    label: "MOV8",
    value:
      "After filing a dispute under FCRA 611 (a) to address an inaccurate entry on my credit report, I received a response stating that you verified the disputed item. I am deeply shocked and disappointed to find that it still remains on my credit report. Had you conducted a comprehensive investigation rather than relying solely on the e-Oscar system, you would have been aware that the items listed below should have been removed during the initial investigation.",
  },
  {
    label: "MOV9",
    value:
      "I received a response to my dispute filed under FCRA 611 (a) concerning an incorrect item on my credit report. To my disbelief, you verified the disputed item, and it is still present on my credit report. If a meticulous investigation had been conducted instead of solely relying on the e-Oscar system, you would have discovered that the items listed below were supposed to be eliminated during the initial investigation.",
  },
  {
    label: "MOV10",
    value:
      "Following my dispute under FCRA 611 (a) concerning an erroneous item on my credit report, I received a response indicating that you verified the disputed entry. I was shocked and frustrated to find that the item persists on my credit report despite the evidence provided. If you had conducted a thorough investigation rather than solely relying on the e-Oscar system, you would have known that the items listed below should have been removed as part of the initial investigation.",
  },
];

const GSFD4 = [
  {
    label: "Select a greeting sequence",
    value: null,
  },
  {
    label: "MOV PT2.1",
    value:
      "I received your response in regard to my request for the method you used to verify the inaccurate accounts reporting on my credit report. I specifically requested proof that an independent investigation was performed along with the names of the representatives you spoke with, the phone number or any proof you did something. Instead, all you sent me was a brief description of a dispute process. That is not proof you actually performed any investigation, and the following accounts are now in violation:",
  },
  {
    label: "MOV PT2.2",
    value:
      "Regarding my request for the method you employed to authenticate the erroneous accounts reported on my credit report, I have received your response. However, it fails to provide the evidence I specifically asked for, such as confirmation of an independent investigation, details of the representatives contacted, and any supporting documentation. Instead, you only shared a concise explanation of the dispute process. This does not serve as proof of conducting any investigation, and as a result, the following accounts are now considered in violation:",
  },
  {
    label: "MOV PT2.3",
    value:
      "Your response to my inquiry about the method utilized to verify the incorrect accounts on my credit report has been received. Regrettably, it does not contain the requested proof I specifically asked for. I required evidence of an independent investigation being conducted, including the names of the representatives contacted and any supporting documentation. All you provided was a brief description of the dispute process, which does not establish that any investigation was actually carried out. Consequently, the following accounts are now deemed in violation:",
  },
  {
    label: "MOV PT2.4",
    value:
      "Thank you for responding to my request concerning the approach used to validate the inaccurate accounts reported on my credit report. However, I must express my disappointment as your response fails to meet my specific requirements. I explicitly asked for proof of an independent investigation, including details of the representatives spoken to and any supporting evidence. Instead, you merely provided a brief description of the dispute process. This description does not serve as sufficient proof of an actual investigation, and as a result, the following accounts are now considered in violation:",
  },
  {
    label: "MOV PT2.5",
    value:
      "In reference to my previous request for the methodology employed to verify the erroneous accounts that appear on my credit report, I have received your response. Unfortunately, it lacks the necessary evidence I specifically sought. I requested proof of an independent investigation conducted, along with the names of the representatives contacted and any supporting proof. Instead, you only provided a brief description of the dispute process. This description does not constitute proof that any investigation took place, and consequently, the following accounts are now in violation:",
  },
  {
    label: "MOV PT2.6",
    value:
      "I have received your response regarding my request for clarification on the methodology used to authenticate the inaccurate accounts reported on my credit report. However, I am disappointed to find that it does not fulfill the requirements I outlined. I explicitly asked for proof of an independent investigation, including the names of the representatives you communicated with and any form of documentation. Instead, you simply provided a brief description of the dispute process. This does not serve as proof of conducting any investigation, resulting in the following accounts being in violation:",
  },
  {
    label: "MOV PT2.7",
    value:
      "Your response to my inquiry about the method employed to verify the incorrect accounts listed on my credit report has been received. Unfortunately, it falls short of providing the necessary evidence I specifically requested. I asked for proof of an independent investigation being conducted, including the identities of the representatives spoken to and any supporting proof. However, all I received was a brief description of the dispute process. This description does not constitute proof of an actual investigation, leading to the conclusion that the following accounts are now in violation:",
  },
  {
    label: "MOV PT2.8",
    value:
      "I acknowledge receipt of your response regarding my request for information about the process used to validate the inaccurate accounts reported on my credit report. However, I am disappointed to note that it does not include the required evidence I specifically asked for. I specifically requested proof of an independent investigation being performed, including the identities of the representatives you engaged with and any supporting evidence. Instead, all I received was a brief overview of the dispute process. This overview does not serve as proof of conducting any investigation, resulting in the following accounts now being in violation:",
  },
  {
    label: "MOV PT2.9",
    value:
      "In regard to my request for the methodology you employed to verify the erroneous accounts reported on my credit report, I have received your response. However, I am dissatisfied with the content as it fails to provide the proof I explicitly sought. I requested evidence of an independent investigation, including the names of the representatives you conversed with and any supporting documentation. Regrettably, all you provided was a brief description of the dispute process. This description does not constitute sufficient proof of conducting any investigation, leading to the conclusion that the following accounts are now in violation:",
  },
  {
    label: "MOV PT2.10",
    value:
      "I received your response concerning my request for the method used to verify the inaccurate accounts reported on my credit report. Unfortunately, it does not meet my specific requirements. I explicitly asked for proof of an independent investigation, along with the names of the representatives you interacted with and any supporting proof. Instead, you only provided a brief description of the dispute process. This description does not serve as proof that any investigation was carried out, and consequently, the following accounts are now considered in violation:",
  },
  {
    label: "MOV PT2.11",
    value:
      "Your response to my inquiry regarding the methodology employed to verify the incorrect accounts on my credit report has been received. However, I am dissatisfied with the provided information as it lacks the necessary proof I specifically requested. I explicitly asked for evidence of an independent investigation, including details of the representatives contacted and any supporting documentation. Regrettably, you only shared a brief description of the dispute process. This description does not establish that any investigation was conducted, resulting in the following accounts now being deemed in violation:",
  },
];

const GSFD5 = [
  {
    label: "Select a greeting sequence",
    value: null,
  },
  {
    label: "This is becoming exhausting",
    value:
      "This is becoming exhausting, once again you refuse to fulfil your obligations under the FRCA. Your negligence is costing me time and money. At this point I have documented your refusal to adequately perform an independent investigation and let this letter be on record as I will forward this along with all other various attempts, I have given you to correct my credit report of any inaccurate and incomplete information. I have sent you proof, and I have even gone directly to the data furnishers who claim the inaccurate information is you and not them. So, either you delete the following inaccuracies from my credit report, or you can explain to the CFPB and FTC why they are still there:",
  },
  {
    label: "Once again, I find myself",
    value:
      "Once again, I find myself exhausted by your persistent refusal to fulfill your obligations under the FRCA. Your negligence is not only wasting my valuable time but also costing me money. I want to make it clear that I have thoroughly documented your consistent failure to conduct a proper independent investigation. Consider this letter as official evidence, which I will submit along with all previous attempts I have made to rectify the inaccuracies and incompleteness in my credit report. I have provided you with proof, and I have even taken the initiative to directly approach the data furnishers who deny responsibility for the erroneous information. Now, it is your responsibility to either remove the following inaccuracies from my credit report or be prepared to face the scrutiny of the CFPB and FTC as to why they still persist:",
  },
  {
    label: "The continuous refusal to fulfill",
    value:
      "The continuous refusal to fulfill your obligations under the FRCA is becoming utterly exhausting. Your negligence is not only wasting my precious time but also incurring financial losses. I want to emphasize that I have meticulously documented your persistent failure to conduct an adequate independent investigation. Let this letter serve as an official record, which I will include along with all my previous attempts to rectify the inaccuracies and incompleteness in my credit report. I have provided you with evidence, and I have even personally approached the data furnishers who claim that the inaccurate information lies with you and not them. Therefore, it is now your responsibility to either eliminate the following inaccuracies from my credit report or prepare to explain to the CFPB and FTC why they remain unresolved:",
  },
  {
    label: "It is truly exhausting to witness your",
    value:
      "It is truly exhausting to witness your repeated refusal to fulfill your obligations under the FRCA. Your negligence is not only causing me undue stress but also resulting in significant time and monetary losses. Let it be known that I have diligently documented your consistent failure to conduct a thorough independent investigation. I hereby declare that this letter shall serve as an official record, which I will submit alongside all previous attempts I have made to address the inaccurate and incomplete information in my credit report. I have provided you with ample proof, and I have even taken the initiative to directly contact the data furnishers who deny responsibility for the misleading information. Thus, it is now your responsibility to either expunge the following inaccuracies from my credit report or be prepared to provide an explanation to the CFPB and FTC as to why they persist:",
  },
  {
    label: "Once again, I am left feeling exhausted",
    value:
      "Once again, I am left feeling exhausted as you continue to disregard your obligations under the FRCA. Your negligence is not only wasting my valuable time but also causing financial harm. I want to make it clear that I have thoroughly documented your persistent refusal to conduct a proper independent investigation. This letter serves as an official record, which will be presented alongside all previous attempts I have made to rectify the inaccurate and incomplete information in my credit report. I have provided you with evidence to support my claims, and I have even taken the step of directly contacting the data furnishers who deny their involvement in the erroneous information. Now, it is your responsibility to either eliminate the following inaccuracies from my credit report or be prepared to justify to the CFPB and FTC why they still exist:",
  },
  {
    label: "Your repeated refusal to fulfill your obligations",
    value:
      "Your repeated refusal to fulfill your obligations under the FRCA is becoming exhausting. Your negligence is not only causing me frustration but also resulting in significant time and financial losses. It is important to note that I have meticulously documented your failure to conduct a thorough independent investigation. Let this letter serve as an official record, which I will submit along with my previous attempts to address the inaccuracies and incomplete information in my credit report. I have provided you with supporting evidence, and I have gone as far as directly approaching the data furnishers who deny responsibility for the inaccurate information. Therefore, it is now your responsibility to either remove the following inaccuracies from my credit report or be prepared to justify their presence to the CFPB and FTC:",
  },
  {
    label: "Dealing with your consistent refusal to fulfill",
    value:
      "Dealing with your consistent refusal to fulfill your obligations under the FRCA is becoming increasingly exhausting. Your negligence is not only causing unnecessary inconvenience but also resulting in significant time and financial losses for me. I want to make it explicitly clear that I have thoroughly documented your persistent failure to carry out a proper independent investigation. This letter will serve as an official record, which I will submit alongside all previous attempts I have made to rectify the inaccurate and incomplete information in my credit report. I have provided you with substantial evidence, and I have even taken the initiative to directly contact the data furnishers who deny any involvement in the erroneous information. Now, it is your responsibility to either eliminate the following inaccuracies from my credit report or be prepared to provide a detailed explanation to the CFPB and FTC as to why they continue to exist:",
  },
  {
    label: "Your continuous refusal to fulfill",
    value:
      "Your continuous refusal to fulfill your obligations under the FRCA is draining my patience. Your negligence is not only wasting my time but also causing financial repercussions. It is important to note that I have diligently documented your consistent failure to conduct a proper independent investigation. Consider this letter as an official record, which I will submit alongside all previous attempts I have made to rectify the inaccurate and incomplete information in my credit report. I have provided you with ample proof, and I have gone the extra mile by directly contacting the data furnishers who deny responsibility for the misleading information. Therefore, it is your responsibility to either remove the following inaccuracies from my credit report or be prepared to explain to the CFPB and FTC why they persist:",
  },
  {
    label: "The repeated refusal to fulfill your obligations",
    value:
      "The repeated refusal to fulfill your obligations under the FRCA is draining my energy. Your negligence is not only causing me significant inconvenience but also resulting in substantial time and financial losses. I want to emphasize that I have thoroughly documented your persistent failure to conduct an adequate independent investigation. This letter will serve as an official record, which I will submit along with all previous attempts I have made to rectify the inaccuracies and incompleteness in my credit report. I have provided you with compelling evidence, and I have even taken the initiative to directly approach the data furnishers who deny any responsibility for the erroneous information. Hence, it is now your responsibility to either eliminate the following inaccuracies from my credit report or be prepared to provide a comprehensive explanation to the CFPB and FTC regarding their presence:",
  },
  {
    label: "Your repeated failure to fulfill your obligations",
    value:
      "Your repeated failure to fulfill your obligations under the FRCA is wearing me down. Your negligence is not only wasting my valuable time but also resulting in financial burdens. I want to make it abundantly clear that I have meticulously documented your consistent refusal to conduct an appropriate independent investigation. Let this letter serve as an official record, which I will present alongside all previous attempts I have made to rectify the inaccurate and incomplete information in my credit report. I have provided you with substantial evidence to support my claims, and I have even gone above and beyond by directly contacting the data furnishers who deny any involvement in the misleading information. Therefore, it is now your responsibility to either remove the following inaccuracies from my credit report or be prepared to justify their persistence to the CFPB and FTC:",
  },
  {
    label: "Dealing with your ongoing refusal to fulfill",
    value:
      "Dealing with your ongoing refusal to fulfill your obligations under the FRCA has become incredibly tiresome. Your negligence is not only causing me frustration but also leading to significant time and financial losses. It is crucial to note that I have extensively documented your persistent failure to conduct a proper independent investigation. This letter serves as an official record, which I will submit alongside all previous attempts I have made to rectify the inaccuracies and incompleteness in my credit report. I have provided you with compelling evidence, and I have even taken the initiative to directly contact the data furnishers who refute any responsibility for the erroneous",
  },
];

const GSFD6 = [
  {
    label: "Select a greeting sequence",
    value: null,
  },
  {
    label: "I have now filed a formal complaint",
    value:
      "I have now filed a formal complaint with the CFPB against you. I have attached a copy of the complaint I submitted to them along with this letter. I will not stop there, failure to comply I will also file a complaint with the Attorney General and file an FTC claim. The following accounts are still reporting in error in my credit report:",
  },
  {
    label: "I want to inform you that I",
    value:
      "I want to inform you that I have taken the necessary steps to file a formal complaint with the CFPB against your organization. In this letter, I have attached a copy of the complaint I submitted to them for your reference. Please be aware that if you fail to comply with rectifying the reported errors in my credit report, I will not hesitate to escalate the matter further by filing a complaint with the Attorney General and submitting an FTC claim. The accounts listed below continue to be inaccurately reported:",
  },
  {
    label: "This is to notify you that I",
    value:
      "This is to notify you that I have officially lodged a formal complaint with the CFPB against your entity. Enclosed with this correspondence is a copy of the complaint I have submitted to them. It is crucial to understand that if you do not take prompt action to rectify the erroneous reporting of the accounts specified below in my credit report, I will proceed to file a complaint with the Attorney General as well as submit an FTC claim. The following accounts are still inaccurately reported:",
  },
  {
    label: "I would like to inform you that I",
    value:
      "I would like to inform you that I have recently filed a formal complaint with the CFPB against your organization. Attached to this letter, you will find a copy of the complaint I have lodged with them. It is important for you to comprehend that failure to comply with the necessary corrections to the accounts mentioned below in my credit report will result in me proceeding to file a complaint with the Attorney General and initiating an FTC claim. The following accounts continue to be inaccurately reported:",
  },
  {
    label: "I want to bring to your attention that",
    value:
      "I want to bring to your attention that I have lodged a formal complaint with the CFPB against your entity. Alongside this letter, I have enclosed a copy of the complaint that I have submitted to them. Please be advised that if you fail to take immediate action to rectify the erroneous reporting of the accounts detailed below in my credit report, I will not hesitate to file a complaint with the Attorney General and pursue an FTC claim. The following accounts are still reported inaccurately:",
  },
  {
    label: "This communication serves as notification",
    value:
      "This communication serves as notification that I have filed a formal complaint with the CFPB against your organization. Attached herewith is a copy of the complaint that I have officially submitted to them. It is of utmost importance that you understand the consequences of not complying with the necessary corrections to the accounts specified below in my credit report. Failure to do so will compel me to file a complaint with the Attorney General and proceed with an FTC claim. The following accounts are persistently reported with inaccuracies:",
  },
  {
    label: "I hereby inform you that I have formally",
    value:
      "I hereby inform you that I have formally registered a complaint with the CFPB against your entity. As evidence, I have enclosed a copy of the complaint I submitted to them alongside this letter. Please note that if you do not promptly take the required measures to rectify the erroneous reporting of the accounts outlined below in my credit report, I will take additional action by filing a complaint with the Attorney General and initiating an FTC claim. The following accounts are still inaccurately reported:",
  },
  {
    label: "Please be advised that I have taken the",
    value:
      "Please be advised that I have taken the necessary steps to file a formal complaint with the CFPB against your organization. Attached to this correspondence is a copy of the complaint I have lodged with them. I want to emphasize that failure to comply with the essential rectification of the accounts listed below in my credit report will result in me filing a complaint with the Attorney General and pursuing an FTC claim. The following accounts continue to be inaccurately reported:",
  },
  {
    label: "This communication serves as a notice",
    value:
      "This communication serves as a notice that I have filed a formal complaint with the CFPB against your entity. Enclosed with this letter is a copy of the complaint that I have officially submitted to them. It is crucial for you to understand that if you fail to promptly address the erroneous reporting of the accounts provided below in my credit report, I will not hesitate to file a complaint with the Attorney General and proceed with an FTC claim. The following accounts are still reported inaccurately:",
  },
  {
    label: "I wish to inform you that I have officially registered",
    value:
      "I wish to inform you that I have officially registered a formal complaint with the CFPB against your organization. I have attached a copy of the complaint I submitted to them along with this letter as supporting documentation. Please be aware that if you do not comply with the necessary rectifications for the accounts mentioned below in my credit report, I will take further action by filing a complaint with the Attorney General and initiating an FTC claim. The following accounts are still being inaccurately reported:",
  },
  {
    label: "I would like to notify you that I have initiated",
    value:
      "I would like to notify you that I have initiated a formal complaint with the CFPB against your entity. Attached herewith is a copy of the complaint that I have lodged with them for your reference. It is essential to understand that if you fail to promptly rectify the reported errors pertaining to the accounts specified below in my credit report, I will not hesitate to file a complaint with the Attorney General and proceed with an FTC claim. The following accounts continue to be inaccurately reported:",
  },
];

const GSFD7 = [
  {
    label: "Select a greeting sequence",
    value: null,
  },
  {
    label: "",
    value: "",
  },
];

const GreetingSequenceByRound = (disputeRound: number) => {
  switch (disputeRound) {
    case 1:
      return GSFD1 as TOption[];
    case 2:
      return GSFD2 as TOption[];
    case 3:
      return GSFD3 as TOption[];
    case 4:
      return GSFD4 as TOption[];
    case 5:
      return GSFD5 as TOption[];
    case 6:
      return GSFD6 as TOption[];
    default:
      return GSFD1 as TOption[];
  }
};

export default GreetingSequenceByRound;
