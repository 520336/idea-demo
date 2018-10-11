$(function () {
    initUpdateUser();
})

function initUpdateUser() {
    $.ajax({
        url: '/user/toEdit2',
        type: 'post',
        data: {id: $('#x').val()},
        dataType: 'json',
        success: function (result) {
            var html = "";
            var x = ""
            var role = result.role;
            var roles = result.roles;
            for (var i = 0; i < role.length; i++) {
                for (var j = 0; j < roles.length; j++) {
                    if (roles[j].id == role[i].id) {
                        x = "<input type='checkbox' checked name='roleid' value=" + role[i].id + " />" + role[i].name + "<br/>";
                        break;
                    } else {
                        x = "<input type='checkbox' name='roleid' value=" + role[i].id + " />" + role[i].name + "<br/>";
                    }

                }
                html += x;
            }
            $('#userListTable').html(html);
        }
    })
}