export const todoReducer = (state, action) => {
    switch (action.type) {
        case "YENİ_EKLE":
            return { ...state, todos: state.todos.concat(action.payload) };
        case "KALDIR":
            const updated = state.todos.filter((i) => i.id !== action.payload)
            return {...state, todos: updated};
        case "TEMİZLE":
            return {...state, todos: []};
        default:
            return state;
    }
}

export const initialState = {
    todos: [],
    isDarkMode: true,
}
