import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player1: Fighter, protected player2: Fighter) {
    super(player1);
  }

  fight(): number {
    while (this.player2.lifePoints !== -1) {
      this.player2.attack(this.player);
      if (this.player.lifePoints === -1) break;
      this.player.attack(this.player2);
    }
    return super.fight();
  }
}