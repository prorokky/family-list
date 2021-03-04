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
    <EditMemberRelatives
        v-bind:members="this.$route.query.members"
        v-bind:relatives="this.$route.query.members[this.$attrs.id].relatives"
        v-bind:editNameText="editNameText"
        v-bind:editRelatives="editRelatives"
        @edit="editRelatives = true"
        @editRelativesFunc="editRelativesFunc"
    />
    <router-link :to="{ path: '/', query: { members: this.$route.query.members } }">
      Главная страница
    </router-link>
  </div>
</template>

<script>
import EditMemberName from "@/components/EditMemberName";
import EditMemberBirth from "@/components/EditMemberBirth";
import EditMemberRelatives from "@/components/EditMemberRelatives";

export default {
  name: "MemberInfo",
  components: {EditMemberName, EditMemberBirth, EditMemberRelatives},
  data: function () {
    return {
      editRelatives: false,
      editNameText: this.$route.query.members[this.$attrs.id].name,
      editBirthText: this.$route.query.members[this.$attrs.id].birthDate
    }
  },
  methods: {
    editNameFunc() {
      this.$route.query.members[this.$attrs.id].name = this.editNameText
    },
    editBirthFunc() {
      this.$route.query.members[this.$attrs.id].birthDate = this.editBirthText
    },
    editRelativesFunc(data) {
      this.$route.query.members[this.$attrs.id].relatives = []
      data.newRelatives.forEach(el => {
        this.$route.query.members[this.$attrs.id].relatives.push(el)
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
</style>