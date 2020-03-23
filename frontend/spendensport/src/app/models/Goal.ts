import { IGoal, IGoalJson } from './IGoal';
import { IObserver } from './IObserver';

export class Goal implements IGoal {
    private Description: string;
    private Stake: number;
    private Done: boolean;
    private Date: Date;
    private LinkUrlToDonate: string;
    private LinkUrlToDonateImage: string;
    private Observers: IObserver[];

    public static fromJSON(json: IGoalJson): Goal {
        const goal = Object.create(Goal.prototype);
        return Object.assign(goal, json, {
            Date: new Date(json.date),
            Observers: new Array<IObserver>()
        });
    }

    public toJSON(): IGoalJson {
        const observers = this.Observers;
        this.Observers = null;
        const result = Object.assign({}, this, {
            date: this.Date.toString()
        });
        this.Observers = observers;
        return result;
    }




    public get date(): Date {
        return this.Date;
    }
    public set date(value: Date) {
        this.Date = value;

    }


    public get linkUrlToDonate(): string {
        return this.LinkUrlToDonate;
    }
    public set linkUrlToDonate(value: string) {
        this.LinkUrlToDonate = value;
        this.notifyAll('linkUrlToDonate', value);

    }

    public get linkUrlToDonateImage(): string {
        return this.LinkUrlToDonateImage;
    }
    public set linkUrlToDonateImage(value: string) {
        this.LinkUrlToDonateImage = value;
        this.notifyAll('linkUrlGoal', value);

    }

    public get done(): boolean {
        return this.Done;
    }
    public set done(value: boolean) {
        this.Done = value;
        this.notifyAll('done', value);

    }

    public get stake(): number {
        return this.Stake;
    }
    public set stake(value: number) {
        this.Stake = value;
        this.notifyAll('stake', value);
    }
    public get description(): string {
        return this.Description;
    }
    public set description(value: string) {
        this.Description = value;
        this.notifyAll('description', value);

    }

    public setDone(value: boolean) {
        this.done = value;
        this.notifyAll('done', value);
    }

    private notifyAll(key: string, value: any): void {
        for (const observer of this.Observers) {
            observer.onChange(this, key, value);
        }
    }

    public daysLeft(): number {
        const currentDate = new Date();
        const daysToGo = this.date.getDate() - currentDate.getDate();
        if (isNaN(daysToGo)) {
            return 0;
        }
        return daysToGo;
    }




    constructor(description: string, stake: number, done: boolean, linkToDonateTo: string, date: Date, linkToDonateImage: string) {
        this.Description = description;
        this.Stake = stake;
        this.Done = done;
        this.Date = date;
        this.LinkUrlToDonate = linkToDonateTo;
        this.LinkUrlToDonateImage = linkToDonateImage;
        this.Observers = [];
    }
    public registerObserver(observer: IObserver): void {
        this.Observers.push(observer);

    }

    public unregisterObserver(observer: IObserver): void {
        const index = this.Observers.indexOf(observer);
        if (index > -1) {
            this.Observers.splice(index, 1);
        }
    }
}


