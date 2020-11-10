<template lang="pug">
  #cart
    //- fields 更改顯示的名稱
    b-table(:items="items" :fields="fields")
      template(v-slot:cell(action)="data")
        b-button(variant="danger" @click="del(data.index)")
          font-awesome-icon(:icon="['far', 'trash-alt']")
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: '商品名稱',
        },
        {
          key: 'price',
          label: '價格',
        },
        {
          // 自己定義新的欄位
          key: 'action',
          label: '操作',
        },
      ],
    }
  },
  computed: {
    items() {
      // 直接取 state 的 items
      return this.$store.state.items
      // 呼叫 Vuex 的 getters
      // return this.$store.state.getters.items
    },
  },
  methods: {
    del(index) {
      this.$store.commit('delCart', index)
    },
  },
}
</script>
