
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
                        <h5>Login to Account {{ message }}</h5>
                </div>
                 
                  <p></p>
                  <form class="form-group" lazy-validation @submit.prevent="rest">
                     <b-form-input v-model="email" type="email" class="form-control" placeholder="Email" required></b-form-input>
                     <p></p>
                     <b-form-input v-model="password" type="password" class="form-control" placeholder="Password" required></b-form-input>
                     <p></p>
                     <input type="submit" style="background: #685500c; color: #fff; width: 100%" value="Login" class="btn btn-primary" @click="rest">
                     
                     <p></p>
                     <p>Don't have an account? <a href="/signup">Signup</a> | <a href="/">Home Page</a>
                     
                     </p>
                   
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
                this.status = response.data.status;
                this.error_code = response.data.code;

                if( this.user_role == 1) {

                    swal.fire({
                    icon: 'success',
                    title: response.data.message,
                    width:400,

                });
            
                this.$router.push('/admin');

                }else if(( this.user_role == 3)&&( this.status == 0)) {

                     swal.fire({
                     icon: 'error',
                     title: 'Invalid user',
                     width:400,

                     });
                     
                     this.$router.push('/login');

               }else {

                     swal.fire({
                     icon: 'success',
                     title: response.data.message,
                     });

                     this.$router.push('/user');
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

