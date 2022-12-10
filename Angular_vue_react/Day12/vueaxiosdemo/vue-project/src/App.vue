<script>
//import getusers from './UserService';
import UserService from './UserService';
import axios from 'axios';
export default{
  data() {
    return {
      list:[],
      data:""
    }
  },
  async created (){
    console.log("___________");
  const response =await UserService.methods.getusers("https://gorest.co.in/public/v2/users")
  this.list=response.data;  
  console.log(this.list);
  },
  mounted() {
    console.log("Mounted event");
  },
  updated(){
console.log("Updated");
  },
  beforeUpdate()
  {
console.log("Hello");
  },
  methods: {
async    submitinfo()
    {
this.data="Hello";
     const response= await UserService.methods.postusers({"name":"reema","email":"rerema11646@kshlerin-dickens.name","gender":"female","status":"active"});
     console.log(response.data);
    }
  },
}
</script>

<template>
  <button @click="submitinfo()">Post Data</button>
  {{data}}
 <div v-for=" i in list"> 
  {{i.id}} {{i.name}}
 </div>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
