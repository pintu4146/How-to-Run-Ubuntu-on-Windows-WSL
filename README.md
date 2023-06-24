## How-to-Run-Ubuntu-on-Windows-WSL
This repo provides a step-by-step guide on how to run Ubuntu on Windows using WSL, giving you access to all the benefits of Linux without having to dual-boot or use a virtual machine.The guide covers everything you need to know to get started with WSL, including how to install it, how to install Ubuntu.

### Step 1 - Enable the Windows Subsystem for Linux

Open PowerShell as a administration and run this command 
<div class="copy-button">
    <button onclick="copyToClipboard(this)" title="Copy"></button>
    <pre><code>
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
    </code></pre>
    <!--<script src="copy-button.js"></script>-->
</div>

### Step 2 - Check requirements for running WSL 2


To update to WSL 2, please ensure that you are running Windows 10. The specific requirements are as follows:

- For x64 systems: Version 1903 or later, with Build 18362.1049 or later.
- For ARM64 systems: Version 2004 or later, with Build 19041 or later.

  
### Step 3 - Enable Virtual Machine feature
<div class="copy-button">
    <button onclick="copyToClipboard(this)" title="Copy"></button>
    <pre><code>
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
    </code></pre>
    <!--<script src="copy-button.js"></script>-->
</div>

### Step 4 - Download the Linux kernel update package

- WSL2 Linux kernel update package for x64 machines
- [Download the latest package](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
- Run the update package downloaded in the previous step. (Double-click to run - you will be prompted for elevated permissions, select ‘yes’ to approve this installation.)

  Once the installation is complete, move on to the next step - setting WSL 2 as your default version when installing new Linux distributions. (Skip this step if you want your new Linux installs to be set to WSL 1).
### Step 5 - Set WSL 2 as your default version

Open PowerShell and run this command to set WSL 2 as the default version when installing a new Linux distribution:
<div class="copy-button">
    <button onclick="copyToClipboard(this)" title="Copy"></button>
    <pre><code>
    wsl --set-default-version 2
    </code></pre>
    <!--<script src="copy-button.js"></script>-->
</div>

### Step 6 - Install your Linux distribution of choice

Open the [Microsoft Store](https://aka.ms/wslstore) and select your favorite Linux distribution

- [Ubuntu 18.04 LTS](https://www.microsoft.com/store/apps/9N9TNGVNDL3Q)
- [Ubuntu 20.04 LTS](https://www.microsoft.com/store/apps/9n6svws3rx71)
- [Ubuntu 22.04 LTS](https://www.microsoft.com/store/apps/9PN20MSR04DW)
- [for more click here](https://aka.ms/wslstore)

## Install Windows Terminal (optional)

Using Windows Terminal enables you to open multiple tabs or window panes to display and quickly switch between multiple Linux distributions or other command lines (PowerShell, Command Prompt, Azure CLI, etc). You can fully customize your terminal with unique color schemes, font styles, sizes, background images, and custom keyboard shortcuts. Learn more.

- [Install Windows Terminal.](https://learn.microsoft.com/en-us/windows/terminal/get-started)
