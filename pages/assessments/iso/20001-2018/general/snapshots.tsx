import type { ReactElement } from 'react'
import Layout from '../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../../_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../../../../components/Subheader/Iso1'
import Header from '../../../../../components/Header/Header'
import IsoVersion from '../../../../../components/Dropdown/IsoVersion'
import IsoMethod from '../../../../../components/Dropdown/IsoMethod'
import Modal from '../../../../../components/Modals/Modal'
import ProgressBar from '../../../../../components/ProgressBar/ProgressBar'
import DatePicker from '../../../../../components/Datepicker/DatePicker'
import Status from '../../../../../components/Listbox/Status'
import Priority from '../../../../../components/Listbox/Priority'


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
              <h1>Snapshots</h1>
            </div>
            <div>
              
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1280">

      <div className="searchgroup searchgroup-1 mt-40 mb-20">
        <div className="searchbar">
            <input placeholder="Search snapshot..." />
            <span className="">
              <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path><path d="M16 16l4.5 4.5"></path></svg>
            </span>
        </div>
      </div>

      <table className="table-pulse mt-20">
          <thead>
            <tr>
                <th>
                    <div>
                        <div className="checkbox-container">
                            <div className="checkbox-check">
                              <input className="checkbox-input" type="checkbox" />
                            </div>
                        </div>
                    </div>
                </th>
                <th>
                    <div>Version</div>
                </th>
                <th>
                    <div>State</div>
                </th>
                <th>
                    <div>Issues</div>
                </th>
                <th>
                    <div>Last Update</div>
                </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <div>
                      <div className="checkbox-container">
                          <div className="checkbox-check">
                            <input className="checkbox-input" type="checkbox" />
                          </div>
                      </div>
                  </div>
              </td>
              <td>
                  <div className="left-aligned"><Link href="" className="color-default">ISO 20001-2018-6zh89dcqz (Current)</Link></div>
              </td>
              <td className="p-0 td-size-4">
                <div className="">Level 5</div>
              </td>
              <td>
                <div>
                  2
                </div>
              </td>
              <td>
                <div>
                    2d ago by Sophie
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <div>
                      <div className="checkbox-container">
                          <div className="checkbox-check">
                            <input className="checkbox-input" type="checkbox" />
                          </div>
                      </div>
                  </div>
              </td>
              <td>
                  <div className="left-aligned"><Link href="" className="color-default">ISO 20001-2018-o2dayka6i</Link></div>
              </td>
              <td className="p-0 td-size-4">
                <div className="">Level 4</div>
              </td>
              <td>
                <div>
                  7
                </div>
              </td>
              <td>
                <div>
                    5d ago by Aldameiry
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <div>
                      <div className="checkbox-container">
                          <div className="checkbox-check">
                            <input className="checkbox-input" type="checkbox" />
                          </div>
                      </div>
                  </div>
              </td>
              <td>
                  <div className="left-aligned"><Link href="" className="color-default">ISO 20001-2018-dgqal74dj</Link></div>
              </td>
              <td className="p-0 td-size-4">
                <div className="">Level 3</div>
              </td>
              <td>
                <div>
                  10
                </div>
              </td>
              <td>
                <div>
                    14d ago by Aldameiry
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <div>
                      <div className="checkbox-container">
                          <div className="checkbox-check">
                            <input className="checkbox-input" type="checkbox" />
                          </div>
                      </div>
                  </div>
              </td>
              <td>
                  <div className="left-aligned"><Link href="" className="color-default">ISO 20001-2018-bx6ae8hzd</Link></div>
              </td>
              <td className="p-0 td-size-4">
                <div className="">Level 2</div>
              </td>
              <td>
                <div>
                  15
                </div>
              </td>
              <td>
                <div>
                    27d ago by Sophie
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <div>
                      <div className="checkbox-container">
                          <div className="checkbox-check">
                            <input className="checkbox-input" type="checkbox" />
                          </div>
                      </div>
                  </div>
              </td>
              <td>
                  <div className="left-aligned"><Link href="" className="color-default">ISO 20001-2018-mo29gwmte</Link></div>
              </td>
              <td className="p-0 td-size-4">
                <div className="">Level 1</div>
              </td>
              <td>
                <div>
                  18
                </div>
              </td>
              <td>
                <div>
                  1m ago by Aldameiry
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <div className="searchgroup searchgroup-1 mt-40 mb-20">
          <div className="searchbar">
              <input placeholder="Search snapshot..." />
              <span className="">
                <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path><path d="M16 16l4.5 4.5"></path></svg>
              </span>
          </div>
        </div> */}
        {/* <div className="d-flex snapshot-item fs-13 w-100">
            <div className="col-3 fw-600 d-flex align-items-center">ISO 20001-2018-6zh89dcqz (Current)</div>
            <div className="col-2 d-flex align-items-center">
              <div className="bullet bullet-round bg-success mr-10"></div>
              <div>level 3</div>
            </div>
            <div className="col-4 d-flex align-items-center fc-accent-5">ISO 20001 December update</div>
            <div className="d-flex align-items-right w-100">
              <div>
                2d ago by Sophie
              </div>
              <div className="ml-16">
                <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg>
              </div>
            </div>
        </div>
        <div className="d-flex snapshot-item fs-13 w-100">
            <div className="col-3 fw-600 d-flex align-items-center">ISO 20001-2018-o2dayka6i</div>
            <div className="col-2 d-flex align-items-center">
              <div className="bullet bullet-round bg-success mr-10"></div>
              <div>level 3</div>
            </div>
            <div className="col-4 d-flex align-items-center fc-accent-5">ISO 20001 Update</div>
            <div className="d-flex align-items-right w-100">
              <div>
                5d ago by Aldameiry
              </div>
              <div className="ml-16">
                <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg>
              </div>
            </div>
        </div>
        <div className="d-flex snapshot-item fs-13 w-100">
            <div className="col-3 fw-600 d-flex align-items-center">ISO 20001-2018-dgqal74dj</div>
            <div className="col-2 d-flex align-items-center">
              <div className="bullet bullet-round bg-warning mr-10"></div>
              <div>level 2</div>
            </div>
            <div className="col-4 d-flex align-items-center fc-accent-5">ISO 20001 Update</div>
            <div className="d-flex align-items-right w-100">
              <div>
                14d ago by Aldameiry
              </div>
              <div className="ml-16">
                <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg>
              </div>
            </div>
        </div>
        <div className="d-flex snapshot-item fs-13 w-100">
            <div className="col-3 fw-600 d-flex align-items-center">ISO 20001-2018-bx6ae8hzd</div>
            <div className="col-2 d-flex align-items-center">
              <div className="bullet bullet-round bg-warning mr-10"></div>
              <div>level 2</div>
            </div>
            <div className="col-4 d-flex align-items-center fc-accent-5">ISO 20001 Company Demo v2</div>
            <div className="d-flex align-items-right w-100">
              <div>
                27d ago by Sophie
              </div>
              <div className="ml-16">
                <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg>
              </div>
            </div>
        </div>
        <div className="d-flex snapshot-item fs-13 w-100">
            <div className="col-3 fw-600 d-flex align-items-center">ISO 20001-2018-mo29gwmte</div>
            <div className="col-2 d-flex align-items-center">
              <div className="bullet bullet-round bg-danger mr-10"></div>
              <div>level 1</div>
            </div>
            <div className="col-4 d-flex align-items-center fc-accent-5">ISO 20001 Company Demo</div>
            <div className="d-flex align-items-right w-100">
              <div>
                1m ago by Aldameiry
              </div>
              <div className="ml-16">
                <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg>
              </div>
            </div>
        </div> */}
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