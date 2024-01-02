import React from 'react';

export interface MagnoliaImage {
  '@id': string,
  '@link': string,
  '@name': string,
  '@path': string,
  '@type': string,
  '@uuid': string,
}

export interface ImageProps {
  styleClass?: string,
  image?: MagnoliaImage | null,
  altText?: string,
}

const Image = ({
  styleClass = "",
  image = { '@link': "" } as MagnoliaImage,
  altText = "image",
}: ImageProps) => (
  <img
    // style={{
    //   width: '100%',      // 100% width of the container
    //   height: '100%',     // 100% height of the container
    //   objectFit: 'cover', // Maintain aspect ratio and cover the container
    // }}
    className={`Image ${styleClass} md:flex-1 bg-purple md:bg-no-repeat md:bg-cover md:bg-center w-full h-full object-cover p-4 md:p-0`}
    src={process.env.NEXT_PUBLIC_MGNL_HOST + '/dam/' + image?.['@id'] + image?.['@path']}
    alt={altText}
  />
);

export default Image;
