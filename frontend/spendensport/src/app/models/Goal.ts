import { IGoal } from './IGoal';

export class Goal implements IGoal {
    private Description: string;
    private Stake: number;
    private Done: boolean;

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



    constructor(description: string, stake: number, done: boolean ) {
        this.Description = description;
        this.Stake = stake;
        this.Done = done;
    }
}
