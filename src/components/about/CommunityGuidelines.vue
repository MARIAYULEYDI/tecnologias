<template>
    <v-container fluid class="py-0 my-0 mt-5">
        <!-- <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                
            </v-col>
        </v-row> -->
        <v-row align="center" class="py-0 my-0 mb-5">
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <h1 class="google-font mb-2">¿QUÈ ES LA REALIDAD VIRTUAL?</h1>
                <!-- {{communitydata.CommunityGuideline}} -->
                <v-expansion-panels accordion>
                    <v-expansion-panel  >
                        <v-expansion-panel-header>¿QUÈ ES?</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            La realidad aumentada es el término que se usa para describir al conjunto de tecnologías que permiten que un usuario visualice parte del mundo real a través de un dispositivo tecnológico con información gráfica añadida por este.
                        </v-expansion-panel-content>
                        <v-expansion-panel-header>¿QUIEN LA INVENTO?</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            La primera implementación tecnológica basada en realidad aumentada llegó en el 1957, por parte de Morton Heiling, un cinematógrafo que proponía en su Sensorama una experiencia multisensorial al usuario, compuesta por elementos visuales, sonoros y olfativos.
                        </v-expansion-panel-content>
                        <v-expansion-panel-header>APLICACIONES</v-expansion-panel-header>
                        <v-expansion-panel-content>
                           1. Ingress <br>
                           2. Blippar <br>
                           3. Google Translate <br>
                           4. Inkhunter <br>
                           5. Field Trip
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col md="4" sm="4" cols="12" class="py-0 my-0 hidden-sm-and-down">
                <v-img
                    :src="require('@/assets/img/dontremove/RA.png')"
                    :lazy-src="require('@/assets/img/dontremove/Realidad.png')"
                    width="80%"
                    style="float:right"
                >
                    <template v-slot:placeholder>
                        <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                        >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:['data'],
    data:()=>({

    })
}
</script>