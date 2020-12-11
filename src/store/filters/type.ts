export const CHECKED_FILTER = 'CHECKED_FILTER'
export const CHECKED_ALL_FILTER = 'CHECKED_ALL_FILTER'

export interface IFilter {
    id: number;
    value: string;
    isChecked: boolean
}

export interface FiltersState {
    filters: IFilter[]
}

interface ChangeFilters {
    type: typeof CHECKED_FILTER
    payload: number
}

interface checkedAllFilter {
    type: typeof CHECKED_ALL_FILTER
    payload: number
}

export type FiltersActionTypes = ChangeFilters | checkedAllFilter
