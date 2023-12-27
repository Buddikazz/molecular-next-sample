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
  image?: MagnoliaImage|null,
  altText?: string,
}

const Image = ({
  styleClass="",
  image={'@link':""} as MagnoliaImage,
  altText="image",
}:ImageProps) => (
  <img
    className={`Image ${styleClass}`} 
    src={process.env.NEXT_PUBLIC_MGNL_HOST + '/dam/' + image?.['@id'] + image?.['@path']}
    alt={altText} 
  />
);

export default Image;
