import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Input } from '../input/input';


export default function Register() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmsenha, setConfirmsenha] = useState("");
    const [cep, setCep] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(email);
        console.log(senha);
    }


    return (
        <form className="flex h-screen items-center justify-center bg-[#161410]" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center gap-2">
                <img src={logo} className='mb-4' />
                <Input type="text" title="Digite seu nome..." onChange={(e) => setNome(e.target.value)} />
                <Input type="email" title="E-mail..." onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" title="Digite sua senha..." onChange={(e) => setSenha(e.target.value)} />
                <Input type="password" title="Confirme sua senha..." onChange={(e) => setConfirmsenha(e.target.value)} />
                <Input type="text" title="Digite seu CEP..." onChange={(e) => setCep(e.target.value)} />
                <button
                    type="submit"
                    className="w-full bg-[#C92A0E] rounded-md py-1 text-white text-sm font-bold cursor-pointer">Cadastrar</button>
            </div>

        </form>
    );
}