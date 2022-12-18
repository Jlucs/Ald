import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Tab } from "@headlessui/react";


export default function MyModal(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      {/* <a className="action" onClick={openModal}>
        <div className="action-start-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
            </svg>
        </div>
        <div className="action-text">
            New assessment
        </div>
        <div className="action-end-icon">
            <svg className="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5V0h1v5h5v1H6v5H5V6H0V5h5z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path>
            </svg>
        </div>
      </a> */}

      <a className="btn btn-lg btn-secondary" onClick={openModal}><div class="fs-14">Add new</div></a>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={`p-relative modal ${props.className}`} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="modal-backdrop"></div>
          </Transition.Child>

          
            <div className="container container-fluid container-1160">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="modal-content transition-all">
                  
                    <div className="modal-header">
                        <div className="d-flex align-items-center flex-row">
                            <div className="header-icon">

                            </div>
                            <div className="header-title">
                              <h2 class="title-2">New assessment</h2>
                            </div>
                        </div>
                        <div className="btn btn-black inverse btn-pill">
                           Close 
                        </div>
                    </div>

                    <div className="modal-body">
                        <div className="">
                          <Link href="/dashboard">Dashboard</Link>
                        </div>
                    </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
        </Dialog>
      </Transition>
    </>
  )
}