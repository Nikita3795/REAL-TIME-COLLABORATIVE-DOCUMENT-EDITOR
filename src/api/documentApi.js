import axios from "axios";

const API_URL = "http://localhost:8080/documents";

// ✅ Get all documents
export const getDocuments = async () => {
    return await axios.get(API_URL);
};

// ✅ Create a new document
export const createDocument = async (document) => {
    return await axios.post(API_URL, document);
};

// ✅ Update a document
export const updateDocument = async (id, document) => {
    return await axios.put(`${API_URL}/${id}`, document);
};

// ✅ Delete a document
export const deleteDocument = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
