import type { ReactElement } from 'react'
import Layout from '../components/Layouts/Master'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
import { useEffect } from 'react'
import Subheader from '../components/Subheader/Primary'
import Header from '../components/Header/Header'

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
      <Subheader>

      </Subheader>
      <Header>
        <div className="breadcrumb-separator">
          <svg data-testid="geist-icon" fill="#eaeaea" height="32" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="32"><path d="M16.88 3.549L7.12 20.451"></path></svg>
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