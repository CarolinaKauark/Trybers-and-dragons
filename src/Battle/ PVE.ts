import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
// import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player1: Fighter,
    protected monsters: SimpleFighter[],
  ) {
    super(player1);
  }

  fight(): number {
    while (this.player.lifePoints !== -1) {
      this.monsters.forEach((monster) => {
        monster.attack(this.player);
      }); 
      if (this.monsters.every(({ lifePoints }) => lifePoints === -1)) break;
      this.monsters.forEach((monster) => {
        this.player.attack(monster);
      });
    }
    return super.fight();
  }
}