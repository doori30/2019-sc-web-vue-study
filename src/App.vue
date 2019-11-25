<template lang="pug">
#app
	.container
		.jumbotron
			h1 {{title}}
		search-bar(v-bind:value="searchBarQuery" v-on:@submit="onSubmit" v-on:@reset="onSearchReset")
		prd-result(v-bind:query="searchBarQuery")
		div
			b-button(v-b-modal.modal-1="") Launch demo modal
			b-modal#modal-1(title="BootstrapVue")
				p.my-4 Hello from modal!
</template>

<script>
import SearchComponent from './components/SearchComponent.vue'
import PrdComponenet from './components/PrdComponent.vue'

export default {
	name: 'app',
	components: {
		'search-bar' : SearchComponent,
		'prd-result' : PrdComponenet
	},
	data() {//전역변수 app안에서 사용하는 데이터
		return {
			title: "Vue를 배워봅시다.",
			modalTitle:"모달창",
			searchBarQuery:'',
		}
	},
	created() {
	},
	methods:{//on이 붙으면 이벤트를 진행 /이벤트,함수
		onSearchReset(){
			this.searchBarQuery = '';
		},
		onSubmit(query) {
			this.searchBarQuery = query;
		}
	}
}
</script>

<style lang="less">
html, body{
	margin: 0;
	padding: 0
}
dl, ul, ol, li {
	list-style: none;
	margin: 0;
	padding: 0;
}
th, td {
	vertical-align: middle !important;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
