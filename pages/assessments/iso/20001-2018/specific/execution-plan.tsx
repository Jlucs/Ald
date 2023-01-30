import React, { useState, useEffect, Fragment, useRef, forwardRef, useLayoutEffect } from 'react';
import type { ReactElement } from 'react'
import Layout from '../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../../_app'
import Link from 'next/link'
import Subheader from '../../../../../components/Subheader/Iso2'
import Header from '../../../../../components/Header/Header'
import IsoVersion from '../../../../../components/Dropdown/IsoVersion'
import EmailAdd from '../../../../../components/Dropdown/EmailAdd'
import Modal from '../../../../../components/Modals/Modal'
import ProgressBar from '../../../../../components/ProgressBar/ProgressBar'
import DatePicker from '../../../../../components/Datepicker/DatePicker'
import Status from '../../../../../components/Listbox/Status'
import Priority from '../../../../../components/Listbox/Priority'
import { Disclosure } from '@headlessui/react'


type Props = {
  value: number;
}

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "../../../../../ProgressProvider";

const Page: NextPageWithLayout = (props) => {

    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("header-enabled" , "subheader-enabled");
        return () => {
          body?.classList.remove("header-enabled", "subheader-enabled");
        }
    });


    // const Input = () => {
    //   return  <div className="table-row">
                
    //           </div>;
    // };

    // const [inputList, setInputList] = useState([]);

    // const onAddBtnClick = (event) => {
    //   setInputList(inputList.concat(<Input key={inputList.length} />));
    // };

    // interface InputProps {
    //   initialValue: string;
    // }
    
    // const InputEdit: React.FC<InputProps> = ({ initialValue }) => {
    //   const [inputValue, setInputValue] = useState<string>(initialValue);
    //   const [isEditable, setIsEditable] = useState<boolean>(false);
    
    //   useLayoutEffect(() => {
    //     const storedValue = localStorage.getItem('inputValue');
    //     if (storedValue) {
    //       setInputValue(storedValue);
    //     }
    //   }, []);
    
    //   const handleClick = () => {
    //     setIsEditable(true);
    //   }
    
    //   const handleBlur = () => {
    //     setIsEditable(false);
    //     localStorage.setItem('inputValue', inputValue);
    //   }
    
    //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputValue(event.target.value);
    //   }
    
    //   return (
    //     <div>
    //     {isEditable ? (
    //         <input 
    //           type="text" 
    //           value={inputValue} 
    //           onChange={handleChange}
    //           onBlur={handleBlur}
             
    //         />
    //       ) : (
    //         <div onClick={handleClick}>
    //             <span>{inputValue}</span>
    //         </div>
    //       )}
    //     </div>
    //   );
    // };

    // interface Props {
    //   text: string;
    //   onSave: (text: string) => void;
    // }

    // const EditableText: React.FC<Props> = ({ text, onSave }) => {
    //   const [isEditing, setIsEditing] = useState(false);
    //   const [currentText, setCurrentText] = useState(text);
    
    //   const handleClick = () => {
    //     setIsEditing(true);
    //   };
    
    //   const handleSave = () => {
    //     onSave(currentText);
    //     setIsEditing(false);
    //   };
    
    //   return (
    //     <div>
    //       {isEditing ? (
    //         <>
    //           <input
    //             type="text"
    //             value={currentText}
    //             onChange={e => setCurrentText(e.target.value)}
    //           />
    //           <button onClick={handleSave}>Save</button>
    //         </>
    //       ) : (
    //         <>
    //           <span onClick={handleClick}>{text}</span>
    //         </>
    //       )}
    //     </div>
    //   );
    // };

    const Input: React.FC = () => {
      return (
        <div className="table-row">
          <div className="connector-table">
            <div className="connector-cell">
              <div className="connector-line"></div>
            </div>
          </div>
          <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
            <div className="left-indicator-inner"></div>
          </div>
          <div className="grid-cell" style={{flex: "1"}}>
            <div className="cell-inner">
              <div className="cell-title">
                <input className="table-input" placeholder="Subtask message..." defaultValue="Subtask example text" />
              </div>  
            </div>
          </div>
          <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner">
                  <div className="cell-title">
                    <EmailAdd className="" btnClassName="btn-email-list" menuClassName="dropdown-primary shadow" dropDownButtonLabel="A"></EmailAdd>
                  </div>  
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner p-0 w-100">
                    <Status className="d-flex"/>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner p-0 w-100">
                    <Priority className="d-flex"/>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
               <div className="cell-inner p-0 w-100">
                  <DatePicker />
                </div>
              </div>
              <div className="grid-cell p-0 w-100" style={{flexBasis: "140px"}}>
               <div className="cell-inner">

                </div>
              </div>
        </div>
        );
      };

      const [inputList1, setInputList1] = useState<JSX.Element[]>([]);

      const [inputList2, setInputList2] = useState<JSX.Element[]>([]);

      const [inputList3, setInputList3] = useState<JSX.Element[]>([]);

      const [inputList4, setInputList4] = useState<JSX.Element[]>([]);

      const onAddBtnClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setInputList1(inputList1.concat(<Input key={inputList1.length} />));
      };

      const onAddBtnClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setInputList2(inputList2.concat(<Input key={inputList2.length} />));
      };


      const onAddBtnClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setInputList3(inputList3.concat(<Input key={inputList3.length} />));
      };


      const onAddBtnClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setInputList4(inputList4.concat(<Input key={inputList4.length} />));
      };


  return (
    <>
      <Header>
        <div className="breadcrumb-separator">
          <svg data-testid="geist-icon" fill="#eaeaea" height="32" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="32"><path d="M16.88 3.549L7.12 20.451"></path></svg>
        </div>
        <div className="breadcrumb-item">
          <Link href="" className="link-primary">
            Lulu
          </Link>
        </div>
        <div className="breadcrumb-separator">
          <svg data-testid="geist-icon" fill="#eaeaea" height="32" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="32"><path d="M16.88 3.549L7.12 20.451"></path></svg>
        </div>
        <div className="breadcrumb-item">
          <Link href="" className="link-primary">
            ISO 20001-2018
          </Link>
        </div>
      </Header>
      <Subheader/>  
      <div className="heading heading-lg">
        <div className="container container-fluid container-1280 d-flex align-items-center justify-content-between">
            <div>
                <h1>Execution plan</h1>
            </div>
            <div>
              
            </div>
        </div>
      </div>
      <div className="container container-fluid container-1280 mt-40">
        <div className="table">
          <div className="table-header">
            <div className="table-row">
              <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                <div className="left-indicator-inner"></div>
              </div>
              <div className="grid-cell" style={{flex: "1"}}>
                <div className="cell-inner">
                  <div className="cell-title">Task</div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner">
                  <div className="cell-title">PERSON</div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner">
                  <div className="cell-title">STATUS</div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner">
                  <div className="cell-title">PRIORITY</div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner">
                  <div className="cell-title">Deadline</div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner">
                  <div className="cell-title">FILES</div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-body">
          <Disclosure>
            <div className="table-row">
              <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                <div className="left-indicator-inner"></div>
              </div>
              <div className="grid-cell" style={{flex: "1"}}>
                <div className="cell-inner">
                  <div className="d-flex flex-row align-items-center">
                    <Disclosure.Button className="collapse-btn" as="div">
                      <div>
                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" role="button"  aria-hidden="false" className="icon_component icon_component--clickable"><path d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                      </div>
                    </Disclosure.Button>
                    <div className="d-flex w-100">
                      {/* <InputEdit initialValue="Application Consolidation Project" /> */}
                      <input className="table-input" defaultValue="Formalize and implement release, service-level, capacity and performance management consistently across the entire organization, including partner integration."/>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner">
                  <div className="cell-title">
                    <EmailAdd className="" btnClassName="btn-email-list" menuClassName="dropdown-primary shadow" dropDownButtonLabel="A"></EmailAdd>
                  </div>  
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner p-0 w-100">
                    <Status className="d-flex"/>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner p-0 w-100">
                    <Priority className="d-flex"/>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
               <div className="cell-inner p-0 w-100">
                  <DatePicker/>
                </div>
              </div>
              <div className="grid-cell p-0 w-100" style={{flexBasis: "140px"}}>
               <div className="cell-inner">
                  
                </div>
              </div>
            </div>
            <Disclosure.Panel className="d-flex align-items-center flex-row h-100 p-relative">
              <div className="connector">
                <div className="line-container">
                  <div className="line"></div>
                </div>
              </div>
              <div className="table-expand">
                <div className="sub-table">
                  <div className="sub-table-header">
                    <div className="table-row">
                      <div className="connector-table">
                        <div className="connector-cell">
                          <div className="connector-line line-void"></div>
                        </div>
                      </div>
                      <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                        <div className="left-indicator-inner"></div>
                      </div>
                      <div className="grid-cell" style={{flex: "1"}}>
                        <div className="cell-inner">
                          <div className="d-flex align-items-center justify-content-between w-100 flex-row">
                            <div className="cell-title">Subtask</div>
                            <div><button onClick={onAddBtnClick1} className="btn btn-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256C432 264.8 424.8 272 416 272h-176V448c0 8.844-7.156 16.01-16 16.01S208 456.8 208 448V272H32c-8.844 0-16-7.15-16-15.99C16 247.2 23.16 240 32 240h176V64c0-8.844 7.156-15.99 16-15.99S240 55.16 240 64v176H416C424.8 240 432 247.2 432 256z"/></svg></button></div>
                          </div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">Owner</div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">STATUS</div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">Priority</div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">Date</div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">Files</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sub-table-body">
                    {inputList1}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
            <Disclosure>
            <div className="table-row">
              <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                <div className="left-indicator-inner"></div>
              </div>
              <div className="grid-cell" style={{flex: "1"}}>
                <div className="cell-inner">
                  <div className="d-flex flex-row align-items-center">
                    <Disclosure.Button className="collapse-btn" as="div">
                      <div>
                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" role="button"  aria-hidden="false" className="icon_component icon_component--clickable"><path d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                      </div>
                    </Disclosure.Button>
                    <div className="d-flex w-100">
                      {/* <InputEdit initialValue="Application Consolidation Project" /> */}
                      <input className="table-input" defaultValue="Ensure that all the processes implemented are governed using metrics which demonstrate achievement of process objectives. As a minimum: incident, request, problem, change configuration, service level, capacity and performance management processes."/>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner">
                  <div className="cell-title">
                    <EmailAdd className="" btnClassName="btn-email-list" menuClassName="dropdown-primary shadow" dropDownButtonLabel="A"></EmailAdd>
                  </div>  
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner p-0 w-100">
                    <Status className="d-flex"/>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner p-0 w-100">
                    <Priority className="d-flex"/>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
               <div className="cell-inner p-0 w-100">
                  <DatePicker/>
                </div>
              </div>
              <div className="grid-cell p-0 w-100" style={{flexBasis: "140px"}}>
               <div className="cell-inner">

                </div>
              </div>
            </div>
            <Disclosure.Panel className="d-flex align-items-center flex-row h-100 p-relative">
              <div className="connector">
                <div className="line-container">
                  <div className="line"></div>
                </div>
              </div>
              <div className="table-expand">
                <div className="sub-table">
                  <div className="sub-table-header">
                    <div className="table-row">
                      <div className="connector-table">
                        <div className="connector-cell">
                          <div className="connector-line line-void"></div>
                        </div>
                      </div>
                      <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                        <div className="left-indicator-inner"></div>
                      </div>
                      <div className="grid-cell" style={{flex: "1"}}>
                        <div className="cell-inner">
                          <div className="d-flex align-items-center justify-content-between w-100 flex-row">
                            <div className="cell-title">Subtask</div>
                            <div><button onClick={onAddBtnClick2} className="btn btn-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256C432 264.8 424.8 272 416 272h-176V448c0 8.844-7.156 16.01-16 16.01S208 456.8 208 448V272H32c-8.844 0-16-7.15-16-15.99C16 247.2 23.16 240 32 240h176V64c0-8.844 7.156-15.99 16-15.99S240 55.16 240 64v176H416C424.8 240 432 247.2 432 256z"/></svg></button></div>
                          </div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">Owner</div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">STATUS</div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">Priority</div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">Date</div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">Files</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sub-table-body">
                    {inputList2}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Disclosure>
          <Disclosure>
            <div className="table-row">
              <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                <div className="left-indicator-inner"></div>
              </div>
              <div className="grid-cell" style={{flex: "1"}}>
                <div className="cell-inner">
                  <div className="d-flex flex-row align-items-center">
                    <Disclosure.Button className="collapse-btn" as="div">
                      <div>
                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" role="button"  aria-hidden="false" className="icon_component icon_component--clickable"><path d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                      </div>
                    </Disclosure.Button>
                    <div className="d-flex w-100">
                      {/* <InputEdit initialValue="Application Consolidation Project" /> */}
                      <input className="table-input" defaultValue="Implement business service management (BSM) processes and tools."/>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner">
                  <EmailAdd className="" btnClassName="btn-email-list" menuClassName="dropdown-primary shadow" dropDownButtonLabel="A"></EmailAdd>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner p-0 w-100">
                    <Status className="d-flex"/>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
                <div className="cell-inner p-0 w-100">
                    <Priority className="d-flex"/>
                </div>
              </div>
              <div className="grid-cell" style={{flexBasis: "140px"}}>
               <div className="cell-inner p-0 w-100">
                  <DatePicker/>
                </div>
              </div>
              <div className="grid-cell p-0 w-100" style={{flexBasis: "140px"}}>
               <div className="cell-inner">

                </div>
              </div>
            </div>
            <Disclosure.Panel className="d-flex align-items-center flex-row h-100 p-relative">
              <div className="connector">
                <div className="line-container">
                  <div className="line"></div>
                </div>
              </div>
              <div className="table-expand">
                <div className="sub-table">
                  <div className="sub-table-header">
                    <div className="table-row">
                      <div className="connector-table">
                        <div className="connector-cell">
                          <div className="connector-line line-void"></div>
                        </div>
                      </div>
                      <div className="grid-cell left-indicator" style={{ backgroundColor: "rgb(87, 155, 252)"}}>
                        <div className="left-indicator-inner"></div>
                      </div>
                      <div className="grid-cell" style={{flex: "1"}}>
                        <div className="cell-inner">
                          <div className="d-flex align-items-center justify-content-between w-100 flex-row">
                            <div className="cell-title">Subtask</div>
                            <div><button onClick={onAddBtnClick4} className="btn btn-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256C432 264.8 424.8 272 416 272h-176V448c0 8.844-7.156 16.01-16 16.01S208 456.8 208 448V272H32c-8.844 0-16-7.15-16-15.99C16 247.2 23.16 240 32 240h176V64c0-8.844 7.156-15.99 16-15.99S240 55.16 240 64v176H416C424.8 240 432 247.2 432 256z"/></svg></button></div>
                          </div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">Owner</div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">STATUS</div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">Priority</div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">Date</div>
                        </div>
                      </div>
                      <div className="grid-cell" style={{flexBasis: "140px"}}>
                        <div className="cell-inner">
                          <div className="cell-title">Files</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sub-table-body">
                    {inputList4}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Disclosure>
          </Disclosure>
          </div>
        </div>

        {/* <table className="table-pulse mt-20">
          <thead>
            <tr>
                <th>
                    <div>
                        <div className="checkbox-container">
                            <div className="checkbox-check">
                                <input className="checkbox-input" type="checkbox" />
                            </div>
                        </div>
                    </div>
                </th>
                <th>
                    <div>Task</div>
                </th>
                <th>
                    <div>Person</div>
                </th>
                <th>
                    <div>Status</div>
                </th>
                <th>
                    <div>Priority</div>
                </th>
                <th>
                    <div>Date</div>
                </th>
                <th>
                    <div>Files</div>
                </th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                    <div>
                        <div className="checkbox-container">
                            <div className="checkbox-check">
                                <input className="checkbox-input" type="checkbox" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="left-aligned color-default"><span>Application Consolidation Project</span></div>
                </td>
                <td className="">
                    <div className="d-flex justify-content-center">
                        <div className="table-avatar" style={{ background: "#046295" }}>
                            <div>F</div>
                        </div>
                    </div>
                </td>
                <td className="p-0 td-size-4">
                    <div className="bg-success fc-white">Done</div>
                    <Status className="d-flex"/>
                </td>
                <td className="p-0 td-size-4">
                    <div className="priority-low fc-white">Low</div>
                    <Priority className="d-flex"/>
                </td>
                <td className="td-size-4">
                    <div>
                        <DatePicker/>
                    </div>
                </td>
                <td>
                <div>
                    
                </div>
                </td>
            </tr>
          </tbody>
        </table> */}
      </div>
      
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

