/*Vue*/
import { createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

/*Vue Components*/

//Main page.
const MainPage = {
  template:`<div class="main-page" id="up">
  <div class="hero-text">
    <h2 class="hero-title">GOD'S WORD</h2>
    <p class="hero-text-description">
      Growing your Faith is the key to understanding GOD'S WORD and this website aims at improving and working your faith unto perfection and righteousness.
   </p>
   <button class="connect-with-us">Connect with us</button>
   </div>
   <bible></bible>
  </div>`,
}
//Bible Animation.
const BiblesAnimation = {
  template:`<div class="bibles-container">
    <img src="https://i.ibb.co/6tVd4L9/images-6-removebg-preview.png" alt="bible1" class="bible one">
    <img src="https://i.ibb.co/6tVd4L9/images-6-removebg-preview.png" alt="bible1" class="bible two">
    <img src="https://i.ibb.co/6tVd4L9/images-6-removebg-preview.png" alt="bible1" class="bible three">
  </div>`
}
//Explanation section.
const ExplanationSection ={
  template:`<section class="explain-section">
  <h2 class="section-header">What this site offers</h2>
  <div class="card-container" data-aos="fade-right">
  <div class="individual-card left-card" >
    <ecard  image-url="read.png" description="Feed your soul with the Word of life and the assurance of His Mercies and Gracious ness."></ecard>
    <ecard image-url="music.png" description="Fill your mind with songs of inspiration and glory to HIM."></ecard>
    </div>
  <div class="individual-card right-card">
    <ecard image-url="blog.png"
    description="Read blogs and posts inspired by the Holy Spirit which gave others the inspiration to write."></ecard>
    <ecard image-url="video.png" description="Hold video conferences which improve communication among the brethren."></ecard>
  </div>
  </div>
  </section>`
}
//Up button.
const UpButton = {
  template:`<a class="up-button" href="#up" >
  <i class="fa-solid fa-caret-up"></i>
  </a>`,
}
//Explain Cards.
const Card = {
  template: `
    <div class="explain-card">
      <img v-bind:src="imageUrl" alt="card-image" class="card-image">
      <p class="card-text">{{description}}</p>
    </div>
  `,
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
//Vue App.
const app = createApp({
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
  updated() {
    this.$nextTick(() => {
      AOS.refreshHard();
    });
  },
});

/*Include Components*/
app.component('bible',BiblesAnimation);
app.component('hero-container',MainPage);
app.component('ecard',Card);
app.component('up-button',UpButton);
app.component('explain-section',ExplanationSection);
//Mount app as per default in Vue.
app.mount('#mainContainer');

//Sign up button redirect.

const signUp = document.querySelector('.connect-with-us');
// Scrolls the page vertically to 100 pixels
signUp.addEventListener('click',function() {
  document.location.href = "signup.html"
});
