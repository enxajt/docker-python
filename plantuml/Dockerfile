FROM ubuntu
MAINTAINER enxajt
#FROM alpine

RUN apt-get update && apt-get install -y \
  language-pack-ja-base \
  language-pack-ja \
  ibus-mozc \
  fonts-ipafont-gothic \
  fonts-ipafont-mincho \
  curl \
  git \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN alias curl='curl --noproxy localhost,127.0.0.1'
RUN update-locale LANG=ja_JP.UTF-8 LANGUAGE=ja_JP:ja
ENV LC_ALL C.UTF-8

# PlantUML jre
RUN apt-get update && apt-get install -y \
  default-jre \
  graphviz
#RUN curl -L http://sourceforge.net/projects/plantuml/files/plantuml.jar/download -o /usr/bin/plantuml.jar
COPY plantuml.jar /usr/bin/plantuml.jar
RUN echo 'java -jar /usr/bin/plantuml.jar $@' > /usr/bin/plantuml \
 && chmod +x /usr/bin/plantuml

# nodejs npm
RUN set -x apt-get update && apt-get install -y \
  build-essential \
  nodejs \
  npm \
 && npm cache clean \
 && npm install n -g \
 && n stable \
 && ln -sf /usr/local/bin/node /usr/bin/node
RUN apt-get -y purge nodejs npm \
 && npm update \
 && npm install --global gulp gulp-cli

ENV USER enxajt
RUN useradd -m -g sudo -s /bin/zsh $USER && echo "$USER:$USER" | chpasswd
USER $USER
WORKDIR /home/$USER

RUN git config --global user.name "$USER" \
 && git config --global user.email $USER@gmail.com

# gulp for plantuml
RUN git clone https://github.com/$USER/plantuml.git /home/$USER/plantuml \
 && ln -s /home/$USER/shared/rsync/Notes /home/$USER/plantuml/src
WORKDIR /home/$USER/plantuml
RUN npm init -y \
 && npm install --save-dev gulp path gulp-plantuml gulp-webserver gulp-print gulp-cached gulp-exec gulp-ejs gulp-rename gulp-plumber gulp-json-transform gulp-tap
EXPOSE 8000 35729


CMD ["/bin/bash"]
