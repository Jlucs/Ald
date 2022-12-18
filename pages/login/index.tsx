import type { ReactElement } from 'react'
import Layout from '../../components/Layouts/Login'
import type { NextPageWithLayout } from '.././_app'
import Link from 'next/link'
import { useEffect } from 'react'
import Image from 'next/image';

type Props = {
    value: number;
}

const Page: NextPageWithLayout = () => {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("aside-enabled", "aside-large", "content-bg-1");
        return () => {
            body?.classList.remove("aside-enabled", "aside-large", "content-bg-1");
        }
    });
  return (
    <>
        <section className="login">
            <div className="login-container container container-480 container-fluid">
                <div className="login-content">
                    {/* <h1 className="text-center mb-20">Aldameiry</h1> */}
                    <div className="card card-login">
                        <div className="card-header">
                            <h2 className="text-center">Login into Aldameiry</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <div className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></div>
                                    <input className="form-control" id="email" name="email" placeholder="Email address" type="email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <div className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h80V512H0V192H80z"/></svg></div>
                                    <input className="form-control" id="password" name="password" placeholder="Password" type="password" />
                                </div>
                                <Link href="/dashboard" className="btn btn-primary btn-lg btn-max">Log In to Aldameiry</Link>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="text-center">
                                Forgot your password? <span><Link href="/" className="link link-secondary">reset password</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-bg-image">
                <img src="/images/login-bg.jpg" alt="beautiful picture of dubai"/>
            </div>
            <div className="login-overlay"></div>
        </section>
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