<template>
  <div class="background min-h-screen">
    <navbar></navbar>
    <app-view>
      <div class="w-8/12">
        <charts></charts>
        <episodes></episodes>
      </div>

      <div class="w-4/12">
        <file-upload></file-upload>
        <model-info></model-info>
        <tools></tools>
        <about></about>
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
    Navbar
  },
  data() {
    return {
    };
  }
};
</script>

<style>
.background {
  background-color: #F8F9FF;
}
</style>
