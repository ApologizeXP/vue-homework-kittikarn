<template>
  <b class="text-6xl">Contract</b>
  <div class="grid grid-cols-4 gap-10 mt-10" >
    <div v-for="con in contracts" :key="con.id">
      <a :href="con.url "
        ><img
          :src="con.img"
          alt="img"
      /></a>
      <div class="text-center">
          <b>{{con.name}}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contract",
  data: () => ({
    contracts: [
      {
        id: 1,
        name: "Facebook",
        url: "https://www.instagram.com/ipondd_/",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1024px-Facebook_icon_2013.svg.png",
      },
      {
        id: 2,
        name: "Instagram",
        url: "https://www.facebook.com/Kittikarnpond",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png",
      },
      {
        id: 3,
        name: "GitHub",
        url: "https://github.com/ApologizeXP",
        img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
    ],
  }),
};
</script>

<style></style>
