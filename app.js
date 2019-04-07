const getInput = document.querySelectorAll('.controls input');

getInput.forEach(input => input.addEventListener('change', updateValues));

getInput.forEach(input => input.addEventListener('mousemove', updateValues));


function updateValues() {
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
