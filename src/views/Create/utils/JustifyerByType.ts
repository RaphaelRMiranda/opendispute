import { TOption } from "@/components/Selects/types";

const JCO = [
  {
    label: "Select a justifyer to action",
    value: null,
  },
  {
    label: "this account does not belong to me",
    value: "this account does not belong to me",
  },
  {
    label: "this account has the wrong balance",
    value: "this account has the wrong balance",
  },
  {
    label: "this creditor does not own this account",
    value: "this creditor does not own this account",
  },
  {
    label: "this account was sold but still reports a balance",
    value: "this account was sold but still reports a balance",
  },
  {
    label:
      "doesn't show transferred/sold but does not say paid and doesn't have a balance",
    value:
      "doesn't show transferred/sold but does not say paid and doesn't have a balance",
  },
  {
    label: "each bureau reports a different date of last activity",
    value: "each bureau reports a different date of last activity",
  },
  {
    label: "account has been re-aged",
    value: "account has been re-aged",
  },
  {
    label:
      "I disputed this account and nothing was sent to me to legally verify this account",
    value:
      "I disputed this account and nothing was sent to me to legally verify this account",
  },
  {
    label: "monthly payment reported on closed account",
    value: "monthly payment reported on closed account",
  },
  {
    label: 'Account has different dates listed under "date of last payment"',
    value: 'Account has different dates listed under "date of last payment"',
  },
  {
    label: "account shows different creditor names",
    value: "account shows different creditor names",
  },
  {
    label: "I never had an account with this creditor",
    value: "I never had an account with this creditor",
  },
  {
    label:
      "creditor stated they would remove this after payment and it's still on my credit report",
    value:
      "creditor stated they would remove this after payment and it's still on my credit report",
  },
  {
    label:
      "I sent you proof directly from the creditor that this would be removed and does not belong on my credit report but I am still seeing it listed!",
    value:
      "I sent you proof directly from the creditor that this would be removed and does not belong on my credit report but I am still seeing it listed!",
  },
  {
    label:
      'how can this account be closed and yet, it states that I am still paying on it in the monthly payment section? Once an account is closed, there should be no monthly payment unless the status says "now paying, was charged-off"',
    value:
      'how can this account be closed and yet, it states that I am still paying on it in the monthly payment section? Once an account is closed, there should be no monthly payment unless the status says "now paying, was charged-off"',
  },
  {
    label: "this was paid but I am still seeing a balance",
    value: "this was paid but I am still seeing a balance",
  },
  {
    label: "the past due is wrong",
    value: "the past due is wrong",
  },
  {
    label: "the balance is higher than the high balance",
    value: "the balance is higher than the high balance",
  },
  {
    label: "the high balance is lower than the balance",
    value: "the high balance is lower than the balance",
  },
  {
    label: "there shouldn't be any late payments after the account was closed!",
    value: "there shouldn't be any late payments after the account was closed!",
  },
  {
    label:
      "why am I seeing years of late payments after the close date? It's not possible to be late on a closed account!",
    value:
      "why am I seeing years of late payments after the close date? It's not possible to be late on a closed account!",
  },
  {
    label: "This account is outdated and needs to be removed",
    value: "This account is outdated and needs to be removed",
  },
  {
    label:
      "Please send me all business and transaction documents to prove that this account was legally verified",
    value:
      "Please send me all business and transaction documents to prove that this account was legally verified",
  },
  {
    label:
      "Stating that this account was “verified” does not change the fact that it’s still reporting inaccurately and needs to be removed",
    value:
      "Stating that this account was “verified” does not change the fact that it’s still reporting inaccurately and needs to be removed",
  },
  {
    label:
      "I disputed this account directly with creditor and no notice of dispute was correctly entered in. ",
    value:
      "I disputed this account directly with creditor and no notice of dispute was correctly entered in. ",
  },
];

const JPC = [
  {
    label: "Select a justifyer to action",
    value: null,
  },
  {
    label: "unknown collection",
    value: "unknown collection",
  },
  {
    label: "not mine",
    value: "not mine",
  },
  {
    label: "belongs to someone else",
    value: "belongs to someone else",
  },
  {
    label:
      "section 609 states that you're required to send me the paperwork associated with this account. Furnish or remove",
    value:
      "section 609 states that you're required to send me the paperwork associated with this account. Furnish or remove",
  },
  {
    label: "you didn't send anything to prove ownership",
    value: "you didn't send anything to prove ownership",
  },
  {
    label: "I need to see all paperwork associated with this account",
    value: "I need to see all paperwork associated with this account",
  },
  {
    label:
      "how can you say that you verified this account when I haven't even heard back from the collection agency?",
    value:
      "how can you say that you verified this account when I haven't even heard back from the collection agency?",
  },
  {
    label: `"simply stating that this is a verified account doesn't change the fact that I don't know what it is or why it is on my credit report! I need to see everything you've ""verified"" this account with"`,
    value: `"simply stating that this is a verified account doesn't change the fact that I don't know what it is or why it is on my credit report! I need to see everything you've ""verified"" this account with"`,
  },
  {
    label:
      "section 623 states that if an account can possibly be inaccurate, there must be an address conspicuously listed and if not, this account cannot report",
    value:
      "section 623 states that if an account can possibly be inaccurate, there must be an address conspicuously listed and if not, this account cannot report",
  },
  {
    label:
      "section 623 states that the creditor cannot continue to report it when disputed, unless they have proof to the contrary",
    value:
      "section 623 states that the creditor cannot continue to report it when disputed, unless they have proof to the contrary",
  },
  {
    label:
      "I need to see the docs that the creditor sent to you that were used during the investigation to make the determination that this account is accurate. No proof? Then you cannot report",
    value:
      "I need to see the docs that the creditor sent to you that were used during the investigation to make the determination that this account is accurate. No proof? Then you cannot report",
  },
  {
    label: "delete this unverified and inaccurate account",
    value: "delete this unverified and inaccurate account",
  },
  {
    label:
      "this account was never legally investigated or verified. You're reporting false info",
    value:
      "this account was never legally investigated or verified. You're reporting false info",
  },
  {
    label: "how can there be late payments on this collection?",
    value: "how can there be late payments on this collection?",
  },
  {
    label: "how can there be a past due on this collection?",
    value: "how can there be a past due on this collection?",
  },
  {
    label:
      "Collection agency didn’t send me anything to verify this account, so how did you verify it? Where’s the documentation?",
    value:
      "Collection agency didn’t send me anything to verify this account, so how did you verify it? Where’s the documentation?",
  },
  {
    label:
      "Unless you can furnish the signed documents that legally verify this account, it needs to be removed immediately",
    value:
      "Unless you can furnish the signed documents that legally verify this account, it needs to be removed immediately",
  },
  {
    label:
      "Why is the high balance lower than the balance on this collection? It’s impossible and needs to be removed!",
    value:
      "Why is the high balance lower than the balance on this collection? It’s impossible and needs to be removed!",
  },
  {
    label: "You have the wrong open date",
    value: "You have the wrong open date",
  },
  {
    label:
      "The open date is different on all 3 bureaus – this needs to be removed",
    value:
      "The open date is different on all 3 bureaus – this needs to be removed",
  },
  {
    label:
      "I don’t understand how you can say that this collection was verified, when I haven’t seen any documentation whatsoever. This is a violation of my rights under section 609!",
    value:
      "I don’t understand how you can say that this collection was verified, when I haven’t seen any documentation whatsoever. This is a violation of my rights under section 609!",
  },
  {
    label:
      "How is this collection verified, when I notified you that you’re reporting late payments and a past due on it?",
    value:
      "How is this collection verified, when I notified you that you’re reporting late payments and a past due on it?",
  },
  {
    label:
      "Why do I have to notify you that it’s a violation of the FDCPA to report a collection with a past due and/or late payments?",
    value:
      "Why do I have to notify you that it’s a violation of the FDCPA to report a collection with a past due and/or late payments?",
  },
];

