// set random number to monster attack between 5 - 12
// set random number to player attack between 8 - 15
// set random number to monster special-attack between 10 - 25
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + 5;
}

const app = Vue.createApp({
  data() {
    return {
      winner: null,
      currentRound: 0,
      playerMinHealValue: 8,
      playerMaxHealValue: 20,
      playerMinDamage: 5,
      playerMaxDamage: 12,
      monsterMinDamage: 12,
      monsterMaxDamage: 18,
      specialAttackMonsterMinDamage: 10,
      specialAttackMonsterMaxDamage: 25,
      monsterHealth: 100,
      playerHealth: 100,
      logMessages: [],
    };
  },
  methods: {
    startGame() {
      // reset all values.
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      console.log("----- Started Round -----");
      this.currentRound++;
      const attackDamage = getRandomNumber(
        this.playerMinDamage,
        this.playerMaxDamage
      );
      this.monsterHealth -= attackDamage;
      this.addLogMessage("player", "attack", attackDamage);
      console.log("attacking monster with " + attackDamage);
      this.attackPlayer();
    },
    attackPlayer() {
      this.currentRound++;
      const attackDamage = getRandomNumber(
        this.monsterMinDamage,
        this.monsterMaxDamage
      );
      this.addLogMessage("monster", "attack", attackDamage);
      console.log("attacking player with " + attackDamage);
      this.playerHealth -= attackDamage;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackDamage = getRandomNumber(
        this.specialAttackMonsterMinDamage,
        this.specialAttackMonsterMaxDamage
      );
      this.monsterHealth -= attackDamage;
      this.addLogMessage("player", "attack", attackDamage);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomNumber(
        this.playerMinHealValue,
        this.playerMaxHealValue
      );
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      // using unshift so the last log message wil show up first
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      } else if (this.monsterHealth > 0)
        return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth <= 0) {
        return { width: "0%" };
      } else if (this.playerHealth > 0)
        return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  // winning and loosing conditions
  watch: {
    playerHealth(value) {
      console.log();
      console.log("watching: playerHealth: " + value);
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
        console.log("triggered draw on playerHealth()");
      } else if (value <= 0) {
        this.winner = "monster";
        console.log("triggered winner on playerHealth()");
      }
    },
    monsterHealth(value) {
      console.log("watching: monsterHealth: " + value);
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
        console.log("triggered draw on monsterHealth()");
      } else if (value <= 0) {
        this.winner = "player";
        console.log("triggered winner on monsterHealth()");
      }
    },
  },
});
app.mount("#game");
