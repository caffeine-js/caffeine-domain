import type { IEntity } from "@caffeine/entity/types";

export interface ICanReadSlug<EntityType extends IEntity> {
	findBySlug(slug: string): Promise<EntityType | null>;
}
