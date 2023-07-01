<template>
  <dialog>
    <header>
      <slot name="header">
        <h2>{{ title }}</h2>
      </slot>
    </header>
    <section>
      <slot name="message">
        <p>{{ message }}</p>
      </slot>
    </section>
    <menu>
      <slot name="actions">
        <base-button mode="flat" @click="close">Close</base-button>
      </slot>
    </menu>
  </dialog>
</template>

<script>
export default {
  name: 'BaseDialog',
  props: {
    title: {
      type: String,
      // eslint-disable-next-line no-undef
      required: False,
    },
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
