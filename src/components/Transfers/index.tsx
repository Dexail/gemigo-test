import * as React from 'react';
import TransferField from "./TransferField";
import {Filter} from "../index";

import "./Transfers.scss";
import {Tickets, TicketsState} from "../../store/tickets/types";
import {FiltersState, IFilter} from "../../store/filters/type";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchData} from "../../store/tickets/actions";
import {checkedFilter} from "../../store/filters/actions";

type Props = {
};
const Transfers = ({}: Props) => {
    const dispatch = useDispatch()
    let [ticketsList, setTicketsList] = useState<Tickets[]>([]);
    let [filterList, setFilterList] = useState<IFilter[]>([]);
    let tickets = useSelector<TicketsState>(state => state.tickets);
    let filters = useSelector<FiltersState>(state => state.filters);

    useEffect(() => {
        dispatch(fetchData())
    }, [])
/*
    useEffect(() => {
        // @ts-ignore
        setTicketsList(tickets)
    }, [tickets])*/

    useEffect(() => {
        // @ts-ignore
        setFilterList(filters)
        filterTickets()
    }, [filters])

    const filterTickets = (): void => {debugger
            if(tickets && filterList){
                // @ts-ignore
                setTicketsList(tickets.filter((ticket) => {
                    const filter:IFilter | undefined = filterList.find(filter => ticket.transfers === filter.id)
                    if(filter)
                        return filter.isChecked
                    else
                        return false
                }))
            }
    }
    const changeFilter = (id:number):void => {
        debugger;
        console.log(id)
        dispatch(checkedFilter(id))
    }
    return (
        <div className="transfers">
            <div className="transfers__content">
                <Filter changeFilter={changeFilter} filters={filterList}/>
                <div className="transfers__list">
                    {ticketsList.length > 0 ?
                        (ticketsList.map((ticket, index) => {
                            return (
                                <TransferField transfers={ticket.transfers}
                                />
                            )
                        }))
                        :
                        (<div className="transfers__list-content"><p>Empty List</p></div>)}
                </div>
            </div>
        </div>
    );
};

export default Transfers
