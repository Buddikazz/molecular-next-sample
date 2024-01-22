import React, { SVGProps } from "react";
import { FiveStar } from "./ratings/FiveStar";
import { FourHalfStar } from "./ratings/FourHalfStar";
import { FourStar } from "./ratings/FourStar";
import { OneHalfStar } from "./ratings/OneHalfStar";
import { OneStar } from "./ratings/OneStar";
import { ThreeHalfStar } from "./ratings/ThreeHalfStar";
import { ThreeStar } from "./ratings/ThreeStar";
import { TwoHalfStar } from "./ratings/TwoHalfStar";
import { TwoStar } from "./ratings/TwoStar";
import { ZeroStar } from "./ratings/ZeroStar";

export type TrustPilotStarsProps = SVGProps<SVGSVGElement> & {
  // eslint-disable-next-line react/require-default-props
  rating?: 0 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | number;
};

export default function TrustPilotStars({
  rating = 5,
  ...props
}: TrustPilotStarsProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 512 96"
      height="20px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby="trust-pilot-rating-title trust-pilot-rating-desc"
      role="img"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <title id="trust-pilot-rating-title">
        {
          (
            {
              0: "Trustpilot Zero stars rating",
              1: "Trustpilot One star",
              1.5: "Trustpilot One and a half stars rating",
              2: "Trustpilot Two stars rating",
              2.5: "Trustpilot Two and a half stars rating",
              3: "Trustpilot Three stars rating",
              3.5: "Trustpilot Three and a half stars rating",
              4: "Trustpilot Four stars rating",
              4.5: "Trustpilot Four and a half stars rating",
              5: "Trustpilot Five stars rating",
            } as const
          )[rating]
        }
      </title>
      <desc id="trust-pilot-rating-desc">
        An illustration of the Trustpilot Stars Logo
      </desc>
      {rating === 0 && <ZeroStar />}
      {rating > 0 && rating <= 1 && <OneStar />}
      {rating > 1 && rating <= 1.5 && <OneHalfStar />}
      {rating > 1.5 && rating <= 2 && <TwoStar />}
      {rating > 2 && rating <= 2.5 && <TwoHalfStar />}
      {rating > 2.5 && rating <= 3 && <ThreeStar />}
      {rating > 3 && rating <= 3.5 && <ThreeHalfStar />}
      {rating > 3.5 && rating <= 4 && <FourStar />}
      {rating > 4 && rating <= 4.8 && <FourHalfStar />}
      {rating > 4.8 && rating <= 5 && <FiveStar />}
    </svg>
  );
}
