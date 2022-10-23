/**
 * POST method for login user
 *
 * @param {Array} data data from the login form
 * @returns
 */
export const Register = async (data) => {
    try {
        const url = "http://127.0.0.1:8181/login/";

        let dataApi = {
            username: data.username,
            password: data.password,
        };

        const api = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataApi),
        });

        const response = await api.json();

        window.localStorage.setItem("username", response.username);
        window.localStorage.setItem("token", response.token);

        return response;
    } catch (e) {
        console.log(e);
    }
};
