<script>
export default {
  name: "NavbarComponent",
};
</script>

<template>
  <section class="center w-full text-white py-11">
    <div class="w-full px-5 py-8 max_width flex items-center justify-between">
      <span class="font-bold text-lg">
        <span>Eatery</span>
        <span class="text-red-500 px-[1px]">.</span>
        <span>Cafe</span>
      </span>
      <div class="gap-7 flex items-center justify-between">
        <p class="font-bold capitalize text-xs">HOME</p>
        <p class="font-bold capitalize text-xs">ABOUT</p>
        <p class="font-bold capitalize text-xs">CHEF</p>
        <p class="font-bold capitalize text-xs">MENU</p>
        <p class="font-bold capitalize text-xs">CONTACT</p>
      </div>
      <div class="flex items-center gap-3 justify-center">
      <div class="flex items-center justify-center">
        <span class="text-sm font-semibold">CALL NOW!</span>
        <span class="text-sm" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-telephone-fill w-3 h-3 mx-[3px]"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </svg>
        </span>
        <span class="text-sm font-semibold">010 020 0345</span>
      </div>
      <button class="bg-[#2563eb] py-2 px-4 " >Reserve a table</button>
      </div>
    </div>
  </section>
</template>
