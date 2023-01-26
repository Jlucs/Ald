import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

export default function Subheader({ children, className }: Props) {
  const router = useRouter();
  return (
    <div className={`subheader ${className}`}>
      <div className="container container-fluid d-flex align-items-center">
        <div className="subheader-menu">
          <div className="menu">
            <Link href="/dashboard" className={["menu-item", '', router.pathname == "/dashboard" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Overview</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            <Link href="/assessments" className={["menu-item", '', router.pathname == "/assessments" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Assessments</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            <Link href="/activity" className={["menu-item", '', router.pathname == "/activity" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Activity</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            <Link href="/on-demand" className={["menu-item", '', router.pathname == "/on-demand" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">On demand</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            {/* <Link href="" className={["menu-item", '', router.pathname == "/analytics" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Analytics</div>
                <div className="menu-arrow"></div>
              </div>
            </Link> */}
            <Link href="" className={["menu-item", '', router.pathname == "/analytics" ? "active" : ""].join(" ")}>
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