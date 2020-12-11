export const FETCH_TICKETS = 'FETCH_TICKETS'
export const INIT_DATA_TICKETS = 'INIT_DATA_TICKETS'

export interface Tickets {
    id: string;
    transfers: number;
}

export interface TicketsState {
    tickets: Tickets[]
}

interface InitTickets {
    type: typeof INIT_DATA_TICKETS
    payload: Array<Tickets>
}

export type TicketsActionTypes = InitTickets