const JDB = [
  {
    label: "Select a justifyer to action",
    value: null,
  },
  {
    label: "I don't know what this is",
    value: "I don't know what this is",
  },
  {
    label: "this doesn't belong to me",
    value: "this doesn't belong to me",
  },
  {
    label: "wrong creditor",
    value: "wrong creditor",
  },
  {
    label: "wrong balance",
    value: "wrong balance",
  },
  {
    label: "this was paid but still has a balance",
    value: "this was paid but still has a balance",
  },
  {
    label: "why is there a past due on this account?",
    value: "why is there a past due on this account?",
  },
  {
    label: "why are there late payments on this account?",
    value: "why are there late payments on this account?",
  },
  {
    label:
      "I disputed with the collection agency and they said they don't have record of this account",
    value:
      "I disputed with the collection agency and they said they don't have record of this account",
  },
  {
    label:
      "account is reporting that it will come off AFTER the statute of limitations have expired",
    value:
      "account is reporting that it will come off AFTER the statute of limitations have expired",
  },
  {
    label: "this account was not legally verified",
    value: "this account was not legally verified",
  },
  {
    label:
      "I sent a dispute to the collection agency and they said they would remove this account but I am still seeing it on my credit report",
    value:
      "I sent a dispute to the collection agency and they said they would remove this account but I am still seeing it on my credit report",
  },
  {
    label:
      "where's the proof that I had a legal obligation to pay this company and that this is my account?",
    value:
      "where's the proof that I had a legal obligation to pay this company and that this is my account?",
  },
  {
    label:
      "this account is the result of identity theft and I have no legal obligation to pay this company and it doesn't belong on my credit report",
    value:
      "this account is the result of identity theft and I have no legal obligation to pay this company and it doesn't belong on my credit report",
  },
  {
    label: '"3 different dates listed under ""date of last activity"""',
    value: '"3 different dates listed under ""date of last activity"""',
  },
  {
    label: `"3 different dates listed under ""date of last payment"" but I've never paid this company"`,
    value: `"3 different dates listed under ""date of last payment"" but I've never paid this company"`,
  },
  {
    label:
      "I need to see the paperwork that proves this collection agency owns this account, because otherwise, I see no legal obligation to pay them",
    value:
      "I need to see the paperwork that proves this collection agency owns this account, because otherwise, I see no legal obligation to pay them",
  },
  {
    label:
      "Why are there are late payments reported on the original account after it was sold to a collection agency? As far as I see it, that would make the account inaccurately reported, right?",
    value:
      "Why are there are late payments reported on the original account after it was sold to a collection agency? As far as I see it, that would make the account inaccurately reported, right?",
  },
  {
    label:
      "This account shows that it was transferred, but why is there a past due reported on this account? This is a violation",
    value:
      "This account shows that it was transferred, but why is there a past due reported on this account? This is a violation",
  },
  {
    label:
      "The collection agency and creditor are both reporting balances – this is double jeopardy",
    value:
      "The collection agency and creditor are both reporting balances – this is double jeopardy",
  },
  {
    label:
      "Why is this reported on my credit when the original creditor didn’t verify the debt? How does that even make sense?",
    value:
      "Why is this reported on my credit when the original creditor didn’t verify the debt? How does that even make sense?",
  },
  {
    label:
      "This collection agency bought an outdated debt and then re-aged the account so that it would stay on my credit report!",
    value:
      "This collection agency bought an outdated debt and then re-aged the account so that it would stay on my credit report!",
  },
  {
    label:
      "The date of last activity was re-aged when this collection agency falsely stated that it was “verified”. This needs to be removed immediately!",
    value:
      "The date of last activity was re-aged when this collection agency falsely stated that it was “verified”. This needs to be removed immediately!",
  },
  {
    label:
      "Please send all paperwork associated with this account to prove that it belongs to me. I notified you that it was unknown and sending me a statement that says “verified” doesn’t change this fact!",
    value:
      "Please send all paperwork associated with this account to prove that it belongs to me. I notified you that it was unknown and sending me a statement that says “verified” doesn’t change this fact!",
  },
  {
    label:
      "Please remove this unknown and unverified account – you sent me nothing at all to prove ownership",
    value:
      "Please remove this unknown and unverified account – you sent me nothing at all to prove ownership",
  },
  {
    label:
      "This account is outdated – it should have been removed automatically and yet, it shows as if it’s a new account!",
    value:
      "This account is outdated – it should have been removed automatically and yet, it shows as if it’s a new account!",
  },
  {
    label:
      "The original account was never verified; how can this account continue to report on my credit?",
    value:
      "The original account was never verified; how can this account continue to report on my credit?",
  },
  {
    label:
      "This is unlawful reporting and unless I can see your proof, this must be removed immediately",
    value:
      "This is unlawful reporting and unless I can see your proof, this must be removed immediately",
  },
  {
    label:
      "The original account was paid and yet, this collection continues to report with a balance. You need to remove this immediately!",
    value:
      "The original account was paid and yet, this collection continues to report with a balance. You need to remove this immediately!",
  },
  {
    label:
      "This account was paid, and yet, there’s no “date of last payment” listed. ",
    value:
      "This account was paid, and yet, there’s no “date of last payment” listed. ",
  },
  {
    label:
      "The original account shows late payments AFTER this account was sold to a collection agency.",
    value:
      "The original account shows late payments AFTER this account was sold to a collection agency.",
  },
  {
    label: "This account cannot report on my credit file",
    value: "This account cannot report on my credit file",
  },
  {
    label:
      "The original account shows a balance even though it was sold to this collection agency. ",
    value:
      "The original account shows a balance even though it was sold to this collection agency. ",
  },
  {
    label:
      "The original account shows a past due even though it was sold to this collection agency. ",
    value:
      "The original account shows a past due even though it was sold to this collection agency. ",
  },
  {
    label:
      "The original account shows a monthly payment even though it was sold to this collection agency. ",
    value:
      "The original account shows a monthly payment even though it was sold to this collection agency. ",
  },
  {
    label:
      "You need to remove this collection immediately because the original account doesn’t state that it was sold",
    value:
      "You need to remove this collection immediately because the original account doesn’t state that it was sold",
  },
];

