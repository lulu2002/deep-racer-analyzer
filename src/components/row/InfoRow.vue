<template>
  <row :margin-bottom="computeMargin">
    <div class="w-5/12 pl-3 flex">
      <slot name="icon"/>
      <p class="app-text-bold"> {{ k }}</p>
    </div>
    <div class="w-7/12 app-text-bold text-left">
      <slot name="row-value"></slot>
    </div>
  </row>
</template>

<script>
import Row from "@/components/row/Row";

export default {
  extends: Row,
  name: "InfoRow",
  components: {Row},
  props: {
    k: String
  }
};
</script>

<style scoped>

</style>
