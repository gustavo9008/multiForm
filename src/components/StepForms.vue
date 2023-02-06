<template>
  <section>
    <div id="infoForms" v-if="store.steps.stepNum === 1">
      <InfoSteps
        title="Personal Info"
        info="Plese provide your name, email and phone number."
      />

      <TextInput />
    </div>

    <div id="planSelection" v-else-if="store.steps.stepNum === 2">
      <InfoSteps
        title="Select Your Plan"
        info="You have the option of monthly or yearly billing."
      />
      <SelectionInput />
    </div>
    <div id="addOnSelection" v-else-if="store.steps.stepNum === 3">
      <InfoSteps
        title="Pick add-ons"
        info="Add-ons help enhance your gaming experience."
      />
      <AddOns />
    </div>
    <div id="summary" v-else-if="store.steps.stepNum === 4">
      <InfoSteps
        v-if="!store.steps.orderComplete"
        title="Finishing up"
        info="Double-check everything looks OK before confirming."
      />
      <Summary />
    </div>
  </section>
</template>

<script setup>
import { store } from "../store/store";
import InfoSteps from "./global/InfoSteps.vue";
import TextInput from "./global/TextInput.vue";
// import InfoSteps from "./global/InfoSteps.vue";
import SelectionInput from "./global/SelectionInput.vue";
import AddOns from "./global/AddOns.vue";
import Summary from "./global/Summary.vue";
</script>

<style scoped>
section {
  background-color: white;
  height: 450px;
  width: clamp(300px, 100%, 480px);
  padding: 1rem 1rem;
  border-radius: 20px;
}
#summary {
  height: 100%;
}
@media (max-width: 845px) {
  section {
    width: clamp(300px, 85%, 600px);
    padding: 1.5rem;
    height: fit-content;
    margin-left: 1rem;
    margin-right: 1rem;
    /* border-radius: 20px; */
    position: relative;
    top: -70px;
  }
}
</style>
