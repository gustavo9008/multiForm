<template>
  <footer>
    <button @click="goBack">go back</button>
    <button @click="nextStep">Next Step</button>
  </footer>
</template>

<script setup>
import { store } from "../../store/store";

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
  justify-content: end;
}
button {
  align-self: center;
  border: 0;
  text-align: center;
  display: inline-block;
  padding: 14px;
  width: 100px;
  margin: 7px;
  font-size: 0.9rem;
  color: #ffffff;
  background-color: var(--MarineBlue);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 400ms;
}
button:hover {
  background-color: var(--PurplishBlue);
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
