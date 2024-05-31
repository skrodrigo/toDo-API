import { PrismaClient } from '@prisma/client';

export class DeleteTagService {
    private prisma: PrismaClient = new PrismaClient();

    public async execute(id: number): Promise<boolean> {
        try {
            await this.prisma.tag.delete({
                where: { id }
            });
            return true;
        } catch (error) {
            console.error('Error deleting tag:', error);
            return false;
        }
    }
}
