import SocialSidebar from "../components/social/SocialSideBar";
import { Outlet, NavLink } from "react-router-dom";

const Login = () => {
    return (
        <main className="login">
            <section>
                <SocialSidebar />
                <article>
                    <header className="w-full h-auto mb-6">
                        <h1 className="text-skin-inverted">Portal Capão</h1>
                        <h3 className="text-skin-inverted mt-2">
                            Sua porta de entrada para o Vale
                        </h3>
                    </header>
                    <div className="login-link-wrapper">
                        <NavLink className="login-link" to="singin">
                            SingIn
                        </NavLink>
                        <NavLink
                            className="login-link  border-l border-white/20"
                            to="singup"
                        >
                            SingUp
                        </NavLink>
                    </div>
                    <Outlet />
                </article>
            </section>
            <aside>
                <p>content</p>
            </aside>
        </main>
    );
};

export default Login;
