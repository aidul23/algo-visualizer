import React, { useState } from 'react';

function SortingAlgoVisualizer(props) {

    const[bars, setBars] = useState([2,4,2,7,4,3,7,6]);

    console.log(bars);

    return (
            <div className='bar-chart'>
                {
                    bars.map((value,index) => (
                        <div 
                            key={index}
                            className='bar'
                            style={{ height: `${value * 10}px`}}
                        />
                    ))
                }
            </div>
    );
}

export default SortingAlgoVisualizer;