export const reverseList = (array) => {
    const newArray = array.sort((a, b) => a.year > b.year)
    console.log(newArray);
    return newArray
}