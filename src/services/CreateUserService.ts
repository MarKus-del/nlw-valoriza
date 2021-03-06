import { getCustomRepository } from 'typeorm';
import { UsersRepository } from "../repositories/UsersRepository";
import { hash } from 'bcryptjs';
import { User } from '../entities/User';

type IUserRequest = {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) throw new Error("Email incorrect");

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) throw new Error("User already exists");

    const passwordHash = await hash(password, 8);;

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    });
    await usersRepository.save(user);
    delete user.password;

    return user;
  }
};

export { CreateUserService };