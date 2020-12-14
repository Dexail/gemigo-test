import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TransferField from "./TransferField";
import {Filter, Loader} from "../index";

import "./Transfers.scss";
import {fetchData} from "../../store/tickets/actions";
import {ITicket, TicketsState} from "../../store/tickets/types";
import {checkedAllFilter, checkedFilter} from "../../store/filters/actions";
import {IFilter} from "../../store/filters/type";

type Props = {};
const Transfers = ({}: Props) => {
    const dispatch = useDispatch()
    const [ticketsList, setTicketsList] = useState<ITicket[]>([]);
    const [filterList, setFilterList] = useState<IFilter[]>([]);
    const {isLoading, data: tickets} = useSelector(({tickets}: { tickets: TicketsState }) => tickets);
    const filters = useSelector(({filters}: { filters: IFilter[] }) => filters);

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
                setTicketsList(tickets.filter((ticket) => {
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
    const changeFilter = (id: number): void => {
        if (id === -1)
            dispatch(checkedAllFilter(id))
        else
            dispatch(checkedFilter(id))
    }
    return (
        <div className="transfers">
            <div className="transfers__content">
                <Filter filterTickets={filterTickets} disabled={isLoading} changeFilter={changeFilter}
                        filters={filterList}/>
                <div className="transfers__list">
                    {isLoading ?
                        (<div className="transfers__list-content"><Loader/></div>)
                        :
                        <>
                            {
                                ticketsList !== null && ticketsList.length > 0 ?
                                    (ticketsList.map((ticket, index) => {
                                        return (
                                            <TransferField transfers={ticket.transfers}
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
