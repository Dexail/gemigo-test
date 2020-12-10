export const FETCH_TICKETS = 'FETCH_TICKETS'

export interface Tickets {
    id: string;
    transfers: number;
}

export interface TicketsState {
    tickets: Tickets[]
}

interface FetchTickets {
    type: typeof FETCH_TICKETS
    payload: Array<Tickets>
}

export type TicketsActionTypes = FetchTickets
