package com.jk.mapper;

import com.jk.model.Tree;
import com.jk.model.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;


public interface UserMapper {
    List<Tree> queryTree();

    long queryUser(@Param("user") User user);

    List<User> queryUserList(@Param("st") int start, @Param("end") int end, @Param("user") User user);

    void saveUser(User user);

    User querUserById(@Param("id") String id);

    void updateUser(User user);

    void deleteUser(@Param("id") String id);

}