const JIN = [
  {
    label: "Select a justifyer to action",
    value: null,
  },
  {
    label: "unknown inquiry",
    value: "unknown inquiry",
  },
  {
    label: "illegal inquiry",
    value: "illegal inquiry",
  },
  {
    label: "unverified inquiry",
    value: "unverified inquiry",
  },
  {
    label: "inquiry has not been verified",
    value: "inquiry has not been verified",
  },
  {
    label: "inquiry has not been validated",
    value: "inquiry has not been validated",
  },
  {
    label:
      "section 609 states that you need to provide the application that was filled out when this account was opened",
    value:
      "section 609 states that you need to provide the application that was filled out when this account was opened",
  },
  {
    label: "you need to remove this inquiry under section 604",
    value: "you need to remove this inquiry under section 604",
  },
  {
    label: `if the creditor couldn't send me anything, then what are you using to verify this inquiry?`,
    value: `if the creditor couldn't send me anything, then what are you using to verify this inquiry?`,
  },
  {
    label: "creditor didn't respond",
    value: "creditor didn't respond",
  },
  {
    label:
      "neither credit bureau responded, so how was this verified as accurate?",
    value:
      "neither credit bureau responded, so how was this verified as accurate?",
  },
  {
    label:
      "where's the copies of the docs that were filled out when I supposedly applied for an account?",
    value:
      "where's the copies of the docs that were filled out when I supposedly applied for an account?",
  },
  {
    label:
      "I'm a victim of identity theft and I didn't apply for anything with this bank",
    value:
      "I'm a victim of identity theft and I didn't apply for anything with this bank",
  },
  {
    label:
      "I notified you that I'm a victim of identity theft and section 623 states that you're not allowed to continue reporting this without proving otherwise and yet, this inquiry is still on my credit",
    value:
      "I notified you that I'm a victim of identity theft and section 623 states that you're not allowed to continue reporting this without proving otherwise and yet, this inquiry is still on my credit",
  },
  {
    label:
      "the only permissible purposes of an inquiry are employment, insurance, court order and firm offer of credit, neither of which apply - remove immediately",
    value:
      "the only permissible purposes of an inquiry are employment, insurance, court order and firm offer of credit, neither of which apply - remove immediately",
  },
  {
    label: "not mine",
    value: "not mine",
  },
  {
    label: "I do not recall this inquiry",
    value: "I do not recall this inquiry",
  },
  {
    label: "I did not make this inquiry",
    value: "I did not make this inquiry",
  },
  {
    label: "this inquiry is unknown and should be removed",
    value: "this inquiry is unknown and should be removed",
  },
  {
    label:
      "permissible purpose literally means that there must be a reason that they pulled my credit and",
    value:
      "permissible purpose literally means that there must be a reason that they pulled my credit and",
  },
  {
    label:
      "that it must conform to the FCRA – this doesn’t and needs to be removed",
    value:
      "that it must conform to the FCRA – this doesn’t and needs to be removed",
  },
  {
    label:
      "I still haven’t seen a signed application, are you telling me that it’s legal for them to report this without it? Delete immediately",
    value:
      "I still haven’t seen a signed application, are you telling me that it’s legal for them to report this without it? Delete immediately",
  },
  {
    label:
      "I notified you that this inquiry doesn’t belong on my credit report and you didn’t do anything at all to verify. Delete immediately",
    value:
      "I notified you that this inquiry doesn’t belong on my credit report and you didn’t do anything at all to verify. Delete immediately",
  },
  {
    label:
      "I notified you that I am a victim of identity theft and that this inquiry doesn’t belong to me – section 623 stipulates that this must be removed from my credit report!",
    value:
      "I notified you that I am a victim of identity theft and that this inquiry doesn’t belong to me – section 623 stipulates that this must be removed from my credit report!",
  },
  {
    label:
      "There’s literally no proof that this inquiry was initiated by me. Please remove immediately",
    value:
      "There’s literally no proof that this inquiry was initiated by me. Please remove immediately",
  },
  {
    label:
      "I know for a fact that you don’t have the application that was filled out, or even an IP trace, so HOW was this inquiry verified? Where’s the proof? This is a violation; delete immediately",
    value:
      "I know for a fact that you don’t have the application that was filled out, or even an IP trace, so HOW was this inquiry verified? Where’s the proof? This is a violation; delete immediately",
  },
  {
    label:
      "You’ve continued to violation my rights by stating this has been verified. I contacted the creditor and was notified that you NEVER verified anything with them!",
    value:
      "You’ve continued to violation my rights by stating this has been verified. I contacted the creditor and was notified that you NEVER verified anything with them!",
  },
  {
    label:
      "Remove this inquiry immediately because there’s no paperwork that verifies I ever obtained credit or a firm offer of credit from this company. There’s no permissible purpose!",
    value:
      "Remove this inquiry immediately because there’s no paperwork that verifies I ever obtained credit or a firm offer of credit from this company. There’s no permissible purpose!",
  },
];

