### How-to-Run-Ubuntu-on-Windows-WSL
This repo provides a step-by-step guide on how to run Ubuntu on Windows using WSL, giving you access to all the benefits of Linux without having to dual-boot or use a virtual machine.The guide covers everything you need to know to get started with WSL, including how to install it, how to install Ubuntu.

##Step 1 - Enable the Windows Subsystem for Linux
<div class="copy-button">
    <button onclick="copyToClipboard(this)" title="Copy">Copy</button>
    <pre><code>
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
    </code></pre>
</div>

<script>
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

    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        .copy-button script {
            display: none;
        }
    `;
    document.head.appendChild(styleTag);
</script>
