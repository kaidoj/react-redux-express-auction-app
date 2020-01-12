const auctionsRoutes = {
    'GET /': 'AuctionsController.getAll',
    'GET /c/:category': 'AuctionsController.getAllByCategory'
};

module.exports = auctionsRoutes;