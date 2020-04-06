$(function(){
    let obj = getHrefId(window.location.href)
    let url1 = `/posts/${obj.id}`
    let data1 = null
    
    $.get(url1, function(res){
       data1 = res.data.userId.nickname
       let html= `
       <h1 class="mb-5 font-weight-light">${res.data.title}</h1>
        <div class="py-4">${res.data.content}</div>
        <div class="mt-2 text-black-50">
            <small>${res.data.userId.nickname}</small>
        </div>
        <div class="mt-2">
            <a href="#" class="badge badge-pill badge-primary px-2 py-1">工作</a>
            <a href="#" class="badge badge-pill badge-primary px-2 py-1">生活</a>
        </div>
        <div class="border-top py-4 mt-4">
            <ul class="nav justify-content-end">
            <li class="nav-item">
                <a href="./edit.html?id=${obj.id}" class="nav-link btn btn-link">编辑</a>
            </li>
            <li class="nav-item">
                <a id="delete-btn" href="javascript:;" class="nav-link btn btn-link">删除</a>
            </li>
            </ul>
    </div>
       `
       $('.container').html(html)
   })

   $('.container').on('click','#delete-btn',async function(){
        let data = await getInfo()
        // if(!Cookies.get('token')){
        //     alert('请先登陆')
        //     return
        // }
        if(data.nickname!==data1){
            alert('调皮~不能删别人的哦～')
            return
        }
       if(!confirm('确定要删除吗?')){
           return
       }
       $.ajax({
           url:`/posts/${obj.id}`,
           type:"delete",
           headers:{
               token:Cookies.get('token')
           },
           success(res){
            if(res.error === 0){
                alert('删除帖子成功')
                window.location.href = '/post/index.html'
            }else{
                console.log(res)
            }
            console.log(res)
           }
       })
   })
})