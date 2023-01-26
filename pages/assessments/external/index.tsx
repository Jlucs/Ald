import React, { useState, useEffect, Fragment, useRef, forwardRef, useLayoutEffect } from 'react';
import type { ReactElement } from 'react'
import Layout from '../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../_app'
import Link from 'next/link'
import Subheader from '../../../components/Subheader/Iso2'
import Header from '../../../components/Header/Header'
import IsoVersion from '../../../components/Dropdown/IsoVersion'
import IsoMethod from '../../../components/Dropdown/IsoMethod'
import Modal from '../../../components/Modals/Modal'
import ProgressBar from '../../../components/ProgressBar/ProgressBar'
import DatePicker from '../../../components/Datepicker/DatePicker'
import Status from '../../../components/Listbox/Status'
import Priority from '../../../components/Listbox/Priority'
import { Disclosure } from '@headlessui/react'


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

const Page: NextPageWithLayout = (props) => {

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
      {/* <Subheader/>   */}
      <div className="heading heading-lg">
        <div className="container container-fluid container-1440 d-flex align-items-center justify-content-between">
            <div>
                <h1><input defaultValue="External imported assessment"/></h1>
            </div>
            <div>
              
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1440 mt-40">
        <div className="table">
          <div className="table-header">
            <div className="table-row">
              <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                <div className="left-indicator-inner"></div>
              </div>
              <div className="grid-cell" style={{flex: "1"}}>
                <div className="cell-inner">
                  <div className="cell-title">Activity</div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner">
                  <div className="cell-title">Requirement</div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner">
                  <div className="cell-title">Requirement met</div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner">
                  <div className="cell-title">Percentage confirmity</div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-body">
         
            <div className="table-row">
              <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                <div className="left-indicator-inner"></div>
              </div>
              <div className="grid-cell" style={{flex: "1"}}>
                <div className="cell-inner">
                  <div className="d-flex flex-row align-items-center">
                    <div className="d-flex w-100">
                      {/* <InputEdit initialValue="Application Consolidation Project" /> */}
                      <input className="table-input" defaultValue="Content of Organization"/>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner">
                  <div className="cell-title text-center ">
                    4
                  </div>  
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner text-center p-0 w-100">
                    3
                </div>
              </div>
              <div className="grid-cell p-0 w-100" style={{flexBasis: "240px"}}>
               <div className="cell-inner text-center">
                    75%
                </div>
              </div>
            </div>

            <div className="table-row">
              <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                <div className="left-indicator-inner"></div>
              </div>
              <div className="grid-cell" style={{flex: "1"}}>
                <div className="cell-inner">
                  <div className="d-flex flex-row align-items-center">
                    <div className="d-flex w-100">
                      {/* <InputEdit initialValue="Application Consolidation Project" /> */}
                      <input className="table-input" defaultValue="Leadership"/>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner text-center">
                  <div className="cell-title">
                    4
                  </div>  
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner text-center p-0 w-100">
                    1
                </div>
              </div>
              <div className="grid-cell p-0 w-100" style={{flexBasis: "240px"}}>
               <div className="cell-inner text-center">
                    25%
                </div>
              </div>
            </div>

            <div className="table-row">
              <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                <div className="left-indicator-inner"></div>
              </div>
              <div className="grid-cell" style={{flex: "1"}}>
                <div className="cell-inner">
                  <div className="d-flex flex-row align-items-center">
                    <div className="d-flex w-100">
                      {/* <InputEdit initialValue="Application Consolidation Project" /> */}
                      <input className="table-input" defaultValue="Planning "/>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner text-center ">
                  <div className="cell-title">
                    3
                  </div>  
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner p-0 w-100 text-center ">
                    2
                </div>
              </div>
              <div className="grid-cell p-0 w-100" style={{flexBasis: "240px"}}>
               <div className="cell-inner text-center">
                    67%
                </div>
              </div>
            </div>

            <div className="table-row">
              <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                <div className="left-indicator-inner text-center"></div>
              </div>
              <div className="grid-cell" style={{flex: "1"}}>
                <div className="cell-inner text-center">
                  <div className="d-flex flex-row align-items-center">
                    <div className="d-flex w-100">
                      {/* <InputEdit initialValue="Application Consolidation Project" /> */}
                      <input className="table-input" defaultValue="Support of Service Management System"/>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner text-center">
                  <div className="cell-title">
                    7
                  </div>  
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner p-0 w-100 text-center">
                    1
                </div>
              </div>
              <div className="grid-cell p-0 w-100" style={{flexBasis: "240px"}}>
               <div className="cell-inner text-center">
                    14%
                </div>
              </div>
            </div>

            <div className="table-row">
              <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                <div className="left-indicator-inner"></div>
              </div>
              <div className="grid-cell" style={{flex: "1"}}>
                <div className="cell-inner text-center">
                  <div className="d-flex flex-row align-items-center">
                    <div className="d-flex w-100">
                      {/* <InputEdit initialValue="Application Consolidation Project" /> */}
                      <input className="table-input" defaultValue="Operation of Service Management System"/>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner text-center">
                  <div className="cell-title">
                    115
                  </div>  
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner p-0 w-100 text-center">
                    110
                </div>
              </div>
              <div className="grid-cell p-0 w-100" style={{flexBasis: "240px"}}>
               <div className="cell-inner text-center">
                    87%
                </div>
              </div>
            </div>

            <div className="table-row">
              <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                <div className="left-indicator-inner"></div>
              </div>
              <div className="grid-cell" style={{flex: "1"}}>
                <div className="cell-inner">
                  <div className="d-flex flex-row align-items-center">
                    <div className="d-flex w-100">
                      {/* <InputEdit initialValue="Application Consolidation Project" /> */}
                      <input className="table-input" defaultValue="performance evaluation "/>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner text-center">
                  <div className="cell-title">
                    8
                  </div>  
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner p-0 w-100 text-center">
                    8
                </div>
              </div>
              <div className="grid-cell p-0 w-100" style={{flexBasis: "240px"}}>
               <div className="cell-inner text-center">
                    100%
                </div>
              </div>
            </div>

            <div className="table-row">
              <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                <div className="left-indicator-inner"></div>
              </div>
              <div className="grid-cell" style={{flex: "1"}}>
                <div className="cell-inner">
                  <div className="d-flex flex-row align-items-center">
                    <div className="d-flex w-100">
                      {/* <InputEdit initialValue="Application Consolidation Project" /> */}
                      <input className="table-input" defaultValue="Improvement"/>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner">
                  <div className="cell-title text-center">
                    4
                  </div>  
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "240px"}}>
                <div className="cell-inner p-0 w-100 text-center">
                    4
                </div>
              </div>
              <div className="grid-cell p-0 w-100" style={{flexBasis: "240px"}}>
               <div className="cell-inner text-center">
                    100%
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* <table className="table-pulse mt-20">
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
                    <div>Task</div>
                </th>
                <th>
                    <div>Person</div>
                </th>
                <th>
                    <div>Status</div>
                </th>
                <th>
                    <div>Priority</div>
                </th>
                <th>
                    <div>Date</div>
                </th>
                <th>
                    <div>Files</div>
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
                    <div className="left-aligned color-default"><span>Application Consolidation Project</span></div>
                </td>
                <td className="">
                    <div className="d-flex justify-content-center">
                        <div className="table-avatar" style={{ background: "#046295" }}>
                            <div>F</div>
                        </div>
                    </div>
                </td>
                <td className="p-0 td-size-4">
                    <div className="bg-success fc-white">Done</div>
                    <Status className="d-flex"/>
                </td>
                <td className="p-0 td-size-4">
                    <div className="priority-low fc-white">Low</div>
                    <Priority className="d-flex"/>
                </td>
                <td className="td-size-4">
                    <div>
                        <DatePicker/>
                    </div>
                </td>
                <td>
                <div>
                    
                </div>
                </td>
            </tr>
          </tbody>
        </table> */}
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

