
import { Tag } from 'models/tag-model';
import { TagsRepository } from '../repositories/tags-repository';

export class ListTagsService {
    private readonly tagsRepository: TagsRepository;

    constructor() {
        this.tagsRepository = new TagsRepository();
    }

    public async execute(): Promise<Tag[]> {
        const tags = await this.tagsRepository.listAll();
        return tags;
    }
}
