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
        v-bind:memberRelatives="editRelativesText"
        v-model="editRelativesText"
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
      let members = this.$route.query.members,
          relatives = this.editRelativesText.split(','),
          flag = true
      members = members.map(mem => mem.name)
      relatives.forEach(relative => members.includes(relative) ? '' : flag = false)
      if (relatives[0] === "") {
        this.$route.query.members[this.$attrs.id].relatives = this.editRelativesText
        this.editRelatives = false
      } else if (!flag) {
        alert("Родственник введен неверно")
      } else {
        this.$route.query.members[this.$attrs.id].relatives = this.editRelativesText
        this.editRelatives = false
      }
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