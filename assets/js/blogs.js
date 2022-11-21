/**---------------------------------------------------------------
    *
    * Vue JS Init to show the recent posts for the blogs section
    *  and make it dynamic or implement an API to get the data
    *
    ------------------------------------------------------------------ */
const { createApp, ref } = Vue;

const blogs = ref([
  {
    date: "Miércoles, 09 de Noviembre",
    title:
      "Jobbi se presentará en el evento i6 el 09 y 10 de Noviembre.",
    image: "assets/img/blogs/i6_jobbi.png",
    link: "#",
  }
]);

createApp({
  data() {
    return {
      blogs,
    };
  },
}).mount("#blogs-section");
