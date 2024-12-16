import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

/*Components.*/
//Card Input.
const CardInput = {
  template:`<form class="form">
  <p class="title">Register </p>
  <p class="message">Signup now and connect with us. </p>
  <div class="flex">
    <label>
      <input required="" placeholder="" type="text" class="input">
      <span>Firstname</span>
    </label>

    <label>
      <input required="" placeholder="" type="text" class="input">
      <span>Lastname</span>
    </label>
  </div>

  <label>
    <input required="" placeholder="" type="email" class="input">
    <span>Email</span>
  </label>

  <label>
    <input required="" placeholder="" type="password" class="input">
    <span>Password</span>
  </label>
  <label>
    <input required="" placeholder="" type="password" class="input">
    <span>Confirm password</span>
  </label>
  <button class="submit">Submit</button>
  <p class="signin">Already have an account ? <a href="signin.html">Signin</a> </p>
</form>`
}
//Create App.
const app = createApp({});
//Add components.
app.component('card-input',CardInput);
//Mount App.
app.mount('#authenticationContainer');