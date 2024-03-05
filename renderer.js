function insertVariable() {
    const textInput = document.getElementById('textInput');
    const variableInput = document.getElementById('variableInput');
    
    textInput.value += '[' + variableInput.value + ']';
    variableInput.value = '';
}

function generateOutput() {
    const textInput = document.getElementById('textInput').value;
    const outputDiv = document.getElementById('output');
    
    // Replace [variable] with user input
    const outputText = textInput.replace(/\[(.*?)\]/g, (match, variable) => {
        return prompt(`Enter value for '${variable}':`) || match;
    });

    outputDiv.textContent = outputText;
}
