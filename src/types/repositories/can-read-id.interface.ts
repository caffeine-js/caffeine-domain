import type { IEntity } from "@caffeine/entity/types";
import type { t } from "@caffeine/models";

export interface ICanReadId<
	SchemaType extends t.TSchema,
	EntityType extends IEntity<SchemaType>,
> {
	findById(id: string): Promise<EntityType | null>;
}
