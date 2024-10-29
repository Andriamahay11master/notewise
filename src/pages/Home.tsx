import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
            <p>Page Home</p>
            <Link to={'/capture'}>Capture</Link>
        </>
    )
}