const app = new Vue({
    el:`#app`,
    data:{
    email:[]
    },
    mounted(){
        axios
            .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then(response => {
                console.log(response.data.response);
                for(let i = 0; i < 10;i++){
                    this.email.push(response.data.response)

                    console.log(this.email);
                }
            })
    }
})