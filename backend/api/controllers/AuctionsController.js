const auctionsService = require('../services/auctions.service');

const AuctionsController = () => {
  const getAll = async (req, res) => {
    try {
      const auctions = await auctionsService().fetch();

      return res.status(200).json({
          auctions: auctions.auctions,
          categories: auctions.categories
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const getAllByCategory = async(req, res) => {

    try {
        const auctions = await auctionsService().fetchByCategory(req.params.category);
  
        return res.status(200).json({
            auctions: auctions.auctions,
            categories: auctions.categories
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  }

  return {
    getAll,
    getAllByCategory
  };
};


module.exports = AuctionsController;
