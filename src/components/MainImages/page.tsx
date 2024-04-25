"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ImageInterface } from "utils/types/image"

export interface ImageProps {
  firstImage: ImageInterface
  secondImage?: ImageInterface
  url: string
}

export default function GameImage({ firstImage, secondImage, url}: ImageProps) {
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
            width={296}
            height={670}
            quality={100}
            priority={true}
          />
        ) : (
          <Image
            src={secondImage?.src || ''}
            alt={secondImage?.alt || ''}
            width={296}
            height={670}
            quality={100}
            priority={true}
          />
        )}
      </div>
    </Link>
  )
}
