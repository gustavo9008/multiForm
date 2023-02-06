<template>
  <aside v-if="!store.steps.orderComplete">
    <div id="personalInfo">
      <!-- entered personal info -->
      <header>
        <p>
          <span id="personalInfoName">Name:</span>
          <span> {{ store.personalInfo.name }}</span>
        </p>
        <p>
          <span id="personalInfoName">Email:</span>
          <span> {{ store.personalInfo.email }}</span>
        </p>
        <p>
          <span id="personalInfoName">Phone Number:</span>
          <span> {{ store.personalInfo.phoneNumber }}</span>
        </p>
      </header>
      <!-- charge breakdown -->

      <button @click="editInfo" id="editBtn">edit info</button>
    </div>

    <div id="pricingPlan">
      <div class="mainPlanPrice">
        <div class="chosenPlan">
          <h3>
            {{ plan }}({{
              store.selectPlan.yearly === true ? `Yearly` : `Monthly`
            }})
          </h3>
          <button @click="store.steps.stepNum = 2" class="changePlanBtn">
            Change
          </button>
        </div>

        <p>${{ pricePlan.planPrice }}/{{ planYearMonth }}</p>
      </div>
      <hr />
      <div class="addOnPricing" v-if="store.addOns.onlineService">
        <h4>Online service</h4>
        <p>${{ pricePlan.addOns.onlineServicePrice }}/{{ planYearMonth }}</p>
      </div>
      <div class="addOnPricing" v-if="store.addOns.largerStorage">
        <h4>Larger Storage</h4>
        <p>${{ pricePlan.addOns.largerStoragePrice }}/{{ planYearMonth }}</p>
      </div>
      <div class="addOnPricing" v-if="store.addOns.customProfile">
        <h4>Custom Profile</h4>
        <p>${{ pricePlan.addOns.customProfilePrice }}/{{ planYearMonth }}</p>
      </div>
    </div>

    <div class="total">
      <h3>Total (per {{ store.selectPlan.yearly ? `year` : `month` }})</h3>
      <p>
        ${{
          pricePlan.planPrice +
          pricePlan.addOns.customProfilePrice +
          pricePlan.addOns.largerStoragePrice +
          pricePlan.addOns.onlineServicePrice
        }}/{{ planYearMonth }}
      </p>
    </div>
  </aside>
  <aside id="thankYou" v-if="store.steps.orderComplete">
    <img src="../../assets/icon-thank-you.svg" alt="thank you" />
    <h2>Thank you!</h2>
    <p>
      Thanks for confirming your subcription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com
    </p>
  </aside>
</template>

<script setup>
import { store } from "../../store/store";

let plan =
  store.selectPlan.planSelected.charAt(0).toLocaleUpperCase() +
  store.selectPlan.planSelected.slice(1);

let planYearMonth = store.selectPlan.yearly ? `yr` : `mo`;

function planPrice(name) {
  var price = {
    planPrice: 0,
    addOns: {
      customProfilePrice: 0,
      largerStoragePrice: 0,
      onlineServicePrice: 0,
    },
  };
  if (store.selectPlan.yearly === true) {
    store.addOns.customProfile === true &&
      (price.addOns.customProfilePrice = 10);
    store.addOns.largerStorage === true &&
      (price.addOns.largerStoragePrice = 20);
    store.addOns.onlineService === true &&
      (price.addOns.onlineServicePrice = 20);
  } else {
    store.addOns.customProfile === true &&
      (price.addOns.customProfilePrice = 1);
    store.addOns.largerStorage === true &&
      (price.addOns.largerStoragePrice = 2);
    store.addOns.onlineService === true &&
      (price.addOns.onlineServicePrice = 2);
  }
  switch (name) {
    case "arcade":
      if (store.selectPlan.yearly === true) {
        price.planPrice = 90;
      } else {
        price.planPrice = 9;
      }
      break;
    case "advanced":
      if (store.selectPlan.yearly === true) {
        price.planPrice = 120;
      } else {
        price.planPrice = 12;
      }
      break;
    case "pro":
      if (store.selectPlan.yearly === true) {
        price.planPrice = 150;
      } else {
        price.planPrice = 15;
      }
      break;

    default:
      break;
  }
  return price;
}
let pricePlan = planPrice(store.selectPlan.planSelected);
async function editInfo() {
  store.steps.stepNum = 1;
}
</script>

<style scoped>
#personalInfoName {
  display: inline-block;
  color: var(--MarineBlue);
  font-weight: 600;
  margin-right: 1rem;
}
#personalInfo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
}
#personalInfo header {
  padding-top: 15px;
  padding-bottom: 15px;
  width: 75%;
}
#personalInfo p {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: var(--CoolGray);
  /* font-weight: 600; */
}
#editBtn {
  /* margin-left: 15px; */
  /* width: 100px; */
  align-self: center;
  background-color: inherit;
  color: var(--CoolGray);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: color 400ms;
}
#editBtn:hover {
  color: var(--PurplishBlue);
}
#pricingPlan {
  margin: 10px 0 10px 0;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--Alabaster);
  border-radius: 5px;
}
#pricingPlan hr {
  border: 0;
  height: 1px;
  background: var(--LightGray);
  width: 100%;
}
.mainPlanPrice {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 60px;
}
.mainPlanPrice div {
  align-self: center;
}
.chosenPlan h3 {
  color: var(--MarineBlue);
  font-weight: 600;
}
.changePlanBtn {
  align-self: center;
  background-color: inherit;
  color: var(--CoolGray);
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: var(--CoolGray);
  cursor: pointer;
  transition: color 400ms;
}
.changePlanBtn:hover {
  color: var(--PurplishBlue);
  text-decoration-color: var(--PurplishBlue);
}
.mainPlanPrice p {
  color: var(--MarineBlue);
  font-weight: 600;
}
#pricingPlan p {
  align-self: center;
}
.addOnPricing {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
}
.addOnPricing h4 {
  color: var(--CoolGray);
}
.addOnPricing p {
  color: var(--MarineBlue);
}
.total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.total h3 {
  color: var(--CoolGray);
}
.total p {
  color: var(--PurplishBlue);
  font-size: 22px;
}
#thankYou {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  text-align: center;
}
#thankYou img {
  flex-basis: 0;
}
#thankYou h2 {
  color: var(--MarineBlue);
  font-size: 1.8rem;
  font-weight: 600;
}
#thankYou p {
  line-height: 2;
  color: var(--CoolGray);
  font-size: 1rem;
}
@media (max-width: 845px) {
  #personalInfo {
    flex-direction: column;
  }
  #personalInfo header {
    width: 100%;
  }
  #thankYou {
    padding: 65px 0 65px 0;
  }
}
</style>
