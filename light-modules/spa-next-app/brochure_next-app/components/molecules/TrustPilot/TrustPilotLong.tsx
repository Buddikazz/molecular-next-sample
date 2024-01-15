import React from "react";
import Trustpilot from "../../atoms/Trustpilot/Trustpilot";
import { ratePerformance } from "@/utils/TrustpilotRating";

interface TrustpilotLongProps {
  score: number;
  link: string;
  totalReviews: string;
}
const TrustpilotLong = ({ score, link, totalReviews }: TrustpilotLongProps) => (
  <div className="flex flex-col justify-center items-start w-full">
    <p>{ratePerformance(score)}</p> <Trustpilot rating={score} />
    {/* <div style={{position: 'relative', height: 0, width: '100%', padding: 0, padding-bottom: '18.326693227091635%'}}> */}
    <p className="text-sm mt-1 underline">{`TrustScore ${score}`}</p>
    <p className="text-sm underline">
      <a href={link} target={"_self"} rel={undefined}>
        {`${totalReviews} reviews`}
      </a>

      {/* <Tooltip message={t('TRUSTPILOT_REVIEWS_DISCLAIMER')}>
        <button>
          <InfoIcon size="1em" color={theme.colors.textSecondary} />
        </button>
      </Tooltip> */}
    </p>
  </div>
);
export default TrustpilotLong;
