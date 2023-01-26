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
            <Link href="/assessments/iso/20001-2018/specific" className={["menu-item", '', router.pathname == "/assessments/iso/20001-2018/specific" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Overview</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            <Link href="/assessments/iso/20001-2018/specific/analytics" className={["menu-item", '', router.pathname == "/assessments/iso/20001-2018/specific/analytics" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Analytics</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            <Link href="/assessments/iso/20001-2018/specific/execution-plan" className={["menu-item", '', router.pathname == "/assessments/iso/20001-2018/specific/execution-plan" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Execution plan</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            <Link href="/assessments/iso/20001-2018/specific/snapshots" className={["menu-item", '', router.pathname == "/assessments/iso/20001-2018/specific/snapshots" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Snapshots</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            <Link href="/assessments/iso/20001-2018/specific/toolkits" className={["menu-item", '', router.pathname == "/assessments/iso/20001-2018/specific/toolkits" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Toolkits</div>
                <div className="menu-arrow"></div>
              </div>
            </Link>
            {/* <Link href="/assessments/iso/20001-2018/general/settings" className={["menu-item", '', router.pathname == "/assessments/iso/20001-2018/general/settings" ? "active" : ""].join(" ")}>
              <div className="menu-link">
                <div className="menu-title">Settings</div>
                <div className="menu-arrow"></div>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}