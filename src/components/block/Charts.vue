<template>
  <Block section-title="圖表分析" icon-name="chart-bar">
    <div class="flex justify-center">
      <test-chart
          v-if="showingChart === 'THROTTLE'"
          :episode="database.currentEpisode"
          :track="database.getTrack(app.currentResult.environmentInfo.WORLD_NAME)"
      />
    </div>

    <template v-slot:header-right>
      <button @click="showingChart = 'THROTTLE'">車速</button>
      <button @click="showingChart = 'REWARD'">獎勵</button>
      <button @click="showingChart = 'REWARD'">速度分佈</button>
      <button @click="showingChart = 'TRAINING'">訓練狀況</button>
      <button @click="showingChart = 'ACTION_SPACE'">設定</button>
    </template>
  </Block>
</template>
<script>
import Block from "@/components/Block";
import TestChart from "@/components/block/charts/TestChart";
import App from "@/logic/App";

export default {
  name: "Charts",
  components: {TestChart, Block},
  props: {
    app: App
  },
  computed: {
    database: function () {
      return this.app.db;
    }
  },
  data() {
    return {
      showingChart: "THROTTLE"
    };
  }
};
</script>

<style scoped>
button {
  background-color: #5EB04EAD;
  @apply py-1 px-3 rounded-lg mx-1 hover:opacity-50
}
</style>
