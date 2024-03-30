export const getYear = () => {
    return {
        year: localStorage.getItem("year"),
    }
}

export const deleteYear = () => {
    localStorage.clear();
}