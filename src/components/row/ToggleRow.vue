<template>
  <row class="flex justify-between px-4">
    <p class="app-text-bold"> {{ title }} </p>
    <toggle v-model="value"></toggle>
  </row>
</template>

<script>
import Row from "@/components/row/Row";
import Toggle from '@vueform/toggle';

export default {
  extends: Row,
  name: "ToggleRow",
  components: {Row, Toggle},
  data() {
    return {
      value: false
    };
  },
  props: {
    title: String
  }
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
