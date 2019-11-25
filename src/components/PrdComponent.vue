<template>
	<div v-if="isSubmit">
		<div class="mt-3">
			<span class="f-125 text-primary">상품 리스트 보기</span>
			<i class="fas fa-angle-down pointer" v-on:click="onTogglePrd"
				v-bind:class="{'fa-angle-down':!isShow, 'fa-angle-up':isShow}"></i>
			<!-- <i class="fas fa-angle-up pointer" v-on:click="onHidePrd"></i> -->
			<!-- v-bind: > :class=""대체가능 /v-on:click="" @:click -->
		</div>
		<div class="prd-wrap my-3">
			<ul class="prds d-flex justify-content-between flex-wrap" v-if="isShow">
				<li class="prd mb-5" style="flex: 32% 0 0;" v-for="item in items" v-bind:key="item.id">
					<div><img v-bind:src="item.src" class="w-100"></div>
					<div class="f-125 py-2">{{item.title}}</div>
					<div class="f-0875 text-secondary py-2">{{item.desc}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import PrdResult from '../models/PrdResult.js'

	export default {
		props : ['query'],
		data (){
			return{
				isShow: false, //검색결과
				isSubmit : false,//기본값
				items : []
			}
		},
		watch :{//변수가 바뀌는지 감시, 자식이 가지고 있는 함수를 실행.
			query(newVal,oldVal) {
				//인자 2개 새로운것과 그 전거
			this.prdSearch();
				//((newVal)위에서 query가 이미 바뀌어서 없어도그만.)
				// if(newVal != oldVal) newVal != "" ? prdSearch(newVal) : prdSearch("");
				// 값이 같지 않다면    빈값이 아니라면 데이터를 보이고 아니면 빈값을 받는다.
			}
		},
		methods : {
			onTogglePrd(e){
			this.isShow = !this.isShow;
		},
		async prdSearch(){
			//promise를 async로 바꿔서 사용하는 것이 가독성및 정리가 편하다.
			if(this.query != "") {
				let result = await	PrdResult.list(this.query)
					this.isSubmit = true;
					this.isShow = true,
					this.items = result.data;
			}
		// prdSearch(){
		// 	//searchResult() {//일반함수(자체함수) 결과값을 불러옴.
		// 	if(this.query != "") {
		// 		PrdResult.list(this.query).then((result) => {
		// 			this.isSubmit = true;
		// 			this.isShow = true,
		// 			this.items = result.data;
		// 		});
		// 	}
			else{
				this.isSubmit = false;
				this.isShow = false;
				this.items = [];
				}
			}
		}
}
</script>

<style>

</style>