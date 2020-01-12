const config = require('../../config');
const axios = require('axios');
const Sync = require('../models/Sync');
const Auction = require('../models/Auction');
const categoriesService = require('./categories.service');

/**
 * This syncs external data from api to local database
 */
const syncService = () => {

    /**
     * Run sync
     */
    const sync = async () => {
        const runSync = await syncTime();
        if (!runSync) {
            console.log('Not Synced')
            return false;
        }

        const response = await axios.get(config.externalApiUrl);
        if (response) {
            console.log('Synced')
        }
        response.data.map(async (item) => {
            addAuction(item)
        });
        return response;
    }

    /**
     * Check for last sync time and update accordingly
     * 
     * @return boolean
     */
    const syncTime = async () => {

        const d = new Date();
        const currentSyncTime = new Date();

        currentSyncTime.setMinutes(d.getMinutes() - config.syncTime);
        let syncTime = await Sync.findOne({});

        if (!syncTime || new Date(syncTime.lastUpdate) < currentSyncTime) {
            if (!syncTime) {
                syncTime = new Sync({
                    lastUpdate: new Date()
                })
                await syncTime.save()
            } else {
                await Sync.updateOne({
                    _id: syncTime.id
                }, {
                    $set: {
                        lastUpdate: new Date()
                    }
                });
            }

            return true;
        } else {
            return false;
        }
    }

    /**
     * Add auction
     * @param {object} item 
     */
    const addAuction = async (item) => {

        let auction = await Auction.findOne({
            productId: item.productId,
            biddingEndDate: item.biddingEndDate
        });

        if (!auction) {
            auction = new Auction({
                productId: item.productId,
                productName: item.productName,
                productDescription: item.productDescription,
                productCategory: item.productCategory,
                categorySlug: categoriesService().createSlug(item.productCategory),
                biddingEndDate: item.biddingEndDate,
                dateCreated: new Date()
            });
            await auction.save();
        }

        return auction;
    }

    return {
        sync
    };
};

module.exports = syncService;