import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _ArchetypeInstances = 0;
  private _energyType: EnergyType = 'stamina';
  constructor(name: string) {
    super(name);
    Ranger._ArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._ArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}