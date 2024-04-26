"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export interface ImageInterface {
  src: string
  alt: string
}

export interface ImageProps {
  firstImage: ImageInterface
  secondImage?: ImageInterface
  url: string
  width?: number
  height?: number
}

export default function GameImage({ 
  firstImage, 
  secondImage, 
  url, 
  width, 
  height
}: ImageProps) {
  const [isHoverImage, setIsHoverImage] = useState<boolean>(false)

  return (
    <Link href={url}>
      <div 
        onMouseEnter={() => setIsHoverImage(true)} 
        onMouseLeave={() => setIsHoverImage(false)}
        className="cursor-pointer"
      >
        {!isHoverImage ? (
          <Image
            src={firstImage?.src}
            alt={firstImage?.alt}
            width={width}
            height={height}
            quality={100}
            priority={true}
          />
        ) : (
          <Image
            src={secondImage?.src || ''}
            alt={secondImage?.alt || ''}
            width={width}
            height={height}
            quality={100}
            priority={true}
          />
        )}
      </div>
    </Link>
  )
}
