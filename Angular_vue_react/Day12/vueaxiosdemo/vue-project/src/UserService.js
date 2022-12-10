import axios from 'axios';


export default{
    methods: {
        getusers()
{
    let api_key = "33036075d6f588e951c390d0f2a2941681ccbebc45e9e03ab2c8745e70ff37c9";
       return axios.get("https://gorest.co.in/public/v2/users",{headers:{ 'Content-Type': 'application/json',
       'Authorization': `Bearer ${api_key}`}});
},
postusers(user)
{
    let api_key = "33036075d6f588e951c390d0f2a2941681ccbebc45e9e03ab2c8745e70ff37c9";
    return axios.post("https://gorest.co.in/public/v2/users",user,{headers:{ 'Content-Type': 'application/json',
    'Authorization': `Bearer ${api_key}`}});
}
    },
}