const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const taskContainer = document.querySelector("#todoCards");
const counter = document.querySelector('#count');

addBtn.addEventListener('click', addTask);
updateCounter();
// deleteTask(taskCard); pour supprimer le tout premier task

function addTask() {
    const newTask = taskCard.cloneNode(true); // Cloner la taskcard
    const newTextArea = newTask.querySelector('.task');
    const newDelBtn = newTask.querySelector('.delBtn'); // Correction : Sélectionner le bouton de suppression

    newTextArea.value = "New Task"; // Écrire "New Task" dans le champ de tâche

    newDelBtn.addEventListener('click', function() { // Ajouter un écouteur d'événements au bouton de suppression
        deleteTask(newTask); // Cibler la nouvelle tâche
        updateCounter(); // Mettre à jour le compteur après la suppression
    });

    taskContainer.appendChild(newTask); // Ajouter la nouvelle tâche au conteneur de tâches
    updateCounter(); // Mettre à jour le compteur après l'ajout
}

function deleteTask(task) {
    task.remove();
}

function countTaskCard() {
    const countTaskCards = document.querySelectorAll(".todoCard")
    const counterValue = countTaskCards.length;
    return counterValue;
}

function updateCounter() {
    const count = countTaskCard();
    counter.textContent = count; // Mettre à jour le contenu de la div counter
}



