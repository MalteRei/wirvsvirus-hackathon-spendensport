export interface IGoal {
    description: string;
    stake: number;
    done: boolean;
    linkUrlToDonate: string;
    linkUrlGoal: string;
    date: Date;
    setDone(value:boolean);
}
