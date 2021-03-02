<template>
  <div>
    <div class="information">
      <Header @addMember="addMember" v-model="search"/>
      <Table v-if="members.length !== 0" @deleteMember="deleteMember" v-bind:filteredMembers="filteredMembers" v-bind:members="members"/>
    </div>
    <div v-if="members.length == 0">
      <p class="empty">Список родственников пуст. Добавьте родственника.</p>
    </div>
  </div>

</template>

<script>
import Table from "@/components/Table";
import Header from "@/components/Header";

export default {
  name: 'Home',
  components: {Header, Table},
  data: () => {
    return {
      members: [
        {id: 0, name: "Петров Петр Петрович", birthDate: "2001-01-01", relatives: ["Иванов Иван Иванович"]},
        {id: 1, name: "Иванов Иван Иванович", birthDate: "1997-02-01", relatives: ["Петров Петр Петрович"]}
      ],
      search: "",
    }
  },
  methods: {
    addMember: function (data) {
      let newMember = {id: this.members.length + 1, name: data.name, birthDate: data.birthDate}
      this.members.push(newMember)
    },
    deleteMember: function (data) {
      this.members = this.members.filter(m => m.id !== data.id)
    }
  },
  computed: {
    filteredMembers: function () {
      let search = this.search.toLowerCase()
      return this.members.filter((elem) => {
        if (search === "") return true;
        else return elem.name.toLowerCase().indexOf(search) > -1 ||
            elem.birthDate.indexOf(search) > -1
      })
    }
  }
}
</script>
<style>
.information {
  display: grid;
  grid-template-areas:
            "header header"
            "family family";
  grid-template-rows: 40px 1fr;
  grid-template-columns: 3fr 9fr;
}

.empty {
  text-align: center;
  color: red;
  font-size: 30px;
}
</style>
