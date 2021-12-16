
<template>
    <v-container fluid>
        <v-snackbar v-model="errorAlert" bottom left>
            {{ errorMsg }}
            <v-btn color="pink" text @click="errorAlert = false"></v-btn>
        </v-snackbar>
        <v-row align="center" justify="center" class="mb-5">
            <v-col cols="14" md="14" lg="14" sm="14" class="">
                <v-row>
                    <v-col md="10" lg="12" sm="13" cols="14">
                        <p class="google-font mb-0" style="font-size:160%;color: #1a73e8;"> <i>¿QUÈ ES LA REALIDAD VIRTUAL?</i></p>
                        <p class="google-font mt-0 mb-0" style="font-size:100%">La Realidad Virtual (RV) es un entorno de escenas y objetos de apariencia real —generado mediante tecnología informática— que crea en el usuario la sensación de estar inmerso en él. 
                            <br> Dicho entorno se contempla a través de un dispositivo conocido como gafas o casco de Realidad Virtual. <br> El invento se remonta nada más y nada menos que a mediados de los años 50. A partir de ahí, el desarrollo tecnológico y de software en los años siguientes trajo consigo las evoluciones pertinentes tanto en dispositivos como en el diseño de interfaces</p>
                    </v-col>
                </v-row>
      <v-col md="5" sm="10" cols="10" class>
                <v-img
          :src="checkExistance(config.generalConfig.homeImage,0)?config.generalConfig.homeImage:require('@/assets/img/dontremove/VRealidad.png')"
          width="100%"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
       </v-col>
    </v-col>
        </v-row>
         <v-row align="center" justify="center" class="mb-5">
            <v-col cols="14" md="14" lg="14" sm="14" class="">
                <v-row>
                    <v-col md="14" lg="14" sm="14" cols="17">
                        <p class="google-font mb-0" style="font-size:130%;color: #1a73e8;">      <i>USOS INOVADORES DE REALIDAD VIRTUAL</i>
                        </p>
                        <p class="google-font mt-0 mb-0" style="font-size:130%">Gastronomía
                           Ahora podemos viajar virtualmente a distintos lugares y sumergirnos en determinados ambientes mientras degustamos los platos.</p>
                        <p class="google-font mt-0 mb-0" style="font-size:130%">Medicina
                           La nueva tecnología permite unir la robótica con la realidad virtual, consiguiendo un escenario muy parecido al real. En primer lugar, se realiza una simulación de habilidades con maniquíes, los cuales cuentan con órganos o partes completas del cuerpo humano. Este sistema permite adquirir habilidades manuales a los estudiantes, reconocer la estructura de los órganos y también, aprender a utilizar diferentes equipos como el desfibrilador.</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import service from '@/services/appservices'
import { mapState } from 'vuex'
    export default {
        name: 'App',
        components:{
        },
        computed:{
            ...mapState(["config"])
        },
        data: () => ({
            eventsData:[],
            showData: false,
            isLoading: true,
            search:'',
            notFoundUpcomingEventFlag: false,
            errorAlert: false,
            errorMsg: '',
            headers: [
                {
                    text: 'Event Name',
                    align: 'start',
                    value: 'name',
                },
                { text: 'Date', value: 'local_date' },
                { text: 'See More', value: 'link' },
            ],
        }),
        mounted(){
            this.getAllMeetupPastEvents()
        },
        methods:{
            getAllMeetupPastEvents(){
                this.isLoading = true
                service.getAllMeetupPastEvents(this.config.keysandsecurity.meetup).then(res=>{
                    if(res.success){
                        this.eventsData = res.data
                        this.isLoading = false
                    }else{
                        this.isLoading = false
                    }
                }).catch(e=>{
                    this.errorMsg = "Issue found with " + e;
                    this.isLoading = false
                    this.errorAlert = true;
                })
            }
        }
    };
</script>