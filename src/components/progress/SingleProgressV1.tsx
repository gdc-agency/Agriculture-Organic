/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { useState, useEffect, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

interface DataType {
    id?: number;
    title?: string;
    end: number;
}

const gradientStyles = {
    path: {
        stroke: 'url(#gradient)',
    },
}

const SingleProgressV1 = ({ progress }: { progress: DataType }) => {
    const { title, end } = progress

    const [progressValue, setProgressValue] = useState(0);

    const [progressText, setProgressText] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const intersectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (intersectionRef.current) {
            observer.observe(intersectionRef.current);
        }

        return () => {
            if (intersectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(intersectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setProgressValue((prevValue) => Math.min(prevValue + 5, end));
            }, 50);

            return () => clearInterval(interval);
        }
    }, [isVisible, end]);

    return (
        <>
            <div className="item" key={progress.id} ref={intersectionRef}>
                <div className="progressbar pb-1">
                    <svg style={{ height: 0, width: 0 }}>
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#49a760', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#49a760', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                    <CircularProgressbar strokeWidth={3} value={progressValue} text={`${progressValue}%`} styles={gradientStyles} />
                </div>
                <h4>{title}</h4>
            </div>
        </>
    );
};

export default SingleProgressV1;