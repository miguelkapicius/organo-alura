import TextField from "../TextField";
import './Form.css'

const Form = (props) => {
    return (
        <section className="form">
            <form action="/">
                <h2>{props.formTitle}</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Informe o local da imagem" />
            </form>
        </section>

    );
}

export default Form