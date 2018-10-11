package com.jk.controller;

import com.jk.model.Tree;
import com.jk.model.User;
import java.util.UUID;
import com.jk.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("queryTree")
    @ResponseBody
    public List<Tree> queryTree() {
        return userService.queryTree();
    }

    @RequestMapping("queryUser")
    @ResponseBody
    public Map<String, Object> queryUser(int page, int rows, User user) {
        Map<String, Object> map = userService.queryUser(page, rows, user);
        return map;
    }

    @RequestMapping("saveUser")
    @ResponseBody
    public String saveUser(User user){
        user.setId(UUID.randomUUID().toString().replaceAll("-", ""));
        userService.saveUser(user);
        return"1";
    }

    @RequestMapping("toEdit")
    public String toEdit(HttpServletRequest request,String id){

        User user = userService.querUserById(id);
        request.setAttribute("user",user);
        return "edituser";
    }

    @RequestMapping("toIndex")
    public String toIndex() {

        return "/index";
    }

    @RequestMapping("updateUser")
    @ResponseBody
    public String updateUser(User user){
        userService.updateUser(user);
        return "｛｝";
    }

    @RequestMapping("deleteUser")
    @ResponseBody
    public String deleteUser(String id) {
        userService.deleteUser(id);
        return "1";
    }

    @RequestMapping("toUser")
    public String toUser() {

        return "/userlist";
    }

    @RequestMapping("toAdd")
    public String toAdd() {

        return "/adduser";
    }



}
