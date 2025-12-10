const BASE_URL = "https://6939a5f5c8d59937aa089d0d.mockapi.io/products";

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear el producto");
  }

  const result = await res.json();
  return result;
};

export const getProducts = async (category) => {
  let url = BASE_URL;
  if(category) {
    url = `${BASE_URL}?category=${category}`;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const result = await res.json();
    console.log("API Response:", result);
    
    // Handle different response formats
    // If response is an array, return it directly
    if (Array.isArray(result)) {
      return result;
    }
    
    // If response has a 'value' property, extract it
    if (result.value && Array.isArray(result.value)) {
      return result.value;
    }
    
    // If response has a 'data' property, return it
    if (result.data && Array.isArray(result.data)) {
      return result.data;
    }
    
    // If none of the above, return empty array
    console.warn("Unexpected API response format:", result);
    return [];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("No se pudo obtener el producto");
  }
  return await res.json();
};
