import DBLocal from 'db-local'
import crypto from 'crypto'
import bcrypt from 'bcrypt'

const { Schema } = new DBLocal({ path: './db' })

const User = Schema('User', {
  _id: { type: String, require: true },
  username: { type: String, require: true },
  password: { type: String, require: true }
})

export class UserRepository {
  static create ({ username, password }) {
    // 1 validaciones
    if (username !== 'string') throw new Error('username must be a string')
    if (username.length < 3) throw new Error('username must be at least 3 characcters')

    if (password !== 'string') throw new Error('password must be a string')
    if (password.length < 6) throw new Error('password must be at least 6 characcters')

    const user = User.findOne({ username })
    if (user) throw new Error('this username already exists')

    const id = crypto.randomUUID()
    const hashedPassword = bcrypt.hashSync(password, 10)

    User.create({
      _id: id,
      username,
      password: hashedPassword
    }).save()

    return id
  }

  static login ({ username, password }) {}
}
