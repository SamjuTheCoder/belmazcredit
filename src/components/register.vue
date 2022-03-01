<template>
 <div id="app">

   <div class="login-page">
      <transition name="fade">
         
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div  class="card login">
                <div>
                        <h5>Complete your registration {{ message }}</h5>
                </div>
                 
                  <p></p>
                        <form ref="form" lazy-validation @submit.prevent="rest">
                            
                             <b-form-input v-model="name" type="name" placeholder="Enter your fullname"></b-form-input>
                             <p></p>
                             <b-form-input v-model="email" type="email" placeholder="Enter your email address"></b-form-input>
                             <p></p>
                             <b-form-input v-model="phone" type="phone" placeholder="Enter your phone number"></b-form-input>
                             <p></p>
                             <b-form-input v-model="sponsor_id" type="sponsor_id" placeholder="Enter your sponsor id (Optional)"></b-form-input>
                             <p></p>
                             <b-form-input v-model="transaction_code" type="transaction_code" placeholder="Enter transaction code"></b-form-input>
                             <p></p>
                             <b-form-input v-model="password" type="password" placeholder="Enter your password"></b-form-input>
                             <p></p>
                             <b-form-input v-model="password_confirmation" type="password" placeholder="Confirm your password"></b-form-input>
                             <p></p>
                             <b-button v-b-modal.modal-multi-1 style="background: #685500c; color: #fff; width: 100%" size="lg" @click="rest" type="submit">Register</b-button>
                             <p></p>                                        
                            <center> <router-link to="/login" style="text-decoration:none"> <i class="fa fa-user-o"></i> Login</router-link> | <router-link to="/" style="text-decoration:none"> <i class="fa fa-home"></i> Home Page</router-link></center>
                            
                        </form>
                    </div>

            </div>
         </div>

      </div>
   </div>

</div>
</template>


<script>
import swal from 'sweetalert2';
//import axios from 'axios';

export default {
    data: () => ({
        name: '',
        email: '',
        phone: '',
        sponsor_id: '',
        password: '',
        password_confirmation: '',
        transanction_code:''
    }),
    // mounted(){
    //     localStorage.removeItem("wertyuiojhdfghhdrtfyguh")
    // },

    methods: {
        async rest() {
            if (!this.name || !this.email || !this.phone || !this.password || !this.transaction_code) {
                swal.fire({
                    icon: 'warning',
                    title: 'Error...',
                    text: 'Please enter all the information ',
                })
                return;
            }

            if (this.password != this.password_confirmation) {
                swal.fire({
                    icon: 'warning',
                    title: 'Error...',
                    text: 'Password does not match ',
                })
                return;
            }

            try {
                const response = await this.$http.post('/register', {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    transaction_code: this.transaction_code,
                    sponsor_id: this.sponsor_id,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                });

                console.log(response);
                //let token = response.data.data.token;
                //await localStorage.setItem("wertyuiojhdfghhdrtfyguh", token)
                
                const response_code = response.data.code;
                if ( response_code == 'E201' ) {

                    swal.fire({
                    icon: 'error',
                    title: response.data.message,
                    //text: 'Kindly Proceed',
                    });

                } else {

                swal.fire({
                    icon: 'success',
                    title: response.data.message,
                    //text: 'Kindly Proceed',
                });
            
                this.$router.push('/login');
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


p {
   line-height: 1rem;
}

.card {
   padding: 20px;
}

.form-group {
   input {
      margin-bottom: 20px;
   }
}

.login-page {
   align-items: center;
   display: flex;
   height: 100vh;
   background-color: #f1d2cf;
}
   
   .wallpaper-register {
      background-color: #f1d2cf;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: -1;
   }

   h1 {
      margin-bottom: 1.5rem;
   }


.error {
   animation-name: errorShake;
   animation-duration: 0.3s;
}

@keyframes errorShake {
   0% {
      transform: translateX(-25px);
   }
   25% {
      transform: translateX(25px);
   }
   50% {
      transform: translateX(-25px);
   }
   75% {
      transform: translateX(25px);
   }
   100% {
      transform: translateX(0);
   }
}
</style>

