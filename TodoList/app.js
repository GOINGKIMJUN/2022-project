let toDo = prompt("what you wanna do?");
let showList = ["Buy New Turtle"];


while (toDo !== 'quit') {
    if (toDo === 'list') {
        console.log('********');
        for (let i = 0; i < showList.length; i++) {
            console.log(`${i}: ${showList[i]}`);
        }
        console.log('********');
        toDo = prompt("what you wanna do?");
    }
    else if (toDo === 'add') {
        let addWhat = prompt("what you add?");
        showList.push(addWhat);
        toDo = prompt("what you wanna do?");
    }
    else if (toDo === 'delete') {
        let deleteWhat = parseInt(prompt("number you wanna delete"));
        showList.splice(deleteWhat, 1);
        toDo = prompt("what you wanna do?");
    }
}
console.log('quit');