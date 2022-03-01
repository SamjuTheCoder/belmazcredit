<template>
  <div id="app">

   <div class="login-page">
      <transition name="fade">
         <div class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div  class="card login">
                  <p style="text-align:justify">Please enter your email address to proceed </p>
                  <p></p>
                  <form class="form-group" lazy-validation @submit.prevent="rest">
                     <b-form-input v-model="email" type="email" class="form-control" placeholder="Your valid email address" required></b-form-input>
                     <p></p>
                     <input type="submit"  style="background: #685500c; color: #fff; width: 100%" class="btn btn-primary" value="Proceed >>"  @click="rest">
                     <p></p>
                     <p>Already have an account? <a href="/login">Login</a> | <a href="/">Home Page</a>
                     </p>
                   
                  </form>
               </div>

            </div>
         </div>

      </div>
   </div>

</div>

  <!-- Material form login -->
</template>

<script>
import swal from 'sweetalert2';
//import axios from 'axios';

export default {
    data: () => ({
        email: '',
    }),
    // mounted(){
    //     localStorage.removeItem("wertyuiojhdfghhdrtfyguh")
    // },

    methods: {
        async rest() {
            if (!this.email) {
                swal.fire({
                    icon: 'warning',
                    title: 'Error...',
                    text: 'Please enter your email address ',
                })
                return;
            }

            try {
                const response = await this.$http.post('/signup-email', {
                    email: this.email,
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

                } else if ( response_code == '00' ){

                swal.fire({
                    icon: 'success',
                    title: response.data.message,
                    //text: 'Kindly Proceed',
                });
               this.$router.push('/');
                }

            } catch (err) {
                //console.log(err);

                swal.fire({
                    icon: 'error',
                    title: response.message,
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
   background-color:#f1d2cf;
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

