<template>
<b-contanier fluid>
    <div class="cont">
        <div class="cont1 position-relative">
            <div class="position-absolute bottom-0 start-50 translate-middle-x">
                <div class="logo_wrap">
                    <div class="circ p-3"><img src="logo.svg"></div>

                    <div class="main p-4">
                        <form ref="form" v-model="valid" lazy-validation @submit.prevent="rest">
                            <b-row>
                                <b-col class="col-12 mt-6">
                                    <div>
                                        <h5>Forgot Password</h5>
                                    </div>
                                </b-col>
                                <b-col class="col-12">
                                    <div>
                                        <h6 style="color:#636363">Enter your email address and we will send you a rest link.</h6>
                                    </div>
                                </b-col>
                                <b-col class="col-12">
                                    <div>
                                        <b-form-input v-model="email" type="email" placeholder="Email Address"></b-form-input>
                                    </div>
                                </b-col>
                                <b-col class="col-12">
                                    <div>
                                      
                                        <b-button v-b-modal.modal-multi-1 @click="rest" style="background: #20618c; color: #fff; width: 100%" size="lg">
                                            <router-link style="text-decoration: none; color:#fff" :to="`/setupInstitution/${item.id}`">Continue</router-link>
                                        </b-button>
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
export default {
    data: () => ({
        email: ''
    }),
    methods: {

        async rest() {
            if (!this.email) {
                swal.fire({
                    icon: 'warning',
                    title: 'Error',
                    text: 'Please enter a valid email..',

                })
                return;
            }
            try {
                const response = await this.$http.post('/auth/forgot-password', {
                    email: this.email

                });

                console.log(response);
                swal.fire({
                    icon: 'success',
                    title: 'Confirm',
                    text: 'Email was sent successfully',

                })

                this.$router.push('/rest');

            } catch (err) {
                console.log(err);
            }

        },
    }
}
</script>

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
    z-index: 200px;

}

.logo_wrap {
    position: relative;

}
</style>
