const SUPABASE_URL = 'https://rkwuoifoqjtdyuamlqbt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrd3VvaWZvcWp0ZHl1YW1scWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE2MTAsImV4cCI6MTk1OTkxNzYxMH0.0bzW8RqDL090ne0FvaYqJLDBsUCtpfGm0oN6I-xwziw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createTodo(todo) {
    // create a single incomplete todo with the correct 'todo' property for this user in supabase

    return checkError(response);
}

export async function deleteAllTodos() {
    // delete all todos for this user in supabase
    const response = await client.from('todos').delete('*').match({ user_id: client.auth.user().id });
    return checkError(response);
}

export async function getTodos() {
    // get all todos for this user from supabase
    const response = await client.from('todos').select('*');
    return checkError(response);
}

export async function completeTodo(id) {
    // find the and update (set complete to true), the todo that matches the correct id
    const response = await client.from('todos').update({ complete: true }).eq('id', id);
    return checkError(response);
}

export async function getUser() {
    return client.auth.session();
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./todos');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
