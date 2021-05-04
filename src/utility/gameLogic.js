export const checkIsWinner = (arr, playerId, rowIndex, columnIndex) => {
    const horizontal = checkHorizontally(
        arr[rowIndex],
        playerId,
        columnIndex,
        rowIndex
    )
    const vertically = checkVertically(arr, playerId, columnIndex, rowIndex)
    const increasingDiagonal = checkIncreasingDiagonally(
        arr,
        playerId,
        columnIndex,
        rowIndex
    )
    const decreasingDiagonal = checkDecreasingDiagonally(
        arr,
        playerId,
        columnIndex,
        rowIndex
    )
    if (horizontal) return horizontal
    if (vertically) return vertically
    if (increasingDiagonal) return increasingDiagonal
    if (decreasingDiagonal) return decreasingDiagonal

    return null
}

const checkHorizontally = (row, playerId, startIndex, rowIndex) => {
    let counter = 1
    let currentIndex = startIndex + 1
    const winnerCoordinates = [{ x: startIndex, y: rowIndex }]

    while (row[currentIndex] === playerId) {
        winnerCoordinates.push({ x: currentIndex, y: rowIndex })
        counter++
        currentIndex++
    }

    if (counter === 5) return winnerCoordinates
    currentIndex = startIndex - 1

    while (row[currentIndex] === playerId) {
        winnerCoordinates.push({ x: currentIndex, y: rowIndex })
        counter++
        currentIndex--
    }

    if (counter === 5) return winnerCoordinates
    return undefined
}

const checkVertically = (arr, playerId, columnIndex, rowIndex) => {
    let counter = 1
    let currentIndex = rowIndex + 1
    const winnerCoordinates = [{ x: columnIndex, y: rowIndex }]

    console.log(winnerCoordinates)

    while (
        currentIndex < arr.length &&
        arr[currentIndex][columnIndex] === playerId
    ) {
        winnerCoordinates.push({ x: columnIndex, y: currentIndex })
        counter++
        currentIndex++
    }

    if (counter === 5) return winnerCoordinates
    currentIndex = rowIndex - 1

    while (currentIndex >= 0 && arr[currentIndex][columnIndex] === playerId) {
        winnerCoordinates.push({ x: columnIndex, y: currentIndex })
        counter++
        currentIndex--
    }

    if (counter === 5) return winnerCoordinates
    return undefined
}

const checkIncreasingDiagonally = (arr, playerId, columnIndex, rowIndex) => {
    let counter = 1
    let currentColumnIndex = columnIndex + 1
    let currentRowIndex = rowIndex - 1
    const winnerCoordinates = [{ x: columnIndex, y: rowIndex }]

    while (
        currentRowIndex >= 0 &&
        currentColumnIndex < arr.length &&
        arr[currentRowIndex][currentColumnIndex] === playerId
    ) {
        winnerCoordinates.push({ x: currentColumnIndex, y: currentRowIndex })
        counter++
        currentColumnIndex++
        currentRowIndex--
    }

    if (counter === 5) return winnerCoordinates
    currentColumnIndex = columnIndex - 1
    currentRowIndex = rowIndex + 1

    while (
        currentColumnIndex >= 0 &&
        currentRowIndex < arr.length &&
        arr[currentRowIndex][currentColumnIndex] === playerId
    ) {
        winnerCoordinates.push({ x: currentColumnIndex, y: currentRowIndex })
        counter++
        currentColumnIndex--
        currentRowIndex++
    }

    if (counter === 5) return winnerCoordinates
    return undefined
}

const checkDecreasingDiagonally = (arr, playerId, columnIndex, rowIndex) => {
    let counter = 1
    let currentColumnIndex = columnIndex - 1
    let currentRowIndex = rowIndex - 1
    const winnerCoordinates = [{ x: columnIndex, y: rowIndex }]

    while (
        currentColumnIndex >= 0 &&
        currentRowIndex >= 0 &&
        arr[currentRowIndex][currentColumnIndex] === playerId
    ) {
        winnerCoordinates.push({ x: currentColumnIndex, y: currentRowIndex })
        counter++
        currentColumnIndex--
        currentRowIndex--
    }

    if (counter === 5) return winnerCoordinates
    currentColumnIndex = columnIndex + 1
    currentRowIndex = rowIndex + 1

    while (
        currentRowIndex < arr.length &&
        currentColumnIndex < arr.length &&
        arr[currentRowIndex][currentColumnIndex] === playerId
    ) {
        winnerCoordinates.push({ x: currentColumnIndex, y: currentRowIndex })
        counter++
        currentColumnIndex++
        currentRowIndex++
    }

    if (counter === 5) return winnerCoordinates
    return undefined
}
