export function roundPrecision(value: number, step: number): number {
    if (step <= 0) {
        throw new Error("Step must be positive");
    }

    if (step < 1) {
        const scale = 1 / step;
        return Math.round(value * scale) / scale;
    } else {
        return Math.round(value / step) * step;
    }

}