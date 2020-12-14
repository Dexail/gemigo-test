import * as React from 'react';
import planeSvg from "../../assets/img/plane.svg";

type Props = {
    transfers:number
};
const TransferField = ({transfers}: Props) => {
    const title = transfers === 1 ? "Transfer" : "Transfers"
    return (
        <div className="transfers__list-content">
            {transfers  > 0 ?
                (<p> {transfers} {title}</p>)
            :
                (<p>No transfer</p>)
            }
            <div className="transfers__list-line">
                <span/>
                <img
                    className="icon-plane"
                    src={planeSvg}
                    alt="No plane icon"
                />
            </div>
        </div>
    );
};

export default TransferField
