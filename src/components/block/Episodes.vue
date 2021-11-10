<template>
  <block section-title="Episodes" icon-name="chart-pie">
    <div>
      <vue-final-modal v-model="showModal" classes="modal-container">
        <episode-selector/>
      </vue-final-modal>
      <v-button @click="showModal = true">Open modal</v-button>
    </div>


    <div>
      Episode 功能完成
      賽道多種 Chart 顯示
    </div>
  </block>
</template>

<script>
import Block from "@/components/Block";
import {VueFinalModal} from "vue-final-modal";
import EpisodeSelector from "@/components/block/EpisodeSelector";

export default {
  name: "Episodes",
  components: {
    EpisodeSelector,
    Block,
    VueFinalModal
  },
  data() {
    return {
      showModal: false
    };
  },
};
</script>

<style scoped>
.modal__title {
  color: gray;
}

::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
