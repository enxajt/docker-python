FROM ubuntu
MAINTAINER enxajt
#FROM debian
RUN apt-get update && apt-get install -y \
  language-pack-ja-base \
  language-pack-ja \
  ibus-mozc \
  fonts-ipafont-gothic \
  fonts-ipafont-mincho \

  curl \
  git \
  man \
  nkf \
  sudo \
  tmux \
  tree \
  wget \
  zsh
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN alias curl='curl --noproxy localhost,127.0.0.1'
RUN chsh -s /usr/bin/zsh root

RUN update-locale LANG=ja_JP.UTF-8 LANGUAGE=ja_JP:ja
ENV LC_ALL C.UTF-8
#ENV LANG ja_JP.UTF-8
#ENV LANG C.UTF-8
#ENV LANGUAGE ja_JP.UTF-8
#ENV LC_ALL ja_JP.UTF-8
#ENV LC_CTYPE ja_JP.UTF-8
#ENV LC_MESSAGES en_US.UTF-8

# PlantUML jre
RUN apt-get update && apt-get install -y \
  default-jre \
  graphviz
RUN curl -L http://sourceforge.net/projects/plantuml/files/plantuml.jar/download -o /usr/bin/plantuml.jar
RUN echo 'java -jar /usr/bin/plantuml.jar $@' > /usr/bin/plantuml
RUN chmod +x /usr/bin/plantuml

# nodejs npm
RUN apt-get update && apt-get install -y \
  build-essential \
  nodejs npm
RUN npm cache clean
RUN npm install n -g
RUN n stable
RUN ln -sf /usr/local/bin/node /usr/bin/node
RUN apt-get -y purge nodejs npm
RUN npm update
RUN npm install --global gulp gulp-cli
#RUN npm install --global browser-sync

ENV user=enxajt
RUN useradd -m -g sudo -s /bin/zsh $user && echo "$user:$user" | chpasswd
USER $user
WORKDIR /home/$user
RUN git config --global user.name "$USER"
RUN git config --global user.email $USER@gmail.com
RUN git clone https://github.com/$USER/linux.git /home/$USER/linux
RUN nkf -Lu --overwrite /home/$USER/linux/*
RUN ln -sb /home/$USER/linux/.zshrc > /home/$USER/.zshrc
RUN ln -sb /home/$USER/linux/.tmux.conf > /home/$USER/.tmux.conf

# gulp for plantuml
RUN git clone https://github.com/$USER/plantuml.git /home/$USER/plantuml
RUN ln -s /home/$USER/shared/rsync/Notes /home/$USER/plantuml/src
WORKDIR /home/$user/plantuml
RUN npm init -y
RUN npm install --save-dev gulp path gulp-plantuml gulp-webserver gulp-print gulp-cached gulp-exec gulp-ejs gulp-rename gulp-plumber gulp-json-transform gulp-tap
EXPOSE 8000 35729

CMD ["/bin/zsh"]
