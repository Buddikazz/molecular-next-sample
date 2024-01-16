import React from "react";
import Trustpilot from "../../atoms/Trustpilot/Trustpilot";
import { ratePerformance } from "@/utils/TrustpilotRating";
import Stars from "@/components/atoms/Trustpilot/Stars/Stars";
import Logo from "@/components/atoms/Trustpilot/Logo/Logo";

interface TrustpilotLongProps {
  score: number;
  link: string;
  totalReviews: string;
}
const TrustpilotLong = ({ score, link, totalReviews }: TrustpilotLongProps) => (
  <div className="grid justify-center items-center  w-full">
    <div className="flex items-center justify-center flex-row mt-4 md:mt-0">
      <p className="title text-lg font-bold" >{ratePerformance(score)}</p>
      <Stars className="ml-2" rating={score} />
    </div>
    <div className="flex items-start flex-row mt-4 md:mt-0">
      <p className="text-gray-500">Based on <a className="underline text-black" target={"_self"} href={link}>{`${totalReviews} reviews`}</a> on </p>
      <Logo className="ml-2 mt-1" />
    </div>
  </div>
);
export default TrustpilotLong;
