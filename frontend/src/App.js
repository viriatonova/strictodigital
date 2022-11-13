import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPostsProvider } from "./blog/context/MainPostsContext/MainPostsContext";
import Login from "./pages/Login";
import SingUpForm from "./blog/components/forms/SingUpForm";
import SingInForm from "./blog/components/forms/SingInForm";
import NotFound from "./pages/NotFound";
import Portal from "./pages/Portal";

function App() {
    return (
        <MainPostsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />}>
                        <Route path="singin" element={<SingInForm />} />
                        <Route path="singup" element={<SingUpForm />} />
                    </Route>
                    <Route path="/" element={<Portal />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </MainPostsProvider>
    );
}

export default App;
