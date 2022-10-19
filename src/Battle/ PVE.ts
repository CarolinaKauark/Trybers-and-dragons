import Character from '../Character';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player1: Character, protected monster: Monster[]) {
    super(player1);
  }

  fight(): number {
    while (this.player2.lifePoints !== -1 || this.player.lifePoints !== -1) {
      this.player2.attack(this.player);
      if (this.player.lifePoints === -1) break;
      this.player.attack(this.player2);
    }
    return super.fight();
  }
}