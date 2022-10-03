


export async function getAllProducts() {
  try {
    const response = await fetch("http://localhost:8080/api/productos/", {
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

export async function getById(id: string) {
  try {
    const response = await fetch(`http://localhost:8080/api/productos/${id}`, {
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

export async function save(product: any) {

  try {
    const response = await fetch("http://localhost:8080/api/productos/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
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
    const response = await fetch(`http://localhost:8080/api/productos/${id}`, {
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

export async function update(product: any) {
  try {
    const response = await fetch(`http://localhost:8080/api/productos/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });

    if (response.ok) {
      const result = await response.json();
      return result
    }
  } catch (err) {
    console.error(err);
  }
}