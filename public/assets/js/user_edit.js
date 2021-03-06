$(function(){
    getInfo().then((res)=>{
        $('#myEmail').val(res.email)
        $('#myHead').attr('src',res.headPortrait)
    }).catch((err)=>{
        console.log(err)
    })

    $('.btn-primary').click(function(){
        var formData = new FormData()
        formData.append('headPortrait',$('#myFile')[0].files[0])
        $.ajax({
            url:'/update',
            type:'PUT',
            headers:{
                token:Cookies.get('token')
            },
            data:formData,
            processData:false,
            contentType:false,
            success(res){
                if(res.error===0){
                    window.location.reload()
                }else{
                    console.log(res)
                }
            }
        })
    })
})