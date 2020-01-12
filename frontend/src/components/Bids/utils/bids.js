export const addBid = (bids, bid) => {
    bids.unshift(bid)

    sessionStorage.setItem('bids', JSON.stringify(bids))

    return bids
}

export const getBids = () => {
    const bids = sessionStorage.getItem('bids')
    if (!bids) {
        return []
    }
    return JSON.parse(bids)
}