import type { ICanReadSlug } from "@/types/repositories";
import type { IEntity } from "@caffeine/entity/types";
import type { t } from "@caffeine/models";

export class SlugUniquenessCheckerService<
	SchemaType extends t.TSchema,
	EntityType extends IEntity<SchemaType>,
> {
	public constructor(
		private readonly reader: ICanReadSlug<SchemaType, EntityType>,
	) {}

	public async run(slug: string): Promise<boolean> {
		return !(await this.reader.findBySlug(slug));
	}
}
