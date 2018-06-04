$(function(){
    //全选
    $("#CheckedAll").click(function(){
        if(this.checked){				 //如果当前点击的多选框被选中
            $('input[type=checkbox][name=items]').prop("checked", true );
        }else{
            $('input[type=checkbox][name=items]').prop("checked", false );
        }
    });
    $('input[type=checkbox][name=items]').click(function(){
        var flag=true;
        $('input[type=checkbox][name=items]').each(function(){
            if(!this.checked){
                flag = false;
            }
        });

        if( flag ){
            $('#CheckedAll').prop('checked', true );
        }else{
            $('#CheckedAll').prop('checked', false );
        }
    });
    //输出值
    $("#send").click(function(){
        var str="你选中的是：\r\n";
        $('input[type=checkbox][name=items]:checked').each(function(){
            str+=$(this).val()+"\r\n";
        })
        alert(str);
    });
})