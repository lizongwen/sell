<template>
	<div class="ratingselect">
		<div class="rating-type border-1px">
			<span @click="select(2,$event)" class="block positive" :class="{'active':selectType===2}">{{desc.all}}
				<span class="count">{{ratings.length}}</span>
			</span>
			<span @click="select(0,$event)" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}
				<span class="count">{{positives.length}}</span>
			</span>
			<span @click="select(1,$event)" class="block negative" :class="{'active':selectType===1}">{{desc.negative}}
				<span class="count">{{negatives.length}}</span>
			</span>
		</div>
		<div @click="toggleContent($event)" class="switch" :class="{'on':onlyContent}">
			<span class="fa fa-check-circle"></span>
			<span class="text">只看有内容的评价</span>
		</div>
	</div>
</template>

<script>
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;
export default {
	props: {
		ratings: {
			type: Array,
			default() {
				return [];
			}
		},
		selectType: {
			type: Number,
			default: ALL
		},
		onlyContent: {
			type: Boolean,
			default: false
		},
		desc: {
			type: Object,
			default() {
				return {
					all: '全部',
					positive: '满意',
					negative: '不满意'
				}
			}
		}
	},
	computed: {
		positives() {
			return this.ratings.filter((rating) => {
				return rating.rateType === POSITIVE;
			});
		},
		negatives() {
			return this.ratings.filter((rating) => {
				return rating.rateType === NEGATIVE;
			});
		}
	},
	methods: {
		select(type, event) {
			if (!event._constructed) {
				return;
			}
			this.$emit('select', type);
		},
		toggleContent(event) {
			if (!event._constructed) {
				return;
			}
			this.$emit('toggle');
		}
	}
}
</script>

<style scoped>
.ratingselect .rating-type {
	padding: 18px 0;
	margin: 0 18px;
	border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	font-size: 0;
}

.ratingselect .rating-type .block {
	display: inline-block;
	padding: 8px 12px;
	margin-right: 8px;
	line-height: 16px;
	border-radius: 1px;
	font-size: 12px;
	color: rgb(77, 85, 93);
}

.ratingselect .rating-type .block.positive {
	background: rgba(0, 160, 220, 0.2);
}

.ratingselect .rating-type .block.negative {
	background: rgba(77, 85, 93, 0.2);
}

.ratingselect .rating-type .block .count {
	margin-left: 2px;
	font-size: 8px;
}

.ratingselect .rating-type .block.active {
	color: #fff;
}

.ratingselect .rating-type .block.positive.active {
	background: rgb(0, 160, 220);
}

.ratingselect .rating-type .block.negative.active {
	background: rgb(77, 85, 93);
}

.ratingselect .switch {
	padding: 12px 18px;
	line-height: 24px;
	border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	color: rgb(147, 153, 159);
	font-size: 0;
}

.ratingselect .switch .fa-check-circle {
	display: inline-block;
	vertical-align: top;
	margin-right: 4px;
	font-size: 24px;
}

.ratingselect .switch .text {
	display: inline-block;
	vertical-align: top;
	font-size: 12px;
}

.ratingselect .switch.on .fa-check-circle {
	color: #00c850;
}
</style>
