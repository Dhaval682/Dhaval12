<script>

import Books from './components/Books.vue';
export default {
  components: {
    Books
  },
  data() {
    return {
     title:"Learning Vue"
    }
    }
}
</script>

<template>
  {{title}}
      <Books></books>

  
</template>

<style scoped>

</style>
