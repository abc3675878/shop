<template lang="pug">
  #home
    b-row
      b-col(cols="12" md="6" lg="3" v-for="(item, index) in items" :key="index")
        b-card(:title="item.name" :img-src="item.img" img-top :sub-title="'$'+item.price")
          b-button(variant="primary" size="sm" @click="addCard(item)")
            //- 引用 font awesome，第一個放 fa s=solid，第二個放 icon 名子
            font-awesome-icon(:icon="['fas', 'shopping-cart']")
            | &ensp;加入購物車
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      items: [
        {
          img: 'https://e.ecimg.tw/items/DYAJCHA900AP7EG/000002_1604373280.jpg',
          name: 'Apple Airpods Pro',
          price: 6090,
        },
        {
          img: 'https://f.ecimg.tw/items/DYAJ93A900AXPNV/000002_1603176778.jpg',
          name: 'Apple iPhone 12',
          price: 28500,
        },
        {
          img: 'https://b.ecimg.tw/items/DGCN2JA900AUWBX/000002_1602499802.jpg',
          name: 'GoPro Hero9',
          price: 16800,
        },
        {
          img: 'https://c.ecimg.tw/items/DGBJDE1900AB40Y/000002_1604368410.jpg',
          name: 'Nintendo Switch',
          price: 9580,
        },
      ],
    }
  },
  methods: {
    addCard(item) {
      // 呼叫 mutations
      this.$store.commit('addCart', item)
    },
  },
}
</script>
