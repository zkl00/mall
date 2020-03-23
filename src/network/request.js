import axios from 'axios'

export function request(confing){
    return new Promise((lovobj,lob)=>{

        //重建axios 实例
        const instasce = axios.create({
          
            timeout:5000
        })
        //响应拦截
        instasce.interceptors.response.use((confing)=>{
            return confing.data
        },err=>{
            console.log('来到了response拦截failure中');
      console.log(err);
      if (err && err.response) {
				switch (err.response.status) {
					case 400:
						err.message = '请求错误'
						break
					case 401:
						err.message = '未授权的访问'
						break
				}
			}
			return err
        })
        //请求拦截
        instasce.interceptors.request.use((confing)=>{
            // console.log('来到了request拦截success中');
			// 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

			// 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

			// 3.对请求的参数进行序列化(看服务器是否需要序列化)
			// config.data = qs.stringify(config.data)
			// console.log(config);
            return confing
        })
        //传入对象进行请求
        instasce(confing).then((res)=>{
            lovobj(res)
        }).catch((error)=>{
            lob(error)
        })
    })
}