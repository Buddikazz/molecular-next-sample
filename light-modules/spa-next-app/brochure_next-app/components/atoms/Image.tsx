/* eslint-disable react/require-default-props */
import React from "react";
import Image from "next/image";

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

function ImageAtom({
  styleClass = "",
  image = { "@link": "" } as MagnoliaImage,
  altText = "image",
  width = undefined || 1500,
  height = undefined || 800,
  checkboxRounded = undefined,
  clickableLink = "",
}: ImageProps) {
  const src = `${process.env.NEXT_PUBLIC_MGNL_HOST}/dam/${image?.["@id"]}${image?.["@path"]}`;
  const imageComponent = (
    <Image
      className={`${styleClass} mx-auto  ${
        checkboxRounded &&
        " object-container object-center bg-white rounded-full w-44 h-44"
      }`}
      loader={() => src}
      src={src}
      width={width}
      height={height}
      alt={altText}
    />
  );

  return clickableLink ? (
    <a href={clickableLink}>{imageComponent}</a>
  ) : (
    imageComponent
  );
}

export default ImageAtom;
