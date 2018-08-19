import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _958a384c = () => import('../pages/sommaire.vue' /* webpackChunkName: "pages/sommaire" */).then(m => m.default || m)
const _ff5a9ad8 = () => import('../pages/place.vue' /* webpackChunkName: "pages/place" */).then(m => m.default || m)
const _b620a4c6 = () => import('../pages/introduction.vue' /* webpackChunkName: "pages/introduction" */).then(m => m.default || m)
const _0e9634ce = () => import('../pages/contexte.vue' /* webpackChunkName: "pages/contexte" */).then(m => m.default || m)
const _35cd06d4 = () => import('../pages/annexe.vue' /* webpackChunkName: "pages/annexe" */).then(m => m.default || m)
const _6feac7ff = () => import('../pages/bilan.vue' /* webpackChunkName: "pages/bilan" */).then(m => m.default || m)
const _692bd4a4 = () => import('../pages/lexique.vue' /* webpackChunkName: "pages/lexique" */).then(m => m.default || m)
const _27f4058f = () => import('../pages/projet.vue' /* webpackChunkName: "pages/projet" */).then(m => m.default || m)
const _3543b642 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/sommaire",
			component: _958a384c,
			name: "sommaire"
		},
		{
			path: "/place",
			component: _ff5a9ad8,
			name: "place"
		},
		{
			path: "/introduction",
			component: _b620a4c6,
			name: "introduction"
		},
		{
			path: "/contexte",
			component: _0e9634ce,
			name: "contexte"
		},
		{
			path: "/annexe",
			component: _35cd06d4,
			name: "annexe"
		},
		{
			path: "/bilan",
			component: _6feac7ff,
			name: "bilan"
		},
		{
			path: "/lexique",
			component: _692bd4a4,
			name: "lexique"
		},
		{
			path: "/projet",
			component: _27f4058f,
			name: "projet"
		},
		{
			path: "/",
			component: _3543b642,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
