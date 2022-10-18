import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.raceInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.raceInstances;
  }
}