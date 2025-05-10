const API = "https://taraskina-api.onrender.com/api/paints";

const limitItem = 10;

export const getPaints = (page = 1) => 
    fetch(`${API}?page=${page}&limit=${limitItem}`)
    .then(response => response.json());

export const getPaintsById = (id) =>  fetch(`${API}/${id}`)
    .then(response => response.json());