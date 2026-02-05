const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const title = document.querySelector('.title');
const img = document.querySelector('.img');

yes.addEventListener('click', () => {
    yes.classList.add('hide');
    no.classList.add('hide');
    title.classList.add('hide');
    img.classList.remove('hide');
})

let count = 0;

no.addEventListener('click', () => {
    // const currentSize = window.getComputedStyle(yes).fontSize;
    // const newSize = parseFloat(currentSize) * 1.5;
    // yes.style.fontSize = `${newSize}px`;

    const styles = window.getComputedStyle(yes);

    const fontSize = parseFloat(styles.fontSize);
    const paddingY = parseFloat(styles.paddingTop);   // 10px
    const paddingX = parseFloat(styles.paddingLeft);  // 20px

    yes.style.fontSize = `${fontSize * 1.5}px`;
    yes.style.padding = `${paddingY * 1.1}px ${paddingX * 1.1}px`;

    count++;
    if (count == 9) {
        no.classList.add('hide');
    }
})