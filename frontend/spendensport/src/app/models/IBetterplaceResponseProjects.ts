import { IDonation } from './IDonation';

export interface IBetterplaceResponseProjects {
    total_entries: number;
    offset: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    data: IDonation[];
}