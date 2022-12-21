export declare type Getter<T> = () => T;
export declare type Setter<T> = (newValue: T | ((value: T) => T), action?: string | {
    type: string;
    [key: string]: unknown;
}) => void;
export declare type Listener = () => void;
export interface Reactish<T> {
    get: Getter<T>;
    subscribe: (listener: Listener) => () => void;
}
export interface Config {
    key?: string;
}
export interface Middleware {
    <T>(set: Setter<T>, get: Getter<T>, config?: Config): Setter<T>;
}
