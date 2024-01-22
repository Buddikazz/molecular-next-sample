import React from "react";
import Logo from "./Logo/Logo";
import Stars, { TrustPilotStarsProps } from "./Stars/Stars";

/**
 * @visibleName Trustpilot
 */
function Trustpilot({
  rating,
  className,
}: TrustPilotStarsProps): React.JSX.Element {
  return (
    <div className={className}>
      <Logo className="mr-1 mb-2" />
      <Stars className="ml-1" rating={rating} />
    </div>
  );
}
export default Trustpilot;
