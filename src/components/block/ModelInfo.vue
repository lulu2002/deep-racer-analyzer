<template>
  <Block section-title="資訊" icon-name="info" light-icon-color>
    <info-row margin-bottom k="模型" :value="result.environmentInfo.MODEL_NAME"/>
    <info-row margin-bottom k="任務" :value="fancyJobTypeName"/>
    <info-row margin-bottom k="相機" value="單鏡頭 | 多鏡頭"/>
    <info-row k="賽事種類" value="時間賽 | 避障賽 | 追逐賽"/>
  </Block>
</template>

<script>
import Block from "@/components/Block";
import InfoRow from "@/components/row/InfoRow";
import AnalysisResult from "@/logic/data-objects/AnalysisResult";

export default {
  name: "ModelInfo",
  components: {InfoRow, Block},
  props: {
    result: AnalysisResult
  },
  computed: {

    fancyJobTypeName: function () {
      switch (this.result.environmentInfo.JOB_TYPE) {
        case "EVALUATION":
          return "評估 (Evaluation)";
        case "TRAINING":
          return "訓練 (Training)";
      }
      return "未知";
    }

  }
};
</script>

<style scoped>

</style>
