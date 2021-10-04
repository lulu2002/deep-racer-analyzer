<template>
  <Block section-title="資訊" icon-name="info" light-icon-color>
    <info-row margin-bottom k="模型">
      <template v-slot:icon>
        <img src="@/assets/info.svg" class="row-icon">
      </template>
      <template v-slot:row-value>
        {{ modelName }}
      </template>
    </info-row>

    <info-row margin-bottom k="任務">
      <template v-slot:icon>
        <img src="@/assets/pin.svg" class="row-icon">
      </template>
      <template v-slot:row-value>
        <active-text :active="environment.JOB_TYPE === 'TRAINING'">Training</active-text>
        <v-split/>
        <active-text :active="environment.JOB_TYPE === 'EVALUATION'">Evaluation</active-text>
      </template>
    </info-row>

    <info-row margin-bottom k="相機">
      <template v-slot:icon>
        <img src="@/assets/camera.svg" class="row-icon">
      </template>
      <template v-slot:row-value>
        <active-text :active="environment.SENSOR === 'FRONT_FACING_CAMERA'">單鏡頭</active-text>
        <v-split/>
        <active-text :active="environment.SENSOR === 'STEREO_CAMERAS'">多鏡頭</active-text>
      </template>
    </info-row>

    <info-row margin-bottom k="賽事種類">
      <template v-slot:icon>
        <img src="@/assets/flag.svg" class="row-icon">
      </template>
      <template v-slot:row-value>
        <active-text :active="environment.RACE_TYPE === 'TIME_TRIAL'">時間賽</active-text>
        <v-split/>
        <active-text :active="environment.RACE_TYPE === 'OBJECT_AVOIDANCE'">避障賽</active-text>
        <v-split/>
        <active-text :active="environment.RACE_TYPE === 'HEAD_TO_HEAD_RACING'">對抗賽</active-text>
      </template>
    </info-row>
  </Block>
</template>

<script>
import Block from "@/components/Block";
import InfoRow from "@/components/row/InfoRow";
import AnalysisResult from "@/logic/data-objects/AnalysisResult";
import VSplit from "@/components/util/VSplit";
import ActiveText from "@/components/util/ActiveText";

export default {
  name: "ModelInfo",
  components: {ActiveText, VSplit, InfoRow, Block},
  props: {
    result: AnalysisResult
  },
  computed: {
    environment: function () {
      return this.result.environmentInfo;
    },
    modelName: function () {
      let name = this.environment.MODEL_NAME;

      if (name == null || name.length === 0)
        name = "無法解析...";

      return name;
    }
  }
};
</script>

<style scoped>
.value {

}
</style>
