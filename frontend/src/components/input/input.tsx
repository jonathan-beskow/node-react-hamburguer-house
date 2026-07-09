
interface InputProps {
    type: string;
    title: string;
}

export function Input({ type, title }: InputProps) {
    return (
        <input
            type={type}
            placeholder={title}
            className=" w-87.5 py-2 text-sm bg-white px-2 outline-none rounded-md text-[#32343E] placeholder-[#32343E]"
        />
    )
}