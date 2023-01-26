import type { ReactElement } from 'react'
import Layout from '../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../../_app'
import Link from 'next/link'
import { useEffect } from 'react'
import Subheader from '../../../../../components/Subheader/Primary'
import Header from '../../../../../components/Header/Header'
import IsoMethod from '../../../../../components/Dropdown/IsoMethod'
import Previous from '../../../../../components/Listbox/Previous'
import Switch from '../../../../../components/Switch/Switch'
import Modal from '../../../../../components/Modals/Activities'

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
                <div className="card card-primary shadow mb-40">
                    <div className="card-body">
                        <h2>Configure asessment</h2>
                        <hr className="hr-primary hr-16"></hr>
                        <label>
                            <div className="label-text mb-6">Assessment Name</div>
                        </label>
                        <input type="text" name="new_name" className="form-control long" id="rename-field" autoCapitalize="off" autoComplete="off" spellCheck="false" value="my-first-assessment"  />
                        <label>
                            <div className="label-text mb-6 mt-25">Assessment Method</div>
                        </label>
                        <IsoMethod className="" btnClassName="btn btn-secondary btn-lg btn-max d-flex align-items-center justify-content-between" menuClassName="dropdown-primary shadow" dropDownButtonLabel="Select functional activities to assess"></IsoMethod>
                        <label>
                            <div className="label-text mb-6 mt-25">Assessment previous progress</div>
                        </label>
                        <Previous className="listbox-droplist" btnClassName="btn btn-secondary btn-lg btn-max d-flex align-items-center justify-content-between" menuClassName="dropdown-primary shadow" dropDownButtonLabel="Select functional activities to assess"></Previous>
                        <div className="activities mt-25">
                            <details>
                                <summary>
                                    <div className="mr-10"><svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg></div>
                                    <div className="activity-title">Develop BCM Program Framework</div>
                                </summary>
                                <div className="activity-content">
                                    <div className="switch-list">
                                        <div className="list-item">
                                            <div>Develop BCM Program Policy</div>
                                        <div>
                                            <Switch/>
                                        </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Develop BCM Program Scope</div>
                                        <div>
                                            <Switch/>
                                        </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Establish Program Governance and Management Structure</div>
                                        <div>
                                            <Switch/>
                                        </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Establish BCM Program Practices</div>
                                        <div>
                                            <Switch/>
                                        </div>
                                    </div>
                                 </div>
                                </div>
                            </details>
                        </div>
                        <div className="activities mt-8">
                            <details>
                                <summary>
                                    <div className="mr-10"><svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg></div>
                                    <div className="activity-title">Manage Impacts & Risks</div>
                                </summary>
                                <div className="activity-content">
                                    <div className="switch-list">
                                        <div className="list-item">
                                            <div>Analyze Business Impacts</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Analyze Risks</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Develop Risk Treatment</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div className="activities mt-8">
                            <details>
                                <summary>
                                    <div className="mr-10"><svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg></div>
                                    <div className="activity-title">Develop BCM Response</div>
                                </summary>
                                <div className="activity-content">
                                    <div className="switch-list">
                                        <div className="list-item">
                                            <div>Develop BCM Response </div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Develop Recovery Strategies</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Develop Recovery Procedures and Plans</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div className="activities mt-8">
                            <details>
                                <summary>
                                    <div className="mr-10"><svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg></div>
                                    <div className="activity-title">Validate BCM Plans</div>
                                </summary>
                                <div className="activity-content">
                                    <div className="switch-list">
                                        <div className="list-item">
                                            <div>Train Staff and Recovery Teams</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Exercise BCM Plans</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Capture BCM Improvement Opportunities</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div className="activities mt-8">
                            <details>
                                <summary>
                                    <div className="mr-10"><svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg></div>
                                    <div className="activity-title">Maintain the BCM Program</div>
                                </summary>
                                <div className="activity-content">
                                    <div className="switch-list">
                                        <div className="list-item">
                                        <div>Assess the BCM Program Against Current Business Practices</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Ensure BCM Comparison Against Recognized Benchmarks</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Implement Corrective Actions and Continual Improvement</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div className="activities mt-8">
                            <details>
                                <summary>
                                    <div className="mr-10"><svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg></div>
                                    <div className="activity-title">Integrate Disaster Recovery</div>
                                </summary>
                                <div className="activity-content">
                                    <div className="switch-list">
                                        <div className="list-item">
                                            <div>Operate IT DR Management Program</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Build IT DR Plans and Runbooks</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Develop a Robust Testing Protocol</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Develop IT DR Runbooks Update PRocess</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <div>Align Business Priorities With IT DR Capabilities</div>
                                            <div>
                                                <Switch/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div className="mt-25">
                            <Link href="/new/iso/20001-2018/specific/quiz" className="btn btn-primary btn-lg fs-13"><div>Start assessment</div></Link>
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