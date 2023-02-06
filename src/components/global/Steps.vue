<script setup>
import { defineProps } from "vue";
import { store } from "../../store/store";

// function showPersonalInfo(info) {
//   console.log(info);
// }

defineProps({
  stepNum: String,
  step: String,
  stepName: String,
});
</script>

<template>
  <section id="textHeading">
    <h4 :class="Number(stepNum) === store.steps.stepNum && 'activeStep'">
      {{ stepNum }}
    </h4>
    <div id="stepInfo">
      <h3>
        {{ step }}
      </h3>
      <h1>
        {{ stepName }}
      </h1>
    </div>

    <!-- <span>{{ store.personalInfo.name }}</span>
    <button @click="showPersonalInfo(store.addOns)">show info</button> -->
  </section>
</template>

<style scoped>
section {
  width: 200px;
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  padding-top: 1rem;
}
section:nth-of-type(1) {
  padding-top: 3rem;
}

#textHeading div {
  margin-left: 15px;
  text-align: left;
  color: white;
  text-transform: uppercase;
}

h4 {
  font-weight: 600;
  font-size: 0.8rem;
  width: 40px;
  height: 40px;
  display: grid;
  justify-items: center;
  align-items: center;
  color: white;
  border: 2px white solid;
  border-radius: 50%;
}
.activeStep {
  border: 2px var(--PastelBlue) solid;
  color: black;
  background-color: var(--PastelBlue);
}

h3 {
  font-size: 0.8rem;
  font-weight: 200;
  color: var(--PastelBlue);
}
h1 {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  padding-top: 10px;
}
@media (max-width: 845px) {
  section {
    width: 100px;
    margin: 0px;
    justify-content: center;
  }
  section:nth-of-type(1) {
    padding-top: 1rem;
  }
  #stepInfo {
    display: none;
  }
}
</style>
