<template>
<b-contanier fluid>
    <div class="cont">
        <div class="cont1 position-relative">
            <div class="position-absolute bottom-0 start-50 translate-middle-x">
                <div class="logo_wrap">
                    <div class="circ p-3"><img src="logo.svg" alt=""></div>

                    <div class="main p-4">
                        <form ref="form" lazy-validation @submit.prevent="submit">
                            <b-row>
                              
                                <b-col class="col-12 mt-4">
                                    <div>
                                        <h5> <strong>Forgot Password</strong></h5>
                                       
                                    </div>
                                    <div style="color:#bcbcbc">
                                        <h6>Reset Your Password!</h6>
                                    </div>
                                </b-col>
                                <b-col class="col-12">
                                    <div>
                                        <b-form-input v-model="email" type="email" placeholder="Enter email adress" required></b-form-input>
                                    </div>
                                </b-col>
                                
                                <b-col class="col-12">
                                    <div>
                                        <b-button v-b-modal.modal-multi-1 style="background: #20618c; display:block; color: #fff; width: 100%" size="lg" @click="submit" type="submit">Submit</b-button>
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
<style scoped>
.cont {
    background: #cadbee;
    width: 100%;
    height: 100%;

}

.cont1 {
    background: #cadbee;
    width: 100%;
    height: 70%;

}

.circ {
    position: absolute;
    top: -25%;
    left: 50%;
    transform: translate(-50%, 25%);
    width: 100px;
    height: 100px;
    border: 4px solid #fff;
    border-radius: 80%;
    background: #fff;
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
  

}

.logo_wrap {
    position: relative;

}
</style>

<script>
import swal from 'sweetalert2';
export default {
    data: () => ({
        email: '',
    }),
    methods: {

async submit() {
      if (this.email == '') {
                swal.fire({
                    icon: 'warning',
                    title: 'Error !!!',
                    text: 'Please provide your email address.',

                })
                return;
            }
            //  if (this.newpass !== this.confirmpass) {
            //     swal.fire({
            //         icon: 'warning',
            //         title: 'Error !!!',
            //         text: 'Password not the same',

            //     })
            //     return;
            //     }
                 try {
                const response = await this.$http.post('/auth/forgot-password', {
                    email: this.email,
                });

                console.log(response);

                const success_status = response.data.status;
                const success_message = response.data.message;

                 swal.fire({
                icon: 'success',
                title: success_status,
                text: success_message,

            })
            this.$router.push('/');
              
            } catch (err) {
                console.log(err);
            }
        },

    }
}
</script>
