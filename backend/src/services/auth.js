const jwt = require('jsonwebtoken');
const mockData = require('../utils/mock');
const config = require('../../config');

class AuthStore {

    static async signIn(email, password) {
        const user = mockData.users.find(user => user.email === email);
        if (!user || user.password !== password) {
            const error = new Error('Email or Password is incorrect.');
            error.code = 401;
            return { error };
        }
        const token = jwt.sign(
            {
              userId: user.id,
              email: user.email
            },
            config.jwtSecret,
            { expiresIn: config.jwtExpire }
          );
        return { bearer: token, userId: user.id };
    }
}

module.exports = AuthStore;
