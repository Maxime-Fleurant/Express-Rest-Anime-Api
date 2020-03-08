import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Model } from 'objection';

class User extends Model {
  static get tableName() {
    return 'users';
  }

  async $beforeInsert() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async $checkPassword(password) {
    const passCheck = await bcrypt.compare(password, this.password);
    return passCheck;
  }

  async $createToken() {
    const token = jwt.sign({ id: this.id }, process.env.JWT_SECRET, { expiresIn: '8h' });

    return token;
  }
}

export default User;
