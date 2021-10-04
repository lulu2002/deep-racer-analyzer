<template>
  <Block section-title="圖表分析" icon-name="chart-bar">
    <div class="flex justify-center">
      <test-chart :episode="database.currentEpisode"></test-chart>
    </div>
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
  }
};
</script>

<style scoped>

</style>
