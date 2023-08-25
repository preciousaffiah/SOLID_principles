// O: Open/Close

// Open for extension, but Closed to modification

/* instead of modifying the code by manually
   adding "SUPERUSER" to roles array we are extending
   it by creating a fucntion thar pushes items to the roles array
*/
const roles: string[] = ["ADMIN", "USER"];
const checkRole = (user: string) => {
  if (roles.includes(user)) {
    return true;
  } else {
    return false;
  }
};

const addRole = (role: string) => {
  roles.push(role);
};

addRole("SUPERUSER");
// Test role
console.log(checkRole("ADMIN")); //true
console.log(checkRole("Foo")); //false
console.log(checkRole("SUPERUSER")); //true
