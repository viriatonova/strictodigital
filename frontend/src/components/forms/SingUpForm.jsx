const SingUpForm = () => {
    return (
        <form className="singin-form">
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-1/2 h-full">
                    <fieldset className="input-default">
                        <label htmlFor="username">Usuário</label>
                        <input name="username" type="text" />
                    </fieldset>
                    <fieldset className="input-default mt-6">
                        <label htmlFor="password">Senha</label>
                        <input name="password" type="password" />
                    </fieldset>
                </div>
                <div className="w-1/2 h-full ml-4">
                    <fieldset className="input-default">
                        <label htmlFor="username">Usuário</label>
                        <input name="username" type="text" />
                    </fieldset>
                    <fieldset className="input-default mt-6">
                        <label htmlFor="password">Senha</label>
                        <input name="password" type="password" />
                    </fieldset>
                </div>
            </div>
            <button className="btn-primary mt-12 self-start">GO</button>
        </form>
    );
};

export default SingUpForm;
