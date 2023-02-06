<template>
  <form id="selectionContainer">
    <div id="cardsContainer">
      <div
        @click="toggleOptionPlans('arcade')"
        :class="store.selectPlan.planSelected === 'arcade' && 'active'"
      >
        <img id="cardIcon" src="../../assets/icon-arcade.svg" alt="arcade" />
        <span id="cardInfo">
          <p>Arcade</p>
          <span>{{ store.selectPlan.yearly ? `$90/yr` : "$9/mo" }}</span>
          <span id="twoMonths" v-if="store.selectPlan.yearly"
            >2 months free</span
          >
        </span>
      </div>
      <div
        @click="toggleOptionPlans('advanced')"
        :class="store.selectPlan.planSelected === 'advanced' && 'active'"
      >
        <img
          id="cardIcon"
          src="../../assets/icon-advanced.svg"
          alt="advanced"
        />
        <span id="cardInfo">
          <p>Advanced</p>
          <span>{{ store.selectPlan.yearly ? `$120/yr` : "$12/mo" }}</span>
          <span id="twoMonths" v-if="store.selectPlan.yearly"
            >2 months free</span
          >
        </span>
      </div>
      <div
        @click="toggleOptionPlans('pro')"
        :class="store.selectPlan.planSelected === 'pro' && 'active'"
      >
        <img id="cardIcon" src="../../assets/icon-pro.svg" alt="pro" />

        <span id="cardInfo">
          <p>Pro</p>
          <span>{{ store.selectPlan.yearly ? `$150/yr` : "$15/mo" }}</span>
          <span id="twoMonths" v-if="store.selectPlan.yearly"
            >2 months free</span
          >
        </span>
      </div>
    </div>
    <div id="checkedType">
      <p :class="store.selectPlan.yearly === false && 'activeYearly'">
        Monthly
      </p>
      <input type="checkbox" id="checkbox1" v-model="store.selectPlan.yearly" />
      <label for="checkbox1"></label>
      <p :class="store.selectPlan.yearly === true && 'activeYearly'">Yearly</p>
    </div>
    <!-- <p>{{ checked }}</p> -->
  </form>
</template>

<script setup>
import { store } from "../../store/store";
import { ref } from "vue";

const arcadeOption = ref(true);
const advancedOption = ref(false);
const proOption = ref(false);

function toggleOptionPlans(op) {
  store.selectPlan.planSelected = op;
}
</script>

<style scoped>
#selectionContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
#cardsContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
}
#cardsContainer div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  width: 140px;
  height: 190px;
  background-color: var(--White);
  border-radius: 10px;
  border: 1px solid var(--LightGray);
  cursor: pointer;
  transition: background-color 400ms;
  transition: border-color 400ms;
}
#cardsContainer div:hover {
  background-color: var(--Magnolia);
  border-color: var(--PurplishBlue);
}
.active {
  background-color: var(--Magnolia) !important;
  border-color: var(--PurplishBlue) !important;
}
#cardIcon {
  align-self: baseline;
  flex-basis: 0;
}
#cardInfo {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
#cardInfo p {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--MarineBlue);
}
#cardInfo span {
  font-size: 14px;
  letter-spacing: 1px;
  color: var(--CoolGray);
}
#twoMonths {
  display: block;
  color: var(--MarineBlue) !important;
  font-weight: bold !important;
  letter-spacing: 0px !important;
}

#checkedType {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  padding: 15px;
  border-radius: 10px;
  background-color: var(--Alabaster);
}
#checkedType p {
  text-align: center;
  top: 5px;
  position: relative;
  font-weight: 600;
  color: var(--CoolGray);
}
input {
  /* visibility: collapse; */
  display: none;
}

label {
  padding: 16px;
  position: relative;
  width: 60px;
  height: 25px;
  display: inline-block;
  background: var(--MarineBlue);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
}

label:after {
  content: "";
  position: absolute;
  left: 2px;
  top: 6px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 1px 3px 6px #666666;
}

/* input:checked + label {
  background: #009900;
} */

input:checked + label:after {
  left: auto;
  right: 2px;
}
.activeYearly {
  color: var(--MarineBlue) !important;
}
@media (max-width: 845px) {
  #cardsContainer {
    flex-direction: column;
    gap: 10px;
  }
  #cardsContainer div {
    width: 100%;
    height: 100px;
    flex-direction: row;
    justify-content: flex-start;
    gap: 15px;
  }
  #cardInfo {
    height: 100%;
  }
}
</style>
