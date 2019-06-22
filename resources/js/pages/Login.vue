<template>
  <div class="container--small">
    <ul class="tab">
      <li
        class="tab__item"
        :class="{ 'tab__item--active': tab === 1 }"
        @click="tab = 1"
      >Login</li>
      <li
        class="tab__item"
        :class="{ 'tab__item--active': tab === 2 }"
        @click="tab = 2"
      >Register</li>
    </ul>
    {{ tab }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1
    }
  }
}
</script>
