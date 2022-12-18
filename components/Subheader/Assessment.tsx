import React, { useState } from 'react'
import { useEffect } from 'react'

type Props = {
  children?: React.ReactNode;
  className?: string;
}

export default function Subheader({ children, className }: Props) {

  return (
    <div className={`subheader ${className}`}>
      {children}
    </div>
  )
}