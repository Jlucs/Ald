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
  labels: ["Requirement", "Requirement met"],
  datasets: [
    {
      data: [4, 3],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData2 = {
  labels: ["Requirement", "Requirement met"],
  datasets: [
    {
      data: [4, 1],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData3 = {
  labels: ["Requirement", "Requirement met"],
  datasets: [
    {
      data: [3, 2],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData4 = {
  labels: ["Requirement", "Requirement met"],
  datasets: [
    {
      data: [7, 1],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData5 = {
  labels: ["Requirement", "Requirement met"],
  datasets: [
    {
      data: [115, 100],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData6 = {
  labels: ["Requirement", "Requirement met"],
  datasets: [
    {
      data: [8, 8],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData7 = {
  labels: ["Requirement", "Requirement met"],
  datasets: [
    {
      data: [4,4],
      backgroundColor: '#60a5fa',
    },
  ],
};

export const barData8 = {
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

export const barOptions8 = {
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
          <div className="col-7">
            <div className="card card-primary mb-20 shadow gutter-b card-stretch">
              <div className="card-header">
                <div className="header-title">General  Compliance Assessment breakdown </div>
                <p className="text-wrapper mt-4 mb-0">Areas that are included in the assessment.</p>
              </div>
              <div className="card-body">
                <table className="table table-data">
                  <thead>
                    <tr>
                      <th>
                        <div className="cell-left">Area of standard</div>
                      </th>
                      <th>
                        <div className="cell-center">Req.</div>
                      </th>
                      <th>
                        <div className="cell-center">Req. met</div>
                      </th>
                      <th>
                        <div className="cell-center">
                          Conformity %
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
          <div className="col-5">
            <div className="card card-primary shadow card-stretch gutter-b">
              <div className="card-header header-compact">
                <div className="header-title">Level of conformity to the standard summary level</div>
              </div>
              <div className="card-body d-flex flex-column">
                <div className="">
                  <Bar options={barOptions8} data={barData8} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="card card-primary shadow mb-20">
            <div className="card-header header-compact">
              <div className="header-title">Content of Organization</div>
            </div>
              <div className="card-body">
                <Bar options={barOptions} data={barData1} />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card card-primary shadow mb-20">
            <div className="card-header header-compact">
              <div className="header-title">Leadership</div>
            </div>
              <div className="card-body">
                <Bar options={barOptions} data={barData2} />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card card-primary shadow mb-20">
            <div className="card-header header-compact">
              <div className="header-title">Planning</div>
            </div>
              <div className="card-body">
                <Bar options={barOptions} data={barData3} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="card card-primary shadow mb-20">
            <div className="card-header header-compact">
              <div className="header-title">Support of Service Management System</div>
            </div>
              <div className="card-body">
                <Bar options={barOptions} data={barData4} />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card card-primary shadow mb-20">
              <div className="card-header header-compact">
                <div className="header-title">Operation of Service Management System</div>
              </div>
              <div className="card-body">
                <Bar options={barOptions} data={barData5} />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card card-primary shadow mb-20">
            <div className="card-header header-compact">
              <div className="header-title">Performance evaluation</div>
            </div>
              <div className="card-body">
                <Bar options={barOptions} data={barData6} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="card card-primary shadow mb-20">
            <div className="card-header header-compact">
              <div className="header-title">Improvement</div>
            </div>
              <div className="card-body">
                <Bar options={barOptions} data={barData7} />
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