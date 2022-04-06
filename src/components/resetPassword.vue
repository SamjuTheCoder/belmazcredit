
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
                        <h5>Enter yout new passwrod {{ message }}</h5>
                </div>
                 
                  <p></p>
                  <form class="form-group" lazy-validation @submit.prevent="rest">
                      <b-form-input v-model="reset_code" type="text" class="form-control" placeholder="Password reset code" required></b-form-input>
                     <p></p> 
                     <b-form-input v-model="password" type="password" class="form-control" placeholder="Password" required></b-form-input>
                     <p></p> 
                     <b-form-input v-model="password_confirmation" type="password" class="form-control" placeholder="Confirm password" required></b-form-input>
                     <p></p>
                     <input type="submit" style="background: #685500c; color: #fff; width: 100%" value="Reset" class="btn btn-primary" @click="rest">
                     
                     <p></p>
                     <p>Don't have an account? <a href="/signup">Signup</a> | <a href="/login">Login</a> | <a href="/">Home Page</a></p>
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
        email: '',
        password: '',
        user_role: '',
        error_code :'',
        message:'',
        status:''
    }),
    mounted(){
        localStorage.removeItem("wertyuiojhdfghhdrtfyguh")
    },

    methods: {
        async rest() {

              if (!this.reset_code) {
               
                swal.fire({
                    icon: 'warning',
                    title: 'Error...',
                    text: 'Please enter your password reset code ',
                })
                return;

            }

            if (!this.password || !this.password_confirmation) {
               
                swal.fire({
                    icon: 'warning',
                    title: 'Error...',
                    text: 'All fields must be entered ',
                })
                return;

            }else if (this.password !=this.password_confirmation) {
               
                swal.fire({
                    icon: 'warning',
                    title: 'Error...',
                    text: 'Password does not match  ',
                })
                return;
            }

            try {
                const response = await this.$http.post('/reset-password', {
                    password_reset_code: this.reset_code,
                    password: this.password,
                });

                console.log(response);

                let token = response.data.data.token;
                await localStorage.setItem("wertyuiojhdfghhdrtfyguh", token)
                
                this.error_code = response.data.code;
                this.message = response.data.message;
                
                if(this.error_code == "00") {

                     swal.fire({
                     icon: 'success',
                     title: message,
                     width:400,

                     });
                     
                     this.$router.push('/login');

               }else if(this.error_code == "E003") {

                     swal.fire({
                     icon: 'error',
                     title: message,
                     width:400,

                     });
                     
                     this.$router.push('/login');

               }
            
            

            } catch (err) {
                //console.log(err);

                swal.fire({
                    icon: 'error',
                    title: response.data.message,
                    //text: 'Kindly Proceed',
                });
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

