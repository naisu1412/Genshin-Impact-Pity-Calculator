import React, { useState, useEffect } from "react";
import "./Calculator.css";

function Calculator() {
    const [totalPityRoll, setTotalPityRoll] = useState(0);
    const [totalPrimo, setTotalPrimo] = useState(0);
    const [totalFate, setTotalFate] = useState(0);
    const [currPityCounter, setCurrPity] = useState(0);

    useEffect(() => {
        let totalPityCount = (+(totalPrimo / 160)) + (+totalFate) + (+currPityCounter);
        setTotalPityRoll(parseInt(totalPityCount));
    })

    return (
        <div className="Calculator">
            <div className="Calculator__Container">
                <div className="Calculator__Container__Content">
                    Primogems: <input className="header__searchInput" type="number" onChange={e => {
                        setTotalPrimo(e.target.value)
                    }} />
                </div>

                <div className="Calculator__Container__Content">
                    Fate: <input className="header__searchInput" type="number" onChange={e => setTotalFate(e.target.value)} />
                </div>

                <div className="Calculator__Container__Content">
                    Current Pity: <input className="header__searchInput" type="number" onChange={e => {
                        setCurrPity(e.target.value)
                    }} />
                </div>

            </div>
            <div className="Calculator__Container">

                <div className="Calculator__Container__Content">
                    Total Pity/Rolls: <input readOnly className="header__searchInput" type="text" value={totalPityRoll} />
                </div>

            </div>


        </div>
    );
}

export default Calculator;