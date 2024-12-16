import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

/*Components.*/
//Card Input.
const CardInput = {
  template:`<form class="form">
  <p class="title">Sign in </p>
  <p class="message">Welcome back👋</p>

  <label>
    <input required="" placeholder="" type="email" class="input">
    <span>Email</span>
  </label>

  <label>
    <input required="" placeholder="" type="password" class="input">
    <span>Password</span>
  </label>
  <button class="submit">Submit</button>
  <p class="signin">Don't have an account ? <a href="signup.html">SignUp</a></p>
</form>`
}
//Create App.
const app = createApp({});
//Add components.
app.component('card-input',CardInput);
//Mount App.
app.mount('#authenticationContainer');