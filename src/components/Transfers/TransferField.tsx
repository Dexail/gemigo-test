import * as React from 'react';
import planeSvg from "../../assets/img/plane.svg";

type Props = {};
const TransferField = (props: Props) => {
    return (
        <>
            <p>1 transfer</p>
            <div className="transfers__list-line">
                <span/>
                <img
                    className="icon-plane"
                    src={planeSvg}
                    alt="No plane icon"
                />
            </div>
        </>
    );
};

export default TransferField
