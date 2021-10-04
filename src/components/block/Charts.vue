<template>
  <Block section-title="圖表分析" icon-name="chart-bar">
    <div class="flex justify-center">
      <test-chart v-if="showingChart === 'THROTTLE'" :episode="database.currentEpisode"/>
      <test-chart v-if="showingChart === 'REWARD'" :episode="database.currentEpisode"/>
      <test-chart v-if="showingChart === 'TRAINING'" :episode="database.currentEpisode"/>
      <test-chart v-if="showingChart === 'ACTION_SPACE'" :episode="database.currentEpisode"/>
    </div>

    <template v-slot:header-right>
      <button @click="showingChart = 'THROTTLE'">車速分佈</button>
      <button @click="showingChart = 'REWARD'">獎勵分佈</button>
      <button @click="showingChart = 'TRAINING'">訓練狀況</button>
      <button @click="showingChart = 'ACTION_SPACE'">ActionSpace 設定</button>
    </template>
  </Block>
</template>
<script>
import Block from "@/components/Block";
import TestChart from "@/components/block/charts/TestChart";
import Database from "@/logic/sub-logic/Database";


export default {
  name: "Charts",
  components: {TestChart, Block},
  props: {
    database: Database
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
