import React from "react"
import useScript from './importScript'

const Cashfree = ({environment}) => {            

    const status = useScript(
        "https://sdk.cashfree.com/js/v3/cashfree.js"
    );

    return (
    <div>
        <div>
        Script status: <b>{status}</b>
        </div>
        {status === "ready" && (
        <div>
            Script function call response: <b>{new window.Cashfree().version()}</b>
            You are using cashfree library in: {environment}
        </div>
        )}
    </div>
    );
}

export default Cashfree