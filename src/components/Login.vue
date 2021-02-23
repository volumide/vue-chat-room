<template >
    <div>
        <p>
            working
        </p>
    </div>
</template>

<script>
    import * as all from '../firebaseDb'
    export default {
        name: 'Sign In',
        methods: {
            loginUser(){
                all.default.auth.onAuthStateChanged(user => {
                    if(user){
                        if (this.code) {
                            user.updatePhoneNumber(this.updatePhoneNumber()).then(() => {
                                console.log(user.providerData);
                            }).catch(err => console.log(err))
                        }
                    }
                })
            },  
        },

        created() {
            
        },
    }
</script>

<style lang="">
    
</style>