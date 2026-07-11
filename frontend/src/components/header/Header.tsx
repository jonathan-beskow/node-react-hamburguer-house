import { Link } from 'react-router'
import logo from '../../assets/logo.png'


export function Header() {
    return (
        <div className="bg-[#161410]">
            <div className="w-full md:w-184.25 p-3 md:p-0 mx-auto flex items-center justify-between">
                <img src={logo} />
                <Link to="/login">
                    <div className="bg-[#F2DAAC] w-32.5 h-8.75 flex items-center justify-center rounded-sm cursor-pointer">Entrar</div>
                </Link>
            </div>
        </div>

    );
}