
// import useWindowSize from "@rooks/use-window-size";
import { useState, useEffect } from 'react';
import {
    SCREEN_TABLET, SCREEN_DESKTOP

} from '../../const/const-breakpoints';

// export const useResize = () => {
//     const { innerWidth } = useWindowSize();
//     return {
//         isMobile: innerWidth < SCREEN_TABLET,
//         isTablet: innerWidth >= SCREEN_TABLET && innerWidth < SCREEN_DESKTOP,
//         isDesktop: innerWidth >= SCREEN_DESKTOP,
//     };
// }
// const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

////////////////////////////////
export const useResize = () => {
    // const isClient = typeof window === 'object'; ////
    // const getSize = () => {
    //          return isClient ? { window.innerWidth } : {  undefined };
    //      }

    // const [width, setWidth] = useState(window.innerWidth);
    // isClient ? setWidth(window.innerWidth):undefined
    // const [width, setWidth] = useState(window.innerWidth);
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
///////////////////////////////////

// export const useResize = () => {
//     const isClient = typeof window === 'object';
//     console.log(isClient);

//     const getSize = () => {
//         return isClient ? { width: window.innerWidth } : { width: undefined };
//     }

//     const [windowSize, setWindowSize] = useState(getSize);

//     useEffect(() => {
//         if (!isClient) {
//             return false;
//         }

//         function handleResize() {
//             setWindowSize(getSize());
//         }

//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     // return windowSize;
//     console.log(windowSize)
//     return {
//         isMobile: { windowSize } < SCREEN_TABLET,
//         isTablet: { windowSize } >= SCREEN_TABLET && width < SCREEN_DESKTOP,
//         isDesktop: { windowSize } >= SCREEN_DESKTOP,
//     };
// }

// (function (global, factory) {
//     typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
//         typeof define === 'function' && define.amd ? define(['react'], factory) :
//             (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.useWindowSize = factory(global.React));
// }(this, (function (react) {
//     'use strict';

//     /**
//      * useIsomorphicEffect
//      * Resolves to useEffect when "window" is not in scope and useLayout effect in the browser
//      * @param {function} callback Callback function to be called on mount
//      */
//     const useIsomorphicEffect = typeof window === "undefined" ? react.useEffect : react.useLayoutEffect;

//     const nullDimensions = {
//         innerWidth: null,
//         // innerHeight: null,
//         // outerWidth: null,
//         // outerHeight: null
//     };
//     function getDimensions() {
//         return {
//             // innerWidth: window.innerWidth,
//             // innerHeight: window.innerHeight,
//             // outerWidth: window.outerWidth,
//             // outerHeight: window.outerHeight
//             innerWidth: window.innerWidth
//         };
//     }
//     /**
//      * useWindowSize hook
//      * A hook that provides information of the dimensions of the window
//      * @return Dimensions of the window
//      */
//     function useResize() {
//         const [windowSize, setWindowSize] = useState(() => {
//             if (typeof window !== "undefined") {
//                 return getDimensions();
//             }
//             else {
//                 return nullDimensions;
//             }
//         });
//         // set resize handler once on mount and clean before unmount
//         useIsomorphicEffect(() => {
//             function onResize() {
//                 setWindowSize(getDimensions());
//             }
//             window.addEventListener("resize", onResize);
//             return () => {
//                 window.removeEventListener("resize", onResize);
//             };
//         }, []);
//         return windowSize;

//     }

//     // return useWindowSize;
//     return {
//         isMobile: windowSize < SCREEN_TABLET,
//         isTablet: windowSize >= SCREEN_TABLET && width < SCREEN_DESKTOP,
//         isDesktop: windowSize >= SCREEN_DESKTOP,
//     }

// })));