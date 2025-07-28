/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export const hashPassword = async (password: string): Promise<string> =>
  await bcrypt.hash(password, SALT_ROUNDS)

export const comparePassword = async (password: string, hash: string): Promise<boolean> =>
  await bcrypt.compare(password, hash)
