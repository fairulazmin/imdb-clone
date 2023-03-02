'use client'

import { useTheme } from 'next-themes'
import { MdLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && currTheme === 'light' && (
        <MdLightMode
          className='text-xl cursor-pointer hover:text-amber-500'
          onClick={() => setTheme('dark')}
        />
      )}
      {mounted && currTheme === 'dark' && (
        <BsFillMoonFill
          className='text-xl cursor-pointer hover:text-amber-500'
          onClick={() => setTheme('light')}
        />
      )}
    </>
  )
}

export default DarkModeSwitch
