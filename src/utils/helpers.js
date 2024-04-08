export const reverseList = (array) => {
    const newArray = array.sort((a, b) => a > b)
    return newArray
}