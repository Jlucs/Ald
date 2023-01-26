import React from "react";
import { ScheduleComponent, ViewDirective, Day, Week, WorkWeek,  Month, Agenda, Inject, Resize, DragAndDrop   } from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'


export default function Calendar()  {
    return (
        <>
            <div>
                <ScheduleComponent>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
                </ScheduleComponent>
            </div>
        </>
    )
}