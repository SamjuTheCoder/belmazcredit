<template>
<div class="bodyMargin">
    <div class="py-4">
        <h5>Create Institution</h5>
    </div>
    <div>
        <div>

            <b-tabs card justified v-model="tabIndex" class=" mainBB py-3" title-item-class="disabledTab" >
                <b-tab title="Profile Setup" class="generictab mainBB py-3"  title-item-class="disabledTab" ref="wizard" >
                    <div class="bby">

                        <b-row>
                            <b-col class="col-sm-1 col-md-2 col-lg-4"></b-col>
                            <b-col class="col-sm-10 col-md-8 col-lg-4">
                                <div class="inputCont mt-5">
                                    <form ref="form" lazy-validation @submit.prevent="rest">
                                        <b-row>

                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="verification" class="py-4" type="text" placeholder="Institution verification Url"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="eligibility" class="py-4" type="text" placeholder="Institution Eligibility Url"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="lien" class="py-4" type="text" placeholder="Institution Lien Url"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-button v-b-modal.modal-multi-1 style="background: #20618c; color: #fff; width: 100%" size="lg" @click="rest" type="submit">Continue</b-button>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </form>
                                </div>
                            </b-col>
                            <b-col class="col-sm-1 col-md-2 col-lg-4"></b-col>

                        </b-row>

                    </div>
                </b-tab>
                <b-tab title="Eligibility Status" title-item-class="disabledTab">
                    <div class="text py-3">
                        <h6>Fill in the form below to complete your Eligibility status</h6>
                    </div>
                    <div class="bby">

                        <b-row>
                            <b-col class="col-sm-1 col-md-2 col-lg-4"></b-col>
                            <b-col class="col-sm-10 col-md-8 col-lg-4">
                                <div class="inputCont mt-5">
                                    <form ref="form" lazy-validation @submit.prevent="submit">
                                        <b-row>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="request" class="py-4" type="number" placeholder="Maximum loan amount Request"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="consecutive" class="py-4" type="number" placeholder="Last consecutive pay in months"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                   <b-form-input v-model="monthService" class="py-4" type="number" placeholder="Last consecutive pay in months"></b-form-input>

                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="loan" class="py-4" type="number" placeholder="Percentage of salary for loan "></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="consecutivePay" class="py-4" type="number" placeholder="Last consecutive pay in months"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-button v-b-modal.modal-multi-1 style="background: #20618c; color: #fff; width: 100%" size="lg" @click="submit" type="submit">Continue</b-button>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </form>
                                </div>
                            </b-col>
                            <b-col class="col-sm-1 col-md-2 col-lg-4"></b-col>

                        </b-row>

                    </div>
                </b-tab>
            </b-tabs>

        </div>
    </div>
</div>
</template>


<script>
import swal from 'sweetalert2';

export default {
    data: () => ({
        verification: '',
        eligibility: '',
        lien: '',
        code: '',
       tabIndex: 0,
        consecutivePay: '',
        selected: null,
        retirement: '',
        request: '',
        consecutive: '',
        monthService: '',
        loan: '',

        options: [{
                value: null,
                text: 'Select minimum months of service '
            },
            {
                value: 'a',
                text: 'This is First option'
            },
            {
                value: 'b',
                text: 'Selected Option',

            },
        ],
        optionss: [{
                value: null,
                text: 'Select minimum months of retirement '
            },
            {
                value: 'a',
                text: 'This is First option '
            },
            {
                value: 'b',
                text: 'Selected Option',

            },
        ],
    }),
    mounted() {
        this.code = this.$route.params.code;
        console.log(this.code)

    },
    methods: {
        async rest() {

            if (this.verification == '' || this.eligibility == '' || this.lien == '') {
                swal.fire('Make sure you entered all fields properly', 'error');
                return;
            }
            try {

                const response = await this.$http.post('/profile-setup', {
                    institution_id: this.code,
                    verification_url: this.verification,
                    eligibility_url: this.eligibility,
                    lien_url: this.lien,

                });

                console.log({
                    response
                });
                if (response.data.code == '00') {
                    const success_message = response.data.message;
                    const success_status = response.data.status;
                    swal.fire({
                        icon: 'success',
                        title: success_status,
                        text: success_message,
                    });
                    this.tabIndex++;
                } else {
                    const error_message = response.data.message;
                    swal.fire({
                        icon: 'warning',
                        title: 'error',
                        text: error_message,
                    });
                }

            } catch (err) {
                console.log(err);

            }

        },
        async submit() {
            if (this.request == '' || this.consecutive == '' || this.service == '' || this.loan == '' || this.consecutivePay == '') {
                swal.fire('Make sure you entered all fields properly', 'error');
                return;
            }

            try {

                const response = await this.$http.post('/eligibility-setup', {
                    institution_id: this.code,
                    max_loan_amount: Number(this.request),
                    last_pay_month: Number(this.consecutive),
                    min_month_service:Number(this.monthService),                  
                    percentage_salary_loan:Number(this.loan),
                    min_month_retirement: Number(this.consecutivePay),

                });

                console.log({response});
                if (response.data.code == '00') {
                    const success_message = response.data.message;
                    const success_status = response.data.status;
                    swal.fire({
                        icon: 'success',
                        title: success_status,
                        text: success_message,
                    });
                      this.$router.push('/institution');
                } else {
                    const error_message = response.data.message;
                    swal.fire({
                        icon: 'warning',
                        title: 'error',
                        text: error_message,
                    });
                }

            } catch (err) {
                console.log(err);

            }
           
           
          

        }
    }
}
</script>
<style>
.cont {
    text-align: center;
    background: #f9f9f9;
}

.select {
    width: 100%;
    background: #fff;
    border: 2px solid #bcc1c4;
}

.text {
    text-align: center;
    background: #edf2f3;

}

.title {
    background: #edf2f3;
    text-align: center;
}

.bodyMargin {
    margin: 20px;
}

.mainBB {
    background: #f9f9f9;
}

.bby {
    margin: 30px;
    background: #f9f9f9;

}
</style>

