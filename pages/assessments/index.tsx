import type { ReactElement } from 'react'
import Layout from '../../components/Layouts/Master'
import type { NextPageWithLayout } from '../_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../components/Subheader/Primary'
import Header from '../../components/Header/Header'
import SectorsDropdown from '../../components/Dropdown/Sectors'
import AsmType from '../../components/Dropdown/AsmType'
import DatePicker from '../../components/Dropdown/DatePicker'


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
            <h1>Assessments</h1>
            <div>
              <Link href="/new" className="btn btn-lg btn-primary"><div className="fs-14">Add new</div></Link>
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1280 mt-40">
        <div className="row">
            <div className="col-3">
                <DatePicker className="" btnClassName="btn btn-secondary btn-input btn-lg btn-max d-flex align-items-center justify-content-between" menuClassName="dropdown-primary shadow">
                    <div>Last 12 months</div>
                    <div className="dropdown-btn-icon"><span className="mr-10"><svg data-testid="geist-icon" fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path></svg></span></div>
                    <div className="dropdown-btn-caret">
                        <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="18"><path d="M6 9l6 6 6-6"></path></svg>
                    </div>
                </DatePicker>
            </div>
            <div className="col-3">
                <SectorsDropdown className="" btnClassName="btn btn-secondary btn-input btn-lg btn-max d-flex align-items-center justify-content-between" menuClassName="dropdown-primary shadow">
                    <div>All sectors</div>
                    <div className="dropdown-btn-icon">
                        <span className="mr-10">
                            <svg className="svg-black" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.7 8L7.49998 15.3L4.59999 20.3C3.49999 18.4 3.1 17.7 2.3 16.3C1.9 15.7 1.9 14.9 2.3 14.3L8.8 3L11.7 8Z" fill="currentColor"></path>
                                <path opacity="0.3" d="M11.7 8L8.79999 3H13.4C14.1 3 14.8 3.4 15.2 4L20.6 13.3H14.8L11.7 8ZM7.49997 15.2L4.59998 20.2H17.6C18.3 20.2 19 19.8 19.4 19.2C20.2 17.7 20.6 17 21.7 15.2H7.49997Z" fill="currentColor"></path>
                            </svg>
                        </span>
                    </div>
                    <div className="dropdown-btn-caret">
                        <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="18"><path d="M6 9l6 6 6-6"></path></svg>
                    </div>
                </SectorsDropdown>
            </div>
            <div className="col-3">
                <AsmType className="" btnClassName="btn btn-secondary btn-input btn-lg btn-max d-flex align-items-center justify-content-between" menuClassName="dropdown-primary shadow">
                    <div>All types</div>
                    <div className="dropdown-btn-icon"><span className="mr-10"><svg className="svg-black" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path><path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path></svg></span></div>
                    <div className="dropdown-btn-caret">
                        <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="18"><path d="M6 9l6 6 6-6"></path></svg>
                    </div>
                </AsmType>
            </div>
            <div className="col-3">
                <div className="searchgroup searchgroup-1">
                    <div className="searchbar">
                    <input placeholder="Search assessment..." />
                        <span className="">
                            <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path><path d="M16 16l4.5 4.5"></path></svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <table className="table-primary mt-20">
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
                    <div>Name</div>
                  </th>
                  <th>
                      <div>Type</div>
                  </th>
                  <th>
                      <div>Score</div>
                  </th>
                  <th>
                      <div className="right-aligned">Last update</div>
                  </th>
                  <th>
                      <div className="right-aligned"><svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18" ><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg></div>
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
                      <Link href="/assessments/iso/20001-2018/general">
                          <div className="color-default primary-cell"><span>ISO 20001-2018</span></div>
                      </Link>
                  </td>
                  <td>
                      <div>ISO 20001 update</div>
                  </td>
                  <td>
                      <div>General maturity</div>
                  </td>
                  <td>
                      <div>
                        67%
                      </div>
                  </td>
                  <td>
                      <div className="right-aligned">4d ago</div>
                  </td>
                  <td>
                    <div className="right-aligned">
                        <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg>
                    </div>
                  </td>
              </tr>
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
                      <Link href="/assessments/iso/20001-2018/specific">
                          <div className="color-default primary-cell"><span>ISO 20001-2018</span></div>
                      </Link>
                  </td>
                  <td>
                      <div>ISO 20001 test run</div>
                  </td>
                  <td>
                      <div>Specific</div>
                  </td>
                  <td>
                      <div>
                        Level 3
                      </div>
                  </td>
                  <td>
                      <div className="right-aligned">6d ago</div>
                  </td>
                  <td>
                    <div className="right-aligned">
                        <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg>
                    </div>
                  </td>
              </tr>
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
                      <Link href="/assessments/external">
                          <div className="color-default primary-cell"><span>External assessment</span></div>
                      </Link>
                  </td>
                  <td>
                      <div>External assessment</div>
                  </td>
                  <td>
                      <div>External import</div>
                  </td>
                  <td>
                      <div>
                        
                      </div>
                  </td>
                  <td>
                      <div className="right-aligned">12d ago</div>
                  </td>
                  <td>
                    <div className="right-aligned">
                        <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg>
                    </div>
                  </td>
              </tr>
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
                          <div className="color-default primary-cell"><span>ISO 9001-2015</span></div>
                      </Link>
                  </td>
                  <td>
                      <div>ISO 9001 test run</div>
                  </td>
                  <td>
                      <div>Specific</div>
                  </td>
                  <td>
                      <div>
                        Level 4
                      </div>
                  </td>
                  <td>
                      <div className="right-aligned">26d ago</div>
                  </td>
                  <td>
                    <div className="right-aligned">
                        <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg>
                    </div>
                  </td>
              </tr>
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
                          <div className="color-default primary-cell"><span>ISO 27001</span></div>
                      </Link>
                  </td>
                  <td>
                      <div>ISO 27001 checkup</div>
                  </td>     
                  <td>
                      <div>General maturity</div>
                  </td>
                  <td>
                      <div>
                        82%
                      </div>
                  </td>
                  <td>
                      <div className="right-aligned">30d ago</div>
                  </td>
                  <td>
                    <div className="right-aligned">
                        <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle></svg>
                    </div>
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