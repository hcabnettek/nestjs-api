ARG VARIANT="20"
FROM mcr.microsoft.com/devcontainers/typescript-node:0-${VARIANT}

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    curl \
    git-core \
    gnupg \
    locales \
    zsh \
    wget \
    tree \
    jq \
    fonts-powerline \
    zsh-autosuggestions \
    zsh-syntax-highlighting \
    # set up locale
    && locale-gen en_US.UTF-8 && fc-cache -vf

ENV DEBIAN_FRONTEND=dialog
SHELL ["/bin/zsh", "-c"]
ENV SHELL=/bin/zsh

ARG USER="node"
ARG GROUP="node"

USER ${USER}

ENV USER=${USER}
ENV GROUP=${GROUP}

# Install Oh-my-ZSH
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

# Install powerlevel10k
RUN git clone https://github.com/romkatv/powerlevel10k.git /home/${USER}/.oh-my-zsh/custom/themes/powerlevel10k

ADD --chown=${USER}:${GROUP} .zshrc /home/${USER}

# RUN apt-get -y install --no-install-recommends \
#     zsh-autosuggestions \
#     zsh-syntax-highlighting

# Restore cache ownership
#RUN sudo chown -R ${USER}:${GROUP} ~/.cache

RUN touch ~/.zshrc
RUN echo "export PATH=$PATH:/usr/local/share/npm-global/lib/node_modules/pnpm/bin" >> ~/.zshrc

ARG NODE_MODULES="pnpm"
RUN umask 0002 && npm install -g ${NODE_MODULES} \
    && npm cache clean --force > /dev/null 2>&1 \
    && source ~/.zshrc

RUN echo $PATH
RUN pnpm setup

#ENV PNPM_HOME=/usr/local/share/npm-global/lib/node_modules/pnpm/bin
#RUN export PATH=$PATH:/usr/local/share/npm-global/lib/node_modules/pnpm/bin
#RUN echo "export PATH=$PATH:/usr/local/share/npm-global/lib/node_modules/pnpm/bin" >> ~/.bashrc \
#    && source ~/.bashrc
#ARG PNPM_MODULES="@nestjs/cli"
#RUN su node -c "pnpm install --global ${PNPM_MODULES}"
