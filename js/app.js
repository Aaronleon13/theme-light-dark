const { createApp, ref } = Vue

createApp({
  setup() {
    const message = ref('Hola chicos de youtube')
    const counter = ref(0)
    const isValid = ref(false)

    const sum = () => {
        counter.value++
    }

    const rest = () => {
        counter.value--
    }

    return {
      message,
      counter,
      sum,
      rest
    }
  }
}).mount('#app')