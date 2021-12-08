<template>
    <v-container fluid class="py-0 my-0 mt-5">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <h1 class="google-font mb-2" style="Color: #6E3CBC;">¿COMO FUNCIONA LA REALIDAD AUMENTADA?</h1>
            </v-col>
        </v-row>
        <v-row class="py-0 my-0">
            <v-col md="11" sm="16" cols="19" class="py-0 my-0">
                <p class="google-font" style="font-size:100%">
                    <b style="font-size:130%;">  <h3 style="Color: #6E3CBC;"> Motor gráfico</h3> <br> <p> El motor gráfico se ocupa de renderizar los contenidos, típicamente en 3D, que muestra la realidad aumentada. La visión artificial se ocupa de que la ubicación de los contenidos  aumentados sea la correcta en la escena, para que la composición sea coherente y entendible por el usuario.
                        <br> El principal elemento que interviene en la parte gráfica sería el renderizado. Este proceso  consiste en la interpretación por parte del ordenador de una escena de tres dimensiones para crear una imagen bidimensional.</p></b> 
                </p>
         <v-col md="5" sm="5" cols="13" class="py-0 my-0 hidden-sm-and-down">
                <v-img
                    :src="require('@/assets/img/dontremove/grafico.png')"
                    width="90%"
                    style="float:center"
                >
                    <template v-slot:placeholder>
                        <v-row
                        class="fill-height ma-0"
                        align="rigth"
                        justify="center"
                        >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
            
                <p class="google-font" style="font-size:110%">
                    <b style="font-size:130%;">Visión artificial</b>

                     <v-row class="py-0 my-0">
            <v-col md="15" sm="18" cols="22" class="py-0 my-0">
                <p class="google-font" style="font-size:130%"> Las técnicas de visión artificial que se aplican en realidad aumentada son muy variadas, y se denominan principalmente tecnología de seguimiento o tracking. Existen muchos tipos, por ejemplo, el tracking facial, que permite detectar y seguir la posición de una cara, o el tracking de texturas, que posiciona una imagen de referencia en un sistema de coordenadas tridimensional. Las técnicas de visión artificial más novedosas que se emplean actualmente incorporan sensores activos basados en luz estructurada, tracking SLAM o tracking 3D. </p>
            </v-col>
            <v-col md="5" sm="5" cols="13" class="py-0 my-0 hidden-sm-and-down">
                <v-img
                    :src="require('@/assets/img/dontremove/Vision.png')"
                    width="90%"
                    style="float:center"
                >
                    <template v-slot:placeholder>
                        <v-row
                        class="fill-height ma-0"
                        align="rigth"
                        justify="center"
                        >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>

                    <span class="google-font" style="font-size:130%">Para que una experiencia de realidad aumentada sea satisfactoria, debe funcionar en tiempo real. Esto quiere decir que cada uno de los dos módulos debe hacerlo también, y ambos son muy exigentes con el uso de los recursos computacionales. Así que el módulo de render debe ser capaz de pintar unas 60 imágenes por segundo, y el módulo de tracking de igual modo, ser capaz de analizar y extraer la información de 60 imágenes por segundo. </span>
                </p> 
            </v-col>
            <v-col md="4" sm="4" cols="12" class="py-0 my-0 hidden-sm-and-down">
               
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