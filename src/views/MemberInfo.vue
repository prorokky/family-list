<template>
  <div class="detail">
    <p class="title">Подробная информация</p>
    <EditMemberName
        v-bind:memberName="editNameText"
        v-model="editNameText"
        @editNameFunc="editNameFunc"
    />
    <EditMemberBirth
        v-bind:memberBirth="editBirthText"
        v-model="editBirthText"
        @editBirthFunc="editBirthFunc"
    />
    <div class="field">
      <label for="rel">Список родтсвенников (введите ФИО через запятую)</label>
      <p class="info-text" v-if="!editRelatives">
        {{ this.$route.query.members[this.$attrs.id].relatives.join(",") }}
        <button @click="editRelatives = true">Редактировать</button>
      </p>
      <p v-if="editRelatives">
        <input type="text" id="rel" v-model="editRelativesText">
        <button @click="editRelativesFunc">Сохранить</button>
      </p>
    </div>
    <router-link :to="{ path: '/', query: { members: this.$route.query.members } }">
      Главная страница
    </router-link>
  </div>
</template>

<script>
import EditMemberName from "@/components/EditMemberName";
import EditMemberBirth from "@/components/EditMemberBirth";

export default {
  name: "MemberInfo",
  components: {EditMemberName, EditMemberBirth},
  data: function () {
    return {
      editRelatives: false,
      editNameText: this.$route.query.members[this.$attrs.id].name,
      editBirthText: this.$route.query.members[this.$attrs.id].birthDate,
      editRelativesText: this.$route.query.members[this.$attrs.id].relatives
    }
  },
  methods: {
    editNameFunc() {
      this.$route.query.members[this.$attrs.id].name = this.editNameText
    },
    editBirthFunc() {
      this.$route.query.members[this.$attrs.id].birthDate = this.editBirthText
    },
    editRelativesFunc() {
      let arr = this.$route.query.members[this.$attrs.id].relatives,
          relatives = this.editRelativesText.toString().split(",")
      arr.splice(0, arr.length)
      relatives.forEach(el => {
        arr.push(el)
      })
      this.editRelatives = false
    }
  }
}
</script>

<style scoped>
.detail {
  width: 60%;
  float: left;
}

.title {
  color: black;
  font-size: 20px;
}

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

a {
  text-decoration: none;
  color: blue;
  float: left;
  margin: 10px;
}

router-link-active {
  text-decoration: none;
  color: blue;
}

button {
  height: 25px;
  margin: 5px;
  padding: 0;
  font-size: 16px;
}
</style>