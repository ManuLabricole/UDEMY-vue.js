<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model="userName" />
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model.number="userAge" ref="ageInput" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <!-- <option value="bike">Google</option>
        <option value="car">Word of mouth</option>
        <option value="newspaper">Newspaper</option> -->
        <option v-for="option in options" :value="option.value" :key="option.value">
          {{ option.text }}
        </option>
      </select>

      <br />
      <input id="newOptionInput" type="text" v-model="newOption" placeholder="Your new Option" />
      <br />
      <button type="text" @click="addReferrerOption">Add Category</button>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interest" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="interest"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="interest"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="how" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="how" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">

    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TheForm',
  data() {
    return {
      userName: '',
      userAge: null,
      referrer: 'bike',
      newOption: '',
      interest: [],
      how: null,

      options: [
        { value: 'bike', text: 'bike' },
        { value: 'car', text: 'car' },
        { value: 'newspaper', text: 'Newspaper' },
      ],
    };
  },
  methods: {
    submitForm() {
      // console.log('username: ', this.userName);
      // this.userName = '';
      // console.log('userAge: ', this.userAge);
      // console.log('ageInput: ', this.$refs.ageInput.value + 5);
      // console.log(33);
      // console.log('referrer: ', this.referrer);
      console.log('interest: ', this.interest);
    },

    addReferrerOption() {
      const newOptionValue = this.newOption.trim();
      console.log('newOption: ', newOptionValue);

      if (newOptionValue === '') {
        return;
      }

      // Check if the option already exists
      const optionExists = this.options.find(
        (option) => option.value === newOptionValue.toLowerCase(),
      );

      if (optionExists) {
        alert('Option already exists!');
        return;
      }

      const newOptionObject = {
        value: newOptionValue.toLowerCase(),
        text: newOptionValue,
      };
      this.options.push(newOptionObject);
      this.referrer = newOptionObject.value;
      this.newOption = '';
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
