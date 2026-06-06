import { BaseRepository } from '../baseRepository';
import { Inventory, IInventory } from '../../models/supplyChain/Inventory';

export class InventoryRepository extends BaseRepository<IInventory> {
  constructor() {
    super(Inventory);
  }
}

export const inventoryRepository = new InventoryRepository();
export default inventoryRepository;
