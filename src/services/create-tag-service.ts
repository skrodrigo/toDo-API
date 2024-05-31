import { Tag } from '../models/tag-model';
import { TagsRepository } from '../repositories/tags-repository';

export class CreateTagService {
    private readonly tagsRepository: TagsRepository;

    constructor() {
        this.tagsRepository = new TagsRepository();
    }

    public async execute(name: string, color: string): Promise<Tag> {
        if (!name || !color) {
            throw new Error('Name and color are required for creating a tag');
        }

        const tag = await this.tagsRepository.create(name, color);
        return tag;
    }
}
