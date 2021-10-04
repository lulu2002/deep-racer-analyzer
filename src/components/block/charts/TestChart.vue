<template>
  <LineChart :chartData="data" class="w-full"/>
</template>

<script>
import {LineChart} from 'vue-chart-3';
import Episode from "@/logic/data-objects/Episode";

export default {
  name: "TestChart",
  components: {LineChart},
  props: {
    episode: Episode
  },
  computed: {
    data: function () {
      return {
        labels: this.episode.steps.map((value, index) => index),
        datasets: [
          {
            data: this.episode.steps.map((value, index) => index),
            backgroundColor: ['#77CEFF'],
          },
        ],
      };
    }
  },
};
</script>

<style scoped>

</style>
