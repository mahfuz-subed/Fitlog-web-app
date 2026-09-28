'use client'

import { LibraryContext } from '@/LibraryContext/LibraryProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'

const Nav = () => {
  const { todaysPlan, saved } = useContext(LibraryContext)
  const pathname = usePathname()

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`no-underline transition-all duration-200 ${
            pathname === '/'
              ? 'bg-[#1a2312] text-[#c2f800] font-semibold'
              : 'text-white hover:bg-white/10 hover:text-[#c2f800]'
          }`}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/myPlan"
          className={`no-underline transition-all duration-200 ${
            pathname === '/myPlan'
              ? 'bg-[#1a2312] text-[#c2f800] font-semibold'
              : 'text-white hover:bg-white/10 hover:text-[#c2f800]'
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  )

  return (
    <div className="navbar sticky top-0 z-50 bg-[#15171d]/95 px-4 sm:px-[5%] shadow-md backdrop-blur-sm">
      
      {/* Left side */}
      <div className="navbar-start">

        {/* Mobile menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white hover:bg-white/10 lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-2xl border border-white/10 bg-[#15171d] p-2 shadow-xl"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="btn btn-ghost px-2 text-xl font-extrabold tracking-wide text-white hover:bg-transparent"
        >
          FIT<span className="text-[#c2f800]">LOG</span>
        </Link>
      </div>

      {/* Desktop navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1">
          {links}
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end gap-2 sm:gap-3">

        <Link
          href="/myPlan"
          className="group flex items-center text-sm font-medium text-white transition-colors duration-200 hover:text-[#c2f800] sm:text-base"
        >
          <span>Plan</span>
          <span className="ml-1.5 rounded-full bg-[#c2f800] px-2.5 py-0.5 text-xs font-bold text-[#15171d] transition-transform duration-200 group-hover:scale-105 sm:px-3 sm:py-1 sm:text-sm">
            {todaysPlan.length}
          </span>
        </Link>

        <Link
          href="/myPlan"
          className="group flex items-center text-sm font-medium text-white transition-colors duration-200 hover:text-[#c2f800] sm:text-base"
        >
          <span>Saved</span>
          <span className="ml-1.5 rounded-full border-2 border-[#c2f800] px-2.5 py-0.5 text-xs font-bold text-[#c2f800] transition-all duration-200 group-hover:bg-[#c2f800] group-hover:text-[#15171d] sm:px-3 sm:py-1 sm:text-sm">
            {saved.length}
          </span>
        </Link>

      </div>
    </div>
  )
}

export default Nav

