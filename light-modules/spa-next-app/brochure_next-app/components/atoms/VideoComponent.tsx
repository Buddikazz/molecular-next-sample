import React from 'react';

export interface VideoProps {
  styleClass?: string,
  url: string,
  altText?: string,
  width?: number | undefined,
  height?: number | undefined,
}
export default function VideoComponent({
  styleClass = "",
  url = "",
  altText = "image",
  width = undefined,
  height = undefined,
}: VideoProps) {
  return (<div><iframe
    width="560"
    height="315"
    src={url}
    title="YouTube Video"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe></div>)
}
