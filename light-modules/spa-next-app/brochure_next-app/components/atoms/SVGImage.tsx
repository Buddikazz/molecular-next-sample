import React from 'react';

interface SVGImageProps{
  path:string
}

export default function SVGImage({
    path
  }:SVGImageProps) {
    return <div className={`font-ciutadella`} dangerouslySetInnerHTML={{ __html: richText }} />;
  }
  