<template>
    <v-container fluid class="">
        <v-row align="center" justify="center">
            <v-col cols="12" md="10" lg="10" sm="12" class="text-center mb-0" >
                <p class="google-font mb-1" style="font-weight: 350;font-size:180%">
                    <b>
                        Realidad
                        <span style="font-weight: 350;color: #8200FF;">Virtual</span> 
                        
                       <!--  <span style="color: #1a73e8;">Meetups</span> -->
                    </b> 
                </p>
                <!-- <p class="google-font mb-0" style="font-size:180%">Our Events & Meetups</p> -->
                <p class="google-font mt-0" style="font-size:95%">La Realidad Virtual (RV) es un entorno de escenas y objetos de apariencia real —generado mediante tecnología informática.</p>
                <p class="google-font mt-0" style="font-size:95%">La realidad virtual —RV por sus siglas en español— es un entorno de experiencias inmersivas que permiten al usuario interactuar con escenarios y objetos que simulan la realidad, gracias al uso de tecnología informática avanzada. También se le conoce solo como VR, que quiere decir Virtual Reality en inglés.</p>
                <router-link
                    to="/events"
                    text
                    color="#113CFC"
                    class="ma-0 google-font mb-0"
                    style="border-radius:5px;text-transform: capitalize;text-decoration:none;color:#113CFC;"
                >Leer Màs</router-link>
                <v-col md="5" sm="15" cols="16" class>
                <v-img
          :src="checkExistance(config.generalConfig.homeImage,0)?config.generalConfig.homeImage:require('@/assets/img/dontremove/Fondo.png')">
          <template v-slot:placeholder> 
            <v-row>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        </v-col>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12" class="mt-0 px-0">
               <v-container fluid class="px-2 py-0">
                   <v-row v-if="showLoader" class="">
                       <v-col v-for="i in 4" :key="i" md="3" lg="3" sm="6" cols="6" class="pa-2">
                           <v-sheet
                                :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                                class="">
                                <v-skeleton-loader
                                class="mx-auto"
                                type="article"
                                ></v-skeleton-loader>
                            </v-sheet>
                       </v-col>
                   </v-row>
                   <v-row v-else class="no-gutters pa-0 ma-0" >
                       <v-col md="3" lg="3" sm="6" cols="6" class="pa-1 ma-0" v-for="(item,i) in eventsData.slice(0,4)" :key="i">
                           <!-- {{item}} -->
                            <eventCard :data="{data:item}" />
                       </v-col>
                   </v-row>

                   <v-row v-if="notFoundEventFlag">
                       <v-col md="12" lg="12" sm="12" cols="12" class="pa-2 text-center">
                            <v-icon>mdi-close-octagon-outline</v-icon>
                            <p>Events Not Found!</p>
                       </v-col>
                   </v-row>
               </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import service from '@/services/appservices'
import eventCard from '@/components/events/UpcomingEventCard'
import { mapState } from 'vuex'
    export default {
        name: 'Eventshome',
        inject: ['theme'],
        components:{
            eventCard
        },
        computed:{
            ...mapState(["config"])
        },
        data: () => ({
            eventsData: [],
            errorMsg:'',
            showLoader: true,
            notFoundEventFlag: false
        }),
        mounted(){
            this.getAllMeetupPastEvents()
        },
        methods:{
            getAllMeetupPastEvents(){
                this.showLoader = true
                service.getAllMeetupPastEvents(this.config.keysandsecurity.meetup).then(res=>{
                    if(res.success){
                        this.eventsData = res.data
                        this.showLoader = false;
                    }else{
                        this.notFoundEventFlag = true;
                        this.showLoader = false;
                    }
                    
                }).catch(e=>{
                    this.errorMsg = "Issue found with " + e;
                    this.showLoader = false;
                })
            }
        }
};
</script>

<style scoped>
   
</style>