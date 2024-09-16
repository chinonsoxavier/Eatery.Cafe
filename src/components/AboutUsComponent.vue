<script>
export default {
  name: "AboutUSComponent",
};
</script>

<template>
  <section class="center py-10">
    <div class="flex items-center justify-between max_width gap-5">
      <div class="flex-1 max-w-md flex items-start justify-between flex-col gap-4" >
        <div class="mb-2" >
            <p class="text-[10px] text-lightText font-medium" >READ OUR STORY</p>
            <P class="text-3xl font-semibold text-[rgb(53,53,53)]" >We've been Making The Delicious Foods Since 1999</P>
        </div>
        <p class="text-lightText text-[14px] space-x-3 leading-6" >
          Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae
          malesuada. Proin scelerisque risus et ipsum semper molestie sed in
          nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id.
        </p>
        <p class="text-lightText text-[14px] space-x-3 leading-6" >
          Sed elementum vel felis sed scelerisque. In arcu diam, sollicitudin eu
          nibh ac, posuere tristique magna. You can use this template for your
          cafe or restaurant website. Please tell your friends about templatemo.
          Thank you.
        </p>
      </div>
      <div class="flex-1" >
        <img src="../assets/images/about-image.jpg" class="w-full object-cover" alt="chef picture">
      </div>
    </div>
  </section>
</template>
