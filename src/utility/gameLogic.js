export const checkIsWinner = (arr, playerId, rowIndex, columnIndex) => {
    if (checkHorizontally(arr[rowIndex], playerId, columnIndex)) return true
    if (checkVertically(arr, playerId, columnIndex, rowIndex)) return true
    if (checkIncreasingDiagonally(arr, playerId, columnIndex, rowIndex))
        return true
    if (checkDecreasingDiagonally(arr, playerId, columnIndex, rowIndex))
        return true

    return false
}

const checkHorizontally = (row, playerId, startIndex) => {
    let counter = 0
    let currentIndex = startIndex

    while (row[currentIndex] === playerId) {
        counter++
        currentIndex++
    }

    if (counter === 5) return true
    currentIndex = startIndex - 1

    while (row[currentIndex] === playerId) {
        counter++
        currentIndex--
    }

    if (counter === 5) return true
    return false
}

const checkVertically = (arr, playerId, columnIndex, rowIndex) => {
    let counter = 0
    let currentIndex = rowIndex

    while (
        currentIndex < arr.length &&
        arr[currentIndex][columnIndex] === playerId
    ) {
        counter++
        currentIndex++
    }

    if (counter === 5) return true
    currentIndex = rowIndex - 1

    while (currentIndex >= 0 && arr[currentIndex][columnIndex] === playerId) {
        counter++
        currentIndex--
    }

    if (counter === 5) return true
    return false
}

const checkIncreasingDiagonally = (arr, playerId, columnIndex, rowIndex) => {
    let counter = 0
    let currentColumnIndex = columnIndex
    let currentRowIndex = rowIndex

    while (
        currentRowIndex >= 0 &&
        currentColumnIndex < arr.length &&
        arr[currentRowIndex][currentColumnIndex] === playerId
    ) {
        counter++
        currentColumnIndex++
        currentRowIndex--
    }

    if (counter === 5) return true
    currentColumnIndex = columnIndex - 1
    currentRowIndex = rowIndex + 1

    while (
        currentColumnIndex >= 0 &&
        currentRowIndex < arr.length &&
        arr[currentRowIndex][currentColumnIndex] === playerId
    ) {
        counter++
        currentColumnIndex--
        currentRowIndex++
    }

    console.log(counter)
    if (counter === 5) return true
    return false
}

const checkDecreasingDiagonally = (arr, playerId, columnIndex, rowIndex) => {
    let counter = 0
    let currentColumnIndex = columnIndex
    let currentRowIndex = rowIndex

    while (
        currentColumnIndex >= 0 &&
        currentRowIndex >= 0 &&
        arr[currentRowIndex][currentColumnIndex] === playerId
    ) {
        counter++
        currentColumnIndex--
        currentRowIndex--
    }

    if (counter === 5) return true
    currentColumnIndex = columnIndex + 1
    currentRowIndex = rowIndex + 1

    while (
        currentRowIndex < arr.length &&
        currentColumnIndex < arr.length &&
        arr[currentRowIndex][currentColumnIndex] === playerId
    ) {
        counter++
        currentColumnIndex++
        currentRowIndex++
    }

    console.log(counter)
    if (counter === 5) return true
    return false
}
