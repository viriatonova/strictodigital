const apiUrl = "http://127.0.0.1:9000/api/v1";

export const portalRegister = async (data) => {
    try {
        const url = `${apiUrl}/singup`;

        let formData = {
            first_name: data.firstname,
            last_name: data.lastname,
            username: data.username,
            email: data.email,
            password: data.password,
        };

        const api = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const response = await api.json();

        window.localStorage.setItem("username", response.username);
        window.localStorage.setItem("token", response.token);

        return response;
    } catch (e) {
        console.log(e);
    }
};
