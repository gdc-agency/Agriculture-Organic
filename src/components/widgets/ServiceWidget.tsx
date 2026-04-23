"use client";
import { useState, useEffect } from "react";
import ServiceWidgetData from "@/assets/jsonData/widgets/ServiceWidgetData.json";
import Link from "next/link";

const ServiceWidget = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Load activeIndex from sessionStorage on mount
    useEffect(() => {
        const storedIndex = sessionStorage.getItem("activeServiceIndex");
        if (storedIndex !== null) {
            setActiveIndex(Number(storedIndex));
        } else {
            // Default to second element (index 1) if no stored value
            setActiveIndex(1);
            sessionStorage.setItem("activeServiceIndex", "1");
        }
    }, []);

    // Update sessionStorage when activeIndex changes
    const handleItemClick = (index: number) => {
        setActiveIndex(index);
        sessionStorage.setItem("activeServiceIndex", String(index));
    };

    return (
        <div className="single-widget services-list-widget">
            <div className="content">
                <ul>
                    {ServiceWidgetData.map((service, index) => (
                        <li
                            key={service.id}
                            className={index === activeIndex ? "current-item" : ""}
                            onClick={() => handleItemClick(index)}
                        >
                            <Link href={`/service-details/${service.id}`}>
                                {service.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceWidget;
