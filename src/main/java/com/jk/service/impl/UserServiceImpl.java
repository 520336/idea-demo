package com.jk.service.impl;

import com.jk.mapper.UserMapper;
import com.jk.model.Tree;
import com.jk.model.User;
import com.jk.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userDao;


    @Override
    public Map<String, Object> queryUser(int page, int rows, User user) {
        HashMap<String,Object> map = new HashMap<String,Object>();
        long count = userDao.queryUser(user);
        int start = (page - 1)*rows;
        int end = start + rows;
        List<User> userlist = userDao.queryUserList(start,end,user);
        map.put("total", count);
        map.put("rows", userlist);
        return map;
    }

    @Override
    public List<Tree> queryTree() {
        return userDao.queryTree();
    }

    @Override
    public void saveUser(User user) {
        userDao.saveUser(user);
    }

    @Override
    public User querUserById(String id) {
        return userDao.querUserById(id);
    }

    @Override
    public void updateUser(User user) {
        userDao.updateUser(user);
    }

    @Override
    public void deleteUser(String id) {
        userDao.deleteUser(id);
    }


}
