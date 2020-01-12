const placeABidValidate = require('../utils/validators/placeABidValidate');
const Bid = require('../models/Bid');
const moment = require('moment');
const userService = require('../services/user.service');
const authService = require('../services/auth.service');

const BidsController = () => {

    const placeABid = async (req, res) => {
        const {
            body
        } = req;

        if (await placeABidValidate(body)) {
            try {
                
                const tokenData = req.token;
                if (!tokenData.id) {
                  return res.status(401).json({
                    msg: 'Unauthorized'
                  });
                }
                
                const user = await userService().fetchByIdentifier(tokenData.id);
                if (!user) {
                    return res.status(401).json({
                        msg: 'Unauthorized'
                    });
                }

                const bid = new Bid({
                    user: user._id,
                    auction: body.auction,
                    amount: body.bidAmount,
                    dateCreated: moment().format()
                });
                await bid.save();

                return res.status(200).json({
                    success: true,
                    bid: {
                        auction: bid.auction,
                        amount: bid.amount,
                        dateCreated: bid.dateCreated
                    }
                });
            } catch (err) {
                console.log(err);
                return res.status(500).json({
                    msg: 'Internal server error'
                });
            }
        }

        return res.status(400).json({
            msg: 'Bad Request: Wrong form data'
        });
    };

    return {
        placeABid
    };
};

module.exports = BidsController;