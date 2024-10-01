import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!!!!</h1>
            <h2>{err.data}</h2>
        </div>
    )
}

export default ErrorComponent;