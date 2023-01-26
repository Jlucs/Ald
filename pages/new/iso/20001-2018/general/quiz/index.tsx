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
        <p className="mb-40">ISO - 20001-2018, General  Compliance Assessment.</p>
        <div className="layout-1 extended">
            <div className="primary">
              <div className="card card-table">
                <div className="card-body">
                  <h3 className="mb-20">Content of organization</h3>
                  <table className="table-quiz">
                    <thead>
                        <tr>
                          <th style={{ width: "60px" }}>Nr.</th>
                          <th>Activities</th>
                          <th>No</th>
                          <th>Yes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">1.</td>
                          <td className="capped">Are external and internal issues that are relevant to its purpose and that affect its ability to achieve the intended outcome(s) of its Service Management System (SMS) determined ?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "60px" }} className="text-center">2.</td>
                          <td className="capped">Have  interested parties that are relevant to the SMS and the services; and their requirements been determined and documented?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Is the scope determined considering issues (see 4.1) and requirements (see 4.2) related to the services?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "60px" }} className="text-center">4.</td>
                          <td className="capped">Is an SMS established, implemented, maintained and is continually improving an SMS in line with ISO 20000-1 ?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                    </tbody>
                  </table>
                  <h3 className="mb-20 mt-40">Leader</h3>
                  <table className="table-quiz">
                    <thead>
                        <tr>
                          <th style={{ width: "60px" }}>Nr.</th>
                          <th>Activities</th>
                          <th>No</th>
                          <th>Yes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">1.</td>
                          <td className="capped">Has top management demonstrated leadership and commitment with respect to the Service Management System (SMS)?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "60px" }} className="text-center">2.</td>
                          <td className="capped">Has top management established and an appropriate service management policy?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Is the management documented and available to interested parties?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "60px" }} className="text-center">4.</td>
                          <td className="capped">Has top management ensured that the responsibilities and authorities for roles relevant to the SMS and the services are assigned and communicated within the organization?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                    </tbody>
                  </table>
                  <h3 className="mb-20 mt-40">Planning</h3>
                  <table className="table-quiz">
                    <thead>
                        <tr>
                          <th style={{ width: "60px" }}>Nr.</th>
                          <th>Activities</th>
                          <th>No</th>
                          <th>Yes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">1.</td>
                          <td className="capped">Are risks and opportunities  considered when planning for the Service Management System (SMS) in line with clause 4.1 and 4.2 ?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "60px" }} className="text-center">2.</td>
                          <td className="capped">Have  service management objectives at relevant functions and levels been established?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Has a service management plan been created, implemented and maintained?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                    </tbody>
                  </table>
                  <h3 className="mb-20 mt-40">Support</h3>
                  <table className="table-quiz">
                    <thead>
                        <tr>
                          <th style={{ width: "60px" }}>Nr.</th>
                          <th>Activities</th>
                          <th>No</th>
                          <th>Yes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">1.</td>
                          <td className="capped">Have relevant human, technical, information and financial resources needed  for the establishment, implementation, maintenance and continual improvement of the SMS and the operation of the services to meet the service requirements and achieve the service management objectives, been determined and documented?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "60px" }} className="text-center">2.</td>
                          <td className="capped">Are the persons working for the organisation competent and aware of the policies, objectives and services relevant to their work?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Have internal and external communications relevant to the SMS been determined?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Is documentation required by the SMS identified and controlled?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Have SMS's  change management policy, information security policy and service continuity plan(s), processes been documented?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Have service management plan, service requirements, catalogues, records, service level agreement(s) (SLA) and contracts with suppliers and customers been documented?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Is the knowledge necessary to support the SMS and the services relevant, usable and available to appropriate persons?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                    </tbody>
                  </table>
                  <h3 className="mb-20 mt-40">Operation</h3>
                  <table className="table-quiz">
                    <thead>
                        <tr>
                          <th style={{ width: "60px" }}>Nr.</th>
                          <th>Activities</th>
                          <th>No</th>
                          <th>Yes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">1.</td>
                          <td className="capped">Is the Service Level Management process set, so that process steps, interfaces to other processes and functions inside the organization, roles and responsibilities are defined</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "60px" }} className="text-center">2.</td>
                          <td className="capped">Are measurement and reporting set and regularly carried out?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Are services to be delivered agreed with the customer?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Is the catalogue of services agreed with the customer?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Is one or more SLAs agreed with the customer for each service delivered?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">do you mointor trends and performance against service targets at planned intervals</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Do you have a documented agreement to define the activities and interfaces between the two parties for service components provided by an internal group or the customer, which is developed, agreed, reviewed and maintained?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Is performance of the internal group or the customer against agreed service targets and other agreed commitments monitored, at planned intervals?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                    </tbody>
                  </table>
                  <h3 className="mb-20 mt-40">Performance</h3>
                  <table className="table-quiz">
                    <thead>
                        <tr>
                          <th style={{ width: "60px" }}>Nr.</th>
                          <th>Activities</th>
                          <th>No</th>
                          <th>Yes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">1.</td>
                          <td className="capped">Have SMS performance and effectiveness been evaluated against the service management objectives ?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "60px" }} className="text-center">2.</td>
                          <td className="capped">Are internal audits conducted at planned intervals to assess the conformance of the SMS ?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Are audits programme(s) planned, established, implemented and maintained as appropriate ?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Has top management reviewed the organization's SMS and the services, at planned intervals, to ensure their continuing suitability, adequacy and effectiveness?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Are the outputs of the management review including decisions related to continual improvement opportunities and any need for changes to the SMS and the services?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Is the organisation retaining documented as evidence of the results of management reviews?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Are reports on the performance and effectiveness of the SMS and the services produced using information from the SMS activities and delivery of the services?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Has the organisation made decisions, communicated as appropriate and taken actions based on the findings in service reports?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                    </tbody>
                  </table>
                  <h3 className="mb-20 mt-40">Improvement</h3>
                  <table className="table-quiz">
                    <thead>
                        <tr>
                          <th style={{ width: "60px" }}>Nr.</th>
                          <th>Activities</th>
                          <th>No</th>
                          <th>Yes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">1.</td>
                          <td className="capped">Are non conformities documented and managed as appropriate ?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "60px" }} className="text-center">2.</td>
                          <td className="capped">Are corrective actions taken as appropriate to the effects of the nonconformities encountered?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Are evaluation criteria documented and including alignment of the improvement of the SMS with service management objectives?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td style={{ width: "60px" }} className="text-center">3.</td>
                          <td className="capped">Have improvement activities managed as appropriate ?</td>
                          <td className="text-center">
                            <Checkbox/>             
                          </td>
                          <td className="text-center">
                            <Checkbox/>
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