interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    title: string;
}

export function Input({ type, title, ...rest }: InputProps) {
    return (
        <input
            type={type}
            placeholder={title}
            {...rest} // ✅ repassa todas as outras props nativas (onChange, value, etc.)
            className="w-87.5 py-3 text-sm bg-white px-2 outline-none rounded-md text-[#32343E] placeholder-[#32343E]"
        />
    )
}