import { useState } from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import Button from '../../components/button/button';
import { Input } from '../../components/input/input';



export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(email);
        console.log(senha);
    }


    return (
        <form className="flex h-screen items-center justify-center bg-[#161410]" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center gap-2">
                <Link to="/"><img src={logo} className='mb-4' /></Link>
                <Input type="email" title="E-mail..." onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" title="Digite sua senha..." onChange={(e) => setSenha(e.target.value)} />
                <Button title="Login" variant='default' />
                <Button title="Não tenho uma conta" variant='outline' />
            </div>

        </form>
    );
}