import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";


class CreateTagService {

  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepository);

    if (!name) throw new Error("Incorrect name!");

    const tagAlreadyExists = await tagsRepositories.findOne({ name });
    if(tagAlreadyExists) throw new Error(`Tag already exists with name: ${name}`);

    const newTag = tagsRepositories.create({ name });
    await tagsRepositories.save(newTag);
    
    return newTag;
  }
}

export { CreateTagService };