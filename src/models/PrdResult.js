// let items = [
// 	{id:1, title:"연어", desc:"맛있는 연어", src:"./img/salmon.jpg"},
// 	{id:2, title:"체리", desc:"싱싱한 체리", src:"./img/cherries.jpg"},
// 	{id:3, title:"와인", desc:"오래된 와인", src:"./img/wine.jpg"},
// ];
import axios from 'axios';
let serverUrl = 'http://127.0.0.1:3000/api/prd';
let items =[];

export default {//데이터를 가져오고 삭제하는 method
	list(query) {
		// return new Promise((resolve, reject) => {
		// 	resolve(items);
		console.log(axios.get(serverUrl));
		return axios.get(serverUrl);//promise를 리턴한다.
	},
	remove(id) {
		return new Promise((resolve,reject)=>{
			items = items.filter(item=>item.id != id);
			//기존아이템이 바뀜.
			resolve(items);
		});
	}
}