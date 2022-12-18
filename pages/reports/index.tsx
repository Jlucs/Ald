import type { ReactElement } from 'react'
import Layout from '../../components/Layouts/Master'
import type { NextPageWithLayout } from '.././_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../components/Subheader/Primary'
import Header from '../../components/Header/Header'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
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
            <h1>Reports</h1>
            <div>
              {/* <Link href="/" className="btn btn-secondary btn-large fs-14">
                Add new
              </Link> */}
              {/* <Dropdown className="" btnClassName="btn btn-secondary btn-lg" menuClassName="dropdown-primary" dropDownButtonLabel="Add new"></Dropdown> */}
              <Modal className="modal-primary" />
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1200">
        <div className="searchgroup searchgroup-1">
          <div className="searchbar">
              <input placeholder="Search assessment..." />
              <span className="">
                <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path><path d="M16 16l4.5 4.5"></path></svg>
              </span>
          </div>
        </div>
        <table className="table-primary mt-5">
          <thead>
              <tr>
                  <th>
                      <div>
                          <div className="checkbox-container">
                              <div className="checkbox-check">
                                <input className="checkbox-input " type="checkbox" />
                              </div>
                          </div>
                      </div>
                  </th>
                  <th>
                      <div>Assessment</div>
                  </th>
                  <th>
                      <div>Type</div>
                  </th>
                  <th>
                      <div>Last update</div>
                  </th>
                  <th>
                      <div>Score</div>
                  </th>
                  <th>
                      <div><svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18" ><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg></div>
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>
                      <div>
                          <div className="checkbox-container">
                              <div className="checkbox-check">
                                  <input className="checkbox-input " type="checkbox" />
                              </div>
                          </div>
                      </div>
                  </td>
                  <td>
                      <Link href="/">
                          <div className="color-default primary-cell"><span>ISO, 20001-2018</span></div>
                      </Link>
                  </td>
                  <td>
                      <div>General maturity</div>
                  </td>
                  <td>
                      <div>12/2/2022</div>
                  </td>
                  <td>
                      <div>
                        3
                      </div>
                  </td>
                  <td>
                  <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg>
                  </td>
              </tr>
          </tbody>
        </table>
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