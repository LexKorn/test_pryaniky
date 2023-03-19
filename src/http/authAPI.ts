export const login = async (username: string, password: string) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}ru/data/v3/testmethods/docs/login`, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так');
    }

    return data;
};