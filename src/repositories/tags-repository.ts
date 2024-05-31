import { PrismaClient } from '@prisma/client';
import { Tag } from '../models/tag-model';

export class TagsRepository {
    private prisma: PrismaClient = new PrismaClient();

    public async listAll(): Promise<Tag[]> {
        const tags = await this.prisma.tag.findMany();
        return tags;
    }

    public async getById(id: number): Promise<Tag | null> {
        const tag = await this.prisma.tag.findUnique({
            where: { id }
        });
        return tag;
    }

    public async create(name: string, color: string): Promise<Tag> {
        const tag = await this.prisma.tag.create({
            data: { name, color }
        });
        return tag;
    }

    public async update(id: number, newName: string, newColor: string): Promise<Tag | null> {
        const updatedTag = await this.prisma.tag.update({
            where: { id },
            data: { name: newName, color: newColor }
        });
        return updatedTag;
    }

    public async delete(id: number): Promise<void> {
        await this.prisma.tag.delete({
            where: { id }
        });
    }
}
