
type ButtonType = {
    title: string;
    variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ title, variant = "default", ...props }: ButtonType) {
    const dftl = "w-full border-2 border-[#C92A0E] bg-[#C92A0E] rounded-md py-1 text-white text-sm font-bold cursor-pointer";
    const white = "w-full border-2 border-[#C92A0E] bg-white rounded-md py-1 text-[#C92A0E] text-sm font-bold cursor-pointer";

    function buttonVariant(): string {
        if (variant === "default") {
            return dftl;
        } else {
            return white;
        }
    }


    return (
        <button {...props} className={buttonVariant()} > {title}</button >
    );
}