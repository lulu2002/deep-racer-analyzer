<template>
  <row>
    <div class="w-4/12 pl-3">
      <p class="app-text-bold"> {{ k }}</p>
    </div>
    <div class="w-8/12">
      <p class="app-text-bold"> {{ value }}</p>
    </div>
  </row>
</template>

<script>
import Row from "@/components/row/Row";

export default {
  name: "InfoRow",
  components: {Row},
  props: {
    k: String,
    value: String
  }
};
</script>

<style scoped>

</style>
