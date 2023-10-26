document.addEventListener('keydown', function (secret) {
    if ((secret.key === "b" || secret.key === "B") && secret.ctrlKey) {
        alert('You find the Secret Key binding');
        document.getElementById('perfection').style.display = "block";
    }
});