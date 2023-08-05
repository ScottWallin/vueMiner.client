<template>
  <div class="row">
    <div class="col-12">
      <!-- <button id="moon"> -->
        <Moon @click="mine()"/>
      <!-- </button>   -->
    </div>
  </div>
</template>

<script>
import { mineService } from "../services/MineService.js";
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
