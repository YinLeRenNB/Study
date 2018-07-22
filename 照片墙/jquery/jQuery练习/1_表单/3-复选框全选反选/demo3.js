$(function(){
    //全选
    $("#CheckedAll").click(function(){
        //所有checkbox跟着全选的checkbox走。
        $('[name=items]:checkbox').prop("checked", this.checked );
    });
    $('[name=items]:checkbox').click(function(){
        //定义一个临时变量，避免重复使用同一个选择器选择页面中的元素，提升程序效率。
        var $tmp=$('[name=items]:checkbox');
        //用filter方法筛选出选中的复选框。并直接给CheckedAll赋值。
        $('#CheckedAll').prop('checked',$tmp.length==$tmp.filter(':checked').length);

        /*
            //一行做过多的事情需要写更多注释。复杂选择器还可能影响效率。因此不推荐如下写法。
            $('#CheckedAll').prop('checked',!$('[name=items]:checkbox').filter(':not(:checked)').length);
        */
    });
    //输出值
    $("#send").click(function(){
        var str="你选中的是：\r\n";
        $('[name=items]:checkbox:checked').each(function(){
            str+=$(this).val()+"\r\n";
        })
        alert(str);
    });
});