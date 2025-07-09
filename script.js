document.querySelectorAll('.toggle').forEach(button => {
  button.addEventListener('click', () => {
    const next = button.nextElementSibling;
    if (!next) return;

    // Toggle open/closed
    next.classList.toggle('open');
  });
});
