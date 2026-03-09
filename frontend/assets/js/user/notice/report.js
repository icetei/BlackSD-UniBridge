const filterSubjectSelector = document.querySelector('.filter-subject-container');
filterSubjectSelector.addEventListener('click', function() {
    const filterSubjectDropdown = document.querySelector('.filter-subject-dropdown');
    const isDisabled = filterSubjectDropdown.classList.contains('disabled');

    if (isDisabled) {
        filterSubjectDropdown.classList.remove('disabled');
    } else {
        filterSubjectDropdown.classList.add('disabled');
    }
});

const filterSubjectItems = document.querySelectorAll('.filter-subject-item');
filterSubjectItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        closeDropdownAndSetPlaceHolder(event, item);
    });
});

function closeDropdownAndSetPlaceHolder(event, thisEl) {
    event.preventDefault();
    event.stopPropagation();

    const filterSubjectDropdown = document.querySelector('.filter-subject-dropdown');
    filterSubjectDropdown.classList.add('disabled');

    const filterSubjectPlaceholder = document.querySelector('.filter-subject-placeholder');
    filterSubjectPlaceholder.textContent = thisEl.textContent;
    filterSubjectPlaceholder.classList.add('selected');
}