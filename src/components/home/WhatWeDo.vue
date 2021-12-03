<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="4" class>
        <p class="google-font mb-0" style="font-size:150%">¿Que aprenderas?</p>
        <p
          class="google-font mt-0"
          style="font-size:95%"
        >Conoceras como es que se ha creado con el paso del tiempo la realidad virtual y la realidad aumentada, tambien sabras como, cuando y de quien fue esta idea, asi como en que nos beneficia toda esta inivaciòn ahora en nuestro mundo lleno de Tecnologìa.</p>
        <p class="google-font" style="font-size:95%">About different Google technologies</p>
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
              <v-icon large style="font-size:300%">mdi-comment</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Reality</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Bienvenidos a Reality donde encontraras informaciòn envace a como es que a cambiado nuestro mundo la Realidad Virtual/Realidad Aumentada.</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-code-tags</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Comentarios</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Nos interesa saber mas: Registrate y comenta que es lo que ati te gustaria saber hacerca de los temas de Realidad Virtual/Realidad Aumentada.</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-school</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Contacto</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Contactanos!! <br>
              Realitytecnologias@gmail.com</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-chart-bubble</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Vive Experiencias Nuevas</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Vive mas!! date un pequeño brack y empieza a interactuar con diferentes aplicaciònes que te ayudaran a llevar tu imaginaciòn al borde del limite. Imagina en grande!!</p>
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