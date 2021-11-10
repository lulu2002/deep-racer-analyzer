<template>
  <div class="background min-h-screen">
    <navbar></navbar>
    <app-view>
      <div class="w-8/12">
        <charts :app="app"/>
        <episodes :app="app"/>
      </div>

      <div class="w-4/12">
        <file-upload
            @upload="this.app.upload($event.target.files[0])"
            :analysisState="app.analysingState"
        />
        <model-info :result="currentResult"/>
        <tools/>
        <about/>
      </div>
    </app-view>
  </div>
</template>

<script>
import AppView from "@/components/AppView";
import Navbar from "@/components/Navbar";
import Charts from "@/components/block/Charts";
import Episodes from "@/components/block/Episodes";
import FileUpload from "@/components/block/FileUpload";
import ModelInfo from "@/components/block/ModelInfo";
import Tools from "@/components/block/Tools";
import About from "@/components/block/About";
import App from "@/logic/App";

export default {
  name: 'App',
  components: {
    About,
    Tools,
    ModelInfo,
    FileUpload,
    Episodes,
    Charts,
    AppView,
    Navbar,
  },
  data() {
    return {
      app: new App()
    };
  },
  computed: {
    currentResult: function () {
      return this.app.currentResult;
    }
  }
};
</script>

<style>
.background {
  background-color: #F8F9FF;
}

.row-icon {
  @apply mr-1.5
}
</style>
