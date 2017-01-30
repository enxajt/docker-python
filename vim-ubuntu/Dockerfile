FROM ubuntu
# apt の参照先が本家なので国内からだと遅め。ミラーを設定した方がいいが、 なし
#RUN apt-get update && apt-get -y upgrade
RUN apt-get update && apt-get -y dist-upgrade

RUN apt-get -y install language-pack-ja-base language-pack-ja ibus-mozc
RUN apt-get -y install man
RUN apt-get -y install manpages-ja
RUN update-locale LANG=ja_JP.UTF-8 LANGUAGE=ja_JP:ja
#ENV LANG ja_JP.UTF-8
#ENV LANG C.UTF-8
#ENV LANGUAGE ja_JP.UTF-8
ENV LC_ALL C.UTF-8
#ENV LC_ALL ja_JP.UTF-8
#ENV LC_CTYPE ja_JP.UTF-8
#ENV LC_MESSAGES en_US.UTF-8
RUN apt-get -y install fonts-ipafont-gothic fonts-ipafont-mincho

RUN apt-get -y install curl
RUN alias curl='curl --noproxy localhost,127.0.0.1'
RUN apt-get -y install tree
RUN apt-get -y install nkf
RUN apt-get -y install sudo

RUN apt-get -y install git
RUN git config --global user.name "enxajt"
RUN git config --global user.email enxajt@gmail.com

RUN apt-get -y install zsh
RUN chsh -s /usr/bin/zsh root
RUN useradd -m -g sudo -s /bin/zsh enxajt && echo "enxajt:enxajt" | chpasswd
RUN curl https://raw.githubusercontent.com/enxajt/zsh/master/.zshrc > /home/enxajt/.zshrc

# それぞれの言語の拡張 vim用
RUN apt-get -y install libperl-dev
RUN apt-get -y install python-dev python3-dev 
RUN apt-get -y install python-pip
RUN pip install --upgrade pip
RUN apt-get -y install python3-pip
RUN pip3 install --upgrade pip
RUN pip3 install neovim
RUN apt-get -y install ruby-dev
RUN apt-get -y install lua5.2 liblua5.2-dev 
RUN apt-get -y install luajit libluajit-5.1
#RUN apt-get -y install libtool autoconf automake cmake g++ pkg-config unzip 
# NeoVim
RUN apt-get -y install software-properties-common
RUN add-apt-repository ppa:neovim-ppa/unstable
RUN apt-get update
RUN apt-get -y install neovim

WORKDIR /home/enxajt
# ENV HOME /home/enxajt
# #export HOME="/home/enxajt"

#deinvim
RUN mkdir -p /home/enxajt/.cache/dein
RUN cd /home/enxajt/.cache/dein && \
  curl -f https://raw.githubusercontent.com/Shougo/dein.vim/master/bin/installer.sh > installer.sh && \
  sh ./installer.sh /home/enxajt/.cache/dein

# vim dotfiles
RUN git clone https://github.com/enxajt/nvim.git /home/enxajt/.vim
# RUN nkf -Lu --overwrite /home/enxajt/.vim/.vimrc
#RUN sudo ln -s /home/enxajt/.vim/.vimrc /root/neovim/share/nvim/sysinit.vim
# missing for root?
RUN ln -nfs /home/enxajt/shared/virtualbox/vim/backup /home/enxajt/.vim/backup
RUN ln -nfs /home/enxajt/shared/virtualbox/vim/swp /home/enxajt/.vim/swp
RUN ln -nfs /home/enxajt/shared/virtualbox/vim/undo /home/enxajt/.vim/undo

#deinvim install plugins
RUN nvim +":silent call dein#install()" +:q
RUN nvim +":silent UpdateRemotePlugins" +:q
#RUN nvim -E -u NONE -S > /dev/null

# PlantUML
RUN apt-get -y install default-jre
#RUN apt-get -y install default-jre
RUN apt-get -y install graphviz
RUN curl -L http://sourceforge.net/projects/plantuml/files/plantuml.jar/download -o /usr/bin/plantuml.jar
RUN echo 'java -jar /usr/bin/plantuml.jar $@' > /usr/bin/plantuml
RUN chmod +x /usr/bin/plantuml
# PlantUML
#RUN sudo apt-get -y install graphviz
#RUN sudo curl -L http://sourceforge.net/projects/plantuml/files/plantuml.jar/download -o /usr/bin/plantuml.jar
#RUN sudo echo 'java -jar /usr/bin/plantuml.jar $@' > /usr/bin/plantuml
#RUN sudo chmod +x /usr/bin/plantuml

# nodejs npm
RUN apt-get install -y build-essential
RUN apt-get -y install nodejs npm
RUN npm cache clean
RUN npm install n -g
RUN n stable
RUN ln -sf /usr/local/bin/node /usr/bin/node
RUN apt-get -y purge nodejs npm
RUN npm update
# nodejs npm
# RUN sudo apt-get install -y build-essential
# RUN sudo apt-get -y install nodejs npm
# RUN npm cache clean
# RUN npm install n -g
# RUN n stable
# RUN sudo ln -sf /usr/local/bin/node /usr/bin/node
# RUN sudo apt-get -y purge nodejs npm
# RUN npm update

RUN npm install --global gulp gulp-cli
RUN npm install --global browser-sync

USER enxajt

# gulp for plantuml
RUN git clone https://github.com/enxajt/plantuml.git /home/enxajt/plantuml
RUN ln -s /home/enxajt/shared/rsync/Notes /home/enxajt/plantuml/src
RUN cd /home/enxajt/plantuml && npm init -y
RUN cd /home/enxajt/plantuml && npm install --save-dev gulp path gulp-plantuml gulp-webserver gulp-print gulp-cached gulp-exec gulp-ejs gulp-rename gulp-plumber gulp-json-transform gulp-tap gulp-notify
#RUN cd /home/enxajt/plantuml && npm install --save-dev browser-sync gulp-livereload
EXPOSE 8000 35729

CMD ["/bin/zsh"]
