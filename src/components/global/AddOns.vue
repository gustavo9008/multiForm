<template>
  <form>
    <div
      id="checkboxContainer"
      @click="checkAddOn('onlineService')"
      :class="store.addOns.onlineService === true && 'selectedAddOn'"
    >
      <div id="infoCheckbox">
        <input
          type="checkbox"
          id="onlineService"
          v-model="store.addOns.onlineService"
        />
        <span id="checkboxContent">
          <label for="onlineService"> Online Service</label>
          <p>Access to multiplayer games</p>
          <span>{{ store.addOns.onlineService }}</span>
        </span>
      </div>

      <h4>+${{ store.selectPlan.yearly === true ? `10/yr` : `1/mo` }}</h4>
    </div>
    <div
      id="checkboxContainer"
      @click="checkAddOn('largerStorage')"
      :class="store.addOns.largerStorage === true && 'selectedAddOn'"
    >
      <div id="infoCheckbox">
        <input
          type="checkbox"
          id="largerStorage"
          v-model="store.addOns.largerStorage"
        />
        <span id="checkboxContent">
          <label for="largerStorage"> Larger Storage</label>
          <p>Extra 1TB of cloud save</p>
          <span>{{ store.addOns.largerStorage }}</span>
        </span>
      </div>

      <h4>+${{ store.selectPlan.yearly === true ? `20/yr` : `2/mo` }}</h4>
    </div>
    <div
      id="checkboxContainer"
      @click="checkAddOn('customProfile')"
      :class="store.addOns.customProfile === true && 'selectedAddOn'"
    >
      <div id="infoCheckbox">
        <input
          type="checkbox"
          id="customProfile"
          v-model="store.addOns.customProfile"
        />
        <span id="checkboxContent">
          <label for="customProfile"> Custom Profile</label>
          <p>Custom theme on your profile</p>
          <span>{{ store.addOns.customProfile }}</span>
        </span>
      </div>

      <h4>+${{ store.selectPlan.yearly === true ? `20/yr` : `2/mo` }}</h4>
    </div>
  </form>
</template>

<script setup>
import { store } from "../../store/store";

async function checkAddOn(addon) {
  addon === "onlineService" &&
    (store.addOns.onlineService = !store.addOns.onlineService);
  addon === "largerStorage" &&
    (store.addOns.largerStorage = !store.addOns.largerStorage);
  addon === "customProfile" &&
    (store.addOns.customProfile = !store.addOns.customProfile);
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
#checkboxContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border: 1px solid var(--LightGray);
  border-radius: 10px;
  padding: 1rem;
}
input[type="checkbox"] {
  align-self: center;
  display: block;
  accent-color: var(--PurplishBlue);
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: white;
  width: 1.55em;
  height: 1.55em;
  border: 0.15em solid var(--LightGray);
}
/* input[type="checkbox"]:checked {
  background-color: var(--PurplishBlue) !important;
  border-color: var(--PurplishBlue) !important;
  color: white;
} */

#infoCheckbox {
  display: flex;
  gap: 15px;
}
#checkboxContent label {
  display: block;
  margin-bottom: 5px;
  font-size: 1.1rem;
  color: var(--MarineBlue);
  font-weight: 600;
}
#checkboxContent p {
  /* font-size: 1.1rem; */
  color: var(--CoolGray);
  /* font-weight: 600; */
}
#checkboxContainer h4 {
  align-self: center;
  color: var(--PurplishBlue);
  font-size: 14px;
}
.selectedAddOn {
  border-color: var(--PurplishBlue) !important;
  background-color: var(--Magnolia) !important;
}
</style>
