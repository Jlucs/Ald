import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

export default function Iso1({ children, className }: Props) {
  const router = useRouter();
  return (
    <div className={`subheader ${className}`}>
      <div className="container container-fluid d-flex align-items-center">
        <div className="subheader-menu">
          <div className="menu">
            <Link href="/assessments/iso/20001-2018" className={["menu-item", '', router.pathname == "/assessments/iso/20001-2018" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Overview</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            <Link href="" className={["menu-item", '', router.pathname == "" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Analytics</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            <Link href="" className={["menu-item", '', router.pathname == "" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Snapshots</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            <Link href="" className={["menu-item", '', router.pathname == "" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Toolkits</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            <Link href="" className={["menu-item", '', router.pathname == "" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Settings</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}