<template>
  <div
      class="icon-round-size rounded-full flex items-center justify-center"
      :style="{backgroundColor: bgColor}"
  >
    <font-awesome-icon
        :icon="iconName"
        class="text-white icon-size"
    />
  </div>
</template>

<script>
export default {
  name: "SectionIcon",
  props: {
    iconName: String,
    bgColor: String
  }
};
</script>

<style scoped>
.icon-size {
  width: 18px;
  height: 18px;
}

.icon-round-size {
  width: 34px;
  height: 34px;
}
</style>
