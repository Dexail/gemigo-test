import * as React from 'react';
import TransferField from "./TransferField";

import "./Transfers.scss";
import {Filter} from "../index";

type Props = {
    tickets: Array<object>

};
const Transfers = ({tickets}: Props) => {
    return (
        <div className="transfers">
            <div className="transfers__content">
                <Filter/>
                <div className="transfers__list">
                    <TransferField/>
                </div>
            </div>
        </div>
    );
};

export default Transfers
