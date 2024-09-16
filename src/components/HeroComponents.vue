
<script>
import NavbarComponent from './NavbarComponent.vue';
import Slider1Image from '../assets/images/slider-image1.jpg';
import Slider1Image2 from '../assets/images/slider-image2.jpg';
import Slider1Image3 from '../assets/images/slider-image3.jpg';
// var HeroComponentElement = document.getElementById("HeroComponents");



var slider1 = Slider1Image;
var slider2 = Slider1Image2;
var slider3 = Slider1Image3;
// HeroComponentElement.style.background = slider1;
console.log(slider1,slider2,slider3);


export default {
  name: "HeroComponents",
  components: {
     NavbarComponent
  },
mounted() {
      this.updateSlider()
    },
  data() {
    return { 
      bgImage:slider1
    }
  },

  methods: {
    updateSlider() {
      setInterval(() => {
        this.bgImage = slider2;
        console.log("works");
      }, 1000);
    },
    
  }
};
</script>
<template>
  <div  class="w-full h-screen center flex-col text-white relative " id="HeroComponents" :style="{backgroundImage:`url(${bgImage})`}" >
      <NavbarComponent/>
      <div class="absolute right-0 flex flex-col gap-3 items-center h-max p-5 justify-center top-[50%] bottom-[50%] bg-red500 " >
        <div class="bg-white cursor-pointer rounded-full w-[10px] h-[10px]" ></div>
        <div class="bg-white cursor-pointer rounded-full w-[10px] h-[10px]" ></div>
        <div class="bg-white cursor-pointer rounded-full w-[10px] h-[10px]" ></div>
      </div>
      <div class="w-full flex-col flex items-start max_width justify-center gap-5 h-full" >
        <h1 class="text-base font-bold" >NEW RESTAURANT IN TOWN</h1>
        <P class="text-[44px] font-bold max-w max-w-3xl leading-[50px]" >Enjoy our special menus every sunday and friday</P>
        <button class="py-2 px-6 bg-transparent border border-white" >Reservation</button>
      </div>
  </div>
</template>
