function getHrefId(url){
  var url = url
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
  return obj
 }

function isLogin(){
  return Cookies.get('token')
}

function needLogin(){
  if(!isLogin()){
    alert('需要登陆哦😊')
    window.location.href = '/login.html'
  }
}

function getInfo(){
  return new Promise((resolve,rejects)=>{
    $.ajax({
      url:'/getInfo',
      type:'get',
      headers:{
        token:Cookies.get('token')
      },
      success(res){
        resolve(res.data)
      }
    })
  })
}
  // getInfo().then((res)=>{
  //   console.log(res)
  // })

async function RenderNavBar() {
    let html = ''
    if (!Cookies.get('token')) {
        html = `
    <li class="nav-item">
      <a href="/post/create.html" class="nav-link">
        <i class="fas fa-plus"></i>
      </a>
    </li>
    <li class="nav-item">
      <a href="/register.html" class="nav-link">注册</a>
      <a href="/login.html" class="nav-link">登录</a>
    </li>
      
    
    `
    } else {
      let data = await getInfo()
      html = `
        <li class="nav-item">
      <a href="/post/create.html" class="nav-link">
        <i class="fas fa-plus"></i>
      </a>
    </li>
    <li class="nav-item dropdown">
      <a href="javascript:;" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
    <img src="${data.headPortrait}" class="rounded" width="30" height="30" alt="" />
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="/user/settings/profile/edit.html">个人信息</a>
        <a class="dropdown-item" href="/user/settings/password/edit.html">修改密码</a>
        <div class="dropdown-divider"></div>
        <button id='logout-btn' class="dropdown-item" type="submit">退出登陆</button>
      </div>
        `
    }
    $('#navbar-right').html(html)
    
    $('#navbar-right').on('click','#logout-btn',function(){
      Cookies.remove('token')
      window.location.href = '/post/index.html'
    })
}
    

$(function(){
  RenderNavBar()
})