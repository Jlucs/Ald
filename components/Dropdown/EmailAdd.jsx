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
  let [isOpen, setIsOpen] = useState(true)
  return (
    <Menu as="div" open={isOpen} onClose={() => setIsOpen(false)} className={`p-relative ${props.className}`}>
      <Menu.Button className={`dropdown-btn ${props.btnClassName}`}>
        <div>{props.dropDownButtonLabel}</div>
    </Menu.Button>
    <Menu.Items className={`dropdown dropdown-full ${props.menuClassName}`}>
         
        <div className="dropdown-menu">
            <div className="dropdown-body">
                <p>Type in email address to invite</p>
                <input type="text" name="new_name" className="form-control long mb-20" id="rename-field" autoCapitalize="off" autoComplete="off" spellCheck="false" defaultvalue="" />
                <div className="d-flex justify-content-between align-items-center">
                    <div></div>
                    <div>
                   
                    
                    <Menu.Button className="dropdown-btn btn btn-primary fc-14 btn-lg">
                        <div className="" onClick={() => setIsOpen(false)}>Invite team member</div>
                    </Menu.Button>
                    
                    </div>
                </div>
            </div>
        </div>
        
    </Menu.Items>
    </Menu>
  )
}