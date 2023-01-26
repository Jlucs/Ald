import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import "../public/master.css"
import "../public/grid.css"
import { registerLicense } from '@syncfusion/ej2-base';
import NextNProgress from 'nextjs-progressbar';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// Registering Syncfusion license key
registerLicense('32302e342e30Fndu7riRsYNjqISjt1varsrRNS5ZZYUnPitWS TJP5w=;Mgo DSMBaFt/QHRqVVhjVFpGaV5dX2NLfUNwT2ZadV5wZDU7a15RRnVfQ19mSHZWdUVjUHxccw==;Mgo DSMBMAY9C3t2VVhkQlFadVdJX3xIYVF2R2BJeVR1d19GYEwxOX1dQl9gSX9Rc0RrXHxecH1WQmM=;Mgo DSMBPh8sVXJ0S0J XE9HflRAQmJWfFN0RnNfdVtzflVGcDwsT3RfQF5jSHxWd01mWn9eeXdTRQ==;@32302e342e30n3jZEcuucDlIOLL5E8A9tS4vuslYaqgHgEoeZRmDYvE=;NRAiBiAaIQQuGjN/V0Z WE9EaFxKVmFWf0x0RWFab1h6cVZMYFxBJAtUQF1hSn5SdEBiUXpdcHRcQmFf;NT8mJyc2IWhhY31nfWN9YGtoYXxifGFjYWBzZWlmYGljY3MDHmg5Mj06ID8mMCATOj0xPCt9PyU=;ORg4AjUWIQA/Gnt2VVhkQlFadVdJX3xIYVF2R2BJeVR1d19GYEwxOX1dQl9gSX9Rc0RrXHxecH1RQ2M=;@32302e342e30Vn2kKO9gZq4vmfLJku7tdHyDHbYPY8Jl2sBZxeJw N0=;@32302e342e30AZXmTegV5F0WDB6PaCMsmocsCDv7LHnu9QWRXOxG8vg=;@32302e342e30bSpSoGx4sMnKdl0Gr/Ssped89Ope7k3bjCYNPtpIAdo=;@32302e342e30J9DdSh50co5sjQjDYxjptNRj1Ha1OgwjoH5MLnwvrNE=;@32302e342e30Fndu7riRsYNjqISjt1varsrRNS5ZZYUnPitWS TJP5w');

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  
  )
}