import React from 'react';
import '../Image/Image.css';
import IMG, { StaticImageData } from 'next/image';

interface ImageProps {
  path: StaticImageData;
  alt: string;
  width: number;
  height: number;
  isBorderRadius?: boolean;
}

const Image = ({ path, alt, width, height, isBorderRadius }: ImageProps) => {
  const className = isBorderRadius ? 'image border-radius' : 'image';

  return (
    <div className={className}>
      <IMG src={path} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Image;
