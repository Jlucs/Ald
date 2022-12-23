import type { ReactElement } from 'react'
import Layout from '../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../../_app'
import Link from 'next/link'
import { useEffect } from 'react'
import Subheader from '../../../../../components/Subheader/Primary'
import Header from '../../../../../components/Header/Header'
import IsoMethod from '../../../../../components/Dropdown/IsoMethod'

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
        <Link href="/new" className="link">
            <div className="d-flex align-items-center">
                <svg className="mr-10 fc-accent-6" data-testid="geist-icon" fill="none" height="15" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="15"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
                <p className="m0" data-version="v1">Back</p>
            </div>
        </Link>
        <h1 className="h1-primary fw-600 mt-10">You&apos;re almost done.</h1>
        <p className="mb-40">Please follow the steps to configure your assessment and start it.</p>
        <div className="layout-1">
            <div className="sidebar">
                <div className="bg-grey-100 p-24 br-8">
                    <div className="d-flex align-items-center">
                        <div><svg className="svg-black mr-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path><path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path></svg></div>
                        <div className="fw-500 fs-14">ISO - 20001-2018</div>
                    </div>
                </div>
                <div className="flow">
                    <div className="d-flex stepper-item completed">
                        <div className="vertical-step">
                            <div className="step-circle"></div>
                            <div className="step-line"></div>
                        </div>
                        <div className="vertical-content">
                            Configure assessment
                        </div>
                    </div>
                    <div className="d-flex stepper-item">
                        <div className="vertical-step">
                            <div className="step-circle"></div>
                            <div className="step-line"></div>
                        </div>
                        <div className="vertical-content">
                            Assess
                        </div>
                    </div>
                </div>
                <hr className="hr-primary hr-16"></hr>
                <Link href="/new" className="link link-primary fs-14 d-flex"><div>Configure a different assessment →</div></Link>
                <Link href="/assessments" className="link link-primary fs-14 d-flex mt-10"><div>Browse existing assessments →</div></Link>
            </div>
            <div className="primary">
                <div className="card card-primary shadow">
                    <div className="card-body">
                        <h2>Configure asessment</h2>
                        <hr className="hr-primary hr-16"></hr>
                        <label>
                            <div className="label-text mb-6">Assessment Name</div>
                        </label>
                        <input type="text" name="new_name" className="form-control long mb-20" id="rename-field" autoCapitalize="off" autoComplete="off" spellCheck="false" value="my-first-assessment" />
                        <label>
                            <div className="label-text mb-6">Assessment Method</div>
                        </label>
                        <IsoMethod className="" btnClassName="btn btn-secondary btn-lg btn-max d-flex align-items-center justify-content-between" menuClassName="dropdown-primary shadow" dropDownButtonLabel="General maturity"></IsoMethod>
                        <div className="mt-20">
                            <Link href="/new/iso/20001-2018/general/quiz" className="btn btn-primary btn-lg fs-13"><div>Start assessment</div></Link>
                        </div>
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