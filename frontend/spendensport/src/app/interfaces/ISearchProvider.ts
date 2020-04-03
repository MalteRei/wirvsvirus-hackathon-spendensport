import { ReplaySubject } from 'rxjs';

export interface ISearchProvider<T> {
    search(query: string): ReplaySubject<Array<T>>;
    currentSearchResults(): ReplaySubject<Array<T>>;
}
