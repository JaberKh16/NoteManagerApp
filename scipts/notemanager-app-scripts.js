/*
    Note Manager Application
*/

// declaring 'use strict' statement
'use strict';

// getting the unorderlist element
const unorderedlistItems = document.getElementById('listItems'); // getting the unorder list items
// console.log(unorderedlistItems);

document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault(); // to resolve the refreshing issue
    const addInputField = document.getElementById('add-input'); // getting the input field
    // console.log(addInputField.value); // getting the input value from the user

    // checking whether the input field is empty or not
    if(addInputField.value !== ''){
        // creating necessary tags for adding new note inside the unorder list element as list item
        const listElement = document.createElement('li'),
            textualContentParagraph = document.createElement('p'),
            tagsContentParagraph = document.createElement('p'),
            rightSignedIcon = document.createElement('i'),
            crossSignedIcon = document.createElement('i'),
            inputFieldElement = document.createElement('input');
        
            
        // adding the necessary attributes for those elements
        rightSignedIcon.className = 'fa fa-pencil-square-o';
        crossSignedIcon.className = 'fa fa-times';
        inputFieldElement.className = 'edit-note';
        inputFieldElement.setAttribute('type', 'text');

        // including the inputted content value to the paragraph
        textualContentParagraph.textContent = addInputField.value;  // addInputField is the textual content provided by the user

        // merging those created tags with list element
        tagsContentParagraph.appendChild(rightSignedIcon); // adding the first icon to the tags based paragraph
        tagsContentParagraph.appendChild(crossSignedIcon); // adding the second icon to the tags based paragraph
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