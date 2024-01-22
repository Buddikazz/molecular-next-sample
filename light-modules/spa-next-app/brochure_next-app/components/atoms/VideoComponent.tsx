import React from "react";

export interface VideoProps {
  url: string;
}
export default function VideoComponent({ url = "" }: VideoProps) {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube Video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
