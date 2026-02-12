import type { IEntity } from "@caffeine/entity/types";
import type { t } from "@caffeine/models";

export interface ICanReadSlug<
	SchemaType extends t.TSchema,
	EntityType extends IEntity<SchemaType>,
> {
	findBySlug(slug: string): Promise<EntityType | null>;
}
