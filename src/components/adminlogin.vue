<template>
<b-contanier fluid>
    <div class="cont">
        <div class="cont1 position-relative">
            <div class="position-absolute bottom-0 start-50 translate-middle-x">
                <div class="logo_wrap">
                    <!-- <div class="circ p-3"><img src="logo.jpg" alt="Logo" width="60" height="50"></div> -->

                    <div class="main p-4">
                        <form ref="form" lazy-validation @submit.prevent="rest">
                            <b-row>
                                <b-col class="col-12 mt-3">
                                    <div>
                                        <h5>Login to Account</h5>
                                    </div>
                                </b-col>
                                <b-col class="col-12">
                                    <div>
                                        <b-form-input v-model="email" type="email" placeholder="Enter your email address"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col class="col-12">
                                    <div>
                                        <b-form-input v-model="password" type="password" placeholder="Enter your password"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col class="col-12">
                                    <div>
                                        <b-button v-b-modal.modal-multi-1 style="background: #685500c; color: #fff; width: 100%" size="lg" @click="rest" type="submit">Login</b-button>
                                    </div>
                                </b-col>
                                <b-col>
                                    <div>
                                        <router-link to="/forgot-password" style="text-decoration:none" >Forgot Password?</router-link> | <router-link to="/register" style="text-decoration:none"><i class="fa fa-user-o"></i> Register</router-link> | <router-link to="/" style="text-decoration:none"> <i class="fa fa-home"></i> Home Page</router-link>
                                    </div>
                                </b-col>

                            </b-row>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        <div class="img" style="width:100%;">

            <img src="./../../public/Group 5762.png" style="width:100%; height:100%"></div>

    </div>
</b-contanier>
</template>


<script>
import swal from 'sweetalert2';
//import axios from 'axios';

export default {
    data: () => ({
        email: '',
        password: '',
        user_role: ''
    }),
    mounted(){
        localStorage.removeItem("wertyuiojhdfghhdrtfyguh")
    },

    methods: {
        async rest() {
            if (!this.email || !this.password) {
                swal.fire({
                    icon: 'warning',
                    title: 'Error...',
                    text: 'Check your login details and try again  ',

                })
                return;
            }

            try {
                const response = await this.$http.post('/login', {
                    email: this.email,
                    password: this.password,
                });

                console.log(response);
                let token = response.data.data.token;
                await localStorage.setItem("wertyuiojhdfghhdrtfyguh", token)
                
                this.user_role = response.data.userrole;

                if( this.user_role == 1) {

                    swal.fire({
                    icon: 'success',
                    title: response.data.message,
                    width:400,

                });
            
                this.$router.push('/admin');

                }

            } catch (err) {
                //console.log(err);

                // swal.fire({
                //     icon: 'error',
                //     title: response.data.message,
                //     //text: 'Kindly Proceed',
                // });
            }
        
            
        }
    }
}
</script>
<style scoped>
.cont {
    background: #eedaca;
    width: 100%;
    height: 100%;

}

.cont1 {
    background: #eedaca;
    width: 100%;
    height: 70%;

}

.circx {
    position: absolute;
    top: -25%;
    left: 50%;
    transform: translate(-50%, 25%);
    width: 100px;
    height: 100px;
    border: 4px solid #fff;
    border-radius: 80%;
    background: #fff;
    margin-right:100px;
    margin-left:-60px;
}

.img {
    width: 100%;
    height: 30%;
}

.main {
    padding-top: 10px;
    background: #fff;
    max-width: 500px;
    border-radius: 9px;
    z-index: 200px;

}

.logo_wrap {
    position: relative;
    width: 140%;
    margin-right:0px;
    margin-left:-40px;

}

@media(max-width: 600px) {

    .logo_wrap {
    position: relative;
    width: 140%;
    margin-right:95px;
    margin-left:-40px;

}
}
</style>

