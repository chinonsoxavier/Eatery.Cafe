<script>
import { VideoBg } from "@/utilities/exports";

export default {
  name: "BookTableComponent",
  data() {
    return {
      VideoBg: VideoBg,
    };
  },
};
</script>
<template>
  <section class="py-40">
    <div class="max_width grid grid-cols-2 items-center justify-center">
      <div
        :style="{ backgroundImage: `url(${VideoBg})`, backgroundSize: 'cover' }"
        class="flex-1 h-full center"
      >
    <div class="bg-[#2563eb] rounded-full w-[85px] h-[85px] center" >
     <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-fill w-12 h-12" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>
    </div>
    </div>
      <div
        class="flex-1 flex flex-col items-start gap-3 justify-start bg-lig bg-lighterText h-full p-8"
      >
        <span
          class="Pacifico text-xl w-min whitespace-nowrap flex items-center justify-start text-[#2563eb] font-semibold relative before:bg-[#2563eb] before:ml-2 before:h-[2px] before:w-full before:absolute before:left-full"
        >
          Reservations
        </span>
        <p class="text-3xl font-bold">Book A Table Online</p>
        <div class="grid grid-cols-2 gap-3">
          <div class="bg-white center">
            <input
              type="text"
              placeholder="Your Name"
              class="w-full placeholder:text-sm placeholder:font-semibold h-full outline-none border-none px-4 py-4"
              name=""
              id=""
            />
          </div>
          <div class="bg-white center">
            <input
              type="text"
              placeholder="Your Email"
              class="w-full placeholder:text-sm placeholder:font-semibold h-full outline-none border-none px-4 py-4"
              name=""
              id=""
            />
          </div>
          <div class="bg-white center">
            <input
              type="date"
              placeholder="Date & Time"
              class="w-full h-full outline-none border-none px-4 py-4"
              name=""
              id=""
            />
          </div>
          <div class="bg-white center">
            <input
              type="number"
              placeholder="No of People"
              class="w-full placeholder:text-sm placeholder:font-semibold h-full outline-none border-none px-4 py-4"
              name=""
              id=""
            />
          </div>
          <div class="bg-white center" style="grid-column: 1/3">
            <textarea
              style="resize: none"
              cols="3"
              rows="2"
              type="text"
              placeholder="Special request"
              class="w-full placeholder:text-sm placeholder:font-semibold h-full outline-none border-none px-4 py-4"
              name=""
              id=""
            />
          </div>
          <div class="center" style="grid-column: 1/3">
            <button class="w-full py-3 bg-[#2563eb] text-white">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
