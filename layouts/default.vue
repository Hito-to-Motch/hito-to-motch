<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-end">
        <LoginDetection></LoginDetection>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <NuxtLink
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import LoginDetection from '~/components/Login-Detection'
export default {
  components: {
    LoginDetection
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: '/'
        },
        {
          title: '場所一覧',
          icon: 'lightbulb',
          to: '/place/view'
        },
        {
          title: 'プロジェクト作成',
          icon: 'lightbulb',
          to: '/project/create'
        },
        {
          title: 'サインイン',
          icon: 'lightbulb',
          to: '/signin'
        },
      ]
    }
  }
}
</script>
