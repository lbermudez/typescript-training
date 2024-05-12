enum Status {
    Done = 'done',
    Inprogress = 'in-progress',
    Todo = 'todo',
}

type Indexable = {
    id: number;
}

type TodoItem = Indexable & {
    title: string;
    status: Status;
    completedOn?: Date;
}

// Another option using a Interface
// interface TodoItem extends Indexable {
//     title: string;
//     status: Status;
//     completedOn?: Date;
// }

const todoItems: TodoItem[] = [
    { id: 1, title: "Learn HTML", status: Status.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: Status.Inprogress },
    { id: 3, title: "Write the best app in the world", status: Status.Todo },
]

function addTodoItem(todo: string): TodoItem {
    const id = getNextId(todoItems)

    const newTodo: TodoItem = {
        id,
        title: todo,
        status: Status.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends Indexable>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))