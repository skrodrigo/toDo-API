import { Request, Response } from 'express';


import { UpdateTagService } from '../services/update-tag-service';
import { DeleteTagService } from '../services/delete-tag-service';
import { ListTagsService } from '../services/list-tag-service';
import { CreateTagService } from '../services/create-tag-service';

export class TagsController {
    /**
     * GET /tags
     */
    public async list(request: Request, response: Response): Promise<Response> {
        const listTagsService = new ListTagsService();
        const tags = await listTagsService.execute();
        return response.json(tags);
    }

    /**
     * POST /tags
     */
    public async create(request: Request, response: Response): Promise<Response> {
        const { name, color } = request.body;
        const createTagService = new CreateTagService();
        const tag = await createTagService.execute(name, color);

        if (!tag) {
            return response.status(422).json({ "error": "Invalid data for creating tag" });
        }

        return response.status(201).json(tag);
    }

    /**
     * PUT /tags/:id
     */
    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, color } = request.body;
        const updateTagService = new UpdateTagService();
        const updatedTag = await updateTagService.execute(Number(id), name, color);

        if (!updatedTag) {
            return response.status(404).json({ "error": "Tag not found" });
        }

        return response.json(updatedTag);
    }

    /**
     * DELETE /tags/:id
     */
    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const deleteTagService = new DeleteTagService();
        const deleted = await deleteTagService.execute(Number(id));

        if (!deleted) {
            return response.status(404).json({ "error": "Tag not found" });
        }

        return response.status(204).send();
    }
}
