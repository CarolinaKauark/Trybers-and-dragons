import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.raceInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.raceInstances;
  }
}