import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TransferField from "./TransferField";
import {Filter, Loader} from "../index";

import {fetchData} from "../../store/tickets/actions";
import {ITicket, TicketsState} from "../../store/tickets/types";
import {checkedAllFilter, checkedFilter, resetFilter} from "../../store/filters/actions";
import {IFilter} from "../../store/filters/type";

import "./Transfers.scss";

enum SortType {
    ASC = 1,
    DESC = 0
}

type Props = {};
const Transfers = ({}: Props) => {
    const dispatch = useDispatch()
    const sortBy: SortType = SortType.ASC;
    const [ticketsList, setTicketsList] = useState<ITicket[]>([]);
    const [filterList, setFilterList] = useState<IFilter[]>([]);
    const {
        isLoading,
        data: tickets
    }: { isLoading: boolean, data: ITicket[] } = useSelector(({tickets}: { tickets: TicketsState }) => tickets);
    const filters: IFilter[] = useSelector(({filters}: { filters: IFilter[] }) => filters);

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    useEffect(() => {
        filterTickets()
    }, [tickets])

    useEffect(() => {
        setFilterList(filters)
        filterTickets()
    }, [filters])

    const filterTickets = (id?: number): void => {
        if (tickets && tickets.length > 0 && filterList) {
            if (id === undefined) {
                const result = sortFilter(tickets, sortBy)
                setTicketsList(result.filter((ticket) => {
                    const filter: IFilter | undefined = filterList.find(filter => ticket.transfers === filter.id)
                    return filter ? filter.isChecked : false
                }))
            } else {
                setTicketsList(tickets.filter((ticket) => {
                    return ticket.transfers === id ?? false
                }))
            }
        }
    }

    const sortFilter = (data: ITicket[], typeSort: SortType): ITicket[] =>
        data.sort((a, b) => {
            if (typeSort)
                return a.transfers > b.transfers ? 1 : (b.transfers > a.transfers) ? -1 : 0
            else
                return a.transfers < b.transfers ? 1 : (b.transfers < a.transfers) ? -1 : 0

        })

    const resetFilters = (id?: number): void => {
        dispatch(resetFilter())
        if (id !== undefined)
            changeFilter(id)
    }

    const changeFilter = (id: number): void => {
        if (id === -1)
            dispatch(checkedAllFilter(id))
        else
            dispatch(checkedFilter(id))
    }
    return (
        <div className="transfers">
            <div className="transfers__content">
                <Filter resetFilters={resetFilters} disabled={isLoading} changeFilter={changeFilter}
                        filters={filterList}/>
                <div className="transfers__list">
                    {isLoading ?
                        (<div className="transfers__list-content"><Loader/></div>)
                        :
                        <>
                            {
                                ticketsList !== null && ticketsList.length > 0 ?
                                    (ticketsList.map((ticket) => {
                                        return (
                                            <TransferField key={ticket.id} transfers={ticket.transfers}
                                            />
                                        )
                                    }))
                                    :
                                    (<div className="transfers__list-content"><p>Empty list</p></div>)
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Transfers
