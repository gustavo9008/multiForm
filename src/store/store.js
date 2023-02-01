import { reactive } from 'vue'

export const store = reactive({
    steps: {
        stepNum: 2,
        stepName: 'Your Info',
    },
    personalInfo: {
        name: '',
        email: '',
        phoneNumber: '',
    },
    selectPlan: {
        planSelected: "arcade",
        yearly: false,
    },
    addOns: {
        onlineServices: false,
        largerStorage: false,
        customProfile: false,
    },
    changeName(newInfo) {
        this.personalInfo = newInfo;
    },

})