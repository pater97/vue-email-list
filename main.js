const app = new Vue({
    el:`#app`,
    data:{
        usermail:``,
        email:[]
    },
    mounted(){
        for(let i = 0; i < 10; i++){
            axios
                .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then(response => {
                    console.log(response);
                   this.usermail = response.data.response
                   this.email.push(this.usermail)
                   console.log(this.email);
                })
               }
            }
})