import * as React from 'react';
import planeSvg from "../../assets/img/plane.svg";

type Props = {
    transfers:number
};
const TransferField = (props: Props) => {
    return (
        <div className="transfers__list-content">
            {props.transfers && props.transfers  > 0 ?
                (<p> {props.transfers} Transfers</p>)
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
