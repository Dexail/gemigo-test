import * as React from 'react';
import TransferField from "./TransferField";

import "./Transfers.scss";
import planeSvg from "../../assets/img/plane.svg";

type Props = {
    list: Array<object>

};
const Transfers = ({list}: Props) => {
    return (
        <div className="transfers">
            <div className="transfers__content">
                <div className="transfers__list">
                    <h2>Number of transfers</h2>
                    {list.length > 0 ?
                        (list.map((element, index) => {
                            return (
                                <TransferField
                                />
                            )
                        }))
                        :
                        (<p>Empty List</p>)}
                </div>
                <div className="transfers__count">
                    <p>1 transfer</p>
                    <div className="transfers__count-line">
                        <span/>
                        <img
                            className="icon-plane"
                            src={planeSvg}
                            alt="No plane icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transfers
