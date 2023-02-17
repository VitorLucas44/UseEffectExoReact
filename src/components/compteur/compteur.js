import React, { useState, useEffect } from "react";

function Compteur() {
    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Le composant a été mis à jour");
    });

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
        <p>Compteur: {count}</p>
        <button onClick={handleClick}>Incrémenter</button>
        </div>
    );
}

export default Compteur;
