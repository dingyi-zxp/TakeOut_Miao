<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getStorage({
				key: 'storage_key',
				success: function (res) {
					console.log(res.data);
				},
				fail(e) {
					console.log(e)
					console.log('error')
				}
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
