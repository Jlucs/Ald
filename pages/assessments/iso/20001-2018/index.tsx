import type { ReactElement } from 'react'
import Layout from '../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../../../components/Subheader/Iso1'
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
        document.body.classList.add("header-enabled" , "subheader-enabled");
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
        <div className="breadcrumb-separator">
          <svg data-testid="geist-icon" fill="#eaeaea" height="32" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="32"><path d="M16.88 3.549L7.12 20.451"></path></svg>
        </div>
        <div className="breadcrumb-item">
          <Link href="" className="link-primary">
            ISO 20001-2018
          </Link>
        </div>
      </Header>
      <Subheader/>  
      <div className="heading heading-lg">
        <div className="container container-fluid container-1200 d-flex align-items-center justify-content-between">
            <div>
                <h1>ISO 20001-2018</h1>
                <p>General Maturity</p>
            </div>
            <div>
              
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1200 mt-40">
        <div className="row">
            <div className="col-12">
                <div className="card card-primary shadow card-stretch gutter-b">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div className="d-flex align-items-center flex-column br-solid-primary">
                                    <h3 className="text-center">Assessment Index Score</h3>
                                    <div className="pb-wrapper pb-lg pb-success text-center mt-20 mb-20">
                                        <ProgressBar label="Stroke width">
                                            <ProgressProvider valueStart={0} valueEnd={3}>
                                                {(value: number) => <CircularProgressbar value={value} maxValue={5} text={`${2}`} strokeWidth={12} />}
                                            </ProgressProvider>
                                        </ProgressBar>
                                        <div className="pb-text"><span>3</span></div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center mt-4">
                                        <span>
                                            <div className="pill pill-primary fs-14">48 Data Points, AVG Score 2.88 (3)</div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="br-solid-primary">
                                    <div className="d-flex flex-column description">
                                        <dt>Assessment</dt>
                                        <dd>ISO 20001-2018, General Maturity</dd>
                                    </div>
                                    <div className="d-flex flex-column description mt-25">
                                        <dt>Sector</dt>
                                        <dd>Quality management, IT Support</dd>
                                    </div>
                                    <div className="d-flex flex-column description mt-25">
                                        <dt>Status</dt>
                                        <dd>
                                            <span className="asm-status success"></span>
                                            <span className="ml-8">Completed</span>
                                        </dd>
                                    </div>
                                    <div className="d-flex flex-column description mt-25">
                                        <dt>Created</dt>
                                        <dd>25d ago by Aldameiry <span></span></dd>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-4">
                                <div className="">
                                <div className="d-flex flex-column description">
                                        <dt>State</dt>
                                        <dd>Level 3: established process</dd>
                                    </div>
                                    <div className="d-flex flex-column description mt-25">
                                        <dt>Target state</dt>
                                        <dd>Level 4: predictable process</dd>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-lg-6">
                <div className="card card-primary shadow card-stretch gutter-b">
                    <div className="card-body">
                        <h3 className="">Earned </h3>
                    </div>
                </div>
            </div> */}
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="card card-primary shadow card-stretch gutter-b card-warning">
                    <div className="card-header">
                        <h3>Gaps</h3>
                    </div>
                    <div className="card-body">
                        <div className="list-1">
                            <div className="list-item">
                                <div className="item-text">
                                    Continuous Trend Analysis
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-text">
                                    Repeated incidents are not identified
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-text">
                                    Knowledge articles
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-text">
                                    Service Improvement Initiatives
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-text">
                                    Reports are generated manually (Meaningful  dashboard for management)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card card-primary shadow card-stretch gutter-b">
                    <div className="card-header">
                        <h3>Steps for future state: level 4</h3>
                    </div>
                    <div className="card-body">
                        <div className="list-1">
                            <div className="list-item">
                                <div className="item-text">
                                    Focus service-level monitoring on areas where there is risk of business process failure.
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-text">
                                    Repeated incidents are not identified
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-text">
                                    Predictive trend analysis to be included on the SLA Review Meeting 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="card card-primary shadow card-stretch gutter-b">
                    <div className="card-header">
                        <h3>Steps for future state: level 4</h3>
                    </div>
                    <div className="card-body">
                        <p>
                            Formalize and implement release, service-level, capacity and performance management consistently across the entire organization, including partner integration.
                        </p>
                        <p>
                            Ensure that all the processes implemented are governed using  metrics which demonstrate achievement of process objectives.  As a minimum: incident, request, problem, change configuration, service level, capacity and performance management processes.
                        </p>
                        <p>
                            Implement business service management (BSM) processes and tools.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="card card-primary shadow card-stretch gutter-b">
                    <div className="card-header">
                        <h3>Recommended measurement</h3>
                    </div>
                    <div className="card-body">
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(S)</p></div><div><p>Percentage of stakeholders subject to documented service level management policy including scope, purpose, controls and exception management</p></div></div>
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(S)</p></div><div><p>Percentage of stakeholders subject to documented service level management process including objectives, process workflow, inputs, outputs, roles and responsibilities, metrics and partner integration</p></div> </div>
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(P)</p></div><div><p>Percentage of IT services with agreed SLAs</p></div></div>
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(P)</p></div><div><p>Percentage of IT services with agreed OLAs</p></div></div>
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(P)</p></div><div><p>Benefits and costs of corrective performance actions in progress and implemented for service level management.</p></div> </div>
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(S)</p></div><div><p>Monthly reports for service level management highlighting improvements and targets missed leading to a corrective action plan</p></div> </div>
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(S)</p></div><div><p>Percentage of planned corrective action plans implemented for service level management</p></div></div>
                    </div>
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