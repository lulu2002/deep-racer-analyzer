<template>
  <Block section-title="工具" icon-name="cog" light-icon-color>
    <toggle-row margin-bottom title="只顯示完整跑完一圈的 Episode"/>
    <toggle-row title="只顯示從比賽起點開始跑的 Episode">
    </toggle-row>
  </Block>
</template>

<script>
import Block from "@/components/Block";
import ToggleRow from "@/components/row/ToggleRow";

export default {
  name: "Tools",
  components: {ToggleRow, Block}
};
</script>

<style scoped>

</style>
