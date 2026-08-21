function filterActiveUsers(users) {
    if (!Array.isArray(users)) {
        return "Invalid";
    }
    if (users.length === 0) {
        return "Invalid";
    }
    for (let user of users) {
        if (user === null || typeof user !== "object" || !("isActive" in user)) {
            return "Invalid";
        }
    }
    return users.filter(user => user.isActive === true);
}

console.log(filterActiveUsers([{name:"A", isActive:true}, {name:"B", isActive:false}])); 

console.log(filterActiveUsers([])); 

console.log(filterActiveUsers([{name:"A"}])); 

console.log(filterActiveUsers("users")); 
console.log(filterActiveUsers([
 {name:"A", isActive:true},
 {name:"B", isActive:false}
]));