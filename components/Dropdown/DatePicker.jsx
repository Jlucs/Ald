import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";


const NextLink = forwardRef((props, ref) => {
    let { href, children, ...rest } = props
        return (
            <Link legacyBehavior ref={ref}  href={href}>
            <a ref={ref} {...rest}>
                {children}
            </a>
            </Link>
        )
    }
)

const sectors = [
    {
      name: '12 Months',
    },
    {
      name: 'Quality management',
    },
    {
      name: 'Project & portfolio',
    },
    {
      name: 'Digital era',
    },
  ]
  

export default function Dropdown(props) {
  const router = useRouter();
  return (
    <Menu as="div" className={`p-relative ${props.className}`}>
        <Menu.Button className={`dropdown-btn ${props.btnClassName}`}>
            {props.children}
        </Menu.Button>
        <Menu.Items className={`dropdown ${props.menuClassName}`}>
            <div className="dropdown-menu">
                <NextLink
                    className={["link", router.pathname == "/assessments" ? "current" : ""].join(" ")} href="/assessments">
                    12 Months
                    <div className="dropdown-menu-checkmark">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="checkmark">
                            <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                        </svg>
                    </div>
                </NextLink>
                <NextLink
                    className={["link", router.pathname == "" ? "current" : ""].join(" ")} href="">
                    6 Months
                    <div className="dropdown-menu-checkmark">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="checkmark">
                            <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                        </svg>
                    </div>
                </NextLink>
                <NextLink
                    className={["link", router.pathname == "" ? "current" : ""].join(" ")} href="">
                    30 Days
                    <div className="dropdown-menu-checkmark">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="checkmark">
                            <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                        </svg>
                    </div>
                </NextLink>
                <NextLink
                    className={["link", router.pathname == "" ? "current" : ""].join(" ")} href="">
                    7 Days
                    <div className="dropdown-menu-checkmark">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="checkmark">
                            <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                        </svg>
                    </div>
                </NextLink>
                <NextLink
                    className={["link", router.pathname == "" ? "current" : ""].join(" ")} href="">
                    Custom
                    <div className="dropdown-menu-checkmark">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="checkmark">
                            <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                        </svg>
                    </div>
                </NextLink>
            </div>
        </Menu.Items>
    </Menu>
  )
}