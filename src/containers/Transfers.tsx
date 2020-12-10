import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Transfers as BaseTransfers } from '../components';
import {fetchData} from "../store/tickets/actionsTickets";
import {TicketsState} from "../store/tickets/types";


const Transfers = ({ }) => {
    const dispatch = useDispatch()
    let [ticketsList, setTicketsList] = useState<any>([]);
    let tickets = useSelector<TicketsState>(state => state.tickets);


    useEffect(() => {
        dispatch(fetchData())
    }, [])

    useEffect(() => {
        setTicketsList(tickets)
    }, [tickets])

    return (
        <BaseTransfers tickets={ticketsList}/>
    );
};

export default Transfers
