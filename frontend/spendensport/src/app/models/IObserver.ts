import { IObservable } from './IObservable';

export interface IObserver {
    onChange(changedObject: IObservable, key: string, value: any);
}
