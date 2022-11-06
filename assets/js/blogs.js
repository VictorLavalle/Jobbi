/**---------------------------------------------------------------
    *
    * Vue JS Init to show the recent posts for the blogs section
    *  and make it dynamic or implement an API to get the data
    *
    ------------------------------------------------------------------ */
const { createApp, ref } = Vue;

const blogs = ref([
  {
    date: "Tue, September 15",
    title:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    image: "assets/img/blogs/blog-dummy.webp",
    link: "#",
  },
  {
    date: "Tue, September 17",
    title: "Vivamus ut magna sed diam tempor varius. Vestibulum eget massa.",
    image: "assets/img/blogs/blog-dummy.webp",
    link: "#",
  },
  {
    date: "Tue, September 19",
    title: "In molestie justo elit, eget tincidunt ante fermentum eget. Fusce.",
    image: "assets/img/blogs/blog-dummy.webp",
    link: "#",
  },
]);

createApp({
  data() {
    return {
      blogs,
    };
  },
}).mount("#blogs-section");
