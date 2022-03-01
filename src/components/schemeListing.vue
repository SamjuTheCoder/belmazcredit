<template>
<b-container>
    <div>
        <div>
            <v-data-table :headers="headers" :items="indexSn" class="elevation-1">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Scheme Listing</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                    <v-icon small class="mr-2">
                                        mdi-plus-box-multiple-outline
                                    </v-icon> Create a Scheme
                                </v-btn>
                            </template>
                            <v-card>
                                <div class="title pt-4">
                                    <span class="text-h6">Enter the scheme name </span>
                                </div>

                                <v-card-text>
                                    <v-container>
                                        <v-row>

                                            <v-col cols="12">
                                                <b-form-input v-model="editedItem.scheme_name" placeholder="Scheme Name"></b-form-input>

                                            </v-col>
                                           
                                            <v-col cols="12">
                                               
                                                <b-form-select v-model="editedItem.sponsor_name" class="select p-2 " style="width:100%; background:#fff;" :options="options"></b-form-select>
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
                 <template v-slot:item.setup="{item}">
                <div>
                    <router-link  style="text-decoration: none;" :to="`/schemeSetup/${item.id}`">Setup</router-link>
                </div>
                </template>
                 <template v-slot:item.status="{item }">
                <div>
                    <v-btn style="color:red" v-if="item.status == 1" @click="toogleStatus(item.id)" text >De-activate</v-btn>
                    <v-btn style="color:green" text v-else @click="toogleStatus(item.id)" >Activate</v-btn>
                </div>
            </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2">
                        mdi-dots-horizontal
                    </v-icon>
                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">
                        Reset
                    </v-btn>
                </template>
            </v-data-table>

        </div>
        <div>
            <div>
                <b-table striped hover :items="items"></b-table>
            </div>
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
        
        options: [

         ],      
     
        headers: [{
                text: 'S/N',
                align: 'start',
                sortable: false,
                value: 'sn',
                class: "blue lighten-5"
            },
            {
                text: 'Scheme Name',
                value: 'scheme_name',
                class: "blue lighten-5"
            },
            {
                text: 'Sponsor',
                value: 'sponsor_name',
                class: "blue lighten-5"
            },
            {
                text: 'Date Created',
                value: 'date_created',
                class: "blue lighten-5"
            },
            {
                text: 'Action',
                value: 'setup',
                class: "blue lighten-5"
            },

            {
                text: 'Status',
                value: 'status',
                class: "blue lighten-5"
            },
              {
                value: 'id',
                align: ' d-none'
                
            },
            {
                text: '',
                value: 'edit',
                sortable: false,
                class: "blue lighten-5"
            },
        ],
        sponsor_n: '',
        desserts: [],
        editedIndex: -1,
        editedItem: {
            sn: [],
            scheme_name: '',
            sponsor_name: null,
            date_created: '',
           
            status: 'Active',
            edit: '...',
        },
        defaultItem: {
            sn: [],
            scheme_name: '',
            sponsor_name: '',
            date_created: '',
           
            status: 'Active',
            edit: '',
        },
    }),
 beforeMount(){
    const list = this.find();
    const findSponsor = this.findSponsor();
  

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

   

    methods: {
        initialize() {
            this.desserts = [
            ]
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
          async toogleStatus(id){
            try {
                const url = "/scheme-status";
                const resp = await this.$http.post(url, {
                    id
                })
                console.log({id})
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
                        return {...d, status: d.status == 1? 0: 1}
                    }
                    return d
                })

            } catch (error) {
                
            }
        },
        async findSponsor(){
            const response = await this.$http.get('/list-sponsors')
           // this.editedItem.sponsor_name =response.data.data
            response.data.data.forEach(el => {
       this.options.push(
           { 
               value:el.id,                  
   text: el.sponsor_name  


           }
           
       )
         console.log(response)    
   });

        },
    
async find(){
    try{
   const response = await this.$http.get('/list-schemes', )
   const sponsor_res = await this.$http.get('/list-sponsors', )
   this.desserts = response.data.data;
   this.sponsor_n = sponsor_res.data.data;
   this.desserts = [];
   //Getting the data and pushing it into the desserts array for each object in the array 
   response.data.data.forEach(el => {

       sponsor_res.data.data.forEach(elx => {

            if( elx.id == el.sponsor_name ) {

                
            this.desserts.push(
                {
                    status: el.status,
                    id: el.id,         
                    scheme_name: el.scheme_name,
                    sponsor_name:  elx.sponsor_name,
                    date_created: el.date_created,

                }
            )
            
            }

         });
   });
    console.log(response);
}catch (err) {
                console.log(err);
            }
},
       async save() {
            if (!this.editedItem.scheme_name || !this.editedItem.sponsor_name) {
                swal.fire('Make sure you entered all fields properly', 'error');
                return;
            }
              try {
              //  console.log(this.institution_name, this.institution_code, "=-------------")
                const response = await this.$http.post('/add-scheme', {
                   scheme_name: this.editedItem.scheme_name,
                    sponsor_name: this.editedItem.sponsor_name,
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
.select {
    width: 100%;
    background: #fff;
    border: 2px solid #bcc1c4;
}
</style>
