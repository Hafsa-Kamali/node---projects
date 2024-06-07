// to do list-projects
import chalk from 'chalk';
class TodoItem {
    task;
    done;
    constructor(task, done = false) {
        this.task = task;
        this.done = done;
    }
}
class TodoList {
    items = [];
    addTask(task) {
        this.items.push(new TodoItem(task));
    }
    markDone(index) {
        if (index >= 0 && index < this.items.length) {
            this.items[index].done = true;
        }
    }
    display() {
        console.log(chalk.bold.green('To-Do List:'));
        this.items.forEach((item, index) => {
            const status = item.done ? chalk.green('✔ Done') : chalk.red('❌ Not Done');
            console.log(`[${index + 1}] ${status} - ${item.task}`);
        });
    }
}
const myTodoList = new TodoList();
myTodoList.addTask('Buy groceries');
myTodoList.addTask('Finish TypeScript project');
myTodoList.addTask('Read a book');
// Mark the second task as done
myTodoList.markDone(1);
// Display the to-do list
myTodoList.display();
