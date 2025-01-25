import React, {useState} from "react";

function Home() {
    const [bj, setBj] = useState(0)
    return(
        <>
            <h1>
                Sei que as coisas são e estão dificeis mas com você me sinto mais seguro e forte, seja forte e determinada pra que eu também seja!
            </h1>
            <button onClick={() => setBj(bj+1)}>beijos</button>

            <h2>{bj}</h2>
        </>
    )
}

export default Home;