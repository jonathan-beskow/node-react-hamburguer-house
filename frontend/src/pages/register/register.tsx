import { useState } from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import Button from '../../components/button/button';
import { Input } from '../../components/input/input';



export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmsenha, setConfirmsenha] = useState("");
    const [cep, setCep] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            verifyInfo();
            const response = await sendRequest('http://localhost:3000/register', 'POST', { name, email, password, cep })
            switch (response.status) {
                case 201:
                    setName("");
                    setEmail("");
                    setPassword("");
                    setConfirmsenha("")
                    setCep("");
                    break;
                case 409:
                    setError("E-mail já cadastrado");
                    break;
                case 400:
                    setError("Todas as informações são obrigatórias");
                    break;
                case 401:
                    setError("Usuário ou senha inválidos");
                    break;
                case 500:
                    setError("Tente novamente mais tarde");
                    break;
                default:
                    setError("");
            }

        } catch (error) {
            console.log;
            return;
        }
    }

    async function sendRequest(rota: string, method: string, body: Object) {
        return fetch(rota, {
            method: method,
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        })
    }

    function verifyInfo() {
        if (!name || !email || !password || !cep) {
            setError("Todas as informações são obrigatórias")
            return;
        }
        if (password !== confirmsenha) {
            setError("Senhas não conferem")
            return
        }
        return true;
    }


    return (
        <form className="flex h-screen items-center justify-center bg-[#161410]" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center gap-2">
                <Link to="/"><img src={logo} className='mb-4 mx-auto' /></Link>
                <Input type="text" value={name} title="Digite seu nome..." onChange={(e) => setName(e.target.value)} />
                <Input type="email" value={email} title="E-mail..." onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" value={password} title="Digite sua senha..." onChange={(e) => setPassword(e.target.value)} />
                <Input type="password" value={confirmsenha} title="Confirme sua senha..." onChange={(e) => setConfirmsenha(e.target.value)} />
                <Input type="text" value={cep} title="Digite seu CEP..." onChange={(e) => setCep(e.target.value)} />
                <p className='font-bold text-red-500'>{error}</p>
                <div className='w-full mt-2 gap-2 flex flex-col'>
                    <Button title='Criar Conta' type='submit' />
                    <Link to="/login" className='w-full'>
                        <Button title='Já tenho uma conta' variant='outline' />
                    </Link>
                </div>

            </div>

        </form>
    );
}