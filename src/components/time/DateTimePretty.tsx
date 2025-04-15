/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { DateTime } from "luxon";

interface DateTimePretty {
    Component: FC<any>    
    getDates: Function
    setDates: Function    
}

export default function DateTimePretty(props: DateTimePretty) {
    return (componentProps: any) => {
        const { Component, getDates, setDates } = props;
        const dates = getDates(componentProps.componentProps);
        
        const datesHandler = (dates: Date[]) => {
            const result = dates.map((el: Date) => {
                const date = DateTime.fromJSDate(el);
                return date.setLocale("ru").toRelative();
            });
            return result;
        }
        
        const newDates = datesHandler(dates);        
        const newComponentProps = setDates(newDates, componentProps);
    
        return(
            <Component props={newComponentProps} />
        )
    }    
} 