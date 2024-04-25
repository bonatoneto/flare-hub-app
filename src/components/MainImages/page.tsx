"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ImageInterface } from "utils/types/image"

export interface ImageProps {
  firstGameImage: ImageInterface
  secondGameImage: ImageInterface
  url: string
}

export default function GameImage({ firstGameImage, secondGameImage, url}: ImageProps) {
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
            src={firstGameImage.src}
            alt={firstGameImage.alt}
            width={296}
            height={670}
            quality={100}
            priority={true}
          />
        ) : (
          <Image
          src={secondGameImage.src}
          alt={secondGameImage.alt}
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
