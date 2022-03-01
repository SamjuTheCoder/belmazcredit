<template>
<div class="bodyMargin">
    <div class="py-4">
        <h5>Create Scheme</h5>
    </div>
    <div>
        <div>

            <b-tabs card justified v-model="tabIndex" class="mainBB py-3">
                <b-tab title="Setup" class="mainBB generictab py-3" title-item-class="disabledTab" ref="wizard">
                    <form ref="form" lazy-validation @submit.prevent="rest">
                        <div class="bby">
                            <b-row>
                                <b-col class="col-sm-12 col-md-12 col-lg-6">
                                    <div class="inputCont mt-5">

                                        <b-row>

                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="repayment_url" class="py-4" type="text" placeholder="Repayment Url"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="repayment_account_number" class="py-4" type="text" placeholder="Repayment Account Number"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="loan_interest_value" class="py-4" type="number" placeholder="Loan Intrest Value"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="handle_eligibility" class="py-4" type="text" placeholder="Handle Eligibility"></b-form-input>
                                                </div>
                                            </b-col>
                                        </b-row>

                                    </div>
                                </b-col>
                                <b-col class="col-sm-12 col-md-12 col-lg-6">
                                    <div class="inputCont mt-5">

                                        <b-row>

                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-select v-model="disbursement_channel" class="select p-3 " style="width:100%; background:#fff;" :options="options"></b-form-select>

                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="repayment_bank_code" class="py-4" type="text" placeholder="Repayment Bank Code"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="interest_sharing_type" class="py-4" type="text" placeholder="Intrest Sharing Type"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="loan_duration_month" class="py-4" type="number" placeholder="Loan Duration In Months"></b-form-input>
                                                </div>
                                            </b-col>
                                        </b-row>

                                    </div>
                                </b-col>

                            </b-row>

                        </div>

                        <div class="bby">
                            <div>
                                <h5>Beneficiary Setup</h5>
                            </div>

                            <b-row>

                                <b-col class="col-sm-12 col-md-12 col-lg-6">
                                    <div class="inputCont mt-5">

                                        <b-row>

                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="bank_code" class="py-4" type="text" placeholder="Bank Code"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="account_number" class="py-4" type="number" placeholder="Account Number"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="email_address" class="py-4" type="email" placeholder="Email Address"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="settlement_value" class="py-4" type="number" placeholder="Settlement Value"></b-form-input>
                                                </div>
                                            </b-col>
                                        </b-row>

                                    </div>
                                </b-col>
                                <b-col class="col-sm-12 col-md-12 col-lg-6">
                                    <div class="inputCont mt-5">

                                        <b-row>

                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="bank_name" class="py-4" type="text" placeholder="Bank Name"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="account_name" class="py-4" type="text" placeholder="Account Name"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="phone_number" class="py-4" type="text" placeholder="Phone Number"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div class="select">
                                                    <b-row class="pl-2">
                                                        <b-col>
                                                            Settlement Type:
                                                        </b-col>
                                                        <b-col class="">
                                                            Amount
                                                        </b-col>
                                                        <b-col class="p-0">
                                                            <v-switch v-model="settlement_type" color="primary" true-value="precentage" false-value="amount"></v-switch>
                                                        </b-col>
                                                        <b-col class="px-0">
                                                            Precentage
                                                        </b-col>
                                                    </b-row>
                                                </div>
                                            </b-col>
                                        </b-row>

                                    </div>
                                </b-col>

                            </b-row>

                        </div>
                        <div>
                            <b-row>
                                <b-col class="col-4"></b-col>
                                <b-col class="col-4">
                                    <div>
                                        <!-- <b-button v-b-modal.modal-multi-1 v-on:click="tabIndex = 0" style="background: #20618c; color: #fff; width: 100%" size="lg" @click="rest" type="submit">Continue</b-button> -->
                                    </div>
                                    <div>
                                        <b-button v-b-modal.modal-multi-1  @click="rest" style="background: #20618c; color: #fff; width: 100%" size="lg">Continue</b-button>

                                    </div>
                                </b-col>
                                <b-col class="col-2"></b-col>

                            </b-row>
                        </div>

                    </form>
                </b-tab>
                <b-tab title="Eligibility" title-item-class="disabledTab">
                     <form ref="form" lazy-validation @submit.prevent="submit">
                        <div class="bby">

                            <b-row>
                                <b-col class="col-sm-12 col-md-12 col-lg-6">
                                    <div class="inputCont mt-5">

                                        <b-row>

                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="maxLoan" class="py-4" type="text" placeholder="Maximum Loan Amount Request"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-select v-model="selected2" class="select p-3 " style="width:100%; background:#fff;" :options="options"></b-form-select>

                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="minimumMonthService" class="py-4" type="text" placeholder="Minimum Month of service"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="percentageLoan" class="py-4" type="text" placeholder="Paid previous month "></b-form-input>
                                                </div>
                                            </b-col>
                                        </b-row>

                                    </div>
                                </b-col>
                                <b-col class="col-sm-12 col-md-12 col-lg-6">
                                    <div class="inputCont mt-5">

                                        <b-row>

                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-select v-model="selected3" class="select p-3 " style="width:100%; background:#fff;" :options="optionss"></b-form-select>

                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="lastConsecutivePay" class="py-4" type="text" placeholder="Last consecutive pay in months"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="percentageSalary" class="py-4" type="text" placeholder="Percentage of salary for loan"></b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col class="col-12">
                                                <div>
                                                    <b-form-input v-model="minimumMonthRetirement" class="py-4" type="text" placeholder="minimum month to retirement"></b-form-input>
                                                </div>
                                            </b-col>
                                        </b-row>

                                    </div>
                                </b-col>

                            </b-row>

                        </div>
                        <div>
                            <b-row>
                                <b-col class="col-4"></b-col>
                                <b-col class="col-4">
                                    <div>
                                        <b-button v-b-modal.modal-multi-1 @click=" submit" style="background: #20618c; color: #fff; width: 100%" size="lg" type="submit">Continue</b-button>
                                    </div>
                                </b-col>
                                <b-col class="col-4"></b-col>

                            </b-row>
                        </div>
                    </form>

                  
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
        tabIndex: 0,
        repayment_url: '',
        disbursement_channel: '',
        repayment_account_number: '',
        repayment_bank_code: '',
        disbursement_channel: null,
        repaymentCode: '',
        loan_interest_value: '',
        interest_sharing_type: '',
        handle_eligibility: '',
        loan_duration_month: '',
        bank_code: '',
        bank_name: '',
        account_number: '',
        account_name: '',
        email_address: '',
        phone_number: '',
        settlement_value: '',
        selected2: null,
        settlement_type: '',

        max_loan_request:'',
        is_account_aponsor_bank:'',
        is_customer_active:'',
        last_pay_month:'',
        min_month_service:'',
        percentage_salary_loan:'',
        paid_previous_month:'',
        min_month_retirement:'',








        options: [{
                value: null,
                text: 'Disbursment channel'
            },
            {
                value: 'Electronic',
                text: 'Electronic'
            },
            {
                value: 'Digital',
                text: 'Digital',

            },
            {
                value: 'Manual',
                text: 'Manual',

            },
        ],
        optionsz: [{
                value: null,
                text: 'Is account sponor bank'
            },
            {
                value: 'a',
                text: '20'
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
                value: '63',
                text: '63'
            },
            {
                value: '82',
                text: '87',

            },
        ],
    }),
    mounted() {
        this.code = this.$route.params.code;
        console.log(this.code)

    },
    methods: {
        async find() {

        },
        async rest() {
            if (!this.repayment_url || !this.disbursement_channel || !this.repayment_account_number || !this.repayment_bank_code ||
                !this.loan_interest_value || !this.interest_sharing_type || !this.handle_eligibility || !this.loan_duration_month || !this.bank_code ||
                !this.bank_name || !this.account_number || !this.account_name || !this.email_address || !this.phone_number ||
                !this.settlement_value || !this.settlement_type) {
                swal.fire('Make sure you entered all fields properly', 'error');
                return;
            }
            try {

                const response = await this.$http.post('/scheme-profile-setup                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ', {
                    scheme_id: this.code,
                    repayment_url: this.repayment_url,
                    disbursement_channel: this.disbursement_channel,
                    repayment_account_number: this.repayment_account_number,
                    repayment_bank_code: this.repayment_bank_code,
                    loan_interest_value: this.loan_interest_value,
                    interest_sharing_type: this.interest_sharing_type,
                    handle_eligibility: this.handle_eligibility,
                    loan_duration_month: this.loan_duration_month,
                    bank_code: this.bank_code,
                    bank_name: this.bank_name,
                    account_number: this.account_number,
                    account_name: this.account_name,
                    email_address: this.email_address,
                    phone_number: this.phone_number,
                    settlement_value: this.settlement_value,
                    settlement_type: this.settlement_type,

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
            if (!this.max_loan_request || !this.is_account_aponsor_bank || !this.is_customer_active || !this.last_pay_month || !this.min_month_service ||
                !this.percentage_salary_loan || !this.paid_previous_month || !this.min_month_retirement) {
                swal.fire('Make sure you entered all fields properly', 'error');
                return;
            }
            try {

                const response = await this.$http.post('/profile-setup', {
                    scheme_id: this.code,
                   max_loan_request: this.max_loan_request,
                    is_account_aponsor_bank: this.is_account_aponsor_bank,
                    is_customer_active: this.is_customer_active,
                    last_pay_month: this.last_pay_month,
                    min_month_service: this.min_month_service,
                   percentage_salary_loan: this.percentage_salary_loan,
                    paid_previous_month: this.paid_previous_month,
                    min_month_retirement: this.min_month_retirement,
                 

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

        }

    }
}
</script>

<style>
.cont {
    text-align: center;
    background: #f9f9f9;
}

.disabledTab {
    pointer-events: none;
}

.select {
    width: 100%;
    background: #fff;
    border: 2px solid #bcc1c4;
    border-radius: 5px;
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
