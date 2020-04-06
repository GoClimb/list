
$(function(){
    let pageNum  = 1
    let pageSize = 3
    let totalPage = 1
    let title = ''

    function getData(){
        $.ajax({
            url:'/posts',
            type:'get',
            data:{
                pageNum,
                pageSize,
                title
            },
            success(res){
                let html = ''
                res.list.forEach((item,index)=>{
                    html+=`
                    <li class="list-group-item flex-column align-items-start py-3">
                    <div class="d-flex justify-content-between">
                        <a class="text-dark w-75" href="./show.html?id=${item._id}">
                        <h4>${item.title}</h4>
                        </a>
                        <small class="text-black-50 text-right">${
                            moment(item.updatedAt).format('YYYY-MM-DD hh:mm:ss')
                        }</small>
                    </div>
                    <div class="font-weight-light text-truncate">${item.content}</div>
                    <div class="mt-2 text-black-50">
                        <small>${item.userId.nickname}</small>
                    </div>
                    </li> 
                    `
                })
                $('.list-group ').html(html)

                totalPage = res.totalPage 

                 let pageHtml = ''
                 pageHtml += `
                 <li data-page=${pageNum > 1? pageNum-1 : 1} class="page-item"><a class="page-link" href="javascript:;">上一页</a></li>
                 `
                 for(var i=0;i<totalPage;i++){
                    pageHtml+=`
                    <li data-page='${ i + 1 }' class="page-item ${ i+1 === pageNum ? 'active':'' }"><a class="page-link" href="javascript:;">${i+1}</a></li>
                    `
                 }
                 pageHtml +=`  
                 <li data-page=${ pageNum >= totalPage? totalPage : pageNum + 1 } class="page-item"><a class="page-link" href="javascript:;">下一页</a></li>
                 `
                 $('.pagination').html(pageHtml)
            }
        })
    }
    getData()

    $('.pagination').on('click','.page-item',function(){
        let toPage = $(this).data('page')
        
        if(toPage ==  pageNum)return
        
        pageNum = toPage
        
        getData()
        
    })
    
    $('.btn').click(function(){
       title =  $('.form-control').val()
       pageNum = 1
       getData()
    })

})