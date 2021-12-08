<template>
    <v-container fluid class="py-0 my-0 mt-2 mb-5">
        <v-row class="py-0 my-0" align="center">
            <v-col md="4" sm="12" cols="12" class="py-0 my-0">
                <v-img
                    :src="require('@/assets/img/dontremove/FondoAumentada.png')"
                    :lazy-src="require('@/assets/img/dontremove/ARFondo.png')"
                    class=" mb-3"
                    width="100%"
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
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <!-- {{data}} -->
                <p class="google-font mt-0" style="font-size:130%">La tecnología de realidad aumentada consiste en la integración de contenidos gráficos sobre una vista del mundo real. <br> Para ello, se utilizan dispositivos como teléfonos móviles o gafas, que añaden la información virtual a la realidad que ve el usuario.
<br> En el caso de que se utilice un móvil, el resultado se muestra en la pantalla, aumentando el video que captura la cámara del teléfono.
<br> En el caso de utilizarse una gafa, la experiencia de realidad aumentada se muestra al usuario delante de sus ojos por medio de una imagen proyectada en la lente de la gafa, generándose un efecto muy similar a un holograma.</p>
                <br>
                <!--  <v-btn v-if="checkExistance(data.becomemember, 0)" :href="data.becomemember" target="_blank" class="ma-0 google-font elevation-1 primary" style="text-transform: capitalize;border-radius:5px;color:white"></v-btn>

                &nbsp;

                <v-btn v-if="checkExistance(data.learnMoreLink, 0)" :href="data.learnMoreLink" target="_blank" rounded color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" outlined  class="ml-0" dark>Learn More</v-btn> -->

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