const JIT = [
  {
    label: "Select a justifyer to action",
    value: null,
  },
  {
    label: "not mine",
    value: "not mine",
  },
  {
    label: "does not belong to me",
    value: "does not belong to me",
  },
  {
    label: "belongs to someone else",
    value: "belongs to someone else",
  },
  {
    label:
      "section 605B states that if this account is the result of identity theft, then it must be removed from my credit report. Please remove",
    value:
      "section 605B states that if this account is the result of identity theft, then it must be removed from my credit report. Please remove",
  },
  {
    label:
      "I've disputed this account with an affidavit, letter and police report and yet, you're still reporting it. I need for you to remove this account immediately unless you have proof to the contrary",
    value:
      "I've disputed this account with an affidavit, letter and police report and yet, you're still reporting it. I need for you to remove this account immediately unless you have proof to the contrary",
  },
  {
    label:
      "I disputed this account with the creditor and they notified me that they have nothing under my information so I don't get how you're verifying this account - remove it immediately",
    value:
      "I disputed this account with the creditor and they notified me that they have nothing under my information so I don't get how you're verifying this account - remove it immediately",
  },
  {
    label:
      "I need to see all paperwork and contracts with my signature that would verify ownership. If you do not have this paperwork, you need to remove the account immediately",
    value:
      "I need to see all paperwork and contracts with my signature that would verify ownership. If you do not have this paperwork, you need to remove the account immediately",
  },
  {
    label: "these accounts don't belong to me",
    value: "these accounts don't belong to me",
  },
  {
    label:
      "I've submitted CFPB complaints against you because you're still reporting accounts that are the result of identity theft",
    value:
      "I've submitted CFPB complaints against you because you're still reporting accounts that are the result of identity theft",
  },
  {
    label:
      "You didn’t send me anything at all that would verify the accuracy of this account. I notified you that I am a victim of identity theft and this must be removed immediately",
    value:
      "You didn’t send me anything at all that would verify the accuracy of this account. I notified you that I am a victim of identity theft and this must be removed immediately",
  },
  {
    label:
      "Continuing to report this on my credit is a violation of the FCRA unless you can legally verify it!",
    value:
      "Continuing to report this on my credit is a violation of the FCRA unless you can legally verify it!",
  },
  {
    label: "Where’s the proof that you even investigated?",
    value: "Where’s the proof that you even investigated?",
  },
  {
    label:
      "Please send me all signed (by me) applications and other documentation to prove that this account belongs to me",
    value:
      "Please send me all signed (by me) applications and other documentation to prove that this account belongs to me",
  },
  {
    label:
      "I told the creditor that this account doesn’t belong to me and they didn’t respond. Having said that, how did you verify this?",
    value:
      "I told the creditor that this account doesn’t belong to me and they didn’t respond. Having said that, how did you verify this?",
  },
  {
    label:
      "Why are you still reporting this account on my credit when I sent you the police report, affidavit and dispute letter?",
    value:
      "Why are you still reporting this account on my credit when I sent you the police report, affidavit and dispute letter?",
  },
  {
    label:
      "I can’t see how it’s legal that you’d continue to report this auto account on my credit when #1 it resulted from identity theft #2 you never verified it and #3 the other bureaus removed it!",
    value:
      "I can’t see how it’s legal that you’d continue to report this auto account on my credit when #1 it resulted from identity theft #2 you never verified it and #3 the other bureaus removed it!",
  },
  {
    label:
      "I need to see all paperwork with my signature that verifies this account as mine. In addition, I need to see all docs that prove you even did an investigation into this identity theft. Without it, this is false reporting",
    value:
      "I need to see all paperwork with my signature that verifies this account as mine. In addition, I need to see all docs that prove you even did an investigation into this identity theft. Without it, this is false reporting",
  },
  {
    label:
      "Section 623 states that if an account can possibly be fraud, the creditor cannot continue to report without proof. Where’s this “proof” showing my signature? Where’s your proof of",
    value:
      "Section 623 states that if an account can possibly be fraud, the creditor cannot continue to report without proof. Where’s this “proof” showing my signature? Where’s your proof of",
  },
  {
    label: "investigation?",
    value: "investigation?",
  },
  {
    label:
      "Congress states that you’re required to perform an independent investigation to determine the accuracy of an account. I notified you that this doesn’t belong to me and you did nothing. Delete this immediately",
    value:
      "Congress states that you’re required to perform an independent investigation to determine the accuracy of an account. I notified you that this doesn’t belong to me and you did nothing. Delete this immediately",
  },
  {
    label:
      "I submitted enough information for you to determine and agree that this account resulted from identity theft. I now need to see all documentation from your investigation that proves otherwise, or this is false reporting and negligence.",
    value:
      "I submitted enough information for you to determine and agree that this account resulted from identity theft. I now need to see all documentation from your investigation that proves otherwise, or this is false reporting and negligence.",
  },
  {
    label:
      "How’s it even legal that you state this is verified, when it’s fraud? How’s it legal that the creditor sent me a 1099 for this account that was never applied for, obtained or used by me? Delete immediately!",
    value:
      "How’s it even legal that you state this is verified, when it’s fraud? How’s it legal that the creditor sent me a 1099 for this account that was never applied for, obtained or used by me? Delete immediately!",
  },
];

const JLP = [
  {
    label: "Select a justifyer to action",
    value: null,
  },
  {
    label: "I was never late on this account",
    value: "I was never late on this account",
  },
  {
    label: "paid, never late",
    value: "paid, never late",
  },
  {
    label:
      "I paid on time but you're listing me as late - you need to update to paid as agreed",
    value:
      "I paid on time but you're listing me as late - you need to update to paid as agreed",
  },
  {
    label: "please send me the docs that prove that I was ever late",
    value: "please send me the docs that prove that I was ever late",
  },
  {
    label:
      "If you can't prove that you had proof, you need to remove this late payment",
    value:
      "If you can't prove that you had proof, you need to remove this late payment",
  },
  {
    label:
      "the first late payment listed on this account is wrong and you need to remove this account",
    value:
      "the first late payment listed on this account is wrong and you need to remove this account",
  },
  {
    label: "remove due to inaccuracy - I never paid late",
    value: "remove due to inaccuracy - I never paid late",
  },
  {
    label:
      "Why do you report that I am 90 days late when there are no late payments prior to that? Delete this immediately",
    value:
      "Why do you report that I am 90 days late when there are no late payments prior to that? Delete this immediately",
  },
  {
    label:
      "I need to see all bank transactions and statements that belong to this company that would prove my payments were not accepted on time or you need to remove these unverified late payments immediately",
    value:
      "I need to see all bank transactions and statements that belong to this company that would prove my payments were not accepted on time or you need to remove these unverified late payments immediately",
  },
  {
    label:
      "I wrote the creditor and they said that I was never late, so how can it be that you're reporting me as late? That makes no sense at all",
    value:
      "I wrote the creditor and they said that I was never late, so how can it be that you're reporting me as late? That makes no sense at all",
  },
  {
    label: "date of last payment is wrong",
    value: "date of last payment is wrong",
  },
  {
    label:
      "I can’t figure out how you verified this late payment, when the only legal form of verification is the actual bank statement belonging to this company.",
    value:
      "I can’t figure out how you verified this late payment, when the only legal form of verification is the actual bank statement belonging to this company.",
  },
  {
    label:
      "Please send me the proof that you ever did an investigation on this late payment",
    value:
      "Please send me the proof that you ever did an investigation on this late payment",
  },
  {
    label:
      "Each bureau has different info in the historical payment data – this is inaccurate and all lates need to be removed",
    value:
      "Each bureau has different info in the historical payment data – this is inaccurate and all lates need to be removed",
  },
  {
    label:
      "You said that you verified this late payment but I sent you proof that I paid on time and I’m still seeing it on my credit report!",
    value:
      "You said that you verified this late payment but I sent you proof that I paid on time and I’m still seeing it on my credit report!",
  },
  {
    label:
      "Please remove this late payment because it’s inaccurate and pulling down my credit score!",
    value:
      "Please remove this late payment because it’s inaccurate and pulling down my credit score!",
  },
  {
    label:
      "this student loan account needs to be removed immediately because the first late payment isn’t correct. This account is inaccurate!",
    value:
      "this student loan account needs to be removed immediately because the first late payment isn’t correct. This account is inaccurate!",
  },
  {
    label:
      "This account was transferred and I was never late with this new company, so you need to remove it from my credit report for reporting lates on an account I was never late on!",
    value:
      "This account was transferred and I was never late with this new company, so you need to remove it from my credit report for reporting lates on an account I was never late on!",
  },
  {
    label:
      "Late payments on this collection are inaccurate and if you cannot furnish bank records that prove when my payments were accepted, the account needs to be removed",
    value:
      "Late payments on this collection are inaccurate and if you cannot furnish bank records that prove when my payments were accepted, the account needs to be removed",
  },
];

