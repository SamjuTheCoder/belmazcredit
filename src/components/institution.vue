<template>
<b-container>

    <div>
        <v-data-table :headers="headers" :items="indexSn" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Institution Listing</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                <v-icon small class="mr-2">
                                    mdi-plus-box-multiple-outline
                                </v-icon> Create institution
                            </v-btn>
                        </template>

                        <v-card>
                            <div class="title pt-4">
                                <span class="text-h6">{{ formTitle }}</span>
                            </div>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                            <b-form-input v-model="editedItem.institution_name" placeholder="Institution Name"></b-form-input>
                                        </v-col>
                                        <v-col cols="12">
                                            <b-form-input v-model="editedItem.institution_code" placeholder="Institution Code"></b-form-input>
                                        </v-col>
                                        <v-col cols="12">
                                            <b-button v-b-modal.modal-multi-1 style="background: #20618c; color: #fff; width: 100%" @click="save" size="lg">Continue</b-button>
                                        </v-col>

                                    </v-row>
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
            <template v-slot:item.edit="{ item }">
                <v-icon large class="mr-2" @click="editItem(item)">
                    mdi-dots-horizontal
                </v-icon>
            </template>
            <template v-slot:item.setup="{item}">
                <div>
                    <router-link  style="text-decoration: none;" :to="`/setupInstitution/${item.id}`">Setup</router-link>
                </div>
            </template>
            
            <template v-slot:item.setupitem="{item}">
                <!-- <span id="myDIV" class="active">Active</span>
               <span  class="deactive">Deactivate</span> -->
                <button id="container" @click="change(item)">Deactivate</button>
            </template>

            <template v-slot:item.status="{item }">
                <div>
                    <v-btn style="color:red" v-if="item.status == 1" @click="toogleStatus(item.institution_code)" text >De-activate</v-btn>
                    <v-btn style="color:green" text v-else @click="toogleStatus(item.institution_code)" >Activate</v-btn>
                </div>
            </template>
            <!-- <div onclick="myFunction()"> </div> -->
            <!-- <span id="myDIV" class="active">Active</span>
                 -->
            <!--    <v-btn text @click="submit2">{{label}}</v-btn> -->

            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>

    </div>
    <div>
        <div>
            <!-- <b-table striped hover :items="items"></b-table> -->
        </div>
    </div>

</b-container>
</template>

<script>
import swal from 'sweetalert2';
//import axios from 'axios';


export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
         tabIndex: 0,
        // label: 'Active',
        headers: [{
                text: 'S/N',
                align: 'start',
                value: 'sn',
                class: "blue lighten-5"

            },
            {
                text: 'Institution Name',
                value: 'institution_name',
                class: "blue lighten-5"
            },
            {
                text: 'Institution Code',
                value: 'institution_code',
                class: "blue lighten-5"
            },
            {
                text: 'Actions',
                value: 'setup',
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
            }
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            sn: [],
            institution_name: '',
            institution_code: '',
            status:''

        },
        defaultItem: {
            sn: [],
            institution_name: '',
            institution_code: '',
            status: ''

        },
    }),
    beforeMount(){
     this.find();

    },

    computed: {
        indexSn() {
            return this.desserts.map((d, index) => ({
                ...d,
                sn: index + 1
            }))
        },
        formTitle() {
            return this.editedIndex === -1 ? 'Enter the institution name and identity code' : 'Edit or Activate the institution name and identity code'
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
        deleteItemConfirm(){
            console.log("Here");
        },

        initialize() {
            this.desserts = [ ]
        },

        async toogleStatus(institution_code){
            try {
                const url = "/institution-status";
                const resp = await this.$http.post(url, {
                    institution_code
                })
                console.log({institution_code})
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
                    if (d.institution_code == institution_code) {
                        return {...d, status: d.status == 1? 0: 1}
                    }
                    return d
                })

            } catch (error) {
                
            }
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        myFunction() {
            var x = document.getElementById("myDIV");
            if (x.innerHTML === "Hello") {
                x.innerHTML = "active";
            } else {
                x.innerHTML = "deactive";
            }
        },

        submit2() {
            this.label = 'Deactivate'
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        change(i) {
            console.log(i);
            if (this.desserts.setupitem == 'Aactive') {
                this.setupitem = 'Deactivate';
            } else {
                this.setupitem = 'Active'
            }
        },

async find(){
try{
    const response = await this.$http.get('/list-institution', )
   //this.desserts = response.data.data;
   //Getting the data and pushing it into the desserts array for each object in the array 
   response.data.data.forEach(el => {
       this.desserts.push(
           {
               status: el.status,
               id: el.id,
            //    status: el.status === 1 ? "<a>Active</a>" : "<a> Not Active</a>",
               institution_code: el.institution_code,
               institution_name: el.institution_name,

           }
       )
   });
    console.log(response);
}catch (err) {
                console.log(err);
            }
},


        async save() {
            if (this.editedItem.institution_name == '' || this.editedItem.institution_code == '') {
                swal.fire({
                    icon: 'warning',
                    title: 'Error...',
                    text: 'Check your login details and try again  ',
                })

                return;
            }
            try {
              //  console.log(this.institution_name, this.institution_code, "=-------------")
                const response = await this.$http.post('/create-institution', {
                    institution_name: this.editedItem.institution_name,
                    institution_code: this.editedItem.institution_code,
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

<style scoped>
.title {
    text-align: center;

}



/* tbody tr:nth-of-type(odd) {
   background-color: rgba(0, 0, 0, .05);
 } */
.theme--light.v-data-table tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .03);
}
</style>
