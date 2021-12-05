<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="4" class>
        <p class="google-font mb-0" style="font-size:150%">QUÈ LEER</p>
        <p
          class="google-font mt-0"
          style="font-size:95%"
        >¿Cómo están cambiando el mundo la realidad virtual y aumentada?</p>
        <p
          class="google-font mt-0"
          style="font-size:95%"
        >Marketing, automoción, medicina… son campos en los que ya influyen las realidades virtual y aumentada</p>
         <p
          class="google-font mt-0"
          style="font-size:95%"
        >¿Afectan la realidad virtual y aumentada a las relaciones sociales?</p>
        <p class="google-font" style="font-size:95%">Aplicaciones acerca de Realidad Virtual & Aumentada</p>
        
        <span v-for="(item,i) in whatwedodata" :key="i">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <a :href="item.link" target="_blank" class="ma-0 mx-3" rel="noreferrer">
                <img :src="getImgUrl(item.image)" width="25vh" alt srcset dark v-on="on" />
              </a>
              &nbsp;&nbsp;&nbsp;
            </template>
            <span>{{item.TechName}}</span>
          </v-tooltip>
        </span>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="8">
        <v-container fluid>
          <v-row>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-heart</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Reality</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Bienvenidos a Reality donde encontraras informaciòn embace a como es que a cambiado nuestro mundo la Realidad Virtual/Realidad Aumentada.</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%"> mdi-image-filter-vintage</v-icon>
              <p class="google-font mt-2" style="font-size:130%">COLOSSE</p>
              <p
                class="google-font"
                style="font-size:95%"
              > Una experiencia de realidad virtual de historias cortas que responde a la mirada del jugador enraizado, avanzando la narrativa sin problemas.</p>
              <a href="https://youtu.be/mMiC-K9Qi4w"><span style=color:#113CFC>Conocer màs</span></a>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-set-center-right</v-icon>
              <p class="google-font mt-2" style="font-size:130%">YouVisit VR</p>
              <p
                class="google-font"
                style="font-size:95%"
              >YouVisit es la mejor app que encontrarás en esto de combinar turismo y realidad virtual.</p>
              <a href="https://youtu.be/QjatGzbM5Xk"><span style=color:#113CFC>Conocer màs</span></a>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-windows</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Windows Mixed Reality</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Windows Mixed Reality es un concepto de realidad mixta controlado por Microsoft para crear una plataforma unificada de aplicaciones y servicios. </p>
              <a href="https://youtu.be/2MqGrF6JaOM"><span style=color:#113CFC>Conocer màs</span></a>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import whatwedodata from "@/assets/data/whatwedo.json";
export default {
  name: "App",
  data: () => ({
    whatwedodata: whatwedodata
  }),
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    }
  }
};
</script>