import { useForm } from "react-hook-form"

function Contacto() {

    const { register, handleSubmit } = useForm()
    const enviar = (data) => {
        console.log(data)
        alert("Nombre: " + data.nombre + "\nEmail: " + data.email + "\nTelefono: " + data.telefono)
    }
    return (
        <>
            <h1 className="title-contacto">Contacto</h1>
            <form className="form-contacto" onSubmit={handleSubmit(enviar)}>
                <input className="input-contacto"
                    type="text"
                    placeholder="Ingresa tu Nombre"
                    {...register("nombre")}

                />
                <input className="input-contacto"
                    type="email"
                    placeholder="Ingresa tu Email"
                    {...register("email")}
                />

                <input className="input-contacto"
                    type="phone"
                    placeholder="Ingresa tu Telefono"
                    {...register("telefono")}
                />
                <button className="btn-contacto" type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Contacto