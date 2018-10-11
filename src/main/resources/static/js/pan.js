$(function () {
    yunpantable("0");
})

function yunpantable(x) {
    $('#yunpan').datagrid({
        url: '/user/queryWbxYunpanList?pid=' + x,
        singleSelect: true,
        checkOnSelect: false,
        selectOnCheck: false,
        pagination: true,
        pageNumber: 1,
        pageSize: 5,
        pageList: [1, 5, 8],
        columns: [[
            {field: 'id', checkbox: true},
            {
                field: 'myid', title: 'ID',
                formatter: function (value, row, index) {
                    $('#newfolder').val(row.pid);
                    return row.id;
                }
            },
            {
                field: 'title', title: '名称', width: 100,
                formatter: function (value, row, index) {
                    if (row.type == null || row.type == "") {
                        return "<span onclick='changepage(\"" + row.id + "\",\"" + row.pid + "\",\"" + value + "\")'><img src='<%=request.getContextPath() %>" + row.icon + "' height='20px'/>" + value + "</span>";
                    }
                    return "<span><img src='../" + row.icon + "' height='20px'/>" + value + "</span>";
                }
            },
            {
                field: 'type', title: '类型', width: 100,
                formatter: function (value, row, index) {
                    if (value == null || value == "") {
                        return "文件夹";
                    } else {
                        return value;
                    }
                }
            },
            {field: 'createtime', title: '创建时间', width: 100},
            {
                field: 'operation', title: '操作', width: 100,
                formatter: function (value, row, index) {
                    if (row.path != null) {
                        return "<a href='javascript:deloneitem(\"" + row.id + "\",\"" + row.pid + "\");'>删除</a>&nbsp;" +
                            "<a href='javascript:downloadFile(\"" + row.id + "\");'></a>";
                    } else {
                        return "<a href='javascript:deloneitem(\"" + row.id + "\",\"" + row.pid + "\");'>删除</a>";
                    }

                }
            }
        ]]
    });

}

function changepage(id, pid, name) {
    yunpantable(id);
    $('#back').val(pid);
    $('#newfolder').val(id);
    var x = "/" + name;
    $('#nowlocation').append("<span id=" + id + "><a href='javascript:jump(\"" + id + "\",\"" + pid + "\");'>" + x + "</a></span>");
    var y = $('#pathname2').val();

    $('#pathname').val(x);


}

function jump(id, pid) {
    yunpantable(id);
    $('#back').val(pid);
    $('#newfolder').val(id);
    $('#' + id + '').nextAll().remove();
}

function backpantable() {
    var pid = $('#back').val();
    var id = $('#newfolder').val();
    yunpantable(pid);
    if (pid != 0) {
        getbacktopid(pid);
    }
    var x = $('#pathname').val();
    x = x.substring(0, x.lastIndexOf("/"))
    $('#' + id + '').remove();
    $('#pathname').val(x);
    $('#back').val();

}

function getbacktopid(pid) {
    $.ajax({
        url: '<%=request.getContextPath()%>/user/getOneyunitem.do',
        type: 'post',
        data: {id: pid},
        dataType: 'json',
        success: function (result) {
            $('#back').val(result.pid);
        }
    })
}

function getforwardtopid() {
    var tableArr = $('#yunpan').datagrid('getSelected');
    if (tableArr != null || tableArr == "") {
        if (tableArr.type == null || tableArr.type == "") {
            changepage(tableArr.id, tableArr.pid, tableArr.title)
        }
    }
}

function createNewfolder() {
    var x = $('#newfolder').val();
    $('#addDiv').dialog({
        title: '新建文件夹',
        href: '/user/seeAddFolder.do?pid=' + x,
        width: 300,
        height: 100,
        buttons: [{
            text: '保存',
            handler: function () {
                addOneFolder();
                $.messager.show({
                    title: '我的消息',
                    msg: '添加成功',
                    timeout: 2000,
                    showType: 'slide'
                });
                yunpantable(x);
                $('#addDiv').dialog('close');
            }
        }, {
            text: '取消',
            handler: function () {
                $('#addDiv').dialog('close');
            }
        }]
    })
}

function deloneitem(id, pid) {
    var x = $('#newfolder').val();
    if (confirm("是否删除该项目以及该项目下所有的文件？")) {
        $.ajax({
            url: '/user/deloneitem.do',
            type: 'post',
            data: {
                id: id,
                pid: pid
            },
            dataType: 'json',
            success: function (result) {
                yunpantable(x);
            }
        })
    }

}

function uploadFile() {
    var x = $('#newfolder').val();
    $('#addDiv').dialog({
        title: '上传文件',
        href: '/user/seeUploadFile?pid=' + x,
        width: 400,
        height: 400,
        buttons: [{
            text: '保存',
            handler: function () {
                addOneFile();

                yunpantable(x);
                $('#addDiv').dialog('close');
            }
        }, {
            text: '取消',
            handler: function () {
                $('#addDiv').dialog('close');
            }
        }]
    })
}

function downloadFileZip() {
    var array = $('#yunpan').datagrid('getChecked')
    var ids = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i].path != null && array[i].path != "") {
            ids += (ids == "" ? "" : ",") + array[i].id;
        }
    }
    if (ids != "") {
        location.href = "/user/downLoadZipFile?ids=" + ids;
    } else {
        alert("没有选择文件！")
    }


}