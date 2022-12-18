import type { ReactElement } from 'react'
import Layout from '../../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../../.././_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../../../../../components/Subheader/Primary'
import Header from '../../../../../../components/Header/Header'
import ProgressBar from '../../../../../../components/ProgressBar/Progressbar'
import IsoVersion from '../../../../../../components/Dropdown/IsoVersion'
import IsoMethod from '../../../../../../components/Dropdown/IsoMethod'
import Modal from '../../../../../../components/Modals/Modal'

type Props = {
  value: number;
}

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
                <IsoVersion className="" btnClassName="btn btn-secondary btn-lg btn-max" menuClassName="dropdown-primary" dropDownButtonLabel="ISO 20001-2018"></IsoVersion>
            </div>
            <div className="col-4">
                <IsoMethod className="" btnClassName="btn btn-secondary btn-lg btn-max" menuClassName="dropdown-primary" dropDownButtonLabel="Select functional activities to assess"></IsoMethod>
            </div>
        </div>
        <div className="card card-primary mt-40">
            <div className="card-body">
              <div className="form-group d-flex flex-column ">
                  <dt className="input-label">
                      <div className="card-title">
                          Assessment name
                      </div>
                      <p>This is your URL namespace for the assessment within Aldameiry.</p>
                  </dt>
                  <dd>
                      <div className="input-group">
                          <div className="label">
                              <span>reports/</span>
                          </div>
                          <div className="input-wrapper">
                              <input type="text" name="new_name" defaultValue="" className="form-control long " id="rename-field"  autoCapitalize="off" autoComplete="off" spellCheck="false"/>
                          </div>
                      </div>
                  </dd>
              </div>
            </div>
            <div className="card-footer">
              <p>Please use 48 characters at maximum.</p>
            </div>
        </div>
        <div className="mt-20 d-flex justify-content-between">
          <div></div>
          <div><Link href="/assessment-gate/category" className="btn btn-lg btn-primary"><div className="fs-14">Start assessment</div></Link></div>
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