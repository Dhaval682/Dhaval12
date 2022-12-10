<script>

import Books from './components/Books.vue';
export default {
  components: {
    Books
  },
  data() {
    return {
     title:"Learning Vue",
     name:"",
     
     imageprop:{
     alt:"computer image",
     src:"https://images-na.ssl-images-amazon.com/images/I/41N0LS-+0VL.jpg"
     },
     computerimage:"https://images-na.ssl-images-amazon.com/images/I/41N0LS-+0VL.jpg",
     theme:"red"
    }
    }
}
</script>

<template>
  {{title}}
  {{name}}
  
  <img v-bind:src="computerimage"/>
  <img v-bind="imageprop" />
  <input type="text" v-model="theme"/>
  <input  type="text" v-model="name"/>
      <Books></books>

  <div  :class="theme" >
  Welcome everyone
  </div>
</template>

<style>
.red
{
color:red;
border:2px solid red;
}
.blue
{
color:blue;
font-size:30px;
border:2px solid blue;
}
</style>
