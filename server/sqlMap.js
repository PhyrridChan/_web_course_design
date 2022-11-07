// sql语句
var sqlMap = {
    // 用户
    user: {
        find: "select id, stu_id, name, avatar_url, major_class, campus, created_date from t_user where stu_id = ? and passwd =?",
    },
    todo: {
        get: "select * from t_todo where user_id = ?",
        delete: "update t_todo set status = -1 where user_id = ? and task_id = ?",
        reset: "update t_todo set status = 0 where user_id = ? and task_id = ?",
        done: "update t_todo set status = 1 where user_id = ? and task_id = ?",
        add: "insert into t_todo (user_id, group_id, group_name, task_info, time_begin, time_end) value (?, ?, ? ,?, ?, ?)"
    }
}

module.exports = sqlMap;