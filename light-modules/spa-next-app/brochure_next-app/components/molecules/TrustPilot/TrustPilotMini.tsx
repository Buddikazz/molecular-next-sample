import React from "react";
import Trustpilot from "../../atoms/Trustpilot/Trustpilot";

interface TrustpilotMiniProps {
  score: number;
  link: string;
  totalReviews: string;
}
const TrustpilotMini = ({ score, link, totalReviews }: TrustpilotMiniProps) => (
  <div className="flex flex-col justify-center items-start w-full">
    <div className="w-1/2">
      <Trustpilot rating={score} />
    </div>
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
export default TrustpilotMini;
