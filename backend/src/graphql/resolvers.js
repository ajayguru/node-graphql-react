
const userService = require('../services/appuser');
const authService = require('../services/auth');

const resolvers = {
  userRegister: async function({ userInput }, req) {
   // can check existing user
    const userRegistration = await userService.registration(userInput);
    if  (userRegistration.error) {
      throw userRegistration.error;
    }
    return userRegistration;
  },
  signIn: async function({ email, password }) {
    const result = await authService.signIn(email, password);
    if  (result.error) {
      throw result.error;
    }
    return result;
  }
}

module.exports = resolvers;
