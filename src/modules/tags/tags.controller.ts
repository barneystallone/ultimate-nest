import { CreateTagDto, EditTagDto } from "./dto";
import { TagsService } from "./tags.service";
import { GenericController } from "@common/decorators";
import { CursorPaginationDto } from "@common/dtos";
import type { Tag } from "@entities";
import { ControllerFactory } from "@lib/crud/crud.controller";

@GenericController("tags")
export class TagsController extends ControllerFactory<
Tag,
CursorPaginationDto,
CreateTagDto,
EditTagDto
>(CursorPaginationDto, CreateTagDto, EditTagDto) {
  constructor(protected service: TagsService) {
    super();
  }
}
