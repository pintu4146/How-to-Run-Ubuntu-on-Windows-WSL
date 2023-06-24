function copyToClipboard(button) {
    const codeBlock = button.parentNode.querySelector('code');
    const textToCopy = codeBlock.innerText;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            button.textContent = "Copied!";
            setTimeout(() => {
                button.textContent = "Copy";
            }, 2000);
        })
        .catch((error) => {
            console.error('Unable to copy text:', error);
        });
}
