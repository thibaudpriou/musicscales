export const SCALE_IN = true as const;
export const SCALE_OUT = false as const;

export type ScaleNote = typeof SCALE_IN | typeof SCALE_OUT;

/** Tuple of 12 elements */
export type Tuple12<T> = [T, T, T, T, T, T, T, T, T, T, T, T];

export type Scale = Tuple12<ScaleNote>;
