export const FETCH_TICKETS = 'FETCH_TICKETS'
export const INIT_DATA_TICKETS = 'INIT_DATA_TICKETS'
export const SHOW_LOADER = 'SHOW_LOADER'
export const HIDE_LOADER = 'HIDE_LOADER'

export interface ITicket {
    id: string;
    transfers: number;
}

export interface TicketsState {
    isLoading: boolean,
    data: ITicket[]
}

interface InitTickets {
    type: typeof INIT_DATA_TICKETS
    payload: ITicket[]
}
interface ShowLoader {
    type: typeof SHOW_LOADER
}
interface HideLoader {
    type: typeof HIDE_LOADER
}

export type TicketsActionTypes = InitTickets | HideLoader | ShowLoader
