<template>
  <div class="bg-blue-300 icon-round-size rounded-full flex items-center justify-center">
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
