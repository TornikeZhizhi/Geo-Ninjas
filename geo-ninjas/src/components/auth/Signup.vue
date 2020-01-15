<template>
  <div class="signup contaienr">
    <form action="" class="card-panel" @submit.prevent="signup">
      <h2 class="center deep-purple-text">Signup</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" />
      </div>

      <div class="field">
        <label for="passwordalias">Password:</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <div class="field">
        <label for="alias">alias:</label>
        <input type="text" name="alias" v-model="alias" />
      </div>
      <p v-if="feedback" class="red-text center">{{ feedback }}</p>

      <div class="field center">
        <button class="btn deep-purple">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/index";
import slugify from "slugify";
import firebase from "firebase";

export default {
  name: "Signup",

  data() {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    signup() {
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        let ref = db.collection("users").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "this alias already exists";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .catch(error => {
                console.log(error);
                this.feedback = error.message;
              });
            this.feedback = "this alias is free";
          }
        });
      } else {
        this.feedback = "You must write all fields";
      }
    }
  }
};
</script>

<style>
.signup {
  max-width: 400px;
  margin-top: 50px;
  margin: auto;
}

.signup h2 {
  font-size: 2rem;
}

.signup .field {
  margin-bottom: 20px;
}
</style>
