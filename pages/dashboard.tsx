import type { ReactElement } from "react";
import Layout from "../components/Layouts/Master";
import type { NextPageWithLayout } from "./_app";
import Link from "next/link";
import { useEffect } from "react";
import Subheader from "../components/Subheader/Primary";
import Header from "../components/Header/Header";

type Props = {
  value: number;
};

const Page: NextPageWithLayout = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    document.body.classList.add(
      "header-enabled",
      "subheader-enabled",
      "bg-accent-1"
    );
    return () => {
      body?.classList.remove(
        "header-enabled",
        "subheader-enabled",
        "bg-accent-1"
      );
    };
  });
  return (
    <>
      <Subheader></Subheader>
      <Header>
        <div className="breadcrumb-separator">
          <svg
            data-testid="geist-icon"
            fill="#eaeaea"
            height="32"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            viewBox="0 0 24 24"
            width="32"
          >
            <path d="M16.88 3.549L7.12 20.451"></path>
          </svg>
        </div>
        <div className="breadcrumb-item">
          <Link href="" className="link-primary">
            Lulu
          </Link>
          {/* <div className="breadcrumb-account-avatar">
            
          </div>
          <div className="breadcrumb-account-name">
            <div className="fs-14">Martin</div>
          </div>
          <div className="breadcrumb-account-type">
            <div className="fc-white fs-14">Business</div>
          </div> */}
        </div>
        {/* <div className="breadcrumb-separator">
          <svg data-testid="geist-icon" fill="#eaeaea" height="32" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="32"><path d="M16.88 3.549L7.12 20.451"></path></svg>
        </div>
        <div className="breadcrumb-item">
          <Link href="" className="link-primary">
            ISO - 20008
          </Link>
        </div> */}
      </Header>
      <div className="container container-fluid container-1440 mt-40">
        <h1 className="h1-primary fw-600">
          The home for all organizations — including you.
        </h1>
        <p className="mb-40 container-840 lh-160">
          Welcome to your personal dashboard, where you can find an introduction
          to how Aldameiry works, tools to help you improve organizations
          workflow, and help you create your first assessment.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <div className="card card-primary shadow card-stretch gutter-b">
              <div className="card-body">
                <h2 className="mb-20">Start a new assessment</h2>
                <div className="box box-primary">
                  <div>
                    <p className="mb-20 fc-accent-6 text-center container-480 m-auto">
                      Select your preferred way to create a new assessment,
                      we&apos;ll help you along the way.
                    </p>
                    <div className="p-25 container-320 m-auto">
                      <Link
                        href="/new"
                        className="btn btn-primary btn-lg fs-13"
                      >
                        <div className="d-flex align-items-center">
                          <div className="fs-13 mr-10">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                            >
                              <path d="M0 0H224V160H384V512H0V0zM384 128H256V0L384 128z" />
                            </svg>
                          </div>
                          <div className="d-flex align-items-center">
                            Continue with assessment
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/new"
                        className="btn btn-dark btn-lg fs-13 mb-8 mt-8"
                      >
                        <div className="d-flex">
                          <div className="fs-13 mr-10">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M256 448c106 0 192-86 192-192s-86-192-192-192S64 150 64 256c0 3.9 .1 7.8 .4 11.7L1.8 286.1C.6 276.2 0 266.2 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256c-10.2 0-20.2-.6-30.1-1.8l18.4-62.6c3.9 .2 7.8 .4 11.7 .4zm2.3-48l19.7-67c33.5-9.6 58-40.4 58-76.9c0-44.2-35.8-80-80-80c-36.5 0-67.4 24.5-76.9 58L112 253.7C113.2 175.2 177.2 112 256 112c79.5 0 144 64.5 144 144c0 78.8-63.2 142.8-141.7 144zM0 320l272-80L192 512l-48-96-1.4-1.4-96 96L1.4 465.4l96-96L96 368 0 320z" />
                            </svg>
                          </div>
                          <div className="d-flex align-items-center">
                            Continue with benchmark
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-20">
                  <Link href="/new" className="link link-primary ">
                    View more assessment options →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-20">
            <div className="row h-100">
              <div className="col-6 mb-20">
                <Link
                  href="/assessments"
                  className="d-flex card card-primary h-50 shadow mb-20 align-items-center justify-content-center"
                >
                  <div className="card-body d-flex flex-column">
                    <div className="text-center mb-20">
                      <svg
                        className="svg-100"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2Z"
                          fill="currentColor"
                        ></path>
                        <path
                          opacity="0.3"
                          d="M14 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H14C13.4 11 13 10.6 13 10V3C13 2.4 13.4 2 14 2Z"
                          fill="currentColor"
                        ></path>
                        <path
                          opacity="0.3"
                          d="M3 13H10C10.6 13 11 13.4 11 14V21C11 21.6 10.6 22 10 22H3C2.4 22 2 21.6 2 21V14C2 13.4 2.4 13 3 13Z"
                          fill="currentColor"
                        ></path>
                        <path
                          opacity="0.3"
                          d="M14 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H14C13.4 22 13 21.6 13 21V14C13 13.4 13.4 13 14 13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-center">Assessment gate</h3>
                  </div>
                </Link>
                <Link
                  href=""
                  className="d-flex card card-primary h-50 shadow mb-20 align-items-center justify-content-center"
                >
                  <div className="card-body d-flex flex-column">
                    <div className="text-center mb-20">
                      <svg
                        className="svg-100"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z"
                          fill="currentColor"
                        ></path>
                        <path
                          opacity="0.3"
                          d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-center">Knowledge Center</h3>
                  </div>
                </Link>
              </div>
              <div className="col-6 mb-20">
                <Link
                  href="/activity"
                  className="d-flex card card-primary h-50 shadow mb-20 align-items-center justify-content-center"
                >
                  <div className="card-body d-flex flex-column">
                    <div className="text-center mb-20">
                      <svg
                        className="svg-100"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M11 6.5C11 9 9 11 6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5ZM17.5 2C15 2 13 4 13 6.5C13 9 15 11 17.5 11C20 11 22 9 22 6.5C22 4 20 2 17.5 2ZM6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13ZM17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M17.5 16C17.5 16 17.4 16 17.5 16L16.7 15.3C16.1 14.7 15.7 13.9 15.6 13.1C15.5 12.4 15.5 11.6 15.6 10.8C15.7 9.99999 16.1 9.19998 16.7 8.59998L17.4 7.90002H17.5C18.3 7.90002 19 7.20002 19 6.40002C19 5.60002 18.3 4.90002 17.5 4.90002C16.7 4.90002 16 5.60002 16 6.40002V6.5L15.3 7.20001C14.7 7.80001 13.9 8.19999 13.1 8.29999C12.4 8.39999 11.6 8.39999 10.8 8.29999C9.99999 8.19999 9.20001 7.80001 8.60001 7.20001L7.89999 6.5V6.40002C7.89999 5.60002 7.19999 4.90002 6.39999 4.90002C5.59999 4.90002 4.89999 5.60002 4.89999 6.40002C4.89999 7.20002 5.59999 7.90002 6.39999 7.90002H6.5L7.20001 8.59998C7.80001 9.19998 8.19999 9.99999 8.29999 10.8C8.39999 11.5 8.39999 12.3 8.29999 13.1C8.19999 13.9 7.80001 14.7 7.20001 15.3L6.5 16H6.39999C5.59999 16 4.89999 16.7 4.89999 17.5C4.89999 18.3 5.59999 19 6.39999 19C7.19999 19 7.89999 18.3 7.89999 17.5V17.4L8.60001 16.7C9.20001 16.1 9.99999 15.7 10.8 15.6C11.5 15.5 12.3 15.5 13.1 15.6C13.9 15.7 14.7 16.1 15.3 16.7L16 17.4V17.5C16 18.3 16.7 19 17.5 19C18.3 19 19 18.3 19 17.5C19 16.7 18.3 16 17.5 16Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-center">Activity</h3>
                  </div>
                </Link>
                <Link
                  href="https://aicn.vercel.app/"
                  className="d-flex card card-primary h-50 shadow mb-20 align-items-center justify-content-center"
                >
                  <div className="card-body d-flex flex-column">
                    <div className="text-center mb-20">
                      <svg
                        className="svg-100"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M2.10001 10C3.00001 5.6 6.69998 2.3 11.2 2L8.79999 4.39999L11.1 7C9.60001 7.3 8.30001 8.19999 7.60001 9.59999L4.5 12.4L2.10001 10ZM19.3 11.5L16.4 14C15.7 15.5 14.4 16.6 12.7 16.9L15 19.5L12.6 21.9C17.1 21.6 20.8 18.2 21.7 13.9L19.3 11.5Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M13.8 2.09998C18.2 2.99998 21.5 6.69998 21.8 11.2L19.4 8.79997L16.8 11C16.5 9.39998 15.5 8.09998 14 7.39998L11.4 4.39998L13.8 2.09998ZM12.3 19.4L9.69998 16.4C8.29998 15.7 7.3 14.4 7 12.8L4.39999 15.1L2 12.7C2.3 17.2 5.7 20.9 10 21.8L12.3 19.4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-center">AICN</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
