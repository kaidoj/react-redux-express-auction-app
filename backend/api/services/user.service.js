const User = require('../models/User');

const userService = () => {

    const fetchById = async (id) => {
        const response = await User.findOne({ _id: id });
        return response;
    }

    const fetchByIdentifier = async (identifier) => {
        const response = await User.findOne({ identifier: identifier });
        return response;
    }

    return {
        fetchById,
        fetchByIdentifier
    };
};

module.exports = userService;