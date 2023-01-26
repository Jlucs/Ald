import React, { useState, useEffect, Fragment, useRef, forwardRef, useLayoutEffect } from 'react';
import type { ReactElement } from 'react'

import DatePicker from '../Datepicker/DatePicker'
import Status from '../Listbox/Status'
import Priority from '../Listbox/Priority'

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

export default Input    