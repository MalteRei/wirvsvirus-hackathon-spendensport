import { IConfig } from './IConfig';

export class Config implements IConfig {
    private DonationApiUrl: string;

    public get donationApiUrl(): string {
        return this.DonationApiUrl;
    }
    public set donationApiUrl(value: string) {
        this.DonationApiUrl = value;
    }
    constructor(apiUrl: string, donationApiUrl: string) {
        this.DonationApiUrl = donationApiUrl;
    }
}
