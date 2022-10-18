
export async function registerApi(user: any) {
    try {

        const response = await fetch("http://localhost:8080/register", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        if (response.ok) {
            const result = await response.json();
            return result
        }
    } catch (err) {
        console.error(err);
        throw new Error("error in getAllProducts api");

    }
}

export async function loginApi(user: any) {
    try {

        const response = await fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        if (response.ok) {
            const result = await response.json();
            return result
        }
    } catch (err) {
        console.error(err);
        throw new Error("error in getAllProducts api");

    }
}



export async function logoutApi() {
    try {
        const response = await fetch("http://localhost:8080/logout", {
            method: 'GET',
            headers: {}
        });
        if (response.ok) {
            const result = await response.json();
            return result
        }
    } catch (err) {
        console.error(err);
        throw new Error("error in getAllProducts api");

    }
}