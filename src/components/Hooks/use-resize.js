import { useState, useEffect } from 'react';
import {
    SCREEN_TABLET, SCREEN_DESKTOP

} from '../../const/const-breakpoints';

export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        isMobile: width < SCREEN_TABLET,
        isTablet: width >= SCREEN_TABLET && width < SCREEN_DESKTOP,
        isDesktop: width >= SCREEN_DESKTOP,
    };
};