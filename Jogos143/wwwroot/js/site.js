const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);
    const sections = document.querySelectorAll('.letter-section');
    const noResults = document.getElementById('no_results');
    let hasResults = false;

    sections.forEach(section => {
        const items = section.querySelectorAll('.item');
        let visibleCount = 0;

        items.forEach(item => {
            const title = formatString(item.querySelector('.item-title').textContent);
            const description = formatString(item.querySelector('.item-subtitle')?.textContent || '');

            if (value === '' || title.includes(value) || description.includes(value)) {
                item.style.display = 'flex';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        // Exibe ou esconde a letra inteira
        section.style.display = visibleCount > 0 ? 'block' : 'none';

        if (visibleCount > 0) hasResults = true;
    });

    noResults.style.display = hasResults ? 'none' : 'block';
});

function formatString(value) {
    return value.toLowerCase().trim();
}