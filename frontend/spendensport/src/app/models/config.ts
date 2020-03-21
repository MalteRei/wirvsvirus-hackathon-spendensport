import { IConfig } from './IConfig';

export class Config implements IConfig{
    private ApiUrl: string;

    public get apiUrl(): string {
        return this.ApiUrl;
    }
    public set apiUrl(value: string) {
        this.ApiUrl = value;
    }

    constructor(apiUrl: string){
        this.ApiUrl = apiUrl;
    }
}
