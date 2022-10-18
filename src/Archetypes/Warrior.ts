import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _ArchetypeInstances = 0;
  private _energyType: EnergyType = 'stamina';
  constructor(name: string) {
    super(name);
    Warrior._ArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._ArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}