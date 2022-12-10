<script>
export default {
  props:{
    booksdata:Array
  },
  data() {
    return {
      author: {
        name: 'John Doe',
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
<div v-for="item in booksdata">
<button @click="demo(item)">{{item}}</button>
</div>
</template>
<style>
</style>