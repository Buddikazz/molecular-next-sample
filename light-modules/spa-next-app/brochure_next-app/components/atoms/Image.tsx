import React from "react";

export interface MagnoliaImage {
  "@id": string;
  "@link": string;
  "@name": string;
  "@path": string;
  "@type": string;
  "@uuid": string;
}

export interface ImageProps {
  styleClass?: string;
  image?: MagnoliaImage | null;
  altText?: string;
  width?: number | undefined;
  height?: number | undefined;
  checkboxRounded?: string;
  clickableLink?: string;
}

const Image = ({
  styleClass = "",
  image = { "@link": "" } as MagnoliaImage,
  altText = "image",
  width = undefined,
  height = undefined,
  checkboxRounded = undefined,
  clickableLink = "",
}: ImageProps) => {
  const imageComponent = (
    <img
      className={`${styleClass} mx-auto  ${checkboxRounded &&
        " object-container object-center bg-white rounded-full w-44 h-44"
        }`}
      src={
        process.env.NEXT_PUBLIC_MGNL_HOST +
        "/dam/" +
        image?.["@id"] +
        image?.["@path"]
      }
      alt={altText}
      width={width}
      height={height}
    />
  );

  return clickableLink ? (
    <a href={clickableLink}>{imageComponent}</a>
  ) : (
    imageComponent
  );
};

export default Image;
