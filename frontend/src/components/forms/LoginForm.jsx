const LoginForm = () => {
    return (
        <form className="login-form">
            <fieldset className="input-default">
                <label htmlFor="username">Usuário</label>
                <input name="username" type="text" />
            </fieldset>
            <fieldset className="input-default">
                <label htmlFor="password">Senha</label>
                <input name="password" type="password" />
            </fieldset>
            <button className="btn-primary mt-12 self-start">GO</button>
        </form>
    );
};

export default LoginForm;
