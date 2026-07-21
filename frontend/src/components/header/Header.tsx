import { Box, LayoutDashboard, LogOut, Plus, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { UserContext } from "../../contexts/UserContext";

export function Header() {
  const { user } = useContext(UserContext);
  console.log("nome: ", user?.name);

  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-184.25 md:p-0">
        <img src={logo} />
        {user ? (
          <div className="flex items-center gap-8 text-white">
            <div className="flex items-center gap-2 text-[#F2DAAC]">
              <div className="flex h-8.75 w-8.75 cursor-pointer items-center justify-center rounded-md border">
                <Box size={18} />
              </div>
              <div className="flex h-8.75 w-8.75 cursor-pointer items-center justify-center rounded-md border">
                <LayoutDashboard size={18} />
              </div>
              <div className="flex h-8.75 w-8.75 cursor-pointer items-center justify-center rounded-md border">
                <Plus size={18} />
              </div>
            </div>
            <div className="relative cursor-pointer">
              <ShoppingCart size={18} />
              <p className="absolute text-[#161410] -top-4 -right-4 bg-[#F2DAAC] p-1 rounded-full w-5 h-5 flex justify-center items-center">1</p>
            </div>
            <div className="flex items-center gap-2">
              <p> {user.name}</p>{" "}
              <LogOut size={18} className="cursor-pointer" />
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
