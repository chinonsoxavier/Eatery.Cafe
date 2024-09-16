<script>
import {
  AboutImage1,
  AboutImage2,
  AboutImage3,
  AboutImage4,
} from "@/utilities/exports";

export default {
  name: "WelcomeComponent",
  data() {
    return {
      AboutImage1: AboutImage1,
      AboutImage2: AboutImage2,
      AboutImage3: AboutImage3,
      AboutImage4: AboutImage4,
    };
  },
};
</script>

<template>
  <section class="py-20 center">
    <div
      class="max_width gap-10 bg-lightBackground flex items-center justify-center"
    >
      <div
        class="grid grid-cols-2 gap-4 items-center justify-center flex-1 flex-wrap"
      >
        <div class="">
          <img class="w-full" :src="AboutImage1" alt="" />
        </div>
        <div class="mr-[25%] mt-[25%]">
          <img class="w-full" :src="AboutImage2" alt="" />
        </div>
        <div class="ml-[25%] mb-[25%]">
          <img class="w-full" :src="AboutImage3" alt="" />
        </div>
        <div class="">
          <img class="w-full" :src="AboutImage4" alt="" />
        </div>
      </div>
      <div class="flex-1 flex items-start justify-center gap-5 flex-col h-full">
        <span
          class="Pacifico text-2xl w-min whitespace-nowrap flex items-center justify-start text-[#2563eb] font-semibold relative before:bg-[#2563eb] before:ml-2 before:h-1 before:w-full before:absolute before:left-full"
        >
          About Us
        </span>
        <p class="text-3xl font-semibold Hebo">
          Welcome to
          <span class="font-bold">
            <span>Eatery</span>
            <span class="text-red-500 px-[1px]">.</span>
            <span>Cafe</span>
          </span>
        </p>
        <p class="text-lightText font-medium tracking-wide text-[15px]" >
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p class="text-lightText font-medium tracking-wide text-[15px]" >
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div class="flex items-center justify-between flex-1 w-full gap-7" >
            <div class="flex-1 flex items-center justify-start gap-5 pl-4 border-l-4 border-l-[#2463eb]" >
              <h1 class="text-[#2563eb] text-5xl font-bold">15</h1>
              <div class="flex flex-col items-start justify-center" >

                <p>Years of</p>
                <p class="font-bold" >EXPERIENCE</p>
              </div>
            </div><div class="flex-1 flex items-center justify-start gap-5 pl-4 border-l-4 border-l-[#2463eb]" >
              <h1 class="text-[#2563eb] text-5xl font-bold">50</h1>
              <div class="flex flex-col items-start justify-center" >

                <p>Popular</p>
                <p class="font-bold" >MASTER CHEFS</p>
              </div>
            </div>
        </div>
        <button class="py-4 px-8 bg-[#2563eb] text-white font-semibold" >Read More</button>
      </div>
    </div>
  </section>
</template>
