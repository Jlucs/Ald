import React, { useState, useEffect, Fragment, useRef, forwardRef, useLayoutEffect } from 'react';
import type { ReactElement } from 'react'
import Layout from '../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../../_app'
import Link from 'next/link'
import Subheader from '../../../../../components/Subheader/Iso1'
import Header from '../../../../../components/Header/Header'
import IsoVersion from '../../../../../components/Dropdown/IsoVersion'
import IsoMethod from '../../../../../components/Dropdown/IsoMethod'
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

      const [inputList, setInputList] = useState<JSX.Element[]>([]);

      const onAddBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setInputList(inputList.concat(<Input key={inputList.length} />));
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

