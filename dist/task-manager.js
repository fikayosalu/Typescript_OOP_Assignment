"use strict";
class TaskManager {
    constructor(username) {
        this.username = username;
        this.task = [];
    }
    addTask(id, task) {
        let x = { id: id, task: task, completed: false };
        this.task.push(x);
        console.log(x);
    }
    changeTask(id, task) {
        for (let item of this.task) {
            if (item["id"] === id) {
                item.task = task;
                console.log(item);
            }
        }
    }
    get listTask() {
        return this.task;
    }
    doneTask(id) {
        for (let item of this.task) {
            if (item["id"] === id) {
                item["completed"] = true;
                console.log(`Nice work ${this.username}, you have completed "${item.task}"`);
            }
        }
    }
    deleteTask(id) {
        for (let item of this.task) {
            if (id) {
                if (item["id"] === id) {
                    let index = this.task.indexOf(item);
                    this.task.splice(index, 1);
                    break;
                }
            }
            else {
                if (item["completed"] === true) {
                    this.task = this.task.filter((obj) => {
                        return obj !== item;
                    });
                    console.log(`Nice work ${this.username}`);
                }
            }
        }
    }
    clearAllTasks() {
        this.task.splice(0);
        console.log(this.task);
    }
}
const user2 = new TaskManager("Tolu");
user2.addTask(1, "Do stuff");
user2.addTask(2, "Do test");
user2.addTask(3, "Do things");
user2.deleteTask(1);
console.log(user2.task);
user2.doneTask(3);
console.log(user2.task);
user2.deleteTask();
console.log(user2.task);
