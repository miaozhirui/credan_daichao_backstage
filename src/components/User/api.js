let api = {

    //获取所有用户
    getUsers() {

        let usersStr = localStorage.getItem('users');
        let users = usersStr ? JSON.parse(usersStr): [];

        return users;
    },

    createUser(user) {
        
        let users = api.getUsers();
        user.id = users.length>0?users[users.length-1].id+1 : 1;
      
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    },

    getUser(userId) {

        let users = api.getUsers();
     
        let user = users.find(item => item.id==userId);
        
        return user;
    }
}

export default api;