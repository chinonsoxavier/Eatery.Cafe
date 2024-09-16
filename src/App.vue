<template>
  <HeroComponents />
  <AboutUsComponent/>
  <OurChefsComponent/>
  <OurMenusComponent/>
  <WelcomeComponent/>
  <BookTableComponent/>
  
</template>

<script>
import AboutUsComponent from "./components/AboutUsComponent.vue";
import BookTableComponent from "./components/BookTableComponent.vue";
import HeroComponents from "./components/HeroComponents";
import OurChefsComponent from "./components/OurChefsComponent.vue";
import OurMenusComponent from "./components/OurMenusComponent.vue";
import WelcomeComponent from "./components/WelcomeComponent.vue";
// import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  name: "App",
  components: {
    HeroComponents,
    AboutUsComponent,
    OurChefsComponent,
    OurMenusComponent,
    WelcomeComponent,
    BookTableComponent
    // NavbarComponent
  },
};
</script>
