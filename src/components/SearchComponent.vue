<template>
	<form v-on:submit.prevent="onSubmit"> 
		<!-- 기본적인 기능을 막는 것 prevent -->
	<input type="text" class="form-control" name="search" placeholder="검색어를 입력하세요." 
	v-model="query"
	v-on:keyup="onkeyup">
	<i class="fas fa-times-circle btn-reset" 
	v-show="query.length" 
	v-on:click="onSearchReset"></i>
	</form>
</template>

<script>
export default {
	props: ['value'],
	data() {
		//components에서는 데이터를 함수로 사용하여 재정함.
		return{
			query: this.value,
			// items: [],
			// isSubmit: false,
		}
	},
	methods : {
		onSearchReset(e){
			this.query='';
			this.$emit('@reset');
		},
		onSubmit(e) {
			this.$emit('@submit', this.query);
		},
		onkeyup(e) {
			// console.log(this.str);
			if(!this.query.length)this.onSearchReset();
		},
	}
}
</script>

<style lang="less">
.search-wrap {
	position: relative;
}

.search-wrap .btn-reset{
	position: absolute;
	top: 12px;
	right: 12px;
	cursor: pointer;
}
</style>