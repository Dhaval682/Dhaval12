<script>
import { useVuelidate } from '@vuelidate/core'
import { required ,email} from '@vuelidate/validators'
export default
{
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data () {
    return {
      name: ''
    }
  },
  validations () {
    return {
      name: { required }
    }
  }
}
</script>

<template>
  <input v-model="v$.name.$model" />
  
  <div v-if="v$.name.$error">Name field has an error.</div>
</template>

<style>

</style>
