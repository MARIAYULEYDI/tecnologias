<template>
  <v-dialog v-model="dialog" width="800">
    <template v-slot:activator="{ on }">
      <div
        v-on="on"
        v-ripple
        style="cursor: pointer;"
        :class="$vuetify.theme.dark == true?'darkModeCardFeatureEvent':'lightModeCardFeatureEvent'"
        class="pa-3 py-5 fill-height"
      >
        <p class="google-font mb-0" style="font-size:90%">30-Noviembre-2021</p>
        <p class="google-font mb-0" style="font-size:120%">Aplicaciones</p>
        <p class="google-font mb-0" style="font-size:90%">Realidad Virtual / Realidad Aumentada</p>
        <v-spacer></v-spacer>
        <p class="mb-0 mt-2 google-font" style="color:#1a73e8">Aplicaciones</p>
      </div>
    </template>
    <v-card
      color
      v-if="dialog"
      class
      style="border-radius:5px"
      :class="this.$vuetify.theme.dark == true?'grey darken-3':'white'"
    >
      <v-card-title class="px-5 py-5 google-font" style="background-position:right bottom;">
        <p class="google-font mb-0" style="font-size:150%">Aplicaciones VR/AR</p>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" :href="'#'" target="_blank">
          <v-icon> mdi-close</v-icon>
        </v-btn> 
      </template>
      <span>Cerrar</span>
    </v-tooltip>
        
      </v-card-title>

      <v-card-text class="pb-5 pt-0">
        <p class="google-font mb-0" style="font-size:120%">310-Noviembre-2021</p>
        <p class="google-font mb-0" style="font-size:110%">Aplicaciones</p>
        <p class="google-font"></p>

        <p class="google-font mb-0" style="font-size:95%">
          <b>Informaciòn</b>
        </p>
        <p class="google-font mt-0" style="font-size:110%"> La Realidad Aumentada (RA) es una tecnología que permite superponer elementos virtuales sobre nuestra visión de la realidad. Cada vez más demandada, en 2020 se convertirá en un negocio que roce los 120.000 millones de dólares a nivel mundial. <br>
        Las aplicaciones de realidad virtual son aplicaciones que hacen uso de la realidad virtual (VR). La realidad virtual es una experiencia sensorial inmersiva que simula de forma digital un entorno remoto. <br> <br> <i>Conoce algunas de ellas entrando a los siguientes apartados que acontinuaciòn te presentamos.</i></p>
        <v-btn
          color="#4C0070"
          v-if="checkExistance(data.links.youtube,0)"
          :href="`https://www.capterra.mx/software/203918/jigspace`"
          target="_blank"
          class="ma-0 elevation-0 my-2 mr-3"
          dark
          style="text-transform: capitalize;"
        >JigSpace</v-btn>

        <v-btn
          color="#79018C"
          v-if="checkExistance(data.links.registration,0)"
          :href="`https://www.mdscc.nasa.gov/index.php/2020/09/15/con-el-conocimiento-y-las-imagenes-de-la-nasa-los-planetas-toman-forma-virtual-en-la-tierra/`"
          target="_blank"
          class="ma-0 elevation-0 my-2 mr-3"
          dark
          style="text-transform: capitalize;"
        >NASA VR</v-btn>
        <v-btn
          color="#9A0680"
          v-if="checkExistance(data.links.meetup,0)"
          :href="`https://star-chart.uptodown.com/android`"
          target="_blank"
          class="ma-0 elevation-0 my-2 mr-3"
          dark
          style="text-transform: capitalize;"
        >Start Chart</v-btn>
        <v-btn
          color="#98BAE7"
          v-if="checkExistance(data.links.youtube,0)"
          :href="`https://play.google.com/store/apps/details?id=com.picselica.OceanRiftDaydream&hl=es_MX&gl=US`"
          target="_blank"
          class="ma-0 elevation-0 my-2 mr-3"
          dark
          style="text-transform: capitalize;"
        >Ocean Rift</v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions :class="this.$vuetify.theme.dark == true?'grey darken-3':'grey lighten-3'">
        <v-spacer></v-spacer>
        <v-btn color="btn btn-outline-dark" text @click="dialog = false">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    goToEvent(id) {
      this.$router.push("/events/" + id);
    }
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) {
        return val.substring(0, num) + "..";
      } else {
        return val;
      }
    },
    dateFilter: value => {
      const date = new Date(value);
      return date.toLocaleString(["en-US"], {
        month: "short",
        day: "2-digit",
        year: "numeric"
      });
    }
  }
};
</script>

<style scoped>
.lightModeCardFeatureEvent {
  background-color: #ffff;
  box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);

  border-radius: 8px;
}
.darkModeCardFeatureEvent {
  background-color: #292929;
  box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);
  /* border:1px solid #212121; */
  border: 1px solid #424242;
  border-radius: 5px;
}
</style>