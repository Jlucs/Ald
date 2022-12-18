import type { ReactElement } from 'react'
import Layout from '../../components/Layouts/Master'
import type { NextPageWithLayout } from '.././_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../components/Subheader/Primary'
import Header from '../../components/Header/Header'
import ProgressBar from '../../components/Progressbar/Progressbar'
import Dropdown from '../../components/Dropdown/Dropdown'
import Modal from '../../components/Modals/Modal'

type Props = {
  value: number;
}

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./../../ProgressProvider";

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
        <div className="container container-fluid container-1200 d-flex align-items-center justify-content-between">
            <h1>Assessments</h1>
            <div>
              <Dropdown className="" btnClassName="btn btn-secondary btn-lg" menuClassName="dropdown-primary" dropDownButtonLabel="All categories"></Dropdown>
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1200">
      <div className="searchgroup searchgroup-1 mt-40">
          <div className="searchbar">
              <input placeholder="Search assessment..." />
              <span className="">
                <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path><path d="M16 16l4.5 4.5"></path></svg>
              </span>
          </div>
        </div>
        <div className="assessments-grid mt-40">
        <Link href="/assessments/iso" className="card card-asm">
            <div className="card-thumbnail">
              <img src="/images/test.png" className="img-fluid" />
            </div>
            <div className="card-body">
              <div className="card-title">ISO</div>
              <div className="card-text mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              <div className="progress mt-20">
                <div className="progressbar p75" role="progressbar">75%</div>
              </div>
            </div>
            <div className="card-footer"></div>
          </Link>
          <Link href="/assessments/6sigma" className="card card-asm">
            <div className="card-thumbnail">
              <img src="/images/test.png" className="img-fluid" />
            </div>
            <div className="card-body">
              <div className="card-title">6 Sigma</div>
              <div className="card-text mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              <div className="progress mt-20">
                <div className="progressbar p50" role="progressbar">50%</div>
              </div>
            </div>
            <div className="card-footer"></div>
          </Link>
          <Link href="/" className="card card-asm">
            <div className="card-thumbnail">
              <img src="/images/test.png" className="img-fluid" />
            </div>
            <div className="card-body">
              <div className="card-title">PDCA</div>
              <div className="card-text mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              <div className="progress mt-20">
                <div className="progressbar p25" role="progressbar">25%</div>
              </div>
            </div>
            <div className="card-footer"></div>
          </Link>
          <Link href="/" className="card card-asm">
            <div className="card-thumbnail">
              <img src="/images/test.png" className="img-fluid" />
            </div>
            <div className="card-body">
              <div className="card-title">4th assessment type</div>
              <div className="card-text mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              <div className="progress mt-20">
                <div className="progressbar" role="progressbar"></div>
              </div>
            </div>
            <div className="card-footer"></div>
          </Link>
          <Link href="/" className="card card-asm">
            <div className="card-thumbnail">
              <img src="/images/test.png" className="img-fluid" />
            </div>
            <div className="card-body">
              <div className="card-title">5th assessment type</div>
              <div className="card-text mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              <div className="progress mt-20">
                <div className="progressbar" role="progressbar"></div>
              </div>
            </div>
            <div className="card-footer"></div>
          </Link>
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