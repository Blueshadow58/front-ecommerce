


export async function getAllCarts() {
    try {
        const response = await fetch("http://localhost:8080/api/carrito/", {
            method: 'GET',
            headers: {}
        });
        if (response.ok) {
            const result = await response.json();
            return result
        }
    } catch (err) {
        console.error(err);
        throw new Error("error in getAllCarts api");

    }
}

export async function getById(id: string) {
    try {
        const response = await fetch(`http://localhost:8080/api/carrito/${id}/productos`, {
            method: 'GET',
            headers: {}
        });
        if (response.ok) {
            const result = await response.json();
            return result
        }
    } catch (err) {
        console.error(err);
        throw new Error("error in get by id api");

    }
}

export async function create() {
    try {
        const response = await fetch("http://localhost:8080/api/carrito", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            const result = await response.json();
            return result
        }
    } catch (err) {
        console.error(err);
    }
}

export async function deleteById(id: any) {
    try {
        const response = await fetch(`http://localhost:8080/api/carrito/${id}`, {
            method: 'DELETE',
            headers: {}
        });

        if (response.ok) {
            const result = await response.json();
            return result
        }
    } catch (err) {
        console.error(err);
    }
}


export async function addProductToCart(idCart: any, idProduct: any) {
    try {
        const response = await fetch(`http://localhost:8080/api/carrito/${idCart}/productos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(idProduct)
        });

        if (response.ok) {
            const result = await response.json();
            return result
        }
    } catch (err) {
        console.error(err);
    }
}

export async function deleteProductCart(idCart: any, idProduct: any) {
    try {
        const response = await fetch(`http://localhost:8080/api/carrito/${idCart}/productos/${idProduct}`, {
            method: 'DELETE',
            headers: {}
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result)
        }
    } catch (err) {
        console.error(err);
    }
}