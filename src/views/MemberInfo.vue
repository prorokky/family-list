<template>
  <div class="detail">
      <p class="title">Подробная информация</p>
      <div class="field">
        <label for="fio">ФИО</label>
        <p class="info-text">{{this.$route.query.members[this.$attrs.id].name}}<button>Редактировать</button></p>
       <!--<input type="text" id="fio" v-model=`${$route.query.member.name}` />-->
      </div>
      <div class="field">
        <label for="db">Дата рождения</label>
        <p class="info-text">{{this.$route.query.members[this.$attrs.id].birthDate}}<button>Редактировать</button></p>
        <!--<input type="text" id="db"/>-->
      </div>
      <div class="field">
        <label for="rel">Список родтсвенников (введите ФИО через запятую)</label>
        <p class="info-text">{{this.$route.query.members[this.$attrs.id].relatives.join(",")}}<button>Редактировать</button></p>
        <!--<input type="text" id="rel"/>-->
      </div>
      <router-link :to="{ path: '/' }">Главная страница</router-link>
  </div>
</template>

<script>
export default {
  name: "MemberInfo",
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