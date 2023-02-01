<template>
  <aside>
    <div id="stepsContainer">
      <Steps stepNum="1" step="step 1" stepName="Your Info" />
      <Steps stepNum="2" step="step 2" stepName="Select Plan" />
      <Steps stepNum="3" step="step 3" stepName="Add Ons" />
      <Steps stepNum="4" step="step 4" stepName="Summary" />
    </div>
  </aside>
</template>

<script setup>
import Steps from "./global/Steps.vue";
import { store } from "../store/store";
</script>

<style scoped>
aside {
  width: 274px;
  height: 568px;
  background-image: url("../assets/bg-sidebar-desktop.svg");
  border-radius: 10px;
}

#stepsContainer {
  display: flex;
  flex-direction: column;
}
#mobileTextInfo {
  display: none;
  text-shadow: 1px 1px 2px black, 0 0 3em black, 0 0 0.3em black;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  padding-top: 10px;
  color: white;
  text-align: center;
  padding-top: 2rem;
}
@media (max-width: 845px) {
  aside {
    width: 100%;
    height: 192px;
    background-image: url("../assets/bg-sidebar-mobile.svg");
    border-radius: 0;
  }
  #stepsContainer {
    justify-content: center;
    flex-direction: row;
  }
  #mobileTextInfo {
    display: block;
  }
}
</style>
