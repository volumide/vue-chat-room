<template >
    <div>
        
    </div>
</template>

<script>
    import * as all from '../firebaseDb'
    export default {
        name: 'Sign up',
        methods: {
            registerUser(){
                all.default.auth.createUserWithEmailAndPassword('volumide42@gmail.com', "123456")
                .then(res => console.log(res))
                .catch(err => console.log(err))
            },
        },

        created() {
            
        },
    }
</script>

<style lang="">
    
</style>