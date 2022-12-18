import React from 'react'
import Header from '../Header/LoginHeader'
import Link from 'next/link'
import Footer from '../Footer/Footer'  


type Props = {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
        <div className="wrapper">
          <div className="app-content d-flex flex-column-fluid flex-column">
            <main>
             {children}
            </main>
          </div>
        </div>
    </>
  )
}