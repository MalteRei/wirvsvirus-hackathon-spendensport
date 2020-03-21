import { IConfig } from './IConfig';

export class Config implements IConfig{
    private ApiUrl: string;

    public get apiUrl(): string {
        return this.ApiUrl;
    }
    public set apiUrl(value: string) {
        this.ApiUrl = value;
    }


    private DonationApiUrl: string;

    public get donationApiUrl(): string {
        return this.DonationApiUrl;
    }
    public set donationApiUrl(value: string) {
        this.DonationApiUrl = value;
    }
    constructor(apiUrl: string, donationApiUrl: string) {
        this.ApiUrl = apiUrl;
        this.DonationApiUrl = donationApiUrl;
    }
}
