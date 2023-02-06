import { reactive } from 'vue'

export const store = reactive({
    steps: {
        stepNum: 1,
        orderComplete: false,
    },
    personalInfo: {
        name: '',
        email: '',
        phoneNumber: '',
        hasError: 'false'
    },
    selectPlan: {
        planSelected: "arcade",
        yearly: false,
    },
    addOns: {
        onlineService: false,
        largerStorage: false,
        customProfile: false,
    },
    changeName(newInfo) {
        this.personalInfo = newInfo;
    },

})