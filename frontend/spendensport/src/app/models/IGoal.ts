import { IObservable } from './IObservable';

export interface IGoal extends IObservable {
    description: string;
    stake: number;
    done: boolean;
    linkUrlToDonate: string;
    linkUrlToDonateImage: string;
    date: Date;
    setDone(value: boolean);
    daysLeft(): number;
    toJSON(): IGoalJson;
}

export interface IGoalJson {
    description: string;
    stake: number;
    done: boolean;
    linkUrlToDonate: string;
    linkUrlToDonateImage: string;
    date: string;
}
