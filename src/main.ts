// JST - src/main.ts
// Written by Brendan Lane - https://brndnln.dev/

// Function declarations
function getArrayPos (search: any, array: Array<any>): number {
    return array.map(el => {
        return el
    }).indexOf(search)
}

// Bundles
const ArrayTools = { getArrayPos }

// Export
export {
    getArrayPos,
    ArrayTools
}