type RandomNumberType = {
  value: number;
};

type RandomNumberPositive = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type RandomNumberNegative = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type RandomNumberZero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps =
  | RandomNumberPositive
  | RandomNumberNegative
  | RandomNumberZero;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "Positive"}
      {isNegative && "Negative"}
      {isZero && "Zero"}
    </div>
  );
};
