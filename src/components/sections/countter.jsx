import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Countter = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const counterData = [
        {
            id: 1,
            counter: <CountUp start={0} end={5} duration={2} delay={0} />, // Years in business
            label: "+",
            title: "YEARS OF SERVICE",
        },
        {
            id: 2,
            counter: <CountUp start={0} end={200} duration={2} delay={0} />, // Number of clients served
            label: "+",
            title: "CLIENTS SERVED GLOBALLY",
        },
        {
            id: 3,
            counter: <CountUp start={0} end={95} duration={2} delay={0} />, // Customer satisfaction rate
            label: "%",
            title: "CUSTOMER SATISFACTION",
        },
        {
            id: 4,
            counter: <CountUp start={0} end={50} duration={2} delay={0} />, // Projects completed
            label: "+",
            title: "SUCCESSFUL PROJECTS",
        },
    ];

    return (
        <div ref={ref} className="counter-area pb-75 style-2">
            <div className="container">
                <div className="row" data-cues="fadeIn">
                    {counterData.map(({ counter, id, title, label }) => (
                        <div key={id} className="col-lg-3 col-sm-6">
                            <div className="single-counter-card style-2">
                                {inView && (
                                    <h2>
                                        <span className="counter">{counter}</span> <span>{label}</span>
                                    </h2>
                                )}
                                <p>{title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Countter;
