//users_management.ts
// src/learning/objects

import { User } from "./user.ts";

const adminUser = new User("admin", "admin", 30, "katka@gmail.com");

adminUser.logUser();
console.log(adminUser.getUsername());
adminUser.setAge(55);
adminUser.logUser();
console.log(adminUser.getEmail());
