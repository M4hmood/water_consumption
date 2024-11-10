import React, {useState, useEffect} from 'react'
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-lineargauge';


export default function Temperature() {
    const [pointerValue, setPointerValue ] = useState(0);

    useEffect(() => {
        let interval;

        // Function to update pointer value with animation
        const updatePointer = () => {
            // Set a target value for the pointer
            const targetValue = 20;
            let step = targetValue > pointerValue ? 1 : -1;
            let currentValue = pointerValue;

            // Update pointer value with animation
            interval = setInterval(() => {
                if (currentValue !== targetValue){
                    currentValue += step;
                    setPointerValue(currentValue);
                } else {
                    clearInterval(interval);
                }
            }, 10); // Interval for smooth animation (adjust as needed)
        };

        // Call updatePointer when component mounts
        updatePointer();

        // Clean up interval when component unmounts
        return () => clearInterval(interval);
    }, [pointerValue]); 

  return (
    <LinearGaugeComponent className='temperature_gauge'>
        <AxesDirective>
            <AxisDirective line={{ height: 250, width: 7, color: '#4286f4' }} labelStyle={{ format: '{value}°C' }}>
                <PointersDirective>
                    <PointerDirective value={pointerValue}></PointerDirective>
                </PointersDirective>
                <RangesDirective>
                    <RangeDirective start={60} end={100}></RangeDirective>
                    <RangeDirective start={30} end={60}></RangeDirective>
                    <RangeDirective start={0} end={30}></RangeDirective> 
                </RangesDirective>
            </AxisDirective>
        </AxesDirective>
        <p style={{"font-size": "x-large"}}>{pointerValue}°C</p>
    </LinearGaugeComponent>
  )
}
