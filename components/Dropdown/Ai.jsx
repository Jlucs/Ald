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

export default function Dropdown(props) {
  const router = useRouter();
  return (
    <Menu as="div" className={`p-relative ${props.className}`}>
      <Menu.Button className={`dropdown-btn ${props.btnClassName}`}>
        <div>{props.dropDownButtonLabel}</div>
        <div className="dropdown-caret"></div>
    </Menu.Button>
    <Menu.Items className={`dropdown dropdown-full ${props.menuClassName}`}>
        <div className="dropdown-menu">
            <Menu.Item>
                <NextLink
                    className={["link", router.pathname.startsWith("") ? "current" : ""].join(" ")} href="">
                    <div>Cost leadership</div>
                    <div className="dropdown-menu-checkmark">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="checkmark">
                            <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                        </svg>
                    </div>
                </NextLink>
            </Menu.Item>
            <Menu.Item>
                <NextLink
                    className={["link", router.pathname.startsWith("") ? "current" : ""].join(" ")} href="">
                    <div>Differentiation</div>
                    <div className="dropdown-menu-checkmark">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="checkmark">
                            <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                        </svg>
                    </div>
                </NextLink>
            </Menu.Item>
            <Menu.Item>
                <NextLink
                    className={["link", router.pathname.startsWith("") ? "current" : ""].join(" ")} href="">
                    <div>Acquisition & Growth</div>
                    <div className="dropdown-menu-checkmark">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="checkmark">
                            <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                        </svg>
                    </div>
                </NextLink>
            </Menu.Item>
        </div>
    </Menu.Items>
    </Menu>
  )
}