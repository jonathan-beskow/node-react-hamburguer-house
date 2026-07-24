import { useState } from "react";


export default function Home() {

  const [category, setCategory] = useState("Hamburguer")



  const handleChangeCategory = (newcategory: string) => {
    setCategory(newcategory)
  }

  const getCategoryClass = (categoryName: string) => {
    const elementoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32";
    const elementoNaoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32";

      if (category === categoryName) {
        return elementoSelecionado;
      } else {
        return elementoNaoSelecionado;
      }
  }



  return (
    <div className="text-white md:w-184.25 mx-auto w-full p-3 px-3 md:px-0">
      <div className="flex gap-2 py-4 my-1 md:my-3">
        <div className={getCategoryClass("Hamburguer")} onClick={ () => handleChangeCategory("Hamburguer")}>Hamburguer</div>
        <div className={getCategoryClass("Bebidas")} onClick={ () => handleChangeCategory("Bebidas")}>Bebidas</div>
        <div className={getCategoryClass("Porcoes")} onClick={ () => handleChangeCategory("Porcoes")}>Porções</div>
      </div>
    </div>
  );
}
