<template>
  <form id="inputContainer">
    <div>
      <label for="name">Name</label>
      <input
        v-model="store.personalInfo.name"
        type="text"
        id="name"
        placeholder="Enter Name Here"
      />
      <p>{{ store.personalInfo.name }}</p>
    </div>

    <div>
      <label for="email">Email</label>
      <input
        v-model="store.personalInfo.email"
        type="email"
        id="email"
        placeholder="Enter Email"
      />
      <p>{{ store.personalInfo.email }}</p>
    </div>

    <div>
      <label for="phoneNumber">Phone Number</label>
      <input
        v-model="store.personalInfo.phoneNumber"
        type="tel"
        name="Phone Number"
        id="phoneNumber"
        placeholder="Enter Phone Number"
      />
      <p>{{ store.personalInfo.phoneNumber }}</p>
    </div>
  </form>
</template>

<script setup>
import { store } from "../../store/store";
</script>

<style scoped>
#inputContainer {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
#inputContainer div {
  display: flex;
  flex-direction: column;
}
#inputContainer div label {
  margin-bottom: 10px;
}
#inputContainer div input {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid var(--LightGray);
  outline: none;
  padding: 0.2rem 1rem;
}
#inputContainer div input:focus {
  border-color: var(--PurplishBlue);
  border-width: 2px;
}
</style>
