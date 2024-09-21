
const BASE_URL = import.meta.env.VITE_BASE_URL

export const authEndPoints = {
    LOGIN : BASE_URL + "/api/auth/login",
    AUTHH : BASE_URL + "/api/auth/authh",
    SIGNUP : BASE_URL + "/api/auth/signup"
}

export const todoEndPoints = {
    GETTODO : BASE_URL + "/api/todo/getTodo",
    CREATETODO : BASE_URL + "/api/todo/addTodo",
    EDITTODO : BASE_URL + "/api/todo/updateTodo",
    DELETETODO :  BASE_URL + "/api/todo/deleteTodo",
    UPDATESTATUS : BASE_URL + "/api/todo/updateTodoStatus",
}