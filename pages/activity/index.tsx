import type { ReactElement } from 'react'
import Layout from '../../components/Layouts/Master'
import type { NextPageWithLayout } from '../_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../components/Subheader/Primary'
import Header from '../../components/Header/Header'


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
            <h1>Activity</h1>
            <div>
              {/* <Link href="/new" className="btn btn-lg btn-primary"><div className="fs-14">Add new</div></Link> */}
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1280 mt-40 fs-14">
        <div className="fs-16 fw-700 mb-10">
          December 2022
        </div>
        <div className="p-10">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center mr-10">
                <button className="avatar-btn">
                  <div className="avatar">
                    <span>F</span>
                  </div>
                </button>
              </div>
              <div className="">ISO 20001-2018</div>
            </div>
            <div className=""></div>
          </div>
          <div className="d-flex flex-column events">
            <div className="d-flex justify-content-between px-5 align-items-center">
              <div>
                <div></div>
                <div>You made snapshot of ISO 20001-2018 (6zh89dcqz)</div>
              </div>
              <div className="fc-accent-3">3d</div>
            </div>
            <div className="d-flex justify-content-between px-5 align-items-center">
              <div>
                <div></div>
                <div>You made snapshot of ISO 20001-2018 (o2dayka6i)</div>
              </div>
              <div className="fc-accent-3">4d</div>
            </div>
            <div className="d-flex justify-content-between px-5 align-items-center">
              <div>
                <div></div>
                <div className="fc-danger">You deleted snapshot of ISO 20001-2018 (dgqal74dj)</div>
              </div>
              <div className="fc-accent-3">5d</div>
            </div>
            <div className="d-flex justify-content-between px-5 align-items-center">
              <div>
                <div></div>
                <div>You made snapshot of ISO 20001-2018 (bx6ae8hzd)</div>
              </div>
              <div className="fc-accent-3">6d</div>
            </div>
          </div>
        </div>
        <hr className="hr-primary"></hr>
        <div className="p-10">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center mr-10">
                <button className="avatar-btn">
                  <div className="avatar">
                    <span>F</span>
                  </div>
                </button>
              </div>
              <div className="">You completed ISO 20001-2018 (mo29gwmte) assessment</div>
            </div>
            <div className="fc-accent-3">8d</div>
          </div>
        </div>
        <hr className="hr-primary"></hr>
        <div className="p-10">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center mr-10">
                <button className="avatar-btn">
                  <div className="avatar">
                    <span>F</span>
                  </div>
                </button>
              </div>
              <div className="">You completed 6SIGMA assessment</div>
            </div>
            <div className="fc-accent-3">13d</div>
          </div>
        </div>
        <hr className="hr-primary"></hr>
        <div className="p-10">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center mr-10">
                <button className="avatar-btn">
                  <div className="avatar">
                    <span>F</span>
                  </div>
                </button>
              </div>
              <div className="">You completed PDCA assessment</div>
            </div>
            <div className="fc-accent-3">18d</div>
          </div>
        </div>
        <hr className="hr-primary"></hr>
        <div className="p-10">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center mr-10">
                <button className="avatar-btn">
                  <div className="avatar">
                    <span>F</span>
                  </div>
                </button>
              </div>
              <div className="">You completed ISO 9001-2015 assessment</div>
            </div>
            <div className="fc-accent-3">26d</div>
          </div>
        </div>
        <hr className="hr-primary"></hr>
        <div className="p-10">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center mr-10 ">
                <button className="avatar-btn">
                  <div className="avatar">
                    <span>F</span>
                  </div>
                </button>
              </div>
              <div className="">You completed ISO 27001 assessment</div>
            </div>
            <div className="fc-accent-3">1m</div>
          </div>
        </div>
        <hr className="hr-primary"></hr>
        <div className="p-10">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center mr-10 ">
                <button className="avatar-btn">
                  <div className="avatar">
                    <span>F</span>
                  </div>
                </button>
              </div>
              <div className="fc-danger">You completed ISO 27001 assessment</div>
            </div>
            <div className="fc-accent-3">1m</div>
          </div>
        </div>
        <hr className="hr-primary"></hr>
        <div className="p-10">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center mr-10">
                <button className="avatar-btn">
                  <div className="avatar">
                    <span>F</span>
                  </div>
                </button>
              </div>
              <div className="">You completed ISO 27001 assessment</div>
            </div>
            <div className="fc-accent-3">1m</div>
          </div>
        </div>
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