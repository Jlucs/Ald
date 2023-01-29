import type { ReactElement } from 'react'
import Layout from '../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../../_app'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Subheader from '../../../../../components/Subheader/Iso2'
import Header from '../../../../../components/Header/Header'
import IsoVersion from '../../../../../components/Dropdown/IsoVersion'
import IsoMethod from '../../../../../components/Dropdown/IsoMethod'
import Modal from '../../../../../components/Modals/Modal'
import ProgressBar from '../../../../../components/ProgressBar/ProgressBar'

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
      <div className="container container-fluid container-1440 mt-40">
        <div className="paper">
          <div className="paper-header d-flex align-items-center justify-content-between">
            <div className=""></div>
            <div>
              <div className="header-item">
                <div>Made by:</div>
                <div>Falah Aldameiry</div>
              </div>
              <div className="header-item">
                <div>Created at:</div>
                <div>27th January 2023</div>
              </div>
              <div className="header-item">
                <div>Sector:</div>
                <div>Quality management</div>
              </div>
            </div>
          </div>
          <div className="paper-body">
            <div className="paper-title">
              ISO 20001-2018 <br></br>Specific Activity Assessment
            </div>
            <div className="paper-section">
              <h3>Overview</h3>
              <p className=" mb-20">here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </div>
            <div className="paper-section">
              <h3>Specific activity assessment breakdown </h3>
              <p className=" mb-20">Areas that are included in the assessment.</p>
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
                        Identify I&T services
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
                        Catalog I&T-enabled services.
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
                       Define and prepare service agreements.
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
                        Monitor and report service levels.
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
                        Review service agreements and contracts.
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
                </tbody>
              </table>
            </div>
            <div className="paper-section">
              <h3>Gaps</h3>
              <p className="">Areas that are determined problematic in the assessment :</p>
              <div className="list-1">
                <div className="list-item">
                    <div className="item-text ">
                        Continuous Trend Analysis
                    </div>
                </div>
                <div className="list-item">
                    <div className="item-text ">
                        Repeated incidents are not identified
                    </div>
                </div>
                <div className="list-item">
                    <div className="item-text ">
                        Knowledge articles
                    </div>
                </div>
                <div className="list-item">
                    <div className="item-text ">
                        Service Improvement Initiatives
                    </div>
                </div>
                <div className="list-item">
                    <div className="item-text ">
                        Reports are generated manually (Meaningful  dashboard for management)
                    </div>
                </div>
              </div>
            </div>
            <div className="paper-section">
              <h3>Steps for conformity improvement</h3>
              <p className=" mt-4 mb-10">Steps that are recommended to reach higher level of conformity:</p>
              <div className="list-1">
                <div className="list-item">
                    <div className="item-text ">
                        Focus service-level monitoring on areas where there is risk of business process failure.
                    </div>
                </div>
                <div className="list-item">
                    <div className="item-text ">
                        Repeated incidents are not identified
                    </div>
                </div>
                <div className="list-item">
                    <div className="item-text ">
                        Predictive trend analysis to be included on the SLA Review Meeting 
                    </div>
                </div>
              </div>
            </div>
            <div className="paper-section">
              <h3>Recommended activities</h3>
              <div>
                <p>
                    Formalize and implement release, service-level, capacity and performance management consistently across the entire organization, including partner integration.
                </p>
                <p>
                    Ensure that all the processes implemented are governed using  metrics which demonstrate achievement of process objectives.  As a minimum: incident, request, problem, change configuration, service level, capacity and performance management processes.
                </p>
                <p>
                    Implement business service management (BSM) processes and tools.
                </p>
              </div>
            </div>
            <div className="paper-section">
              <h3>Recommended measurement</h3>
              <div className="card-body">
                <div className="d-flex flex-row"><div className="w-40 mr-10"><p>(S)</p></div><div><p className="">Percentage of stakeholders subject to documented service level management policy including scope, purpose, controls and exception management</p></div></div>
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