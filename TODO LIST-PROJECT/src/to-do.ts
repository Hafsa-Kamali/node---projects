// to do list-projects


import chalk from 'chalk';

class TodoItem {
    constructor(public task: string, public done: boolean = false) {}
}

class TodoList {
    private items: TodoItem[] = [];

    addTask(task: string) {
        this.items.push(new TodoItem(task));
    }

    markDone(index: number) {
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
