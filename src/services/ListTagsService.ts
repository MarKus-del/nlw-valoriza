import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";
import { classToPlain } from "class-transformer";

class ListTagsService {

  async execute() {

    const tagsRepositories = getCustomRepository(TagsRepository);
    const allTags = await tagsRepositories.find();

    return classToPlain(allTags);
  }
};

export { ListTagsService };
