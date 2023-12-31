showNotes();
let addBtn = document.getElementById("sainibt");
addBtn.onclick = function () {
    let addTxt = document.getElementById("sainita");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (addTxt.textLength == 0) {
        alert("Please write something in text box first!");
        return;
    }
    else {
        let notes = localStorage.getItem("notes");
    }
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    //   console.log(notesObj);
    showNotes();
};

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html +=
            `<div class=" notecard card my-3 mx-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id = "${index}" onclick = "Deletenote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

function Deletenote(index) {
    console.log("i am deleteing", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

    
    
let search = document.getElementById('searchtxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
