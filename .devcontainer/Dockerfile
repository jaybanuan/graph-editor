FROM mcr.microsoft.com/devcontainers/base:ubuntu

RUN <<EOF
#!/bin/bash -xe

# Upgrade Ubuntu
apt-get update
apt-get upgrade -y

# Install dependencies
apt-get install -y jq

# Install Deno
sudo -u vscode bash -c 'curl -fsSL https://deno.land/install.sh | sh -s -- -y'

# Install Node.js
sudo -u vscode bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash'
sudo -u vscode bash -c 'source ${HOME}/.nvm/nvm.sh && nvm install --lts=jod && nvm use --lts=jod'

EOF
