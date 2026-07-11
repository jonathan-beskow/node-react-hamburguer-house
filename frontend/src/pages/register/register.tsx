import { useState } from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import Button from '../../components/button/button';
import { Input } from '../../components/input/input';



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
                <Link to="/"><img src={logo} className='mb-4' /></Link>
                <Input type="text" title="Digite seu nome..." onChange={(e) => setNome(e.target.value)} />
                <Input type="email" title="E-mail..." onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" title="Digite sua senha..." onChange={(e) => setSenha(e.target.value)} />
                <Input type="password" title="Confirme sua senha..." onChange={(e) => setConfirmsenha(e.target.value)} />
                <Input type="text" title="Digite seu CEP..." onChange={(e) => setCep(e.target.value)} />
                <Button title='Criar Conta' />
                <Link to="/login" className='w-full'>
                    <Button title='Já tenho uma conta' variant='outline' />
                </Link>
            </div>

        </form>
    );
}