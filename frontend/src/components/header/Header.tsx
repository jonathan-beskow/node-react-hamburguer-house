import { Box, LayoutDashboard, LogOut, Plus, ShoppingCart } from "lucide-react";
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router";
import logo from "../../assets/logo.png";
import { UserContext } from "../../contexts/UserContext";

export function Header() {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseClass =
    "flex h-8.75 w-8.75 cursor-pointer items-center justify-center rounded-md border";

  const getNavItemClass = (path: string) => {
    if (location.pathname === path) {
      return `${baseClass} text-[#161410] bg-[#F2DAAC]`;
    } else {
      return baseClass;
    }
  };

  const handleAuthUser = async () => {
    try {
      const response = await fetch(baseUrl + "/me", {
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Problemas ao manter autenticação");
        return;
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const handleLogOut = async () => {
    try {
      const response = await fetch(baseUrl + "/logout", {
        credentials: "include",
        method: "POST",
      });

      if (!response.ok) {
        console.log("Erro ao deslogar");
        return;
      }

      setUser(null);
    } catch (error) {
      console.log("Ocorreu um erro inesperado");
      return;
    }
  };

  useEffect(() => {
    handleAuthUser();
  }, []);

  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-184.25 md:p-0">
        <Link to="/">
          <img src={logo} />
        </Link>
        {user ? (
          <div className="flex items-center gap-8 text-white">
            {user.admin && (
              <div className="flex items-center gap-2 text-[#F2DAAC]">
                <Link to="/">
                  <div className={getNavItemClass("/")}>
                    <Box size={18} />
                  </div>
                </Link>

                <Link to="/pedidos">
                  <div className={getNavItemClass("/pedidos")}>
                    <LayoutDashboard size={18} />
                  </div>
                </Link>

                <Link to="">
                  <div className={baseClass}>
                    <Plus size={18} />
                  </div>
                </Link>
              </div>
            )}

            <div className="relative cursor-pointer">
              <ShoppingCart size={18} />
              <p className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2DAAC] p-1 text-[#161410]">
                1
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p> {user.name}</p>{" "}
              <LogOut
                size={18}
                className="cursor-pointer"
                onClick={() => handleLogOut()}
              />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <div className="flex h-8.75 w-32.5 cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
