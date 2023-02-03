<template>
  <footer>
    <button id="goBackBtn" v-if="store.steps.stepNum !== 1" @click="goBack">
      go back
    </button>
    <button id="nextStep" @click="checkForm">Next Step</button>
  </footer>
</template>

<script setup>
import { store } from "../../store/store";

async function checkForm() {
  store.personalInfo.name === "" && (store.personalInfo.hasError = true);
  store.personalInfo.email === "" && (store.personalInfo.hasError = true);
  store.personalInfo.phoneNumber === "" && (store.personalInfo.hasError = true);
  store.personalInfo.name !== "" &&
    store.personalInfo.email !== "" &&
    store.personalInfo.phoneNumber !== "" &&
    (store.personalInfo.hasError = false);

  if (store.personalInfo.hasError === false) {
    console.log("false");
    nextStep();
  }
}

async function nextStep() {
  store.steps.stepNum++;
}

async function goBack() {
  store.steps.stepNum--;
}
</script>

<style scoped>
footer {
  background-color: white;
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
#nextStep {
  align-self: center;
  border: 0;
  text-align: center;
  display: inline-block;
  padding: 14px;
  width: 100px;
  height: 50px;
  margin: 7px;
  font-size: 0.9rem;
  color: #ffffff;
  background-color: var(--MarineBlue);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 400ms;
}
#nextButton:hover {
  background-color: var(--PurplishBlue);
}
#goBackBtn {
  width: 100px;
  height: 50px;
  align-self: center;
  background-color: inherit;
  color: var(--CoolGray);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: color 400ms;
}
#goBackBtn:hover {
  color: var(--MarineBlue);
}

@media (max-width: 845px) {
  footer {
    padding-right: 1rem;
    position: fixed;
    bottom: 0;
    height: 80px;
    align-self: center;
  }
}
</style>
