const SingUpForm = () => {
    return (
        <form className="singin-form">
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-1/2 h-full">
                    <fieldset className="input-default">
                        <label htmlFor="nome">Nome</label>
                        <input name="nome" type="text" />
                    </fieldset>
                    <fieldset className="input-default !mt-12">
                        <label htmlFor="username">Sobrenome</label>
                        <input name="username" type="text" />
                    </fieldset>
                </div>
                <div className="w-1/2 h-full">
                    <fieldset className="input-default">
                        <label htmlFor="sobrenome">Usuário</label>
                        <input name="sobrenome" type="text" />
                    </fieldset>
                    <fieldset className="input-default !mt-12">
                        <label htmlFor="password">Senha</label>
                        <input name="password" type="password" />
                    </fieldset>
                </div>
            </div>
            <button className="btn-primary mt-12 self-start">Registar</button>
        </form>
    );
};

export default SingUpForm;
