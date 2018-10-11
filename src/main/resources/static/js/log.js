$(function () {
    logtable();
})

function logtable() {
    $('#logtable').datagrid({
        url: '../wwquser/querylogList.do',

        checkOnSelect: false,
        selectOnCheck: false,
        pagination: true,
        pageNumber: 1,
        pageSize: 5,
        pageList: [2, 5, 8, 11, 17],
        queryParams: {
            methodName: $("#mname").val(),
            userId: $("#uid").val(),
            atime1: $("#atimeStart").val(),
            atime2: $("#atimeEnd").val()
        },
        columns: [[
            {field: 'id', checkbox: true},
            {field: 'className', title: '类名'},
            {field: 'methodName', title: '方法名'},
            {field: 'param', title: '参数'},
            {field: 'userId', title: '用户ID'},
            {field: 'createTime', title: '创建时间'},
            {field: 'ip', title: 'IP地址'}

        ]]
    })
}
 