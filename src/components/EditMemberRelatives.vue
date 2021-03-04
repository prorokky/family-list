<template>
  <div class="field">
    <label for="rel">Список родтсвенников (введите ФИО через запятую)</label>
    <p class="info-text" v-if="!editRelatives">
      {{ memberRelatives }}
      <button @click="$emit('edit')">Редактировать</button>
    </p>
    <p v-if="editRelatives">
      <input type="text" id="rel" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
      <button @click="editRelativesFunc">Сохранить</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "EditMemberRelatives",
  props: {
    value: {
      type: String
    },
    memberRelatives: {
      type: String
    },
    editRelatives: {
      type: Boolean
    }
  },
  data: () => {
    return {
      //editRelatives: false
    }
  },
  methods: {
    editRelativesFunc() {
      this.$emit("editRelativesFunc")
      //this.editRelatives = false
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