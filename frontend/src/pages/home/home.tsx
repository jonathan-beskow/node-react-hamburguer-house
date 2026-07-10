import { Link } from "react-router";

export default function Home() {
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Registrar</Link>
        </div>
    )
}