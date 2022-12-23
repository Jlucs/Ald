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

        <div className="container container-fluid d-flex flex-row align-items-stretch justify-content-between">
          
          <div id="begin" className="d-flex">
            <div className="header-breadcrumb">
              <Link href="/dashboard" className="header-logo">
                <img src="/images/adlogo.svg" alt="aldameiry logo"/>
              </Link>
              {children}
            </div>
          </div>

          <div id="center" className="d-flex align-items-center justify-content-center">

          </div>

          <div id="end">
            <div className="d-flex flex-stretch flex-shrink-0">
              <div className="d-flex align-items-center py-12">
                <div className="header-search d-flex align-items-stretch">
                  <div className="d-flex align-items-center">
                    <Link href="/" className="btn btn-secondary btn-sm fw-400">
                      Feedback
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center py-12">
                <div className="header-search d-flex align-items-stretch">
                  <div className="d-flex align-items-center">
                    <Link href="/" className="link fs-14 link link-primary">
                      Changelog
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center py-12">
                <div className="header-search d-flex align-items-stretch">
                  <div className="d-flex align-items-center">
                    <Link href="/" className="link fs-14 link link-primary">
                      Help
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center py-12">
                <div className="header-search d-flex align-items-stretch">
                  <div className="d-flex align-items-center">
                    <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary btn-circle-shadow w-32px h-32px py-12">
                      <span className="svg-icon svg-icon-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" ></path></g></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-stretch ml-12">
                <div className="header-search d-flex align-items-stretch">
                  <div className="d-flex align-items-center">
                    <button className="avatar-btn">
                      <div className="avatar">
                        <span>F</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>  
            </div>
          </div>
          
        </div>

    </header>
  )
}