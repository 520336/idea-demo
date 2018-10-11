package com.jk.service;

import com.jk.model.Tree;
import com.jk.model.User;

import java.util.List;
import java.util.Map;

public interface UserService {
    Map<String, Object> queryUser(int page, int rows, User user);

    List<Tree> queryTree();

    void saveUser(User user);

    User querUserById(String id);

    void updateUser(User user);

    void deleteUser(String id);
}
