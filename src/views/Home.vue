<template>
  <div class="information">
    <Header @addMember="addMember" v-model="search"/>
    <Table @deleteMember="deleteMember" v-bind:filteredMembers="filteredMembers" v-bind:members="members" />
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
        {id: 1, name: "Гапонов Владислав Родионович", birthDate: "2001-01-01"},
        {id: 2, name: "Иванов Иван Иванович", birthDate: "1997-01-01"}
      ],
      search: "",
    }
  },
  methods: {
    addMember: function (data) {
      let newMember = {id: this.members.length+1, name: data.name, birthDate: data.birthDate}
      this.members.push(newMember)
    },
    deleteMember: function (id) {
      this.members = this.members.filter(m => m.id !== id)
    }
  },
  computed: {
    filteredMembers: function () {
      let search = this.search.toLowerCase()
      return this.members.filter( (elem) => {
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
</style>
