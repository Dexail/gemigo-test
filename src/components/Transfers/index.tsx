import * as React from 'react';
import TransferField from "./TransferField";

import "./Transfers.scss";
import {Filter} from "../index";
import {Tickets} from "../../store/tickets/types";

type Props = {
    tickets: Array<Tickets>
};
const Transfers = ({tickets}: Props) => {
    return (
        <div className="transfers">
            <div className="transfers__content">
                <Filter/>
                <div className="transfers__list">
                    {tickets.length > 0 ?
                        (tickets.map((ticket, index) => {
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
