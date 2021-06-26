import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {
  async execute (user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepositories.find({
      where: {
        user_receiver: user_id
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    const complimentsFormatted = compliments.map((compliment => {
      delete compliment.tag_id;
      delete compliment.user_receiver;
      delete compliment.user_sender;

      delete compliment.userSender.password
      delete compliment.userSender.admin
      
      delete compliment.userReceiver.password
      delete compliment.userReceiver.admin

      return {...compliment};
    }));

    return complimentsFormatted;
  }
};

export { ListUserReceiveComplimentsService };
