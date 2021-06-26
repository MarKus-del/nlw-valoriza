import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";

class ListTagsService {

  async execute() {

    const tagsRepositories = getCustomRepository(TagsRepository);
    const allTags = await tagsRepositories.find();

    return allTags;
  }
};

export { ListTagsService };
