'use client'

import { useEffect, useState } from 'react'

import { useDrawer } from 'hooks/useDrawer'

type BannerOCRProp = {
  text: string
}

export const Banner = ({ text }: BannerOCRProp) => {
  const { handleOpenDrawer } = useDrawer()
  const [showBanner, setShowBanner] = useState(false)
  let closeBanner = false

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!closeBanner) return setShowBanner(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [closeBanner])

  const handleCloseBanner = () => {
    closeBanner = true
    setShowBanner(false)
  }

  return (
    <>
      {showBanner && (
        <div className="flex justify-center items-center mx-6">
          <div className="fixed bottom-0 w-full md:w-auto md:max-w-4xl px-6 pt-8 pb-6 bg-red-900 z-10 md:bottom-8 md:pl-12 md:pt-9 md:pb-9 md:pr-14 md:mx-6 md:rounded-lg">
            <div className="absolute top-[-14px] flex py-1 px-4 gap-2 rounded-3xl bg-red-950 text-sm font-semibold text-neutral-50">
              <img
                src="/icons/icon-bannerOCR.svg"
                alt="ícone de novidade, escaneie seus exames com a nossa inteligência artifical"
              />
              Novidade
            </div>
            <div className="flex justify-between items-center gap-4">
              <p
                className="font-inter text-sm font-semibold text-neutral-50 md:text-lg"
                dangerouslySetInnerHTML={{ __html: text || '' }}
              ></p>
              <button
                className="w-full max-w-32 min-w-32 h-10 bg-neutral-50 rounded-lg py-3 px-4 border-none outline-none font-inter text-sm leading-4 font-semibold text-red-950 md:max-w-[178px]"
                onClick={() => {
                  handleOpenDrawer()
                  handleCloseBanner()
                }}
              >
                Faça já seu Login
              </button>
            </div>
            <div className="absolute right-6 top-2 cursor-pointer md:top-3 md:right-3">
              <img
                src="/icons/close-white.svg"
                alt="ícone de fechar"
                width={24}
                onClick={handleCloseBanner}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
