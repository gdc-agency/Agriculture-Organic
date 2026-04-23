import { useState } from 'react';

const useSidebarInfo = () => {
    const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

    const openInfoBar = (): void => {
        setIsInfoOpen(true);
        document.body.classList.add('on-side');
    };

    const closeInfoBar = (): void => {
        setIsInfoOpen(false);
        document.body.classList.remove('on-side');
    };

    return { isInfoOpen, openInfoBar, closeInfoBar };
};

export default useSidebarInfo;
