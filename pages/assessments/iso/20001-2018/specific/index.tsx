import type { ReactElement } from 'react'
import Layout from '../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../../_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../../../../components/Subheader/Iso2'
import Header from '../../../../../components/Header/Header'
import IsoVersion from '../../../../../components/Dropdown/IsoVersion'
import IsoMethod from '../../../../../components/Dropdown/IsoMethod'
import Modal from '../../../../../components/Modals/Modal'
import ProgressBar from '../../../../../components/ProgressBar/ProgressBar'
import Checkbox from '../../../../../components/Checkbox/Checkbox'


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

import ProgressProvider from "../../../../../ProgressProvider";

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
          <svg data-testid="geist-icon" fill="#eaeaea" height="32" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="32"><path d="M16.88 3.549L7.12 20.451"></path></svg>
        </div>
        <div className="breadcrumb-item">
          <Link href="" className="link-primary">
            Lulu
          </Link>
        </div>
        <div className="breadcrumb-separator">
          <svg data-testid="geist-icon" fill="#eaeaea" height="32" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="32"><path d="M16.88 3.549L7.12 20.451"></path></svg>
        </div>
        <div className="breadcrumb-item">
          <Link href="" className="link-primary">
            ISO 20001-2018
          </Link>
        </div>
      </Header>
      <Subheader/>  
      <div className="heading heading-lg">
        <div className="container container-fluid container-1280 d-flex align-items-center justify-content-between">
            <div>
              <h1>ISO 20001-2018 </h1>
              <div className="d-flex align-items-center flex-row">
                <div><p className="text-wrapper">Specific functional activities Assessment</p></div>
                <div className="text-wrapper mr-8 ml-8">·</div>
                <div className="text-wrapper fc-link fw-500">Level 3: Established process</div>
              </div>
            </div>
            <div>
              
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1280 mt-40">
        <div className="row mb-20">
            <div className="col-lg-4">
                <div className="card card-primary shadow">
                    <div className="card-body d-flex flex-column">
                        <div className="mb-20">
                            <svg className="svg-100 fc-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.925 3.90078V8.00077L12.025 10.8008V5.10078L15.525 3.10078C16.125 2.80078 16.925 3.20078 16.925 3.90078ZM2.525 13.5008L6.025 15.5008L10.925 12.7008L6.025 9.90078L2.525 11.9008C1.825 12.3008 1.825 13.2008 2.525 13.5008ZM18.025 19.7008V15.6008L13.125 12.8008V18.5008L16.625 20.5008C17.225 20.8008 18.025 20.4008 18.025 19.7008Z" fill="currentColor"></path>
                                <path opacity="0.3" d="M8.52499 3.10078L12.025 5.10078V10.8008L7.125 8.00077V3.90078C7.125 3.20078 7.92499 2.80078 8.52499 3.10078ZM7.42499 20.5008L10.925 18.5008V12.8008L6.02499 15.6008V19.7008C6.02499 20.4008 6.82499 20.8008 7.42499 20.5008ZM21.525 11.9008L18.025 9.90078L13.125 12.7008L18.025 15.5008L21.525 13.5008C22.225 13.2008 22.225 12.3008 21.525 11.9008Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h3 className="">Average Score - 2.88 (3)</h3>
                  </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-primary shadow">
                    <div className="card-body d-flex flex-column">
                        <div className="mb-20">
                            <svg className="svg-100 fc-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor"></rect>
                                <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor"></rect>
                                <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor"></rect>
                                <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor"></rect>
                            </svg>
                        </div>
                        <h3 className="">Potential Improvement - 48%</h3>
                  </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-primary shadow">
                    <div className="card-body d-flex flex-column">
                        <div className="mb-20">
                            <svg className="svg-100 fc-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor"></path>
                                <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h3 className="">State placement - Level 3</h3>
                  </div>
                </div>
            </div>
        </div>
        <div className="row no-gutters">
            <div className="card card-primary shadow mb-20">
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
                                        <div className="pill pill-primary fs-14">21 Data Points</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="br-solid-primary">
                                <div className="d-flex flex-column description">
                                    <dt>Assessment</dt>
                                    <dd>ISO 20001-2018, general maturity<span></span></dd>
                                </div>
                                <div className="d-flex flex-column description mt-25">
                                    <dt>Sector</dt>
                                    <dd>Quality management<span></span></dd>
                                </div>
                                <div className="d-flex flex-column description mt-25">
                                    <dt>Created on</dt>
                                    <dd>04-Dec-2022 14:29, Falah Aldameiry<span></span></dd>
                                </div>
                                <div className="d-flex flex-column description mt-25">
                                    <dt>Last update</dt>
                                    <dd>08-Dec-2022 18:34, Sophie Redwood<span></span></dd>
                                </div>
                            </div> 
                        </div>
                        <div className="col-4">
                            <div className="">
                            <div className="d-flex flex-column description">
                                    <dt>Current state</dt>
                                    <dd>Level 3: established process</dd>
                                </div>
                                <div className="d-flex flex-column description mt-25">
                                    <dt>Target state</dt>
                                    <dd>Level 4: predictable process</dd>
                                </div>
                                <div className="d-flex flex-column description mt-25">
                                    <dt>Assessment ID</dt>
                                    <dd>ISO-20001-2018-6zh89dcqz</dd>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="card shadow card-primary mb-20">
                    <div className="card-header header-compact">
                        <div className="header-title">State placement</div>
                    </div>
                    <div className="card-body p-relative">
                        <div className="timeline-legend">
                            <div className="d-flex fs-13">
                                <div className="w-60px fw-600">Process:</div>
                                <div className="">Service level agreements management</div>
                            </div>
                            <div className="d-flex fs-13">
                                <div className="w-60px fw-600">Section:</div>
                                <div className="">IT support</div>
                            </div>  
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="timeline">
                                    <div className="row">
                                        <div className="col">
                                            <div className="timeline-bar">
                                                <div className="bar-label">Level 1: Performed process</div>
                                                <div className="bar"></div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="timeline-bar">
                                                <div className="bar-label">Level 2: Managed process</div>
                                                <div className="bar"></div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="timeline-bar active">
                                                <div className="bar-label">Level 3: Established process</div>
                                                <div className="bar"></div>
                                                <div className="timeline-content">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="timeline-bar">
                                                <div className="bar-label">Level 4: Predictable process</div>
                                                <div className="bar"></div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="timeline-bar">
                                                <div className="bar-label">Level 5: Optimizing process</div>
                                                <div className="bar"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="card card-primary shadow card-stretch gutter-b card-warning">
                    <div className="card-header header-compact">
                        <div className="header-title">Gaps</div>
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
                    <div className="card-header header-compact">
                        <div className="header-title">Steps for future state: level 4</div>
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
            <div className="col-12">
            <div className="card card-primary shadow mb-20">
                    <div className="card-header header-compact">
                        <div className="header-title">Recommended activities</div>
                        <p className="text-wrapper mt-4 mb-0">Select activities to include in the execution plan.</p>
                    </div>
                    <div className="card-body">
                        <table className="table table-data">
                          <thead>
                            <tr>
                              <th>
                                <div>
                                
                                </div>
                              </th>
                              <th>
                                <div className="cell-left">Activity</div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div>
                                  <Checkbox/>
                                </div>
                              </td>
                              <td>
                                <div className="cell-left">
                                  Formalize and implement release, service-level, capacity and performance management consistently across the entire organization, including partner integration.
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>
                                  <Checkbox/>
                                </div>
                              </td>
                              <td>
                                <div className="cell-left">
                                  Ensure that all the processes implemented are governed using metrics which demonstrate achievement of process objectives. As a minimum: incident, request, problem, change configuration, service level, capacity and performance management processes.</div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>
                                  <Checkbox/>
                                </div>
                              </td>
                              <td>
                                <div className="cell-left">
                                  Implement business service management (BSM) processes and tools.
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>   
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <div className="card card-primary shadow">
                    <div className="card-header header-compact">
                        <div className="header-title">Recommended measurement</div>
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

        {/* <div className="card card-primary mt-40">
            <div className="d-flex box-row">
                <div className="flex-shrink-0 mr-16">ASSESSMENT</div>
                <div className="flex-auto col-2 mr-16">ISO 20001-2018, General Maturity</div>
                <div className="flex-auto col-5 mr-16">asd</div>
            </div>
            <div className="d-flex box-row">
                <div className="flex-shrink-0 mr-16">SECTOR</div>
                <div className="flex-auto col-2 mr-16">Quality management, IT Support</div>
                <div className="flex-auto col-5 mr-16">asd</div>
            </div>
            <div className="d-flex box-row">
                <div className="flex-shrink-0 mr-16">ASSESSMENT</div>
                <div className="flex-auto col-2 mr-16">ISO 20001-2018, General Maturity</div>
                <div className="flex-auto col-5 mr-16">asd</div>
            </div>
        </div> */}  

        <div className="d-flex align-items-center justify-content-between mt-40">
          <div></div>
          <div>
            <Link href="/assessments/iso/20001-2018/specific/report" className="btn btn-primary btn-lg fs-13">Save & Submit</Link>
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