<template>
  <div class="field">
    <label for="db">Дата рождения</label>
    <p class="info-text" v-if="!editBirth">
      {{ memberBirth }}
      <button @click="editBirth = true">Редактировать</button>
    </p>
    <p v-if="editBirth">
      <input type="date" min="1900-01-01" max="2021-01-01" id="db" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
      <button @click="editBirthFunc">Сохранить</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "EditMemberBirth",
  props: {
    memberBirth: {
      type: String
    },
    value: {
      type: String
    }
  },
  data: () => {
    return {
      editBirth: false,
    }
  },
  methods: {
    editBirthFunc() {
      this.$emit("editBirthFunc")
      this.editBirth = false
    }
  }
}
</script>

<style scoped>
.field {
  clear: both;
  text-align: right;
  line-height: 25px;
}

input {
  height: 25px;
  width: 350px;
}

label {
  float: left;
  padding-right: 10px;
  color: black;
}

.info-text {
  height: 25px;
  padding-right: 10px;
  color: black;
}

button {
  height: 25px;
  margin: 5px;
  padding: 0;
  font-size: 16px;
}
</style>