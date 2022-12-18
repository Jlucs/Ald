import type { ReactElement } from 'react'
import Layout from '../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../../../components/Subheader/Primary'
import Header from '../../../../components/Header/Header'
import ProgressBar from '../../../../components/ProgressBar/Progressbar'
import IsoVersion from '../../../../components/Dropdown/IsoVersion'
import IsoMethod from '../../../../components/Dropdown/IsoMethod'
import Modal from '../../../../components/Modals/Modal'

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

import ProgressProvider from "../../../../ProgressProvider";

const Page: NextPageWithLayout = () => {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("header-enabled");
        return () => {
          body?.classList.remove("header-enabled");
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
      <div className="heading heading-lg">
        <div className="container container-fluid container-1200 d-flex align-items-center justify-content-between">
            <h1>Create ISO assessment</h1>
            <div>
              
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1200 mt-40">
        <div className="row">
            <div className="col-4">
              <IsoVersion className="" btnClassName="btn btn-secondary btn-lg btn-max disabled" menuClassName="dropdown-primary" dropDownButtonLabel="ISO"></IsoVersion>
            </div>
            <div className="col-4">
              <IsoVersion className="" btnClassName="btn btn-secondary btn-lg btn-max" menuClassName="dropdown-primary" dropDownButtonLabel="Select ISO version"></IsoVersion>
            </div>
        </div>
        <div className="mt-40">
          <div className="d-flex align-items-center justify-content-center infobox">
            <div>
              <div className="fs-14 fw-400">Select assessment version</div>
            </div>
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