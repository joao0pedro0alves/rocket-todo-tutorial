import Image from 'next/image'
import logo from '@/assets/logo.svg'

export function Header() {
  return (
    <header className="flex h-[200px] items-center justify-center bg-gray-700">
      <Image priority width={126} src={logo} alt="" />
    </header>
  )
}
