import type { ReactElement } from 'react'
import Layout from '../../components/Layouts/Master'
import type { NextPageWithLayout } from '../_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../components/Subheader/Primary'
import Header from '../../components/Header/Header'
import Calendar from '../../components/Calendar/Calendar'




const Page: NextPageWithLayout = () => {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("header-enabled", "subheader-enabled");
        return () => {
          body?.classList.remove("header-enabled", "subheader-enabled");
        }
    });
  return (
    <>
      <Header>
        <div className="breadcrumb-separator">
          <svg data-testid="geist-icon" fill="#eaeaea" height="32" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="32"><path d="M16.88 3.549L7.12 20.451"></path></svg>
        </div>
        <div className="breadcrumb-item">
          <Link href="" className="link-primary">
            Lulu
          </Link>
        </div>
      </Header>
      <Subheader />
      <div className="heading heading-lg">
        <div className="container container-fluid container-1280 d-flex align-items-center justify-content-between">
            <h1>Schedule a consultant</h1>
            <div>
              {/* <Link href="/new" className="btn btn-lg btn-primary"><div className="fs-14">Add new</div></Link> */}
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1280 mt-40 fs-14">
        <Calendar/>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page