import axios from "axios";

const API_URL: string = 'http://localhost:3000/api';
const GET_URL: string = `${API_URL}/todos`;
const POST_URL: string = `${API_URL}/todos`;
const DELETE_URL: (id: number) => string  = (id: number) => `${API_URL}/todos/${id}`;
const UPDATE_URL: (id: number) => string  = (id: number) => `${API_URL}/todos/${id}`;

export const get_todos = async () => {
    const response = await axios.get(GET_URL);
    return response.data;
}

export const create_todo = async (todo_name: string) => {
    const response = await axios.post(POST_URL, {'todo_name': todo_name, 'completed': false});
    return response.data;
}

export const delate_todo = async (id: number) => {
    const response = await axios.delete(DELETE_URL(id));
    return response.data;
}

export const update_todo = async (id: number, completed: boolean) => {
    const response = await axios.patch(UPDATE_URL(id), {'completed': completed});
    return response.data;
}