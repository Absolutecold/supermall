import axios from 'axios'

export function request(config){
	const instanc1=axios.create({
		baseURL:"http://152.136.185.210:7878/api/m5",
		timeout:10000
	})

  instanc1.interceptors.request.use(
  (config)=>{
  	return config
  },(err)=>{
  	console.log(err)
  })
  //拦截响应
  instanc1.interceptors.response.use(res=>{
  	return res
  },err=>{
  	console.log(err)
  })
  
	return instanc1(config)
 }
