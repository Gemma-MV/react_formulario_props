import FormInput from "./FormInput";

export default function Form() {
    return (
        <div className="divFrom">
            <h2>Formulario de registro</h2>
            <form>
                <FormInput label="Nombre: "/>
                <FormInput label="Apellido: "/>
                <FormInput type="submit" value="Enviar"/>
            </form>
        </div>
    );
}