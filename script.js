function removeDuplicates() {
    const input = document.getElementById('array-input').value;
    const array = input.split(',').map(Number);
    
    const uniqueElements = new Set(array);
    const uniqueArray = [...uniqueElements];
    
    document.getElementById('output').innerText = uniqueArray.join(', ');
}
