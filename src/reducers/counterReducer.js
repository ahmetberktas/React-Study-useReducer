export const reducer = (state, action) => {
    if (action.type === "ARTTIR") {
        return { count: state.count + 1 };
    }
    if (action.type === "AZALT") {
        return { count: state.count - 1 };
    }
};