const JBA = [
  {
    label: "Select a justifyer to action",
    value: null,
  },
  {
    label: "bankruptcy does not belong to me",
    value: "bankruptcy does not belong to me",
  },
  {
    label: "bankruptcy filing date is wrong",
    value: "bankruptcy filing date is wrong",
  },
  {
    label: "remove this bankruptcy because there are 2 different fling dates",
    value: "remove this bankruptcy because there are 2 different fling dates",
  },
  {
    label:
      "court name is not accurate - each bureau must report the actual name of the court, followed by [city, state]. Remove immediately",
    value:
      "court name is not accurate - each bureau must report the actual name of the court, followed by [city, state]. Remove immediately",
  },
  {
    label:
      "I asked the court if they verify records with the credit bureaus and they stated they do NOT, so how did you legally verify this?",
    value:
      "I asked the court if they verify records with the credit bureaus and they stated they do NOT, so how did you legally verify this?",
  },
  {
    label:
      "You're required to obtain verification from the DATA FURNISHER and the court told me that they don't verify with you, so HOW is anything else considered legal verification?",
    value:
      "You're required to obtain verification from the DATA FURNISHER and the court told me that they don't verify with you, so HOW is anything else considered legal verification?",
  },
  {
    label:
      "I need for you to send me the petition to verify this account. If you cannot do that, then this needs to be removed",
    value:
      "I need for you to send me the petition to verify this account. If you cannot do that, then this needs to be removed",
  },
  {
    label:
      "I need for you to send me the petition to verify this account. If you cannot do that, then this needs to be removed",
    value:
      "I need for you to send me the petition to verify this account. If you cannot do that, then this needs to be removed",
  },
  {
    label: "you have the wrong docket number",
    value: "you have the wrong docket number",
  },
  {
    label:
      "this was filed in my name by someone else and was fraud - remove immediately",
    value:
      "this was filed in my name by someone else and was fraud - remove immediately",
  },
  {
    label:
      "I've submitted proof that this is not my signature on the petition - you need to remove this immediately",
    value:
      "I've submitted proof that this is not my signature on the petition - you need to remove this immediately",
  },
  {
    label:
      "You've not furnished any documentation whatsoever and this means that you are reporting false info and just do not care. I've since made complaints against you with the CFPB",
    value:
      "You've not furnished any documentation whatsoever and this means that you are reporting false info and just do not care. I've since made complaints against you with the CFPB",
  },
  {
    label:
      "These accounts were not included in a bankruptcy and need to be removed",
    value:
      "These accounts were not included in a bankruptcy and need to be removed",
  },
  {
    label:
      "Why are these listed as included in bankruptcy, when there’s no bankruptcy reported on my credit?",
    value:
      "Why are these listed as included in bankruptcy, when there’s no bankruptcy reported on my credit?",
  },
  {
    label:
      "The court has sent me an affidavit swearing that they do NOT verify or validate any public records with you. Delete this unverified account immediately",
    value:
      "The court has sent me an affidavit swearing that they do NOT verify or validate any public records with you. Delete this unverified account immediately",
  },
  {
    label:
      "Congress states that you’re required to verify accounts with the original creditor and in this situation, the court is the original creditor and they do NOT verify records!",
    value:
      "Congress states that you’re required to verify accounts with the original creditor and in this situation, the court is the original creditor and they do NOT verify records!",
  },
  {
    label:
      "I sent you handwriting samples to prove that these bankruptcies do not belong to me",
    value:
      "I sent you handwriting samples to prove that these bankruptcies do not belong to me",
  },
  {
    label:
      "Please remove this bankruptcy – the filing date shows a year that is not in this century",
    value:
      "Please remove this bankruptcy – the filing date shows a year that is not in this century",
  },
  {
    label:
      "You do not have the legal court name reported accurately – it must actually stated “US BANKRUPTCY COURT, CITY, STATE”",
    value:
      "You do not have the legal court name reported accurately – it must actually stated “US BANKRUPTCY COURT, CITY, STATE”",
  },
];

