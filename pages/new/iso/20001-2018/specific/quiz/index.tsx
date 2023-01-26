import type { ReactElement } from 'react'
import Layout from '../../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../../../_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../../../../../components/Subheader/Primary'
import Header from '../../../../../../components/Header/Header'
import Checkbox from '../../../../../../components/Checkbox/Checkbox'

type Props = {
  value: number;
}

const Page: NextPageWithLayout = () => {
useEffect( () => {
    const body = document.querySelector("body");
    document.body.classList.add("header-enabled", "bg-accent-1");
    return () => {
        body?.classList.remove("header-enabled", "bg-accent-1");
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
      <div className="container container-fluid container-1440 mt-40">
        <Link href="/new/iso/20001-2018/general" className="link">
            <div className="d-flex align-items-center">
                <svg className="mr-10 fc-accent-6" data-testid="geist-icon" fill="none" height="15" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="15"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
                <p className="m0" data-version="v1">Back</p>
            </div>
        </Link>
        <h1 className="h1-primary fw-600 mt-10">Assessment questionnaire</h1>
        <p className="mb-40">ISO - 20001-2018, 2 functional activities selected</p>
        <div className="layout-1 extended">
            <div className="primary">
              <div className="card card-table">
                <div className="card-body">
                    <h3 className="mb-20">Identify I&T services.</h3>
                    <table className="table-quiz">
                      <thead>
                          <tr>
                              <th>Nr.</th>
                              <th>Activities</th>
                              <th>Level 1</th>
                              <th>Level 2</th>
                              <th>Level 3</th>
                              <th>Level 4</th>
                              <th>Level 5</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr className="odd">
                          <td className="text-center">1.</td>
                          <td className="capped"><div>Assess current I&T services and service levels to identify gaps between existing services and the business activities they support. Identify areas for improvement of existing services and service level options.</div></td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">2.</td>
                          <td className="capped"><div>Analyze, study and estimate future demand and confirm capacity of existing I&T-enabled services.</div></td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td className="text-center">3.</td>
                          <td className="capped"><div>Analyze business process activities to identify the need for new or redesigned I&T services.</div></td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">4.</td>
                          <td className="capped"><div>Compare identified requirements to existing service components in the portfolio. If possible, package existing service components (I&T services, service level options and service packages) into new service packages to meet identified business requirements.</div></td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td className="text-center">5.</td>
                          <td className="capped"><div>Regularly review the portfolio of I&T services with portfolio management and business relationship management to identify obsolete services. Agree on retirement and propose change.</div></td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">6.</td>
                          <td className="capped"><div>Where possible, match demands to service packages and create standardized services to obtain overall efficiencies.</div></td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h3 className="mb-20 mt-40">Catalog I&T-enabled services.</h3>
                    <table className="table-quiz">
                      <thead>
                          <tr>
                              <th>Nr.</th>
                              <th>Activities</th>
                              <th>Level 1</th>
                              <th>Level 2</th>
                              <th>Level 3</th>
                              <th>Level 4</th>
                              <th>Level 5</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr className="odd">
                          <td className="text-center">1.</td>
                          <td className="capped">Analyze requirements for new or changed service agreements received from business relationship management to ensure that the requirements can be matched. Consider aspects such as service times, availability, performance, capacity, security, privacy, continuity, compliance and regulatory issues, usability, demand constraints, and data quality.</td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">2.</td>
                          <td className="capped"><div>Draft customer service agreements based on the services, service packages and service level options in the relevant service catalogues.</div></td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td className="text-center">3.</td>
                          <td className="capped"><div>Finalize customer service agreements with business relationship management.</div></td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">4.</td>
                          <td className="capped"><div>Determine, agree on and document internal operational agreements to underpin the customer service agreements, if applicable.</div></td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td className="text-center">5.</td>
                          <td className="capped"><div>Liaise with supplier management to ensure that appropriate commercial contracts with external service providers underpin the customer service agreements, if applicable.</div></td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                          <td>
                            <Checkbox/>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  <div className="d-flex justify-content-between">
                    <div></div>
                    <div className="d-flex flex-end mt-40">
                      <Link href="/assessments/iso/20001-2018/specific" className="btn btn-primary btn-lg fs-13"><div>Complete assessment</div></Link>
                    </div>
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