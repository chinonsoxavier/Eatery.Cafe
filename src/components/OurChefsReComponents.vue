<script>
export default {
  name: "OurChefsReComponent",
  props: {
    svgs: {
      type: Array,
      required: true,
    },
    lable: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  methods: {
    func() {
      console.log(this.image);
    },
    mounted() {
      this.func();
    },
  },
};
</script>
<template>
  <div class="flex-1 h-[550px] center flex-col gap-4 group cursor-pointer max-w-[350px]">
    <div class="w-full h-full relative OurChefsReComponents_AnimatedBg duration-700 bg-center" :style="{backgroundImage:`url(${image})`}" >
      <div
        class="absolute OurChefsReComponents_AnimatedElement ease-in-out flex-col bottom-0 right-0 left-0 w-full center overflow-y-hidden h-0 group-hover:h-full gro:bottom-full duration-700 bg-[rgba(0,0,0,0.9)]"
      >
        <p class="text-white text-lg max-w max-w-44 text-center mb-3 font-bold">
          {{ lable }}
        </p>
        <div class="flex gap-3">
          <div
            v-for="(svgItem, index) in svgs"
            :key="index"
            class="center w-12 h-12 duration-500 rounded-full hover:bg-[#2563eb] bg-[rgba(255,255,255,0.11)]"
          >
            <div class="fill-white" v-html="svgItem.svg"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="center flex-col">
      <p class="text-2xl font-bold text-darkText">{{ name }}</p>
      <p class="text-lightText text-sm font-semibold">{{ role }}</p>
    </div>
  </div>
</template>
