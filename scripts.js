function toggleLogOptions() {
    const logOptions = document.querySelector('.log-options');
    if (logOptions.style.display === 'flex') {
        logOptions.style.display = 'none';
    } else {
        logOptions.style.display = 'flex';
    }
}
