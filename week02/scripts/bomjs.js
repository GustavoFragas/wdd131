const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

button.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    li.textContent = input.value;
    deleteBtn.textContent = '❌';
    deleteBtn.setAttribute('aria-label', 'Remove ' + input.value);

    deleteBtn.addEventListener('click', function() {
      list.removeChild(li);
      input.focus();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = '';
  }
});


// Ideas to consider:

// Validate input — Only accept Book of Mormon books
// Limit to 10 entries — Enforce the "Top 10" constraint
// Prevent duplicates — Don't allow the same chapter to be added more than once
// Better UI feedback — Show warnings/confirmations
// Improve accessibility — Ensure the application is usable with screen readers and keyboard navigation
// Format input — Standardize the format of the input for consistency