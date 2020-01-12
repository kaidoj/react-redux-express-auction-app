const User = require('../models/User');
const authService = require('../services/auth.service');
const userValidate = require('../utils/validators/userValidate');
const moment = require('moment');
const generateIdentifier = require('../utils/helpers/generateIdentifier');

const UserController = () => {
    const register = async (req, res) => {
        const {
            body
        } = req;

        if (await userValidate(body)) {
            try {
                const identifier = generateIdentifier(body.firstName, body.lastName)
                const userData = {
                  identifier: identifier,
                  firstName: body.firstName,
                  lastName: body.lastName,
                  dateCreated: moment().format()
                };
                const user = await User.create(userData);
                const token = authService().issue({
                    id: user.identifier
                });

                return res.status(200).json({
                    token,
                    user: userData
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
        register
    };
};

module.exports = UserController;