<template>
  <div class="field">
    <label for="fio">ФИО</label>
    <p class="info-text" v-if="!editName">
      {{ memberName }}
      <button @click="editName = true">Редактировать</button>
    </p>
    <p v-if="editName">
      <input type="text" id="fio" v-bind:value="value" v-on:input="$emit('input', $event.target.value)"/>
      <button @click="editNameFunc">Сохранить</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "EditMemberName",
  props: {
    memberName: {
      type: String
    },
    value: {
      type: String
    }
  },
  data: () => {
    return {
      editName: false,
    }
  },
  methods: {
    editNameFunc() {
      this.$emit("editNameFunc")
      this.editName = false
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