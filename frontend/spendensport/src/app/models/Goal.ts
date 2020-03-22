import { IGoal } from './IGoal';

export class Goal implements IGoal {
    private Description: string;
    private Stake: number;
    private Done: boolean;
    private Date: Date;

    public get date(): Date {
        return this.Date;
    }
    public set date(value: Date) {
        this.Date = value;
    }
    private LinkUrlToDonate: string;

    public get linkUrlToDonate(): string {
        return this.LinkUrlToDonate;
    }
    public set linkUrlToDonate(value: string) {
        this.LinkUrlToDonate = value;
    }

    public get done(): boolean {
        return this.Done;
    }
    public set done(value: boolean) {
        this.Done = value;
    }

    public get stake(): number {
        return this.Stake;
    }
    public set stake(value: number) {
        this.Stake = value;
    }
    public get description(): string {
        return this.Description;
    }
    public set description(value: string) {
        this.Description = value;
    }

    public daysLeft(): number {
        const currentDate = new Date();
        const daysToGo = this.date.getDate() - currentDate.getDate();
        return daysToGo;
    }



    constructor(description: string, stake: number, done: boolean, linkToDonateTo: string, date: Date) {
        this.Description = description;
        this.Stake = stake;
        this.Done = done;
        this.Date = date;
        this.LinkUrlToDonate = linkToDonateTo;
    }
}
