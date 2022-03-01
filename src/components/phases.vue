<template>
<b-container>

    <div>
        <v-data-table :headers="headers" :items="indexSn" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Setup Phases</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                <v-icon small class="mr-2">
                                    mdi-plus-box-multiple-outline
                                </v-icon> Create
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
                                            <b-form-input v-model="editedItem.phases" placeholder="Phase Name"></b-form-input>
                                        </v-col>
                                        <v-col cols="12">
                                            <b-form-input v-model="editedItem.user_number" placeholder="Number of User"></b-form-input>
                                        </v-col>
                                        <v-col cols="12">
                                            <b-button v-b-modal.modal-multi-1 style="background: #20618c; color: #fff; width: 100%" @click="save" size="lg">Submit</b-button>
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
                class: "orange lighten-5"

            },
            {
                text: 'Phases',
                value: 'phases',
                class: "orange lighten-5"
            },
            {
                text: 'Number of Users',
                value: 'user_number',
                class: "orange lighten-5"
            },
                        
            {
                text: 'Action',
                value: 'edit',
                class: "orange lighten-5"
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
            phases: '',
            user_number: ''

        },
        defaultItem: {
            sn: [],
            phases: '',
            user_number: ''
            //status: ''

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
            return this.editedIndex === -1 ? 'Enter Phases and Number of Users' : 'Edit or Activate Phases and Number of Users'
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

        // async toogleStatus(institution_code){
        //     try {
        //         const url = "/setup-phases";
        //         const resp = await this.$http.post(url, {
        //             phases
        //         })
        //         console.log({phases})
        //         // TODO check if resp is successful

        //         // change the status from the front
        //          if (resp.data.code == '00') {
        //               const success_message = resp.data.message;
        //               const success_status = resp.data.success;
        //             swal.fire({
        //                 icon: 'success',
        //                 title: success_status,
        //                 text: success_message,
        //             });
        //         } else {
        //             const error_message = resp.data.message;
        //             swal.fire({
        //                 icon: 'Error',
        //                 title: 'error',
        //                 text: error_message,
        //             });
        //         }
               
        //         this.desserts = this.desserts.map(d => {
        //             console.log();
        //             if (d.phases == phases) {
        //                 return {...d, status: d.status == 1? 0: 1}
        //             }
        //             return d
        //         })

        //     } catch (error) {
                
        //     }
        // },

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
    const response = await this.$http.get('/list-phases', )
   //this.desserts = response.data.data;
   //Getting the data and pushing it into the desserts array for each object in the array 
   response.data.data.forEach(el => {
       this.desserts.push(
           {
               //status: el.status,
               id: el.id,
               phases: el.phases,
               user_number: el.user_number,

           }
       )
   });
    console.log(response);
}catch (err) {
                console.log(err);
            }
},


        async save() {
            if (this.editedItem.phases == '' || this.editedItem.user_number == '') {
                swal.fire({
                    icon: 'warning',
                    title: 'Error...',
                    text: 'Check your login details and try again  ',
                })

                return;
            }
            try {
              //  console.log(this.institution_name, this.institution_code, "=-------------")
                const response = await this.$http.post('/setup-phases', {
                    phases: this.editedItem.phases,
                    user_number: this.editedItem.user_number,
                });

                console.log(response);
                if (response.data.code == '00') {
                    const success_message = response.data.message;
                      const success_status = response.data.success;
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
