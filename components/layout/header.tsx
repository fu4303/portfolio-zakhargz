import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ToggleMode from './toggle'

let navMenu: Array<{ title: string; href: string }> = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  // { title: "Portfolio", href: "/portfolio" },
  { title: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const router = useRouter()

  return (
    <>
      <div className="relative flex items-center justify-end">
        <header className="flex items-center justify-end py-10">
          <ul className="items-center text-base leading-5 hidden lg:flex">
            {navMenu.map((menuItems, i) => (
              <li key={i}>
                <span
                  className={`font-medium sm:m-4 sm:py-2 ${
                    router.asPath === menuItems.href
                      ? 'font-bold border-bl border-b-4 dark:border-bd text-lg'
                      : 'text-lg font-normal border-b-4 border-transparent hover:border-bl dark:hover:border-bd transition-all duration-500 ease-in-out'
                  }`}
                >
                  <Link href={menuItems.href}>{menuItems.title}</Link>
                </span>
              </li>
            ))}
          </ul>
          <ToggleMode />
        </header>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
              <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
              <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className=""
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-6">
                    {navMenu.map((menuItems, i) => {
                      return (
                        <li key={i}>
                          <span
                            aria-label="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            <Link href={menuItems.href}>{menuItems.title}</Link>
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
