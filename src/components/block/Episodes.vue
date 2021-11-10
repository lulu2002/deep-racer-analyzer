<template>
  <block section-title="Episodes" icon-name="chart-pie">
    <div>
      <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
        <span class="modal__title">Hello, vue-final-modal</span>
      </vue-final-modal>
      <v-button @click="showModal = true">Open modal</v-button>
    </div>
  </block>
</template>

<script>
import Block from "@/components/Block";
import {VueFinalModal} from "vue-final-modal";

export default {
  name: "Episodes",
  components: {
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

::v-deep .modal-content {
  display: inline-block;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
