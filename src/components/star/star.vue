<template>
	<div class="star" :class="starType">
		<span v-for="(itemClass,index) in itemClasses" v-bind:class="itemClass" class="star-item" :key="index"></span>
	</div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';
export default {
	props: {
		size: {
			type: Number
		},
		score: {
			type: Number
		}
	},
	computed: {
		starType() {
			return 'star-' + this.size;
		},
		itemClasses() {
			let result = [];
			let score = Math.floor(this.score * 2) / 2;
			let hasDecimal = score % 1 !== 0;
			let integer = Math.floor(score);

			for (let i = 0; i < integer; i++) {
				result.push(CLS_ON)
			}
			if (hasDecimal) {
				result.push(CLS_HALF)
			}
			while (result.length < LENGTH) {
				result.push(CLS_OFF)
			}
			return result
		}
	}
}
</script>

<style scoped>
.star {
	font-size: 0;
}

.star .star-item {
	display: inline-block;
	background-repeat: no-repeat;
}

.star.star-48 .star-item {
	width: 20px;
	height: 20px;
	margin-right: 22px;
	background-size: 20px 20px;
}

.star.star-48 .star-item.on {
	background-image: url(./img/star-48-on.png);
}

.star.star-48 .star-item.half {
	background-image: url(./img/star-48-half.png);
}

.star.star-48 .star-item.off {
	background-image: url(./img/star-48-off.png);
}

.star.star-48 .star-item:last-child {
	margin-right: 0;
}
.star.star-36 .star-item {
	width: 16px;
	height: 16px;
	margin-right: 6px;
	background-size: 16px 16px;
}

.star.star-36 .star-item.on {
	background-image: url(./img/star-48-on.png);
}

.star.star-36 .star-item.half {
	background-image: url(./img/star-48-half.png);
}

.star.star-36 .star-item.off {
	background-image: url(./img/star-48-off.png);
}

.star.star-36 .star-item:last-child {
	margin-right: 0;
}
</style>


