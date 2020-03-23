import { IObserver } from './IObserver';

export interface IObservable {
    registerObserver(observer: IObserver): void;
    unregisterObserver(observer: IObserver): void;
}
