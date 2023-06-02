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

const GreetingSequenceByRound = (disputeRound: number) => {
  switch (disputeRound) {
    case 1:
      return GSFD1 as TOption[];
    case 2:
      return GSFD2 as TOption[];
    case 3:
      return GSFD3 as TOption[];
    default:
      return GSFD1 as TOption[];
  }
};

export default GreetingSequenceByRound;
