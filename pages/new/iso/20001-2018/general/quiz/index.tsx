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
        <p className="mb-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="layout-1 extended">
            <div className="primary">
              <div className="card card-table">
                <div className="card-body">
                  <div className="d-flex flex-row align-items-center fs-13">
                    <div className="w-48px mr-10">Level 1:</div>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                  </div>
                  <div className="d-flex flex-row align-items-center fs-13">
                    <div className="w-48px mr-10">Level 2:</div>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                  </div>
                  <div className="d-flex flex-row align-items-center fs-13">
                    <div className="w-48px mr-10">Level 3:</div>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                  </div>
                  <div className="d-flex flex-row align-items-center fs-13">
                    <div className="w-48px mr-10">Level 4:</div>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                  </div>
                  <div className="d-flex flex-row align-items-center fs-13">
                    <div className="w-48px mr-10">Level 5:</div>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                  </div>
                  <table className="table-quiz mt-40">
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
                        <tr className="odd">
                            <td><div>1.</div></td>
                            <td className="capped"><div>Assess current I&T services and service levels to identify gaps between existing services and the business activities they support. Identify areas for improvement of existing services and service level options.</div></td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                        </tr>
                        <tr>
                            <td><div>2.</div></td>
                            <td className="capped"><div>Analyze, study and estimate future demand and confirm capacity of existing I&T-enabled services.</div></td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td><div>3.</div></td>
                            <td className="capped"><div>Analyze business process activities to identify the need for new or redesigned I&T services.</div></td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                        </tr>
                        <tr>
                            <td><div>4.</div></td>
                            <td className="capped"><div>Compare identified requirements to existing service components in the portfolio. If possible, package existing service components (I&T services, service level options and service packages) into new service packages to meet identified business requirements.</div></td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td><div>5.</div></td>
                            <td className="capped"><div>Regularly review the portfolio of I&T services with portfolio management and business relationship management to identify obsolete services. Agree on retirement and propose change.</div></td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                        </tr>
                        <tr>
                            <td><div>6.</div></td>
                            <td className="capped"><div>Where possible, match demands to service packages and create standardized services to obtain overall efficiencies.</div></td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Checkbox/>
                              </div>
                            </td>
                        </tr>
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-between">
                    <div></div>
                    <div className="d-flex flex-end mt-40">
                      <Link href="/assessments/iso/20001-2018/general" className="btn btn-primary btn-lg fs-13"><div>Complete assessment</div></Link>
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