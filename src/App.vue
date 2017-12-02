<template>
	<div>
		<v-header v-bind:seller="seller"></v-header>
		<div class="tab border-1px">
			<div class="tab-item">
				<router-link to="/goods">商品</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/ratings">评论</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/seller">商家</router-link>
			</div>
		</div>
		<keep-alive>
			<router-view v-bind:seller="seller"></router-view>
		</keep-alive>
	</div>
</template>

<script>
import { urlParse } from 'common/js/util';
import header from 'components/header/header.vue';
const ERR_OK = 0;
export default {
	name: 'app',
	components: {
		'v-header': header
	},
	data() {
		return {
			seller: {
				id: (() => {
					let queryParam = urlParse();
					return queryParam.id;
				})()
			}
		}
	},
	created() {
		this.$http.get('/api/seller?id='+this.seller.id).then((res) => {
			res = res.body;
			if (res.error == ERR_OK) {
				this.seller = Object.assign({}, this.seller, res.data);
			}
		})
	}
}
</script>

<style>
.tab {
	position: relative;
	height: 3rem;
	display: flex;
	align-items: center;
}

.tab::after {
	content: '';
	display: block;
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
	border-top: 1px solid rgba(7, 17, 27, .1)
}

.tab .tab-item {
	flex: 1;
	text-align: center;
}

.tab .tab-item a {
	display: block;
}

.tab .tab-item a.active {
	color: #E88384
}
</style>
