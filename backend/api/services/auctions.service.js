const categoriesService = require('./categories.service');
const syncService = require('./sync.service');
const Auction = require('../models/Auction');

const auctionsService = () => {

    const fetch = async () => {
        await syncService().sync();
        const response = {};
        response.auctions = await Auction.find({ biddingEndDate: { $gt: new Date() } });
        response.categories = await categoriesService().extract(response.auctions);

        return response;
    }

    const fetchByCategory = async (category) => {
        await syncService().sync();
        const response = {};
        response.auctions = await Auction.find({ biddingEndDate: { $gt: new Date() } });
        response.categories = await categoriesService().extract(response.auctions);
        response.auctions = response.auctions
            .filter((row) => row.categorySlug === category);
            
        return response;
    }

    const fetchById = async (id) => {
        const response = await Auction.findOne({ _id: id });
        return response;
    }

    return {
        fetch,
        fetchByCategory,
        fetchById
    };
};

module.exports = auctionsService;