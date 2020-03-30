$(function(){
    let url = window.location.href
    let str = url.split('?')[1]

    if(!str){
        alert('请携带参数ID')
        return
    }
    let arr = str.split('&')
   
    let obj = {}
    arr.forEach(item=>{
        var tmp = item.split('=')
        obj[tmp[0]] = tmp[1]
    })
    console.log(obj.id)
    let url1 = `http://localhost:3000/posts/${obj.id}`
   $.get(url1,function(res){
       let html= `
       <h1 class="mb-5 font-weight-light">${res.data.title}</h1>
        <div class="py-4">${res.data.content}</div>
        <div class="mt-2 text-black-50">
            <small>张三</small>
        </div>
        <div class="mt-2">
            <a href="#" class="badge badge-pill badge-primary px-2 py-1">工作</a>
            <a href="#" class="badge badge-pill badge-primary px-2 py-1">生活</a>
        </div>
        <div class="border-top py-4 mt-4">
            <ul class="nav justify-content-end">
            <li class="nav-item">
                <a href="./edit.html" class="nav-link btn btn-link">Edit</a>
            </li>
            <li class="nav-item">
                <a href="javascript:;" class="nav-link btn btn-link">Delete</a>
            </li>
            </ul>
    </div>
       `
       $('.container').html(html)
   })
})