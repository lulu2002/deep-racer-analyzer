<template>
  <div class="p-3">
    <div class="bg-white rounded-lg pb-3shadow-sm">
      <div class="px-5 py-3 flex items-center justify-between">
        <div class="flex items-center">
          <section-icon
              :icon-name="iconName"
              :bg-color="color"
              class="mr-3"/>
          <p class="font-medium text-xl">{{ this.sectionTitle }}</p>
        </div>
        <div>
          <slot name="header-right"/>
        </div>
      </div>
      <div class="border-t w-full"></div>
      <div class="px-5 py-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SectionIcon from "@/components/SectionIcon";

export default {
  name: "Block",
  components: {SectionIcon},
  props: {
    sectionTitle: String,
    iconName: String,
    lightIconColor: Boolean
  },
  computed: {
    color: function () {
      return this.lightIconColor ? "#51CBFF" : "#017EFA";
    }
  }
};
</script>

<style scoped>

</style>
