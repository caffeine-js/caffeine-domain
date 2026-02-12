import type { IEntity } from "@caffeine/entity/types";

export interface ICanReadId<EntityType extends IEntity> {
	findById(id: string): Promise<EntityType | null>;
}
