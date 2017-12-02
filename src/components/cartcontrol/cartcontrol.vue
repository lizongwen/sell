<template>
	<div class="cartcontrol">
		<transition name="move">
			<div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
				<span class="inner fa fa-minus-circle"></span>
			</div>
		</transition>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add" @click.stop.prevent="addCart">
			<span class="fa fa-plus-circle"></span>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
export default {
	props: {
		food: {
			type: Object
		}
	},
	created() {

	},
	methods: {
		addCart(e) {
			if (!e._constructed) {
				return;
			}
			if (!this.food.count) {
				Vue.set(this.food, 'count', 1);
			} else {
				this.food.count++;
			}
			this.$emit('add', e.target);
		},
		decreaseCart(e) {
			if (!e._constructed) {
				return;
			}
			if (this.food.count) {
				this.food.count--;
			}
		}
	}
}
</script>

<style scoped>
.cartcontrol .cart-add {
	display: inline-block;
	padding: 6px;
	line-height: 24px;
	font-size: 24px;
	color: rgb(0, 160, 220)
}
.cartcontrol .cart-decrease {
	display: inline-block;
	padding: 3px;
	line-height: 24px;
	font-size: 24px;
	color: rgb(0, 160, 220);
	opacity: 1;
	transform: translate3d(0, 0, 0)
}
.cartcontrol .cart-decrease.move-enter,
.cartcontrol .cart-decrease.move-leave-active{
	opacity: 0;
    transform: translate3d(24px, 0, 0)
}
.cartcontrol .cart-decrease.move-enter-active,
.cartcontrol .cart-decrease.move-leave-active{
	transition: all 0.4s linear
}

.cartcontrol .cart-decrease .inner {
	display: inline-block;
	line-height: 24px;
	font-size: 24px;
	color: rgb(0, 160, 220);
	transition: all 0.4s linear;
	transform: rotate(0)
}
.cartcontrol .cart-decrease.move-enter .inner,
.cartcontrol .cart-decrease.move-enter-leave-active .inner{
	transform: rotate(180deg)
}
.cartcontrol .cart-count {
	display: inline-block;
	vertical-align: top;
	width: 12px;
	padding-top: 6px;
	line-height: 24px;
	text-align: center;
	font-size: 10px;
	color: rgb(147, 153, 159)
}
</style>
