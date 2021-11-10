<template>
  <div class="background rounded">
    <div class="p-3 bg-white rounded">
      Episodes
    </div>
    <div class="p-3">
      <default-mode/>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import App from "@/logic/App";
import DefaultMode from "@/components/block/DefaultMode";

export default {
  name: "EpisodeSelector",
  components: {DefaultMode},
  props: {
    app: App
  },
  computed: {
    tableData: function () {
      return this.app.currentResult.episodes.map((value, index) => {
        return {
          episode: index,
          time: 100,
          reward: value.steps.reduce((pre, curr) => pre.reward + curr.reward)
        };
      });
    }
  },
  data() {
    return {
      table: reactive({
        isLoading: false,
        columns: [
          {
            label: "Episode",
            field: "episode",
            width: "10%",
            sortable: true,
            isKey: true,
          },
          {
            label: "Time",
            field: "time",
            width: "30%",
            sortable: true,
          },
          {
            label: "Reward",
            field: "reward",
            width: "30%",
            sortable: true,
          },
        ],
        totalRecordCount: 0,
        sortable: {
          order: "id",
          sort: "asc",
        },
      })
    };
  }
};
</script>

<style scoped>

</style>
