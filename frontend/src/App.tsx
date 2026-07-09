import { Input } from "./components/input/input";

const App = () => {
    return (
        <p className="bg-black p-6 flex gap-2">
            <Input type="email" title="E-mail..." />
            <Input type="password" title="Digite sua senha..." />
        </p>
    )
}

export default App;