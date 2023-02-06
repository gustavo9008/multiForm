<template>
  <form id="inputContainer">
    <div>
      <div id="labelInfo">
        <label for="name">Name</label>
        <p
          v-if="
            store.personalInfo.hasError === true &&
            store.personalInfo.name === ''
          "
        >
          Name is required
        </p>
      </div>

      <input
        v-model="store.personalInfo.name"
        type="text"
        id="name"
        placeholder="John Doe"
        :class="
          store.personalInfo.hasError === true &&
          store.personalInfo.name === '' &&
          'error'
        "
      />
    </div>

    <div>
      <div id="labelInfo">
        <label for="email">Email</label>
        <p
          v-if="
            store.personalInfo.hasError === true &&
            store.personalInfo.email === ''
          "
        >
          Email is required
        </p>
      </div>

      <input
        v-model="store.personalInfo.email"
        type="email"
        id="email"
        placeholder="yourEmail@here.com"
        :class="
          store.personalInfo.hasError === true &&
          store.personalInfo.email === '' &&
          'error'
        "
      />
    </div>

    <div>
      <div id="labelInfo">
        <label for="phoneNumber">Phone Number</label>

        <p
          v-if="
            store.personalInfo.hasError === true &&
            store.personalInfo.phoneNumber === ''
          "
        >
          Phone Number is required
        </p>
      </div>
      <input
        v-model="store.personalInfo.phoneNumber"
        type="tel"
        name="Phone Number"
        id="phoneNumber"
        placeholder="123-456-7890"
        :class="
          store.personalInfo.hasError === true &&
          store.personalInfo.phoneNumber === '' &&
          'error'
        "
      />
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
  padding-bottom: 20px;
}
#inputContainer div {
  display: flex;
  flex-direction: column;
}
#inputContainer div label {
  margin-bottom: 10px;
}
#inputContainer div input {
  font-size: 1rem;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid var(--LightGray);
  outline: none;
  padding: 0.2rem 1rem;
}
#labelInfo {
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
}
.error {
  border-color: var(--StrawberryRed) !important;
}
#labelInfo p {
  color: var(--StrawberryRed);
  font-size: 14px;
  font-weight: 600;
}
#inputContainer div input:focus {
  border-color: var(--PurplishBlue);
  border-width: 2px;
}
</style>
