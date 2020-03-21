import { ILink } from './ILink';
import { ICarrier } from './ICarrier';
import { IPicture } from './IPicture';

export interface IDonation {
    id: number;
    created_at: string;
    updated_at: string;
    latitude: number;
    longitude: number;
    street: null | string;
    zip: null | string;
    city: null | string;
    country: null | string;
    content_updated_at: string;
    activated_at: null | string;
    title: string;
    description: string;
    summary: string;
    tax_deductible: boolean;
    donations_prohibited: boolean;
    completed_at: string;
    closed_at: string;
    open_amount_in_cents: number;
    donated_amount_in_cents: number;
    positive_opinions_count: number;
    negative_opinions_count: number;
    donations_count: number;
    comments_count: number;
    donor_count: number;
    progress_percentage: number;
    incomplete_need_count: number;
    completed_need_count: number;
    blog_post_count: number;
    links: ILink[];
    carrier: ICarrier;
    profile_picture: null | IPicture;

}
