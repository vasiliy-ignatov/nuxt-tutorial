<template>
	<header>
		<nav class="navbar navbar-expand-lg bg-light">
			<a class="navbar-brand" href="#">NuxtJS</a>

			<div class="collapse navbar-collapse">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<nuxt-link exact class="nav-link" active-class="active" to="/">Home</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" active-class="active" to="/users">Users</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" active-class="active" to="/about">About</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" active-class="active" to="/login">Login</nuxt-link>
					</li>
					<li class="nav-item" v-if="isAuth">
						<a href="#" class="nav-link" @click.prevent="logout">Logout</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	computed: {
		isAuth() {
			return this.$store.getters.isAuth
		},
	},
	methods: {
		logout() {
			this.$store.dispatch('logout')
		}
	}
}
</script>

<style>

</style>
