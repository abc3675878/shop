<template lang="pug">
#app
  b-container
    b-row
      b-col.text-center(cols="12")
        #nav
          router-link(to='/') Home
          | &ensp;|&ensp;
          router-link(to='/about') About
          | &ensp;|&ensp;
          router-link(to='/cart') Cart
      b-col(cols="12")
        router-view
</template>
