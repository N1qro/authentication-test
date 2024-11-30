import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-slate-700 p-4">
      <nav>
        <ul className="flex justify-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
