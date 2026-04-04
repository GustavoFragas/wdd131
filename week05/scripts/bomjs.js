const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');
let chapterArray = getChapterList() || [];

button.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    displayList(input.value);
    chapterArray.push(input.value);
    setChapterList(chapterArray);
    input.value = '';
    input.focus();
  }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');
    li.textContent = item;
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete');

    li.append(deleteBtn);
    list.append(li);
    deleteBtn.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); 
      input.focus();
    });
}

function setChapterList(chapterArray) {
    localStorage.setItem('chapterList', JSON.stringify(chapterArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('chapterList'));
}

chapterArray.forEach(chapter => {
    displayList(chapter);
});

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chapterArray = chapterArray.filter(item => item !== chapter);
  setChapterList(chapterArray);
}



// Ideas to consider:

// Validate input — Only accept Book of Mormon books
// Limit to 10 entries — Enforce the "Top 10" constraint
// Prevent duplicates — Don't allow the same chapter to be added more than once
// Better UI feedback — Show warnings/confirmations
// Improve accessibility — Ensure the application is usable with screen readers and keyboard navigation
// Format input — Standardize the format of the input for consistency