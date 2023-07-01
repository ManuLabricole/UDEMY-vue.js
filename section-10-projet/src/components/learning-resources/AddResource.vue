<template>
  <base-dialog title="Invalid inputs" v-if="isFormInvalid" @close="confirmError">
    <template v-slot:message>
      <p>Invalude inputs !! </p>
      <p>Please, make sur that there are not empty inputs</p>
    </template>
    <template v-slot:actions>
      <base-button @click="confirmError">Close</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="saveData">
      <div class="form-control">
        <label for="input-title">Title</label>
        <input id="input-title" type="text" placeholder="..." ref="inputTitle" />
      </div>
      <div class="form-control">
        <label for="input-description">Description</label>
        <textarea id="input-description" placeholder="..." ref="inputDescription" rows="3"/>
      </div>
      <div class="form-control">
        <label for="input-link"></label>
        <input id="input-link" type="url" placeholder="..." ref="inputLink"/>
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  name: 'AddResource',
  data() {
    return {
      isFormInvalid: false,
    };
  },
  inject: ['addResource'],
  methods: {
    saveData() {
      const title = this.$refs.inputTitle.value;
      const description = this.$refs.inputDescription.value;
      const link = this.$refs.inputLink.value;

      if (
        title.trim() === '' || description.trim() === '' || link.trim() === ''
      ) {
        this.isFormInvalid = true;
        return;
      }

      this.addResource(
        title,
        description,
        link,
      );
    },
    confirmError() {
      this.isFormInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}</style>
