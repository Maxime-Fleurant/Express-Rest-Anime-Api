import User from '../models/user';

export default {
  createUser: async userData => {
    const user = await User.query().insertAndFetch(userData);

    return user;
  },

  loginUser: async userData => {
    const [user] = await User.query().where('email', userData.email);

    const passCheck = await user.$checkPassword(userData.password);

    if (!passCheck) {
      throw new Error();
    }

    const token = await user.$createToken();

    return token;
  }
};
