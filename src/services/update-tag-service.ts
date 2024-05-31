import { Tag } from '../models/tag-model';
import { TagsRepository } from '../repositories/tags-repository';

export class UpdateTagService {
    private readonly tagsRepository: TagsRepository;

    constructor() {
        this.tagsRepository = new TagsRepository();
    }

    public async execute(id: number, name: string, color: string): Promise<Tag | null> {
        const existingTag = await this.tagsRepository.getById(id);
        if (!existingTag) {
            return null;
        }

        const updatedTag = await this.tagsRepository.update(id, name, color);
        return updatedTag;
    }
}
