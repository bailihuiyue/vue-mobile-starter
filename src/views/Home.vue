<template>
  <div class="home">
    <van-button type="info" @click="handleClick">信息按钮</van-button>
    <div class="test">qweqwe</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { test } from "@/services/example";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapState("moduleA", ["count"])
  },
  methods: {
    ...mapMutations("moduleA", ["increment", "decrement"]),
    handleClick() {
      this.increment(10);
      test();
    }
  }
};
</script>
<style lang="less">
.home {
  .test {
    font-size: 20px;
  }
}
</style>
