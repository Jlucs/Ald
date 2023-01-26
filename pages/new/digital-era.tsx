import type { ReactElement } from 'react'
import {useState} from 'react'
import Layout from '../../components/Layouts/Master'
import type { NextPageWithLayout } from '../_app'
import Link from 'next/link'
import { useEffect } from 'react'
import Subheader from '../../components/Subheader/Primary'
import Header from '../../components/Header/Header'
import Dropdown from '../../components/Dropdown/SectorList'

type Props = {
    value: number;
}

const Page: NextPageWithLayout = () => {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("header-enabled", "subheader-enabled");
        return () => {
            body?.classList.remove("header-enabled", "subheader-enabled");
        }
    });
    const FileInputButton: React.FC = () => {
        const [fileSelected, setFileSelected] = useState(false);
      
        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.files && event.target.files.length > 0) {
            setFileSelected(true);
          } else {
            setFileSelected(false);
          }
        };
      
        return (
          <div>
            <input type="file" onChange={handleFileChange} />
            {fileSelected && <Link href="/assessments/external" className="btn btn-primary btn-lg mt-20">Submit</Link>}
          </div>
        );
      };
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
      <div className="container container-fluid container-1280 mt-40">
        <h1 className="h1-primary fw-600">Let&apos;s improve another sector</h1>
        <p className="mb-40">To start a new assessment, select sector and then pick a specific asessment.</p>
        <div className="row">
            <div className="col-lg-7">
                <div className="card card-primary shadow">
                    <div className="card-body">
                        <h2 className="mb-20">Select assessment sector</h2>
                        <div className="row">
                            <div className="col-6">
                                <Dropdown className="" btnClassName="btn btn-secondary btn-input btn-lg btn-max d-flex align-items-center justify-content-between" menuClassName="dropdown-primary shadow" dropDownButtonLabel="ISO">
                                    <div>Digital era</div>
                                    <div className="dropdown-btn-icon">
                                        <span className="mr-10">
                                            <svg className="svg-green" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.7 8L7.49998 15.3L4.59999 20.3C3.49999 18.4 3.1 17.7 2.3 16.3C1.9 15.7 1.9 14.9 2.3 14.3L8.8 3L11.7 8Z" fill="currentColor"></path>
                                                <path opacity="0.3" d="M11.7 8L8.79999 3H13.4C14.1 3 14.8 3.4 15.2 4L20.6 13.3H14.8L11.7 8ZM7.49997 15.2L4.59998 20.2H17.6C18.3 20.2 19 19.8 19.4 19.2C20.2 17.7 20.6 17 21.7 15.2H7.49997Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="dropdown-btn-caret">
                                        <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="18"><path d="M6 9l6 6 6-6"></path></svg>
                                    </div>
                                </Dropdown>
                            </div>
                            <div className="col-6">
                                <div className="searchgroup searchgroup-1">
                                    <div className="searchbar">
                                        <input placeholder="Search..." />
                                        <span className="">
                                            <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path><path d="M16 16l4.5 4.5"></path></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-list mt-20">
                            <div className="item">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="mr-10">
                                            <svg className="svg-green" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path><path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path></svg>
                                        </div>
                                        <div className="fs-13">Digital Maturity assessment</div>
                                    </div>
                                    <div>
                                        <Link href="" className="btn btn-primary btn-sm fs-13"><div>Continue</div></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="mr-10">
                                            <svg className="svg-green" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path><path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path></svg>
                                        </div>
                                        <div className="fs-13">Artificial intelligence readiness Assessment</div>
                                    </div>
                                    <div>
                                        <Link href="" className="btn btn-primary btn-sm fs-13"><div>Continue</div></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="mr-10">
                                            <svg className="svg-green" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path><path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path></svg>
                                        </div>
                                        <div className="fs-13">Enterprise architecture EA readiness</div>
                                    </div>
                                    <div>
                                        <Link href="" className="btn btn-primary btn-sm fs-13"><div>Continue</div></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="mr-10">
                                            <svg className="svg-green" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path><path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path></svg>
                                        </div>
                                        <div className="fs-13">Cloud readiness assessment</div>
                                    </div>
                                    <div>
                                        <Link href="" className="btn btn-primary btn-sm fs-13"><div>Continue</div></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="mr-10">
                                            <svg className="svg-green" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path><path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path></svg>
                                        </div>
                                        <div className="fs-13">Digital Service improvement</div>
                                    </div>
                                    <div>
                                        <Link href="" className="btn btn-primary btn-sm fs-13"><div>Continue</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="card card-primary card-shadow">
                    <div className="card-body">
                        <h2 className="mb-20">Import assessment</h2>
                        <FileInputButton/>
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