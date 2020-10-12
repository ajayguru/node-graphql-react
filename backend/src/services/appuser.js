const validator = require('validator');
const mockData = require('../utils/mock');

class AppUserStore {

    static async registration(userInput) {
        const errors = [];
        if (!validator.isEmail(userInput.email)) {
          errors.push({ message: 'E-Mail is invalid.' });
        }
        if (
          validator.isEmpty(userInput.password) ||
          !validator.isLength(userInput.password, { min: 6 })
        ) {
          errors.push({ message: 'Password too short!' });
        }
        if (errors.length > 0) {
          const error = new Error('Invalid input.');
          error.data = errors;
          error.code = 422;
          return { error };
        }
        const user = mockData.users[0];
        user.email = userInput.email;
        user.password = '';
        user.name = userInput.name;
        return user;
    }
}

module.exports = AppUserStore;