const JFC = [
  {
    label: "Select a justifyer to action",
    value: null,
  },
  {
    label: "this account does not belong to me",
    value: "this account does not belong to me",
  },
  {
    label: "this account has the wrong balance",
    value: "this account has the wrong balance",
  },
  {
    label: "this creditor does not own this account",
    value: "this creditor does not own this account",
  },
  {
    label: "this account was sold but still reports a balance",
    value: "this account was sold but still reports a balance",
  },
  {
    label:
      "doesn't show transferred/sold but does not say paid and doesn't have a balance",
    value:
      "doesn't show transferred/sold but does not say paid and doesn't have a balance",
  },
  {
    label: "each bureau reports a different date of last activity",
    value: "each bureau reports a different date of last activity",
  },
  {
    label: "account has been re-aged",
    value: "account has been re-aged",
  },
  {
    label:
      "I disputed this account and nothing was sent to me to legally verify this account",
    value:
      "I disputed this account and nothing was sent to me to legally verify this account",
  },
  {
    label: "monthly payment reported on closed account",
    value: "monthly payment reported on closed account",
  },
  {
    label: 'different dates listed under "date of last payment"',
    value: 'different dates listed under "date of last payment"',
  },
  {
    label: "account shows different creditor names",
    value: "account shows different creditor names",
  },
  {
    label: "I never had an account with this creditor",
    value: "I never had an account with this creditor",
  },
  {
    label:
      "creditor stated they would remove this after payment and it's still on my credit report",
    value:
      "creditor stated they would remove this after payment and it's still on my credit report",
  },
  {
    label:
      "I sent you proof directly from the creditor that this would be removed and does not belong on my credit report but I am still seeing it listed!",
    value:
      "I sent you proof directly from the creditor that this would be removed and does not belong on my credit report but I am still seeing it listed!",
  },
  {
    label:
      'how can this account be closed and yet, it states that I am still paying on it in the monthly payment section? Once an account is closed, there should be no monthly payment unless the status says "now paying, was charged-off"',
    value:
      'how can this account be closed and yet, it states that I am still paying on it in the monthly payment section? Once an account is closed, there should be no monthly payment unless the status says "now paying, was charged-off"',
  },
  {
    label: "this was paid but I am still seeing a balance",
    value: "this was paid but I am still seeing a balance",
  },
  {
    label: "the past due is wrong",
    value: "the past due is wrong",
  },
  {
    label: "the balance is higher than the high balance",
    value: "the balance is higher than the high balance",
  },
  {
    label: "the high balance is lower than the balance",
    value: "the high balance is lower than the balance",
  },
  {
    label: "should not say foreclosure",
    value: "should not say foreclosure",
  },
  {
    label: "foreclosure was paid",
    value: "foreclosure was paid",
  },
  {
    label:
      "why does this have late payments years after the account was closed? This is a violation!",
    value:
      "why does this have late payments years after the account was closed? This is a violation!",
  },
];

const JSL = [
  {
    label: "Select a justifyer to action",
    value: null,
  },
  {
    label: "this account has the wrong balance",
    value: "this account has the wrong balance",
  },
  {
    label: "this creditor does not own this account",
    value: "this creditor does not own this account",
  },
  {
    label: "this account was sold but still reports a balance",
    value: "this account was sold but still reports a balance",
  },
  {
    label:
      "doesn't show transferred/sold but does not say paid and doesn't have a balance",
    value:
      "doesn't show transferred/sold but does not say paid and doesn't have a balance",
  },
  {
    label: "each bureau reports a different date of last activity",
    value: "each bureau reports a different date of last activity",
  },
  {
    label: "account has been re-aged",
    value: "account has been re-aged",
  },
  {
    label:
      "I disputed this account and nothing was sent to me to legally verify this account",
    value:
      "I disputed this account and nothing was sent to me to legally verify this account",
  },
  {
    label: "monthly payment reported on closed account",
    value: "monthly payment reported on closed account",
  },
  {
    label: '"different dates listed under ""date of last payment"""',
    value: '"different dates listed under ""date of last payment"""',
  },
  {
    label: "account shows different creditor names",
    value: "account shows different creditor names",
  },
  {
    label: "I never had an account with this creditor",
    value: "I never had an account with this creditor",
  },
  {
    label:
      "creditor stated they would remove this after payment and it's still on my credit report",
    value:
      "creditor stated they would remove this after payment and it's still on my credit report",
  },
  {
    label:
      "I sent you proof directly from the creditor that this would be removed and does not belong on my credit report but I am still seeing it listed!",
    value:
      "I sent you proof directly from the creditor that this would be removed and does not belong on my credit report but I am still seeing it listed!",
  },
  {
    label:
      "how can this account be closed and yet, it states that I am still paying on it in the monthly payment section? Once an account is closed, there should be no monthly payment unless the",
    value:
      "how can this account be closed and yet, it states that I am still paying on it in the monthly payment section? Once an account is closed, there should be no monthly payment unless the",
  },
  {
    label: '"status says ""now paying, was charged-off""!"',
    value: '"status says ""now paying, was charged-off""!"',
  },
  {
    label: "this was paid but I am still seeing a balance",
    value: "this was paid but I am still seeing a balance",
  },
  {
    label: "the past due is wrong",
    value: "the past due is wrong",
  },
  {
    label: "the balance is higher than the high balance",
    value: "the balance is higher than the high balance",
  },
  {
    label: "the high balance is lower than the balance",
    value: "the high balance is lower than the balance",
  },
  {
    label: "there shouldn't be any late payments after the account was closed!",
    value: "there shouldn't be any late payments after the account was closed!",
  },
  {
    label: `"why am I seeing years of late payments after the ""close date""? It's not possible to be late on a closed account!"`,
    value: `"why am I seeing years of late payments after the ""close date""? It's not possible to be late on a closed account!"`,
  },
  {
    label:
      "how's it possible that you've reported me 90 days late with no late payments prior to that?",
    value:
      "how's it possible that you've reported me 90 days late with no late payments prior to that?",
  },
  {
    label: "I was never late on this account",
    value: "I was never late on this account",
  },
  {
    label:
      "each bureau reports that I was late on a different date - remove for inaccuracy",
    value:
      "each bureau reports that I was late on a different date - remove for inaccuracy",
  },
  {
    label:
      "Navient was sued for not applying payments to consumers accounts correctly. I was never late and this account needs to be removed",
    value:
      "Navient was sued for not applying payments to consumers accounts correctly. I was never late and this account needs to be removed",
  },
  {
    label:
      "Navient was sued for not applying payments correctly to consumer accounts - please remove these late payments",
    value:
      "Navient was sued for not applying payments correctly to consumer accounts - please remove these late payments",
  },
  {
    label:
      "You have all of these dates reported as being “late” but how is that possible, when this account was closed? Delete it!",
    value:
      "You have all of these dates reported as being “late” but how is that possible, when this account was closed? Delete it!",
  },
  {
    label: "You’re required to report this account as transferred. Delete it",
    value: "You’re required to report this account as transferred. Delete it",
  },
  {
    label:
      "The date that you have as “late” isn’t correct. Delete this account",
    value:
      "The date that you have as “late” isn’t correct. Delete this account",
  },
  {
    label:
      "I need to see all records pertaining to the verification or validation of this account to prove that there was an actual investigation. Without it, you need to remove it!",
    value:
      "I need to see all records pertaining to the verification or validation of this account to prove that there was an actual investigation. Without it, you need to remove it!",
  },
  {
    label:
      "I know you didn’t verify this collection or even bother to reach out to the creditor. You need to remove this unverified account immediately",
    value:
      "I know you didn’t verify this collection or even bother to reach out to the creditor. You need to remove this unverified account immediately",
  },
  {
    label:
      "Where’s the proof that you did an independent investigation? Where’s the proof that you didn’t just repeat what they told you?",
    value:
      "Where’s the proof that you did an independent investigation? Where’s the proof that you didn’t just repeat what they told you?",
  },
  {
    label:
      "This account was re-aged and shows different YEARS in the date of last activity! Delete immediately",
    value:
      "This account was re-aged and shows different YEARS in the date of last activity! Delete immediately",
  },
  {
    label: "Account is missing the date last activity",
    value: "Account is missing the date last activity",
  },
  {
    label: "Account is missing the date of last payment",
    value: "Account is missing the date of last payment",
  },
  {
    label: "You have the wrong date of last payment",
    value: "You have the wrong date of last payment",
  },
  {
    label: "You have the wrong date of last activity",
    value: "You have the wrong date of last activity",
  },
  {
    label:
      "Why are you reporting late payments that are different than the other 2 bureaus?",
    value:
      "Why are you reporting late payments that are different than the other 2 bureaus?",
  },
  {
    label:
      "Why are you reporting this account when the other bureaus removed this?",
    value:
      "Why are you reporting this account when the other bureaus removed this?",
  },
  {
    label:
      "I need to see all signed-by-me paperwork to prove the validity of this account reporting",
    value:
      "I need to see all signed-by-me paperwork to prove the validity of this account reporting",
  },
  {
    label:
      "You’re required to report the notice of dispute under section 623. Without it, this account cannot continue to report!",
    value:
      "You’re required to report the notice of dispute under section 623. Without it, this account cannot continue to report!",
  },
  {
    label:
      "Unless a creditor has proof to the contrary that this account belongs to me, section 623 states that it cannot continue to report!",
    value:
      "Unless a creditor has proof to the contrary that this account belongs to me, section 623 states that it cannot continue to report!",
  },
];

