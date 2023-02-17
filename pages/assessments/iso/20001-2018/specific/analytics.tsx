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

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export const doughnutData = {
  labels: ['Potential improvement', 'Identify I&T services.', 'Catalog I&T-enabled services.', 'Define and prepare service agreements.', 'Monitor and report service levels.', 'Review service agreements and contracts.'],
  datasets: [
    {
      label: 'Score',
      data: [51, 14, 11, 12, 14, 6],
      backgroundColor: [
        '#3e98c7',
        '#ebecf2',
        '#d8dbe5',
        '#bbbdcc',
        '#9b9eb4',
        '#828699',
      ],
      borderColor: [
        '#3e98c7',
        '#ebecf2',
        '#d8dbe5',
        '#bbbdcc',
        '#9b9eb4',
        '#828699',
      ],
      borderWidth: 1,
    },
  ],
};

const doughnutOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const barOptions = {
  responsive: true,
  scales: {
    y: {
        beginAtZero: true,
          min: 0,
          max: 5,
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
  labels: ["data point 1", "data point 2", "data point 3", "data point 4", "data point 5", "data point 6"],
  datasets: [
    {
      data: [1, 4, 3, 2, 1, 3],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData2 = {
  labels: ["data point 1", "data point 2", "data point 3"],
  datasets: [
    {
      data: [3, 3, 2],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData3 = {
  labels: ["data point 1", "data point 2", "data point 3", "data point 4", "data point 5"],
  datasets: [
    {
      data: [3, 3, 3, 3, 3, 3],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData4 = {
  labels: ["data point 1", "data point 2", "data point 3", "data point 4", "data point 5"],
  datasets: [
    {
      data: [3, 3, 2, 3, 3],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData5 = {
  labels: ["data point 1", "data point 2"],
  datasets: [
    {
      data: [3,3],
      backgroundColor: '#60a5fa',
    },
  ],
};

type Props = {
  value: number;
}

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
        document.body.classList.add("header-enabled" , "subheader-enabled");
        return () => {
          body?.classList.remove("header-enabled", "subheader-enabled");
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
                <h1>Analytics</h1>
            </div>
            <div>
              
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1280 mt-40">
        <div className="row">
          <div className="col-4">
            <div className="card card-primary mb-20 shadow gutter-b card-stretch">
              <div className="card-body">
                <div className="d-flex align-items-center flex-column">
                  <h3 className="text-center">Overall score</h3>
                  <p className="text-center">Assessment has scored level: 3</p>
                  <div className="pb-wrapper pb-lg pb-success text-center mt-20 mb-20">
                      <ProgressBar label="Stroke width">
                          <ProgressProvider valueStart={0} valueEnd={3}>
                              {(value: number) => <CircularProgressbar value={value} maxValue={5} text={`${2}`} strokeWidth={12} />}
                          </ProgressProvider>
                      </ProgressBar>
                      <div className="pb-text"><span>3</span></div>
                  </div>
                  {/* <div className="d-flex align-items-center justify-content-center mt-20 mb-20 bg-accent-1 p-25 br-24 b-solid-primary">
                    <h3>54/105</h3>
                  </div> */}
                  <div className="d-flex align-items-center justify-content-center mt-4">
                      <span>
                          <div className="pill pill-primary fs-14">21 Data Points</div>
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card card-primary gutter-b card-stretch shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="m-auto container-250 p-relative">
                      <div className="chart-text"><div>54/105</div></div>
                      <Doughnut data={doughnutData} options={doughnutOptions} />
                    </div>
                  </div>
                  <div className="col-7 fs-13 d-flex justify-content-center flex-column">
                    <div className="d-flex align-items-center justify-content-between mb-6">
                      <div className="d-flex align-items-center">
                        <div className="mr-6">
                          <div className="legend legend-1"></div>
                        </div>
                        <div>Identify I&T services.</div>
                      </div>
                      <div>14</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-6">
                      <div className="d-flex align-items-center">
                        <div className="mr-6">
                          <div className="legend legend-2"></div>
                        </div>
                        <div>Catalog I&T-enabled services.</div>
                      </div>
                      <div>11</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-6">
                      <div className="d-flex align-items-center">
                        <div className="mr-6">
                          <div className="legend legend-3"></div>
                        </div>
                        <div>Define and prepare service agreements.</div>
                      </div>
                      <div>12</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-6">
                      <div className="d-flex align-items-center">
                        <div className="mr-6">
                          <div className="legend legend-4"></div>
                        </div>
                        <div>Monitor and report service levels.</div>
                      </div>
                      <div>14</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-20">
                      <div className="d-flex align-items-center">
                        <div className="mr-6">
                          <div className="legend legend-5"></div>
                        </div>
                        <div>Review service agreements and contracts.</div>
                      </div>
                      <div>6</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="mr-6">
                          <div className="legend legend-6"></div>
                        </div>
                        <div>Potential improvement.</div>
                      </div>
                      <div>51</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="card card-primary shadow mb-20">
            <div className="card-header header-compact">
              <div className="header-title">Identify I&T services.</div>
            </div>
              <div className="card-body">
                <Bar options={barOptions} data={barData1} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card card-primary shadow mb-20">
            <div className="card-header header-compact">
              <div className="header-title">Catalog I&T-enabled services.</div>
            </div>
              <div className="card-body">
                <Bar options={barOptions} data={barData2} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="card card-primary shadow mb-20">
            <div className="card-header header-compact">
              <div className="header-title">Define and prepare service agreements.</div>
            </div>
              <div className="card-body">
                <Bar options={barOptions} data={barData3} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card card-primary shadow mb-20">
            <div className="card-header header-compact">
              <div className="header-title">Monitor and report service levels.</div>
            </div>
              <div className="card-body">
                <Bar options={barOptions} data={barData4} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="card card-primary shadow mb-20">
            <div className="card-header header-compact">
              <div className="header-title">Review service agreements and contracts.</div>
            </div>
              <div className="card-body">
                <Bar options={barOptions} data={barData5} />
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