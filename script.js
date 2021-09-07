// selectors
const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
textarea.focus();

// event listeners
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
});

// functions
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}