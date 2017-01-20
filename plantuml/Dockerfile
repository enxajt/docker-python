FROM ubuntu

# apt-get upgrade # パッケージ構成を変えない範囲でアップグレードする
# apt-get dist-upgrade # パッケージ構成の変更に追随してアップグレード
RUN apt-get update && apt-get -y dist-upgrade
RUN apt-get -y install language-pack-ja-base language-pack-ja ibus-mozc
RUN apt-get -y install man
RUN apt-get -y install manpages-ja
RUN update-locale LANG=ja_JP.UTF-8 LANGUAGE=ja_JP:ja
ENV LC_ALL C.UTF-8
RUN apt-get -y install fonts-ipafont-gothic fonts-ipafont-mincho

RUN apt-get -y install zsh
RUN chsh -s /usr/bin/zsh root
RUN ln -s /opt/dev/zsh/.zshrc $HOME/.zshrc

RUN apt-get -y install curl
RUN alias curl='curl --noproxy localhost,127.0.0.1'
RUN apt-get -y install tree
RUN apt-get -y install nkf
RUN apt-get -y install git
RUN apt-get -y install vim

# PlantUML
RUN apt-get -y install default-jre
RUN apt-get -y install graphviz
ADD plantuml.jar /usr/bin/
RUN echo 'java -jar /usr/bin/plantuml.jar $@' > /usr/bin/plantuml
RUN chmod +x /usr/bin/plantuml

# nodejs npm
RUN apt-get install -y build-essential
RUN apt-get -y install nodejs npm
RUN npm cache clean
RUN npm install n -g
RUN n stable
RUN ln -sf /usr/local/bin/node /usr/bin/node
RUN apt-get -y purge nodejs npm
RUN npm update

RUN npm install --global gulp gulp-cli
RUN npm install --global browser-sync

# gulp for plantuml
RUN mkdir $HOME/plantuml
RUN mkdir -p $HOME/plantuml/build/diagram
RUN mkdir -p $HOME/plantuml/src
ADD gulpfile.js /root/plantuml/
RUN ln -sn /opt/dev/plantuml $HOME/plantuml/src/
RUN cd $HOME/plantuml && npm init -y
RUN cd $HOME/plantuml && npm install --save-dev gulp gulp-coffee gulp-plantuml gulp-webserver browser-sync gulp-livereload
EXPOSE 8080 35729

WORKDIR /root/plantuml
CMD ["/bin/zsh"]
#CMD ["gulp"]
