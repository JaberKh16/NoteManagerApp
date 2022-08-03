/*
    Note Manager Application
*/

// declaring 'use strict' statement
'use strict';

// getting the unorderlist element
const unorderedlistItems = document.getElementById('listItems'); // getting the unorder list items
// console.log(unorderedlistItems);


// ============== Adding Note Items Feature ====================
document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault(); // to resolve the refreshing issue
    const addInputField = document.getElementById('add-input'); // getting the input field
    // console.log(addInputField.value); // getting the input value from the user

    // checking whether the input field is empty or not
    if(addInputField.value !== ''){
        // creating necessary tags for adding new note inside the unorder list element as list item
        // though for a list as our contnet we need 1 list item, 2 paragraphs,
        // 2 icons and 1 input item.  
        const listElement = document.createElement('li'),
            textualContentParagraph = document.createElement('p'),
            tagsContentParagraph = document.createElement('p'),
            editIcon = document.createElement('i'),
            deleteIcon = document.createElement('i'),
            inputFieldElement = document.createElement('input');
        
            
        // adding the necessary attributes for those elements
        editIcon.className = 'fa fa-pencil-square-o';
        deleteIcon.className = 'fa fa-times';
        inputFieldElement.className = 'edit-note';
        inputFieldElement.setAttribute('type', 'text');

        // including the inputted content value to the paragraph
        textualContentParagraph.textContent = addInputField.value;  // addInputField is the textual content provided by the user

        // merging those created tags with list element
        tagsContentParagraph.appendChild(editIcon); // adding the first icon to the tags based paragraph
        tagsContentParagraph.appendChild(deleteIcon); // adding the second icon to the tags based paragraph
        listElement.appendChild(textualContentParagraph); // adding the textual content based paragraph into the list
        listElement.appendChild(tagsContentParagraph); // adding the tags content based paragraph into the list
        listElement.appendChild(inputFieldElement); // adding the input field for editing note into the list
        
        console.log(listElement);

        // merging the whole list to its parent
        unorderedlistItems.appendChild(listElement);

        // clearing the input field after adding note
        addInputField.value = null;
    }
    
})


// ============== Working With Icons Feature ====================
unorderedlistItems.addEventListener('click', (event)=>{
    // // e.target defint which item is being clicked on the DOM
    // console.log(event.target);


    // checking if editIcon is being click or not
    if(event.target.classList[1] === "fa-pencil-square-o"){
        console.log('edit');
        // getting its parent property which is <p>...<p>
        const parentProp = event.target.parentNode;
        // console.log(parentProp);
        // hiding the icons
        parentProp.style.display = 'none';
        
        // taking the previous and next sibling element
        // though we need to gets those value when edit
        const editContent = parentProp.previousElementSibling;
        // editContent.innerHTML = "Edit Note";
        const editInput = parentProp.nextElementSibling;
        // console.log(textParaContent, editInput);

        // making the editInput showed as block element
        editInput.style.display = "block";
        // getting the user provide value and added it into the 
        editInput.value = editContent.textContent;
        console.log(editContent, editInput);

        editInput.addEventListener('keypress', function(event){
            // console.log(event); // resulted KeyboardEvent object
            if(event.keyCode === 13){ // checking if user press 'enter' key
                // if the editInput field has some then only update
                if(editInput.value != ''){
                    editContent.textContent = editInput.value;
                    console.log(editContent);
                    // updating parent afte pressed
                    parentProp.style.display = 'block';
                    editInput.style.display = 'none';
                }
                
            }
        })
    }
    // when clicked on the deleteIcon
    else if(event.target.classList[1]=== "fa-times"){
        const individualList = event.target.parentNode.parentNode;
        console.log(individualList);
        individualList.parentNode.removeChild(individualList);
    }
})


// ============== Working With Hiding Feature ====================
const hideItem = document.getElementById('hide');
hideItem.addEventListener('click', function(){
    // selecting the label item from the hiding feature
    const hideLabel = document.querySelector('div>label')

    if(hideItem.checked){ // if the hideItem is checked
        hideLabel.textContent = "Unhide Notes";
        // on click hide the whole list items
        unorderedlistItems.style.display = 'none';
    }
    else{
        hideLabel.textContent = "Hide Notes";
        // on click again unhide the whole list items
        unorderedlistItems.style.display = 'block';
    }
})


// ============== Working With Searching Feature ====================
const searchInput = document.querySelector('#search-note > input'); // selecting the search-note input box
searchInput.addEventListener('keyup', function(event){ // event 'keyup' indicates which key is pressed
    // selecting each character
    const searchCharacter = event.target.value.toUpperCase(); // taking the uppercase of the pressed key
    // console.log(searchCharacter); 

    // getting all the notes been available
    const availableNotes = unorderedlistItems.getElementsByTagName('li');
    // console.log(availableNotes); // prints the HTMLCollection of selected lists

    // Array.from(HTMLCollection) to convert it to an array
    // Array.forEach(callbackFn) to iterate over the collection 
    Array.from(availableNotes).forEach(function(availableNotes){
        // taking the first child from the list and needs it textual content
        const perParaText = availableNotes.firstElementChild.textContent;
        // console.log(perParaText);

        // checking if the entered character match with "searchCharacter"
        // generally here checking is- FIRST NOTE.indexOf('FI')
        if(perParaText.toUpperCase().indexOf(searchCharacter) !== -1){
            availableNotes.style.display = 'block';
        }
        else{
            availableNotes.style.display = 'none';
        }
    });
});