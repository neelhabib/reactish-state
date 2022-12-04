export declare type Getter<T> = () => T;
export declare type Setter<T> = (newValue: T | ((value: T) => T)) => void;
export declare type Listener = () => void;
export interface Reactish<T> {
    get: Getter<T>;
    subscribe: (listener: Listener) => () => void;
}
export declare type Enhancer<T, X> = (set: Setter<T>, get: Getter<T>, context?: X) => Setter<T>;
export declare type Middleware = <T, X>(set: Setter<T>, get: Getter<T>, context?: X) => Setter<T>;
