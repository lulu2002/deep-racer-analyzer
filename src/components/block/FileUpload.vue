<template>
  <Block section-title="上傳檔案" icon-name="upload" light-icon-color>
    <div class="flex items-center">
      <div class="icon-scope">
        <i class="las la-upload la-2x" style="color: #E11CC2"></i>
      </div>

      <div class="ml-3.5" @click="$refs.input.click()">
        <input type="file" hidden ref="input" @change="onFileChange($event)">
        <p class="font-medium">點我上傳檔案</p>
        <div>
          <span class="app-text-desc">{{ analysisState }}</span>
        </div>
      </div>
    </div>
  </Block>
</template>

<script>
import Block from "@/components/Block";
import {AnalysisState} from "@/logic/data-objects/EnumTypes";

export default {
  name: "FileUpload",
  components: {Block},
  emits: ["upload"],
  props: {
    analysisState: AnalysisState
  },
  methods: {
    onFileChange(event) {
      this.$emit("upload", event);
    }
  },
};
</script>

<style scoped>
.icon-scope {
  background-color: rgba(253, 31, 155, 0.1);
  width: 64px;
  height: 64px;
  @apply flex justify-center items-center rounded-lg
}
</style>
