import type { ReactElement } from 'react'
import Layout from '../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../../_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../../../../components/Subheader/Iso1'
import Header from '../../../../../components/Header/Header'
import IsoVersion from '../../../../../components/Dropdown/IsoVersion'
import IsoMethod from '../../../../../components/Dropdown/IsoMethod'
import Modal from '../../../../../components/Modals/Modal'
import ProgressBar from '../../../../../components/ProgressBar/ProgressBar'
import Checkbox from '../../../../../components/Checkbox/Checkbox'


type Props = {
  value: number;
}

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  LinearScale,
  BarElement,
  CategoryScale,
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  LinearScale, 
  BarElement,
  CategoryScale,
  Filler,
  Tooltip,
  Legend
);


export const data = {
  labels: ['Content of organization', 'Leadership', 'Planning', 'Support', 'Operation', 'Performance evaluation', 'Improvement'],
  datasets: [
    {
      label: 'Percentage conformity',
      data: [75, 25, 67, 14, 87, 100, 100],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1,
    },
  ],
};

export const radarOptions = {
  responsive: true,
    r: {
      angleLines: {
          display: false
      },
      suggestedMin: 0,
      suggestedMax: 100
  },
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '',
    },
  },
};

export const barOptions = {
  responsive: true,
  scales: {
    y: {
        beginAtZero: true,
          min: 0,
          max: 100,
        }
    },
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export const barOptions2 = {
  indexAxis: 'y' as const,
  responsive: true,
  scales: {
    y: {
        beginAtZero: true,
          min: 0,
          max: 100,
        }
    },
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export const barData1 = {
  labels: ['Content of organization', 'Leadership', 'Planning', 'Support', 'Operation', 'Performance evaluation', 'Improvement'],
  datasets: [
    {
      data: [75, 25, 67, 14, 87, 100, 100],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData2 = {
  labels: ['Content of organization', 'Leadership', 'Planning', 'Support', 'Operation', 'Performance evaluation', 'Improvement'],
  datasets: [
    {
      data: [4, 4, 3, 7, 115, 8, 4],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData3 = {
    labels: ['Content of organization', 'Leadership', 'Planning', 'Support', 'Operation', 'Performance evaluation', 'Improvement'],
    datasets: [
      {
        data: [3, 1, 2, 1, 100, 8, 4],
        backgroundColor: '#60a5fa',
      },
      {
        data: [4, 4, 3, 7, 115, 8, 4],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
};

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "../../../../../ProgressProvider";

const Page: NextPageWithLayout = () => {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("header-enabled" , "subheader-enabled", "bg-secondary");
        return () => {
          body?.classList.remove("header-enabled", "subheader-enabled", "bg-secondary");
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
      <Subheader/>  
      <div className="heading heading-lg">
        <div className="container container-fluid container-1280 d-flex align-items-center justify-content-between">
            <div>
              <h1>ISO 20001-2018 </h1>
              <div className="d-flex align-items-center flex-row">
                <div><p className="text-wrapper">General Compliance Assessment</p></div>
                <div className="text-wrapper mr-8 ml-8">·</div>
                <div className="text-wrapper fc-link fw-500">Confirmity 67%</div>
              </div>
            </div>
            <div>
              
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1280 mt-40">
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-primary shadow mb-20">
              <div className="card-header">
                <div className="header-title">General  Compliance Assessment breakdown </div>
                <p className="text-wrapper mt-4 mb-0">Areas that are included in the assessment.</p>
              </div>
              <div className="card-body d-flex flex-column">
                <table className="table table-data">
                  <thead>
                    <tr>
                      <th>
                        <div className="cell-left">Area of standard</div>
                      </th>
                      <th>
                        <div className="cell-center">Requirement</div>
                      </th>
                      <th>
                        <div className="cell-center">Requirement met</div>
                      </th>
                      <th>
                        <div className="cell-center">
                          Percentage conformity
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="cell-left">
                          Content of Organization
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                         4
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          3
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          75%
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="cell-left">
                          Leadership
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                         4
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          1
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          25%
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="cell-left">
                          Planning 
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          3
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          2
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          67%
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="cell-left">
                          Support of Service Management System 
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          7
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          1
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          14%
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="cell-left">
                          Operation of Service Management System
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          115
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          100
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          87%
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="cell-left">
                          Performance evaluation 
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          8
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          8
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          100%
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="cell-left">
                          Improvement
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                         4
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          4
                        </div>
                      </td>
                      <td>
                        <div className="cell-center">
                          100%
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card card-primary shadow">
              <div className="card-header header-compact">
                <div className="header-title">Level of conformity to the standard summary level</div>
              </div>
              <div className="card-body d-flex flex-column">
                <div className="">
                  <Bar options={barOptions2} data={barData3} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card card-primary shadow">
              <div className="card-header header-compact">
                <div className="header-title">Percentage conformity radar chart</div>
              </div>
              <div className="card-body d-flex flex-column">
                <div className="m-auto" style={{ maxHeight: "275px" }}>
                  <Radar data={data} options={radarOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-primary shadow mt-20 mb-20">
              <div className="card-header header-compact">
                <div className="header-title">Percentage conformity to the standard summary level</div>
              </div>
              <div className="card-body" style={{ borderTop: "1px solid #eaeaea" }}>
                <Bar options={barOptions} data={barData1} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="card card-primary shadow card-stretch gutter-b card-warning ">
                    <div className="card-header header-compact">
                        <div className="header-title">Gaps</div>
                    </div>
                    <div className="card-body">
                        <div className="list-1">
                            <div className="list-item">
                                <div className="item-text">
                                    Continuous Trend Analysis
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-text">
                                    Repeated incidents are not identified
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-text">
                                    Knowledge articles
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-text">
                                    Service Improvement Initiatives
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-text">
                                    Reports are generated manually (Meaningful  dashboard for management)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card card-primary shadow card-stretch gutter-b ">
                    <div className="card-header header-compact">
                        <div className="header-title">Steps for future state: level 4</div>
                    </div>
                    <div className="card-body">
                        <div className="list-1">
                            <div className="list-item">
                                <div className="item-text">
                                    Focus service-level monitoring on areas where there is risk of business process failure.
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-text">
                                    Repeated incidents are not identified
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-text">
                                    Predictive trend analysis to be included on the SLA Review Meeting 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="card card-primary shadow mb-20">
                    <div className="card-header header-compact">
                        <div className="header-title">Recommended activities</div>
                        <p className="text-wrapper mt-4 mb-0">Select activities to include in the execution plan.</p>
                    </div>
                    <div className="card-body">
                        <table className="table table-data">
                          <thead>
                            <tr>
                              <th>
                                <div>
                                
                                </div>
                              </th>
                              <th>
                                <div className="cell-left">Activity</div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div>
                                  <Checkbox/>
                                </div>
                              </td>
                              <td>
                                <div className="cell-left">
                                  Formalize and implement release, service-level, capacity and performance management consistently across the entire organization, including partner integration.
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>
                                  <Checkbox/>
                                </div>
                              </td>
                              <td>
                                <div className="cell-left">
                                Address risks and opportunities</div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>
                                  <Checkbox/>
                                </div>
                              </td>
                              <td>
                                <div className="cell-left">
                                  Nonconformity and corrective action
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>  
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <div className="card card-primary shadow">
                    <div className="card-header header-compact">
                        <div className="header-title">Recommended measurement</div>
                    </div>
                    <div className="card-body">
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(S)</p></div><div><p>Percentage of stakeholders subject to documented service level management policy including scope, purpose, controls and exception management</p></div></div>
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(S)</p></div><div><p>Percentage of stakeholders subject to documented service level management process including objectives, process workflow, inputs, outputs, roles and responsibilities, metrics and partner integration</p></div> </div>
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(P)</p></div><div><p>Percentage of IT services with agreed SLAs</p></div></div>
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(P)</p></div><div><p>Percentage of IT services with agreed OLAs</p></div></div>
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(P)</p></div><div><p>Benefits and costs of corrective performance actions in progress and implemented for service level management.</p></div> </div>
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(S)</p></div><div><p>Monthly reports for service level management highlighting improvements and targets missed leading to a corrective action plan</p></div> </div>
                        <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(S)</p></div><div><p>Percentage of planned corrective action plans implemented for service level management</p></div></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="d-flex align-items-center justify-content-between mt-40">
          <div></div>
          <div>
            <Link href="/assessments/iso/20001-2018/general/report" className="btn btn-primary btn-lg fs-13">Save & Submit</Link>
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