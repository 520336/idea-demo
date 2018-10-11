$(function () {
    logtable();
})

function logtable() {
    $('#logtable').datagrid({
        url: '../wwquser/querylogwqList',

        checkOnSelect: false,
        selectOnCheck: false,
        pagination: true,
        pageNumber: 1,
        pageSize: 5,
        pageList: [2, 5, 8, 11, 17],
        queryParams: {
            dateda: $("#dateda").val(),
            datexiao: $("#datexiao").val(),
        },
        columns: [[
            {field: 'id', checkbox: true},
            {field: 'userName', title: '登录姓名'},
            {field: 'userId', title: '登录帐号'},
            {field: 'createTime', title: '登录时间'},

        ]]
    })
}
 