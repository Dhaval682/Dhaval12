<script>
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  methods:
  {
  demo(item)
  {
  alert(item);
  }
  }
}
</script>
<template>
<h1>Hello World {{author.name}}</h1>
<div v-for="item in author.books">
<button @click="demo(item)">{{item}}</button>
</div>
</template>
<style>
</style>