import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _ArchetypeInstances = 0;
  private _energyType: EnergyType = 'mana';
  constructor(name: string) {
    super(name);
    Mage._ArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._ArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}