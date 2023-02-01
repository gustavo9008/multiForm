<script setup>
// import { defineProps } from "vue";
import { store } from "../../store/store";

function showPersonalInfo(info) {
  console.log(info);
}

defineProps({
  title: String,
  info: String,
});
</script>

<template>
  <header>
    <h1>
      {{ title }}
    </h1>
    <p>
      {{ info }}
    </p>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
}
h1 {
  font-weight: 600;
  font-size: 1.8rem;
  margin: 0;
  padding: 1rem 0rem;
  color: var(--MarineBlue);
}
p {
  font-size: 1rem;
  /* font-weight: 200; */
  letter-spacing: 1px;
  margin: 0;
  padding: 1rem 0rem;
  color: var(--CoolGray);
}
</style>
