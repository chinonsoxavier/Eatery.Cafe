<script>
import {
  menuImage1,
  menuImage2,
  menuImage3,
  menuImage4,
  menuImage5,
  menuImage6,
  Testimonials,
} from "@/utilities/exports";

export default {
  name: "OurMenusComponent",
  data() {
    return {
      TestimonialsBg: Testimonials,
      ourMenus: [
        {
          menuName: "AMERICAN BREAKFAST",
          ingredients: ["TOMATO", "EGG", "SAUSAGE"],
          price: "$25",
          image: menuImage1,
        },
        {
          menuName: "SELF-MADE SALAD",
          ingredients: ["GREEN", "FRUITS", "HEALTHY"],
          price: "$18",
          image: menuImage2,
        },
        {
          menuName: "CHINESE NOODLE",
          ingredients: ["PEPPER", "CHICKEN", "VEGETABLES"],
          price: "$28",
          image: menuImage3,
        },
        {
          menuName: "RICE SOUP",
          ingredients: ["GREEN", "CHICKEN"],
          price: "$28",
          image: menuImage4,
        },
        {
          menuName: "DELI BURGER",
          ingredients: ["BEEF", "FRIED POTATOES"],
          price: "$46",
          image: menuImage5,
        },
        {
          menuName: "BIG FLAT FRIED",
          ingredients: ["PEPPER", "CRISPY"],
          price: "$34",
          image: menuImage6,
        },
      ],
    };
  },
};
</script>
<template>
  <section class="py-20 center">
    <div class="w-full center flex-col">
      <p class="text-lg sm:text-xl lg:text-[27px] font-bold text-darkText">
        Our Menus
      </p>
      <p class="my-2 text-[10px] text-lighterText font-bold tracking-wider">
        THEY ARE NICE AND FRIENDLY
      </p>
      <div class="grid grid-cols-3 w-full">
        <div
          v-for="(menu, index) in ourMenus"
          :key="index"
          class="center cursor-pointer m-0 group ourMenusComponentBg duration-700 relative flex-1 min-w-[280px] h-72 bg-no-repeat"
          :style="{ backgroundImage: `url(${menu.image})` }"
        >
          <div
            class="absolute flex items-center justify-center px-7 text-white duration-700 group-hover:bg-[rgba(0,0,0,0.9)] bottom-0 left-0 right-0 h-1/3"
          >
            <div class="flex flex-col w-full items-start justify-between">
              <div class="flex items-center justify-between w-full">
                <p
                  class="text-xl group-hover:opacity-100 opacity-0 transition-transform delay-400 translate-y-6 group-hover:translate-y-0 duration-500 whitespace-nowrap font-bold"
                >
                  {{ menu.menuName }}
                </p>
                <p
                  class="text-lg font-bold group-hover:opacity-100 opacity-0 transition-transform delay-400 translate-y-6 group-hover:translate-y-0 duration-500"
                >
                  {{ menu.price }}
                </p>
              </div>
              <div class="flex items-start justify-start gap-1">
                <p
                  class="text-xs font-semibold gap-1 group-hover:opacity-100 opacity-0 transition-transform delay-400 translate-y-6 group-hover:translate-y-0 duration-500"
                  v-for="(ingredient, index) in menu.ingredients"
                  :key="index"
                >
                  {{ ingredient
                  }}{{ index < menu.ingredients.length - 1 ? " /" : "" }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="py-20 text-white w-full gap-3 flex items-center justify-center flex-col"
        :style="{
          backgroundImage: `url(${TestimonialsBg})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }"
      >
        <p class="font-bold text-3xl">Testimonials</p>
        <p class="text-lg max-w-3xl text-center">
          Vivamus aliquet felis eu diam ultricies congue. Morbi porta lorem nec
          consectetur porta quis dui elit habitant morbi.
        </p>
        <div class="center gap-2">
          <p class="font-bold text-lg">Jessie White</p>
          <span class="text-base">Vitae lacinia augue urna quis</span>
        </div>
          <div class=" right-0 flex flex-c\ol gap-3 items-center h-max p-5 justify-center top-[50%] bottom-[50%] bg-red500 " >
        <div class="bg-white cursor-pointer rounded-full w-[10px] h-[10px]" ></div>
        <div class="bg-white cursor-pointer rounded-full w-[10px] h-[10px]" ></div>
        <div class="bg-white cursor-pointer rounded-full w-[10px] h-[10px]" ></div>
      </div>
      </div>
    </div>
  </section>
</template>
