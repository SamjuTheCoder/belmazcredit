<template>
<b-container>
    <div>
        <div>
            <v-data-table :headers="headers" :items="indexSn" class="elevation-1">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>
                            <h5>Sponsor Listing</h5>
                        </v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                    <v-icon small class="mr-2">
                                        mdi-plus-box-multiple-outline
                                    </v-icon> Add a Sponsor
                                </v-btn>
                            </template>
                            <v-card>
                                <div class="title pt-4">
                                    <span class="text-h6">Add a Sponsor</span>
                                </div>

                                <v-card-text>
                                    <v-container>
                                        <form ref="form" lazy-validation @submit.prevent="save">
                                            <v-row>

                                                <v-col cols="12">
                                                    <b-form-input v-model="editedItem.sponsor_name" type="text" placeholder="Sponsor Name"></b-form-input>

                                                </v-col>
                                                <v-col cols="12">
                                                    <b-form-input v-model="editedItem.sponsor_email" type="email" placeholder="Sponsor Email"></b-form-input>

                                                </v-col>
                                                <v-col cols="12">
                                                    <b-form-input v-model="editedItem.number" type="number" placeholder="Sponsor Phone Number"></b-form-input>
                                                </v-col>
                                                <v-col cols="12">
                                                    <b-button v-b-modal.modal-multi-1 style="background: #20618c; color: #fff; width: 100%" @click="save" size="lg">Continue</b-button>
                                                </v-col>

                                            </v-row>
                                        </form>
                                    </v-container>
                                </v-card-text>

                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.schemes="{item}">
                    <span class=""> ({{item.schemes}})</span>
                    <span v-if=" item.schemes == 0 "></span>
                    <span v-else>
                        <router-link  style="text-decoration: none;" :to="`/listSponsorSh/${item.id}`"> view</router-link>
                    </span>
                </template>
                                 
                <template v-slot:item.status="{item}">
                    <div>
                        <v-btn style="color:red" v-if="item.status == 1" @click="toogleStatus(item.id)" text>De-activate</v-btn>
                        <v-btn style="color:green" text v-else @click="toogleStatus(item.id)">Activate</v-btn>
                    </div>
                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">
                        Reset
                    </v-btn>
                </template>
            </v-data-table>

        </div>
        <div>
      
        </div>
    </div>
</b-container>
</template>

<script>
import swal from 'sweetalert2';
export default {
    data: () => ({

        dialog: false,
        dialogDelete: false,
        headers: [{
                text: 'S/N',
                align: 'start',
                value: 'sn',
                class: "blue lighten-5"
            },
            {
                text: 'Sponsor Name',
                value: 'sponsor_name',
                class: "blue lighten-5"
            },
            {
                text: 'Email Address',
                value: 'sponsor_email',
                class: "blue lighten-5"
            },
            {
                text: 'Phone Number',
                value: 'number',
                class: "blue lighten-5"
            },
            
             {
                text: 'No. Active Schemes',
                value: 'schemes',
                class: "blue lighten-5"
            },
            
            {
                text: 'Date created',
                value: 'date_created',
                class: "blue lighten-5"
            },

            {
                text: 'Status',
                value: 'status',
                class: "blue lighten-5"
            },
            {
                text: '',
                value: 'edit',
                class: "blue lighten-5"
            },
             {
                value: 'id',
                 align: ' d-none' 
            },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            sn: [],
            sponsor_name: '',
            sponsor_email: '',
            number: '',
            schemes: '',
            status: '',

        },
        defaultItem: {
            sn: [],
            sponsor_name: '',
            sponsor_email: '',
            number: '',
            schemes: '',
            status: '',

        },
    }),
    beforeMount() {
        const list = this.find();
    },

    computed: {
        indexSn() {
            return this.desserts.map((d, index) => ({
                ...d,
                sn: index + 1
            }))
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        async toogleStatus(id) {
            try {
                const url = "/sponsor-status";
                const resp = await this.$http.post(url, {
                    id
                })
                console.log({
                    id
                })
                // TODO check if resp is successful

                // change the status from the front
                if (resp.data.code == '00') {
                    const success_message = resp.data.message;
                    const success_status = resp.data.status;
                    swal.fire({
                        icon: 'success',
                        title: success_status,
                        text: success_message,
                    });
                } else {
                    const error_message = resp.data.message;
                    swal.fire({
                        icon: 'Error',
                        title: 'error',
                        text: error_message,
                    });
                }

                this.desserts = this.desserts.map(d => {
                    console.log();
                    if (d.id == id) {
                        return {
                            ...d,
                            status: d.status == 1 ? 0 : 1
                        }
                    }
                    return d
                })

            } catch (error) {

            }
        },
        initialize() {
            this.desserts = []
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        async find() {
            try {
                const response = await this.$http.get('/list-sponsors', )

                //this.desserts = response.data.data;
                //Getting the data and pushing it into the desserts array for each object in the array 
                response.data.data.forEach(el => {
                        

                        this.desserts.push({
                            status: el.status,
                            id: el.id,
                            //status: el.status === 1 ? "<a>Active</a>" : "<a> Not Active</a>",
                            sponsor_name: el.sponsor_name,
                            sponsor_email: el.sponsor_email,
                            number: el.sponsor_phone,
                            schemes: el.number_active_scheme,
                            date_created: el.date_created,
                        })
                   
                });
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        },

        async save() {
            if (this.editedItem.sponsor_name == '' || this.editedItem.sponsor_email == '' || this.editedItem.number == '') {
                swal.fire('Make sure you entered all fields properly', 'error');
                return;
            }
            try {
                //  console.log(this.institution_name, this.institution_code, "=-------------")
                const response = await this.$http.post('/add-sponsor', {
                    sponsor_name: this.editedItem.sponsor_name,
                    sponsor_email: this.editedItem.sponsor_email,
                    sponsor_phone: this.editedItem.number,

                });

                console.log(response);
                if (response.data.code == '00') {
                    const success_message = response.data.message;
                    const success_status = response.data.status;
                    swal.fire({
                        icon: 'success',
                        title: success_status,
                        text: success_message,
                    });
                } else {
                    const error_message = response.data.message;
                    swal.fire({
                        icon: 'Error',
                        title: 'error',
                        text: error_message,
                    });
                }
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }

                this.close()

            } catch (err) {
                console.log(err);
            }

        },
    },
}
</script>

<style>
.title {
    text-align: center;
}
</style>
