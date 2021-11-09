<template>
  <ScatterChart
      ref="scatterChart"
      :chartData="data"
      :options="options"
      class="w-full"
      style="height: 500px"
  />
  <div>
    <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
      <span class="modal__title">Hello, vue-final-modal</span>
    </vue-final-modal>

    <v-button @click="showModal = true">
      Open modal
    </v-button>
  </div>
</template>

<script>
import {ScatterChart} from 'vue-chart-3';
import Episode from "@/logic/data-objects/Episode";
import Track from "@/logic/data-objects/Track";

export default {
  name: "TestChart",
  components: {ScatterChart},
  props: {
    episode: Episode,
    track: Track
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    data: function () {
      return {
        labels: [],
        datasets: [
          {
            label: "邊界",
            data: this.trackArray,
            backgroundColor: ['#acacae'],
            pointRadius: 0,
            showLine: true
          },
          {
            label: "路徑",
            data: this.episode.steps.map(it => {
              return {
                x: it.X,
                y: it.Y
              };
            }),
            backgroundColor: ['#5757ac'],
          }
        ]
      };
    },
    trackArray: function () {
      if (this.track != null)
        return [
          ...this.track.humanBestRoute,
          ...this.track.insideBorder,
          ...this.track.outsideBorder,
        ];

      return [];
    },
    options: function () {
      return {
        animation: {
          duration: 0
        },
        scales: {
          x: {
            ticks: {
              stepSize: 0.5
            }
          },
          y: {
            ticks: {
              stepSize: 0.5
            }
          },
        }
      };
    }
  },
};
</script>

<style scoped>

</style>
