import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { portalRegister } from "../../helpers/requestsApi";

const SingUpForm = () => {
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

    const onSubmit = async (data) => {
        console.log(data);
        const userRegistered = await portalRegister(data);
        userRegistered.message == "user created"
            ? navigate("/singin")
            : navigate("/singup");
    };

    return (
        <form
            className="singin-form"
            onSubmit={handleSubmit(onSubmit)}
            action="POST"
        >
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-1/2 h-full">
                    <fieldset className="input-default">
                        <label htmlFor="firstname">Nome</label>
                        <input
                            name="firstname"
                            type="text"
                            {...register("firstname", {
                                required: "Nome é requerido",
                            })}
                        />
                    </fieldset>
                    <fieldset className="input-default !mt-12">
                        <label htmlFor="=lastname">Sobrenome</label>
                        <input
                            name="=lastname"
                            type="text"
                            {...register("lastname")}
                        />
                    </fieldset>
                    <fieldset className="input-default !mt-12">
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            type="text"
                            {...register("email", {
                                required: "Email é requerido",
                            })}
                        />
                    </fieldset>
                </div>
                <div className="w-1/2 h-full">
                    <fieldset className="input-default">
                        <label htmlFor="username">Usuário</label>
                        <input
                            name="username"
                            type="text"
                            {...register("username", {
                                required: "Nome de usuário é requerido",
                            })}
                        />
                    </fieldset>
                    <fieldset className="input-default !mt-12">
                        <label htmlFor="password">Senha</label>
                        <input
                            name="password"
                            type="password"
                            {...register("password", {
                                required: "Senha é requerida",
                            })}
                        />
                    </fieldset>
                </div>
            </div>
            <ErrorMessage
                className="erro-msg"
                errors={errors}
                name="username"
                render={({ message }) => <p className="erro-msg">{message}</p>}
            />
            <button className="btn-primary mt-12 self-start">Registar</button>
        </form>
    );
};

export default SingUpForm;
