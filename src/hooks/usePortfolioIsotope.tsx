import { useRef, useState, useEffect } from "react";
import type Isotope from "isotope-layout";
import type imagesLoaded from "imagesloaded";

let IsotopeLib: typeof Isotope | null = null;
let imagesLoadedLib: typeof imagesLoaded | null = null;

// Ensure that the libraries are only imported on the client-side
if (typeof window !== "undefined") {
    import("isotope-layout").then((mod) => (IsotopeLib = mod.default));
    import("imagesloaded").then((mod) => (imagesLoadedLib = mod.default));
}

function usePortfolioIsotope() {
    const gridRef = useRef<HTMLUListElement | null>(null);
    const isoRef = useRef<Isotope | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>("*");

    useEffect(() => {
        if (!IsotopeLib || !imagesLoadedLib || !gridRef.current) return;

        const iso = new IsotopeLib(gridRef.current, {
            itemSelector: ".grid-item",
            layoutMode: "masonry",
        });

        const imgLoad = imagesLoadedLib(gridRef.current);
        imgLoad.on("always", () => {
            iso.arrange({});
        });

        isoRef.current = iso;

        return () => {
            iso.destroy();
            imgLoad.off("always", () => {
                iso.arrange({});
            });
        };
    }, []);

    const handleFilter = (filterValue: string) => {
        setActiveFilter(filterValue);
        isoRef.current?.arrange({ filter: filterValue });
    };

    return { gridRef, handleFilter, activeFilter };
}

export default usePortfolioIsotope;