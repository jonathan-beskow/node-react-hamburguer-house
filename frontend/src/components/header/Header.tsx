import { useContext } from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { UserContext } from "../../contexts/UserContext";

export function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-184.25 md:p-0">
        <img src={logo} />
        <Link to="/login">
          {user ? (
            <p className="text-white">Olá, {user.name}</p>
          ) : (
            <div className="flex h-8.75 w-32.5 cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
              Entrar
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
