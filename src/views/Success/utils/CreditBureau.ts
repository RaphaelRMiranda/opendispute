type CreditBureauProps = {
  equifax: boolean;
  experian: boolean;
  transunion: boolean;
  [key: string]: boolean;
};

const CreditBureau = ({ equifax, experian, transunion }: CreditBureauProps) => {
  const creditBureau = [];

  if (equifax) {
    creditBureau.push("Equifax");
  }

  if (experian) {
    creditBureau.push("Experian");
  }

  if (transunion) {
    creditBureau.push("TransUnion");
  }

  return creditBureau.join(", ");
};

export default CreditBureau;
