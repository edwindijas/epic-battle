export function getTanDeg(deg: number) {
    const rad = (deg * Math.PI) / 180;
    return Math.tan(rad);
}