import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

type Props = {
  children?: React.ReactNode;       
  nav? : React.ReactNode; 
}

export default function Header({children}: Props) {
  const router = useRouter();
  return (
    <header className="header">

        <div className="container container-fluid container-1280 d-flex flex-row align-items-stretch justify-content-between">
          
          <div id="begin" className="d-flex">
            <div className="header-guide">
              <Link href="" className="guide-link">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path></g></svg>
              </Link>
            </div>
            <Link href="/" className="header-logo">
              <div className="logo-text">Aldameiry</div>
            </Link>
          </div>

          <div id="center" className="d-flex align-items-center justify-content-center">
            
          </div>

          <div id="end">
            <Link href="" className="btn btn-secondary"></Link>
          </div>
          
        </div>

    </header>
  )
}