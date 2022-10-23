import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SingUpForm from "./components/forms/SingUpForm";
import SingInForm from "./components/forms/SingInForm";
import NotFound from "./pages/NotFound";
import Portal from "./pages/Portal";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}>
                    <Route path="singin" element={<SingInForm />} />
                    <Route path="singup" element={<SingUpForm />} />
                </Route>
                <Route path="/portal" element={<Portal />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
