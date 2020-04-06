$(function(){
    needLogin()
    let href = getHrefId(window.location.href)
    $.ajax({
        url:`/posts/${href.id}`,
        type:'get',
        success(res){
            $('#edit-title').val(res.data.title)
            $('#edit-content').val(res.data.content)
        }
    })
    
    $('.btn-primary').click(function(){
        $.ajax({
            url:`/posts/${href.id}`,
            type:'put',
            headers:{
                token:Cookies.get('token')
            },
            // dataType:'json',
            // contentType:'application/json;charset=urf-8',
            data:{
                title:$('#edit-title').val(),
                content:$('#edit-content').val()
            },
            success(res){
                if(res.error===0){
                    alert('修改成功')
                    window.location.href = '/post/index.html'
                }else{
                    console.log(res)
                }
            }
        })
    })
})