/**
 * the resource that the client want to access through RESTful Api.
 * it can be D.B or any other form
 * in this case I simulated the resource as an array of objects.
 * @type {[{description: string, id: number, completed: boolean, title: string},{description: string, id: number, completed: boolean, title: string},{description: string, id: number, completed: boolean, title: string},{description: string, id: number, completed: boolean, title: string}]}
 */
const todo = [
    {
        id: 1,
        title: 'Coding',
        description: 'working with functions in JS',
        completed: false
    },
    {
        id: 2,
        title: 'Cooking',
        description: 'preparing rice and chicken',
        completed: false
    },
    {
        id: 3,
        title: 'Walking',
        description: 'walking in the park',
        completed: false
    },
    {
        id: 4,
        title: 'Watching',
        description: 'watching TV',
        completed: false
    }
]

module.exports = {todo};