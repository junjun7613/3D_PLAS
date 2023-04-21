<template>
  <canvas id="renderCanvas" ref="bjsCanvas"/>
</template>
<!--
<script>
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "../scenes/MySecondScene";
export default {
  name: "BabylonScene",
  setup() {
    const bjsCanvas = ref(null);
    onMounted(() => {
      if (bjsCanvas.value) {
        createScene(bjsCanvas.value);
      }
    });
    return {
      bjsCanvas,
    };
  },
};
</script>
-->
<script setup lang="ts">
//@ts-ignore
//import myScene from "../scenes/MySecondScene";
import myScene from "../scenes/MyThirdScene";
import { ref, onMounted, watch } from "vue";

const bjsCanvas = ref(null);

const props = defineProps({
  textPlaneName: {
    type: String,
    default: "aaa",
  },
});

watch(
  props,
  // () => props.textPlaneName, // PlaneName.value,
  () => {
    myScene.showTextPlane(props.textPlaneName); // PlaneName.value);
  }
);

const emits = defineEmits<{
  (e: "change", name: string): void;
}>();

onMounted(() => {
  if (bjsCanvas.value) {
    const fpsCallback = (val: string) => {
      emits("change", val);
    };
    myScene.createScene(bjsCanvas.value, fpsCallback);
  }
});
</script>

<style type="text/css">
  body {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
    }
    #renderCanvas {
        margin: 0;
        padding: 0;
        width: 800px;
        height: 540px;
    }
</style>