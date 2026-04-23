import { useState } from 'react';

const useSearchBar = () => {
    const [openSearch, setOpenSearch] = useState(false);

    const searchOpen = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setOpenSearch(prev => !prev);
    };

    const searchClose = () => {
        setOpenSearch(false);
    };

    return { openSearch, searchOpen, searchClose };
};

export default useSearchBar;