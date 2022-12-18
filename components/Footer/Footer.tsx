import React, { useState } from 'react'
import { useEffect } from 'react'



type Props = {

}

export default function Footer({}: Props) {
    
  return (
    <footer className="footer">
        <div className="container container-fluid container-1200 d-flex align-items-center justify-content-center">
            <div className="copyright fs-12">Copyright © 2022 Aldameiry all rights reserved.</div>
        </div> 
    </footer>
  )
}