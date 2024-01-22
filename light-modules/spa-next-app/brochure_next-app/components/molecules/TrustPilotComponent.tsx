import Script from "next/script";
import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";

const VARIANT_TEMPLATE_ID_MAP: Record<Variant, string> = {
  mini: "53aa8807dec7e10d38f59f32",
  testimonials: "539ad60defb9600b94d7df2c",
};

type Variant = "mini" | "testimonials";

type Props = ComponentPropsWithoutRef<"div"> & {
  variant: Variant;
  darkMode: boolean;
  className: string;
};

// eslint-disable-next-line import/prefer-default-export
export function TrustpilotWidget({
  className = "",
  variant = "mini",
  darkMode = false,
  ...others
}: Props) {
  const trustboxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    handleLoad();
  }, []);

  const handleLoad = () => {
    if (trustboxRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).Trustpilot?.loadFromElement(trustboxRef.current, true);
    }
  };

  const handleError = () => {
    // eslint-disable-next-line no-console
    console.log("loading failed");
  };

  return (
    <>
      <Script
        type="text/javascript"
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        onLoad={handleLoad}
        onError={handleError}
      />

      <div
        ref={trustboxRef}
        className={className}
        data-locale="en"
        data-theme={darkMode ? "dark" : "light"}
        data-text-color="black"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...others}
        // template-id and businessunit-id should not be overriden
        data-template-id={VARIANT_TEMPLATE_ID_MAP[variant]}
        data-businessunit-id="4d80cd6700006400050ef95e"
      />
    </>
  );
}
