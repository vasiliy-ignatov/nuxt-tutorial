<template>
	<div>
		<the-header></the-header>
		<div class="container">
			<main>
				<Nuxt />
			</main>
		</div>
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
	name: "default",
	components: {
		TheHeader
	}
}
</script>

<style>

</style>
