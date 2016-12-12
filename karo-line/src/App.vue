<template>
  <div>
    <headline></headline>
    <section class="container">
      <entry v-for="item in items" :title="item.title" :description="item.description" :url="item.url" :date="item.date"></entry>
    </section>
  </div> 
</template>

<script>
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

import headline from './components/headline'
import entry from './components/entry'

export default {
  name: 'app',
  components: {
    headline,
    entry
  },
  data () {
    return {
      output: 'Hello world',
      items: [{
        title: 'wpis 4',
        description: 'blocked because of...',
        url: '/',
        date: '5 Grudzień 2016'
      }, {
        title: 'wpis 3',
        description: 'problems with',
        url: '/',
        date: '18 listopad 2016'
      }, {
        title: 'wpis 2',
        description: 'abstance',
        url: '/',
        date: '02 listopad 2016'
      }, {
        title: 'wpis 1',
        description: 'blocked',
        url: '/',
        date: '30 październik 2016'
      }, {
        title: 'wpis 0',
        description: 'y',
        url: '/',
        date: '18 Październik 2016'
      }]
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/css/style.scss";
</style>
 