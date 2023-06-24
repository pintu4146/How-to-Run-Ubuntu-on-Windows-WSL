# How-to-Run-Ubuntu-on-Windows-WSL
This repo provides a step-by-step guide on how to run Ubuntu on Windows using WSL, giving you access to all the benefits of Linux without having to dual-boot or use a virtual machine.The guide covers everything you need to know to get started with WSL, including how to install it, how to install Ubuntu.

Step 1 - Enable the Windows Subsystem for Linux
```html
<button class="btn btn-primary" id="copy-button">Copy command</button>

<script>
$(document).ready(function() {
  $("#copy-button").click(function() {
    var command = "dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart";
    var copyText = document.getElementById("copy-button");
    copyText.select();
    document.execCommand("Copy");
  });
});
</script>
