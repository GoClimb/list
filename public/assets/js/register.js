$(function(){
    $('.btn').click(function(){
       let nickname = $('#inputNickName').val()
        if(nickname==''){
         nickname='憨批'
        } 
         $.ajax({
             url:'/register',
             type:'POST',
             data:{
                 email:$('#inputEmail').val(),
                 password:$('#inputPassword').val(),
                 nickname
             },
             success(res){
                 if(res.error!==0){
                     alert(res.msg)
                     return
                 }
                 alert('注册成功!')
                 window.location.href = '/login.html'
             }
         })
    })
})