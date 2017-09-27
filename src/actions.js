export function searchStocks(newStocks){
    return{

        type: 'ADD_STOCK',
        payload: newStocks,
    }
}
export function addStocks(addedStock){
    return{
        type: 'TRACK_STOCK',
        payload: addedStock,
    }
}
