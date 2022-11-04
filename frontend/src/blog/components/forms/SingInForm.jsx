import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";

const SingInForm = () => {
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (data) => {
        data ? navigate("/portal") : navigate("/");
        console.log(data);
    };

    return (
        <form
            className="singin-form"
            onSubmit={handleSubmit(onSubmit)}
            action="POST"
        >
            <div className="w-full h-full flex flex-col">
                <fieldset className="input-default">
                    <label htmlFor="username">Usuário</label>
                    <input
                        name="username"
                        type="text"
                        placeholder="Caipora_Serntaneja"
                        {...register("username", {
                            required: "Nome de usuário é requerido",
                        })}
                    />
                </fieldset>
                <fieldset className="input-default !mt-12">
                    <label htmlFor="password">Senha</label>
                    <input name="password" type="password" />
                </fieldset>
            </div>
            <ErrorMessage
                className="erro-msg"
                errors={errors}
                name="username"
                render={({ message }) => <p className="erro-msg">{message}</p>}
            />
            <button type="submit" className="btn-primary mt-12 self-start">
                Entrar
            </button>
        </form>
    );
};

export default SingInForm;
