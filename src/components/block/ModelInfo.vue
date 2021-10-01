<template>
  <Block section-title="資訊" icon-name="info" light-icon-color>
    <info-row margin-bottom k="模型" value="19-4m0d15a21-anser-fine-fine15"/>
    <info-row margin-bottom k="賽道" value="Re:Invent 2019"/>
    <info-row margin-bottom k="相機" value="單鏡頭 | 多鏡頭"/>
    <info-row k="賽事種類" value="時間賽 | 避障賽 | 追逐賽"/>
  </Block>
</template>

<script>
import Block from "@/components/Block";
import InfoRow from "@/components/row/InfoRow";

export default {
  name: "ModelInfo",
  components: {InfoRow, Block}
};
</script>

<style scoped>

</style>