const JCS = [
  {
    label: "Select a justifyer to action",
    value: null,
  },
  {
    label:
      "I asked for you to legally verify this account and yet, all you’ve done is send me statements. Anyone can create a statement! This is not legal verification",
    value:
      "I asked for you to legally verify this account and yet, all you’ve done is send me statements. Anyone can create a statement! This is not legal verification",
  },
  {
    label:
      "I need to see all documentation that would prove that you verified this account or did any sort of investigation on it. Failing that, you need to remove this account",
    value:
      "I need to see all documentation that would prove that you verified this account or did any sort of investigation on it. Failing that, you need to remove this account",
  },
  {
    label:
      "I understand that your job is to make sure that you make as much money off my credit report as possible, BUT you’re mandated by federal law to make sure it’s accurate!",
    value:
      "I understand that your job is to make sure that you make as much money off my credit report as possible, BUT you’re mandated by federal law to make sure it’s accurate!",
  },
  {
    label: "Delete this account immediately",
    value: "Delete this account immediately",
  },
  {
    label:
      "I need to see all paperwork that proves you did an independent investigation. I need proof that you didn’t just send an electronic response to the creditor",
    value:
      "I need to see all paperwork that proves you did an independent investigation. I need proof that you didn’t just send an electronic response to the creditor",
  },
  {
    label:
      "I can see that the date updated date did not change. This means that there was never an investigation",
    value:
      "I can see that the date updated date did not change. This means that there was never an investigation",
  },
  {
    label:
      "I see that you’re still reporting a monthly payment on this CLOSED account. Delete immediately",
    value:
      "I see that you’re still reporting a monthly payment on this CLOSED account. Delete immediately",
  },
  {
    label:
      "Why have you reported this as accurate, when there was nothing that you sent to me that was legal verification?",
    value:
      "Why have you reported this as accurate, when there was nothing that you sent to me that was legal verification?",
  },
  {
    label: "You need to validate this account immediately",
    value: "You need to validate this account immediately",
  },
  {
    label:
      "I’ve submitted CFPB complaints against you for continuing to report an unverified account",
    value:
      "I’ve submitted CFPB complaints against you for continuing to report an unverified account",
  },
  {
    label: "Missing date of last payment",
    value: "Missing date of last payment",
  },
  {
    label: "Wrong date of last payment",
    value: "Wrong date of last payment",
  },
  {
    label: "Missing date of last activity",
    value: "Missing date of last activity",
  },
  {
    label: "Wrong date of last activity",
    value: "Wrong date of last activity",
  },
  {
    label: "Wrong account type",
    value: "Wrong account type",
  },
  {
    label: "Missing required notice of dispute",
    value: "Missing required notice of dispute",
  },
  {
    label:
      "Section 623 states that you’re required to enter a notice of dispute. This account is missing this notice and it must be removed entirely from my credit report",
    value:
      "Section 623 states that you’re required to enter a notice of dispute. This account is missing this notice and it must be removed entirely from my credit report",
  },
];

