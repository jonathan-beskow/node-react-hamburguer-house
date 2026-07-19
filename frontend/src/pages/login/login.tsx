import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import logo from '../../assets/logo.png';
import Button from '../../components/button/button';
import { Input } from '../../components/input/input';



export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            if (!email || !senha) {
                setError("E-mail e senha são obrigatórios");
                return;
            }
            const response = await fetch('http://localhost:3000/login', {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ email, senha }),
                credentials: "include"
            });

            if (response.status === 404) {
                setError("Usuário não encontrado");
                return;
            }
            if (response.status === 400) {
                setError("Usuário/senha incorretos");
                return;
            }

            if (response.status === 401) {
                setError("Usuário/senha incorretos");
                return;
            }
            if (response.status === 200) {
                setError("");
                navigate("/")
            }


            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <form className="flex h-screen items-center justify-center bg-[#161410]" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center gap-2">
                <Link to="/"><img src={logo} className='mb-4 mx-auto' /></Link>
                <div className='flex flex-col gap-2 mb-3'>
                    <Input type="email" title="E-mail..." onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" title="Digite sua senha..." onChange={(e) => setSenha(e.target.value)} />
                    <p className='text-left text-sm font-bold text-red-500'>
                        {error !== '' && (
                            error
                        )}
                    </p>
                </div>

                <Button title="Login" variant='default' type="submit" />
                <Link to="/register" className='w-full'>
                    <Button title="Não tenho uma conta" variant='outline' />
                </Link>
            </div>

        </form>
    );
}