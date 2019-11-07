
// export function customEasing(t: number, b: number, c: number, d: number) {

// }

/**
 * Ladda Options
 */
export const NgxPageScrollOptions: any = {

    // easeInOutExpo easing
    easingLogic: (t: number, b: number, c: number, d: number) => {
        if (t === 0) {
            return b;
        }
        if (t === d) {
            return b + c;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }

        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
};
