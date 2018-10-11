$(function () {
    initpowertree()
    initmenutable(-1);
})

function initmenutable(navid) {
    $('#powerlist').datagrid({
        url: '/user/querymenuList.do?navid=' + navid,
        singleSelect: true,
        checkOnSelect: false,
        selectOnCheck: false,
        pagination: true,
        pageNumber: 1,
        pageSize: 5,
        pageList: [2, 5, 8, 11, 17],
        columns: [[
            {field: 'id', checkbox: true},
            {field: 'url', title: '地址', width: 100},
            {field: 'name', title: '菜单名称', width: 100},
            {field: 'createTime', title: '添加时间', width: 100},
            {
                field: 'cz', title: '操作', width: 100,
                formatter: function (value, row, index) {
                    return "<a class='icon-edit' onclick='editmenu(\"" + row.id + "\")' >&nbsp;&nbsp;&nbsp;&nbsp;</a>";
                }
            }
        ]],
        toolbar: [{
            iconCls: 'icon-add',
            text: '新增',
            handler: function () {
                $('#addDiv').dialog({
                    title: '新增菜单',
                    href: '/user/toAddMenu.do?id=' + navid,
                    width: 400,
                    height: 250,
                    buttons: [{
                        text: '保存',
                        handler: function () {
                            $.ajax({
                                url: '/user/savePower',
                                type: 'post',
                                data: $('#addFormPower').serialize(),
                                success: function (msg) {
                                    $('#addDiv').dialog('close');
                                    initmenutable(navid)
                                    $.messager.show({
                                        title: '我的消息',
                                        msg: '新增成功',
                                        timeout: 2000,
                                        showType: 'slide'
                                    });
                                }
                            })
                            /*$.messager.show({
                                title:'我的消息',
                                msg:'添加成功',
                                timeout:2000,
                                showType:'slide'
                            });
                            initmenutable(navid)
                            $('#addDiv').dialog('close');*/
                        }
                    }, {
                        text: '取消',
                        handler: function () {
                            $('#addDiv').dialog('close');
                        }
                    }]
                })
            }
        }, '-', {
            iconCls: 'icon-remove',
            text: '批量删除',
            handler: function () {
                $.ajax({
                    url: '/user/delmanyMenu.do',
                    type: 'post',
                    data: $("input[name='id']:checked").serialize(),
                    dataType: 'json',
                    success: function (result) {
                        initmenutable(navid);
                    }
                })
            }
        }]
    })
}

function editmenu(id) {
    var treeArr = $('#powertree').tree('getSelected');
    $('#addDiv').dialog({
        title: '修改菜单',
        href: '../user/seeEditMenu.do?id=' + id,
        width: 400,
        height: 250,
        buttons: [{
            text: '保存',
            handler: function () {
                editOneMenu();
                $.messager.show({
                    title: '我的消息',
                    msg: '修改菜单成功',
                    timeout: 2000,
                    showType: 'slide'
                });
                initmenutable(treeArr.id);

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

function initpowertree() {
    $('#powertree').tree({
        url: '/user/querySjyALLNav',
        lines: true,
        onClick: function (node) {
            initmenutable(node.id);
        },
        onContextMenu: function (e, node) {
            e.preventDefault();
            // 查找节点
            $('#powertree').tree('select', node.target);
            // 显示快捷菜单
            $('#qmenu').menu('show', {
                left: e.pageX,
                top: e.pageY
            });
        }

    })
}

function append() {
    var treeArr = $('#powertree').tree('getSelected');
    $('#addDiv').dialog({
        title: '新增节点',
        href: '../wwquser/seeAddNav.do?id=' + treeArr.id,
        width: 400,
        height: 200,
        buttons: [{
            text: '保存',
            handler: function () {
                addOneNav();
                $.messager.show({
                    title: '我的消息',
                    msg: '添加成功',
                    timeout: 2000,
                    showType: 'slide'
                });
                initpowertree();
                $('#indexpage').layout('panel', 'west').panel("refresh");
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

function edit() {
    var treeArr = $('#powertree').tree('getSelected');
    $('#addDiv').dialog({
        title: '修改节点',
        href: "../wwquser/seeEditNav.do?id=" + treeArr.id + "&text=" + treeArr.text + "&url=" + treeArr.url + "&pid=" + treeArr.pid + "",
        width: 400,
        height: 200,
        buttons: [{
            text: '保存',
            handler: function () {
                editOneNav()
                $.messager.show({
                    title: '我的消息',
                    msg: '修改成功',
                    timeout: 2000,
                    showType: 'slide'
                });
                initpowertree();
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

function remove() {
    var treeArr = $('#powertree').tree('getSelected');
    $.ajax({
        url: '../wwquser/delOneNav.do',
        type: 'post',
        data: {id: treeArr.id},
        dataType: 'json',
        success: function (result) {
            initpowertree();
        }
    })
}
 