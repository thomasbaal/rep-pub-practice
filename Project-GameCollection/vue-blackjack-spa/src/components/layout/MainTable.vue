<template>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <!-- 3 divs for logo-->
    <div class="grid-item logo"></div>

    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>

    <div class="grid-item">9</div>
    <div class="grid-item">10</div>
    <div class="grid-item">11</div>
    <div class="grid-item cardHolder">
      <div v-for="(card, index) in dealerHand" :key="index">
        <img :src="card.url" alt="Card image" class="cardDeck card" />
      </div>
    </div>

    <!-- the buttons-->
    <div class="grid-item">
      <img src="@/assets/base-back.png" class="cardDeck" />
    </div>
    <div class="grid-item cardHolder">
      <div v-for="(card, index) in playerHand" :key="index">
        <img :src="card.url" alt="Card image" class="cardDeck card" />
      </div>
    </div>
    <div class="grid-item">15</div>
    <div class="grid-item">16</div>
    <div class="grid-item">
      <base-button :class="{ active: AiPlayerActive }">Dealer</base-button>
    </div>
    <div class="grid-item buttonSpace">
      <base-button @click="gameStart" v-if="!gameOver">Play</base-button>
    </div>
    <div class="grid-item">
      <base-button :class="{ active: playerActive }">Player</base-button>
    </div>
    <div class="grid-item">20</div>
  </div>
</template>


<script>
import BaseButton from "../Ui/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      logoVisible: true,
      gameOver: false,
      gameStarted: false,
      playerActive: true,
      AiPlayerActive: false,
      deck: [],
      dealerHand: [],
      playerHand: [],
    };
  },
  mounted() {
    console.log("game init");
  },
  methods: {
    gameStart() {
      console.log("game started");
      this.createDeck();
      this.shuffleDeck();
      this.gameOver = false;
      this.gameStarted = true;
      this.playerHand.push(this.playerDrawCard());
      this.dealerHand.push(this.dealerDrawCard());
    },
    playerDrawCard() {
      return this.deck.pop();
    },
    dealerDrawCard() {
      return this.deck.pop();
    },
    createDeck() {
      const suits = ["Clubs", "Spades", "Diamonds", "Hearts"];
      const specialCards = ["A", "J", "Q", "K"];
      const deck = [];

      for (let suit of suits) {
        for (let i = 2; i <= 10; i++) {
          deck.push({
            value: i,
            suit: suit,
            url: require(`@/assets/${suit}_${i}.png`),
          });
        }
        for (let card of specialCards) {
          deck.push({
            value: card === "A" ? 1 : 10,
            suit: suit,
            url: require(`@/assets/${suit}_${card}.png`),
          });
        }
      }

      this.deck = deck; // store the deck in our data
      // console.log(this.deck);
    },
    shuffleDeck() {
      console.log(this.deck);
      for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
      }
      console.log(this.deck);
    },
  },
};
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Merriweather&family=Montserrat&family=Sacramento&display=swap");
* {
  box-sizing: border-box;
}
.grid-container {
  background-image: url("@/assets/background.png");
  display: grid;
  grid-template-columns:
    minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)
    minmax(100px, 1fr) minmax(100px, 1fr);
  grid-template-rows: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(
      100px,
      1fr
    );
  border: 5px solid #f3d67a;
  font-family: "Alfa Slab One", cursive;
  font-style: oblique;
  /* font-family: "Merriweather", serif; */
  /* font-family: "Montserrat", sans-serif; */
  /* font-family: "Sacramento", cursive; */
}

.grid-item {
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 5px;
  /* font-size: 50px; */
  text-align: center;
}

.logo {
  grid-column: 2 / span 3; /* Start at the 2nd column and span 2 columns */
  background-image: url("@/assets/bj-logo.png");
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
}

.buttonSpace,
.playerStatus {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.cardDeck {
  max-width: 80px;
  /* height: auto; */
}
.cardHolder {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  /* position: relative; */
  justify-content: flex-start;
}

.dealerCards {
}
.playerCards {
}
.card {
  margin-left: -40px;
}
</style>