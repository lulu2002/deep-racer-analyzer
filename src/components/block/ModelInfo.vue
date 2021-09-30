<template>
  <Block section-title="資訊" icon-name="info" light-icon-color>
    <div class="py-3 px-2 flex items-center" style="background-color: #FAFAFA">
      <div class="w-4/12">
        <p class="app-text-bold">模型</p>
      </div>
      <div class="w-8/12">
        <p class="app-text-bold">19-4m0d15a21-anser-fine-fine15</p>
      </div>
    </div>
  </Block>
</template>

<script>
import Block from "@/components/Block";

export default {
  name: "ModelInfo",
  components: {Block}
};
</script>

<style scoped>

</style>
