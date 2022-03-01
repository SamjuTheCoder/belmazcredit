<template>
<b-container>
    <div>
        <div>
            <h5>Change Password</h5>
        </div>
        <div class="buddy py-4">
            <b-row>
                <b-col class="col-sm-1 col-md-2 col-lg-4"></b-col>
                <b-col class="col-sm-10 col-md-8 col-lg-4">
                    <form ref="form" v-model="valid" lazy-validation @submit.prevent="rest">
                        <b-row>

                            <b-col class="col-12">
                             <h6><span>Enter your currnet password</span></h6> 
                                <div>
                                    <b-form-input v-model="current" class="py-4" type="password" placeholder="Current Password"></b-form-input>
                                </div>
                            </b-col>
                            <b-col class="col-12">
                                  <h6><span>Enter your new password</span></h6> 
                                <div>
                                    <b-form-input v-model="newpass" class="py-4" type="password" placeholder="New Password"></b-form-input>
                                </div>
                            </b-col>
                            <b-col class="col-12">
                                <div>
                                    <b-form-input v-model="confirmpass" class="py-4" type="password" placeholder="Confirm Password"></b-form-input>
                                </div>
                            </b-col>
                            <b-col class="col-12">
                                <div>
                                    <b-button v-b-modal.modal-multi-1 style="background: #20618c; color: #fff; width: 100%" size="lg" @click="rest" type="submit">Continue</b-button>
                                </div>
                            </b-col>
                        </b-row>
                    </form>
                </b-col>
                <b-col class="col-sm-1 col-md-2 col-lg-4"></b-col>
            </b-row>
        </div>

    </div>

</b-container>
</template>

<style>
.buddy {
    background:#f9f9f9;
}
</style>

<script>
import swal from 'sweetalert2';
export default {
    data: () => ({
        current: '',
        newpass: '',
        confirmpass: '',

    }),
    methods: {
        
         async rest() {
            if (!this.current || !this.newpass || !this.confirmpass) {
                swal.fire({
                    icon: 'warning',
                    title: 'Error...',
                    text: 'fill in your details and try again  ',
                })

                return;
            }
              if (this.newpass !== this.confirmpass) {
                swal.fire('Password not the same', 'error');
                return;
                }
            try {
                const response = await this.$http.post('/api/', {
                    currentPass: this.current,
                    newPass: this.newpass,
                    confirmPass:this.confirmpas,

                });

                console.log(response);
                swal.fire({
                    icon: 'success',
                    title: 'Password was changed successfully ...',
                    text: 'Kindly Proceed',
                });
              
            } catch (err) {
                console.log(err);
            }

        },

    }
}
</script>
