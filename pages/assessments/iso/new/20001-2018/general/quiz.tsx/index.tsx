import type { ReactElement } from 'react'
import Layout from '../../../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../../../.././_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../../../../../../components/Subheader/Primary'
import Header from '../../../../../../../components/Header/Header'
import ProgressBar from '../../../../../../../components/ProgressBar/ProgressBar'
import IsoVersion from '../../../../../../../components/Dropdown/IsoVersion'
import IsoMethod from '../../../../../../../components/Dropdown/IsoMethod'
import Modal from '../../../../../../../components/Modals/Modal'

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
            <div>
                <h1>Assessment</h1>
                <p className="fc-accent-5">General maturity, ISO 20001-2018</p>
            </div>
            <div>
                <div className="btn btn-primary btn-lg">
                    <div className="btn btn-primary btn-lg"><div className="fs-14">Information</div></div>
                </div>
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1200 d-flex align-items-center justify-content-between mt-40">
        <table className="table-quiz">
            <thead>
                <tr>
                    <th><div>Nr.</div></th>
                    <th><div>Activities</div></th>
                    <th><div>Level 1</div></th>
                    <th><div>Level 2</div></th>
                    <th><div>Level 3</div></th>
                    <th><div>Level 4</div></th>
                    <th><div>Level 5</div></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div>1.</div></td>
                    <td className="capped"><div>Assess current I&T services and service levels to identify gaps between existing services and the business activities they support. Identify areas for improvement of existing services and service level options.</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                </tr>
                <tr>
                    <td><div>2.</div></td>
                    <td className="capped"><div>Analyze, study and estimate future demand and confirm capacity of existing I&T-enabled services.</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                </tr>
                <tr>
                    <td><div>3.</div></td>
                    <td className="capped"><div>Analyze business process activities to identify the need for new or redesigned I&T services.</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                </tr>
                <tr>
                    <td><div>4.</div></td>
                    <td className="capped"><div>Compare identified requirements to existing service components in the portfolio. If possible, package existing service components (I&T services, service level options and service packages) into new service packages to meet identified business requirements.</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                </tr>
                <tr>
                    <td><div>5.</div></td>
                    <td className="capped"><div>Regularly review the portfolio of I&T services with portfolio management and business relationship management to identify obsolete services. Agree on retirement and propose change.</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                </tr>
                <tr>
                    <td><div>6.</div></td>
                    <td className="capped"><div>Where possible, match demands to service packages and create standardized services to obtain overall efficiencies.</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
                    <td><div>c</div></td>
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