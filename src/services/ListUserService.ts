import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class ListUserService {

  async execute() {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();
    const usersFormatted = users.map((user) => {
      delete user.password;
      delete user.admin;

      return {...user}
    })
    return usersFormatted;
  }
}

export { ListUserService };