<template>
  <Block section-title="上傳檔案" icon-name="upload" light-icon-color>
    <div class="flex items-center">
      <div class="icon-scope">
        <i class="las la-upload la-2x" style="color: #E11CC2"></i>
      </div>

      <div class="ml-3.5">
        <p class="font-semibold">點我上傳檔案</p>
        <p class="app-text-desc">檔案大小: 20M | 上傳進度: 100%</p>
      </div>
    </div>
  </Block>
</template>

<script>
import Block from "@/components/Block";

export default {
  name: "FileUpload",
  components: {Block}
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
