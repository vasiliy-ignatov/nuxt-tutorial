<template>
	<h1 >{{user.name}}</h1>
</template>

<script>

export default {
	validate({params}) {
		return /^\d+$/.test(params.id)
	},
	asyncData({params}) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve({
					user: {
						name: `Test user ${params.id}`
					}
				})
			}, 1500);
		})
	}
}
</script>

<style>

</style>