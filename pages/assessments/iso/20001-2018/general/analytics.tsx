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