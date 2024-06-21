"use client"

import Link from "next/link"
import { useState } from "react"

export interface ImageProps {
  firstImage: string
  secondImage?: string
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
      >
        {!isHoverImage ? (
          <img
            src={firstImage}
            alt="Imagem do time"
            width={width}
            height={height}
          />
        ) : (
          <img
            src={secondImage || ''}
            alt="Imagem do time"
            width={width}
            height={height}
          />
        )}
      </div>
    </Link>
  )
}