const JRP = [
  {
    label: "Select a justifyer to action",
    value: null,
  },
  {
    label:
      "creditor was required to send me specific paperwork within a certain period of time regarding where it was sold and the balance on the account. I didn't receive this paperwork and you need to remove this account immediately",
    value:
      "creditor was required to send me specific paperwork within a certain period of time regarding where it was sold and the balance on the account. I didn't receive this paperwork and you need to remove this account immediately",
  },
  {
    label:
      "monthly payment reported on this closed account, how can there be a monthly payment on an account that's not even open?",
    value:
      "monthly payment reported on this closed account, how can there be a monthly payment on an account that's not even open?",
  },
  {
    label: "you have the wrong balance - remove this account immediately",
    value: "you have the wrong balance - remove this account immediately",
  },
  {
    label: "date of last payment is wrong",
    value: "date of last payment is wrong",
  },
  {
    label: "date of last activity is wrong",
    value: "date of last activity is wrong",
  },
  {
    label:
      "status update date shows that this account wasn't even investigated, remove account",
    value:
      "status update date shows that this account wasn't even investigated, remove account",
  },
  {
    label: "3 different open dates reported",
    value: "3 different open dates reported",
  },
  {
    label: "3 different date of last activity dates reported",
    value: "3 different date of last activity dates reported",
  },
  {
    label:
      "this account can't possibly have been verified because the status update date has not changed. You need to remove this immediately",
    value:
      "this account can't possibly have been verified because the status update date has not changed. You need to remove this immediately",
  },
  {
    label: "this account has illegally been re-aged. Remove",
    value: "this account has illegally been re-aged. Remove",
  },
  {
    label: "bought by a collection agency but still shows a balance",
    value: "bought by a collection agency but still shows a balance",
  },
  {
    label: "bought by a collection agency but still shows a past due",
    value: "bought by a collection agency but still shows a past due",
  },
  {
    label: "bought by a collection agency but still shows a monthly payment",
    value: "bought by a collection agency but still shows a monthly payment",
  },
  {
    label: "collection and creditor both show balances",
    value: "collection and creditor both show balances",
  },
  {
    label: "date of last payment is different on each bureau",
    value: "date of last payment is different on each bureau",
  },
  {
    label: "high balance is lower than balance",
    value: "high balance is lower than balance",
  },
  {
    label: "balance is higher than high balance",
    value: "balance is higher than high balance",
  },
  {
    label:
      "I’m absolutely appalled that you would continue to report this auto account that does NOT belong to me, after I’ve submitted enough info to prove it AND the other bureaus removed it!",
    value:
      "I’m absolutely appalled that you would continue to report this auto account that does NOT belong to me, after I’ve submitted enough info to prove it AND the other bureaus removed it!",
  },
  {
    label:
      "Remove immediately for the following reasons: #1 this does NOT belong to me #2 the other bureaus removed it because it couldn’t be verified #3 no proper investigation was done #4 this is pure negligence",
    value:
      "Remove immediately for the following reasons: #1 this does NOT belong to me #2 the other bureaus removed it because it couldn’t be verified #3 no proper investigation was done #4 this is pure negligence",
  },
  {
    label:
      "I never received the required paperwork regarding where this was sold, how much, balance, etc. This is required by federal law and it’s a violation to continue reporting it!",
    value:
      "I never received the required paperwork regarding where this was sold, how much, balance, etc. This is required by federal law and it’s a violation to continue reporting it!",
  },
  {
    label:
      "You didn’t do a proper investigation and I can see that this account wasn’t even updated in the “status update” date. It’s a violation to continue reporting! I asked for the documentation to prove this account belongs to me and you didn’t send me anything.",
    value:
      "You didn’t do a proper investigation and I can see that this account wasn’t even updated in the “status update” date. It’s a violation to continue reporting! I asked for the documentation to prove this account belongs to me and you didn’t send me anything.",
  },
  {
    label:
      "It’s a violation to continue reporting an unverified and disputed account!",
    value:
      "It’s a violation to continue reporting an unverified and disputed account!",
  },
];

const JJL = [
  {
    label: "Select a justifyer to action",
    value: null,
  },
  {
    label: "unknown",
    value: "unknown",
  },
  {
    label: "not mine",
    value: "not mine",
  },
  {
    label: "I didn't file this",
    value: "I didn't file this",
  },
  {
    label: "belongs to someone else",
    value: "belongs to someone else",
  },
  {
    label: "wrong filing date",
    value: "wrong filing date",
  },
  {
    label: "3 different filing dates",
    value: "3 different filing dates",
  },
  {
    label: "2 different filing dates",
    value: "2 different filing dates",
  },
  {
    label: "wrong court name",
    value: "wrong court name",
  },
  {
    label: "inaccurate court name",
    value: "inaccurate court name",
  },
  {
    label:
      "recent changes to the law mandate that my personal info report per each public record. Due to the fact that there's no personal info reported, you must immediately remove from my credit report!",
    value:
      "recent changes to the law mandate that my personal info report per each public record. Due to the fact that there's no personal info reported, you must immediately remove from my credit report!",
  },
  {
    label: "wrong plaintiff",
    value: "wrong plaintiff",
  },
  {
    label: "you have the plaintiff reported wrong and this needs to be removed",
    value: "you have the plaintiff reported wrong and this needs to be removed",
  },
  {
    label:
      "how did you verify this as accurate when each bureau reports something different?",
    value:
      "how did you verify this as accurate when each bureau reports something different?",
  },
  {
    label:
      "where's the paperwork that belongs to this, that would verify the accuracy? Remove immediately",
    value:
      "where's the paperwork that belongs to this, that would verify the accuracy? Remove immediately",
  },
  {
    label:
      "I need to see all paperwork associated with this account. Failure to furnish is a violation of the FCRA",
    value:
      "I need to see all paperwork associated with this account. Failure to furnish is a violation of the FCRA",
  },
  {
    label:
      "the other credit bureau removed this, so why are you still reporting it?",
    value:
      "the other credit bureau removed this, so why are you still reporting it?",
  },
  {
    label:
      "the other bureaus removed this account, so why are you still reporting it on my credit file? Where's the paperwork?",
    value:
      "the other bureaus removed this account, so why are you still reporting it on my credit file? Where's the paperwork?",
  },
  {
    label:
      "I didn't agree or provide my permission for this account to report on my credit. Pursuant to section 603, this must be removed",
    value:
      "I didn't agree or provide my permission for this account to report on my credit. Pursuant to section 603, this must be removed",
  },
  {
    label: "I am a victim of identity theft and this is not mine",
    value: "I am a victim of identity theft and this is not mine",
  },
  {
    label:
      "Where’s my personal info that’s required to be on this account? I don’t see my name, social or anything else! Delete this immediately",
    value:
      "Where’s my personal info that’s required to be on this account? I don’t see my name, social or anything else! Delete this immediately",
  },
  {
    label:
      "I need for you to send me the actual court paperwork for this and if you can’t furnish it, then you’re reporting false info and that’s illegal",
    value:
      "I need for you to send me the actual court paperwork for this and if you can’t furnish it, then you’re reporting false info and that’s illegal",
  },
];

const JustifyerByType = (type: string) => {
  switch (type) {
    case "Charge-offs":
      return JCO as TOption[];
    case "3rd Party Collector":
      return JPC as TOption[];
    case "Debt Buyers":
      return JDB as TOption[];
    case "Student Loans":
      return JSL as TOption[];
    // case "Personal Info":
    //   return JPI as TOption[];
    case "Inquiries":
      return JIN as TOption[];
    case "Identity Theft":
      return JIT as TOption[];
    case "Repossessions":
      return JRP as TOption[];
    // case "Public Records":
    //   return JPR as TOption[];
    case "Late Payment":
      return JLP as TOption[];
    case "Bankrupcty":
      return JBA as TOption[];
    case "Foreclosures":
      return JFC as TOption[];
    case "Child Support":
      return JCS as TOption[];
    case "Judgements & Liens":
      return JJL as TOption[];
    default:
      return JCO as TOption[];
  }
};

export default JustifyerByType;
