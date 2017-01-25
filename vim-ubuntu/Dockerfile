FROM ubuntu
# apt の参照先が本家なので国内からだと遅め。ミラーを設定した方がいいが、 なし
#RUN apt-get update && apt-get -y upgrade
RUN apt-get update && apt-get -y dist-upgrade
#build警告は気にしなくてよさそう。
#RUN apt-get install apt-utils

RUN apt-get -y install language-pack-ja-base language-pack-ja ibus-mozc
RUN apt-get -y install man
RUN apt-get -y install manpages-ja
RUN update-locale LANG=ja_JP.UTF-8 LANGUAGE=ja_JP:ja
#ENV LANG ja_JP.UTF-8
#ENV LANG C.UTF-8
#ENV LANGUAGE ja_JP.UTF-8
#ENV LC_ALL ja_JP.UTF-8
ENV LC_ALL C.UTF-8
#ENV LC_CTYPE ja_JP.UTF-8
#ENV LC_MESSAGES en_US.UTF-8
RUN apt-get -y install fonts-ipafont-gothic fonts-ipafont-mincho

RUN apt-get -y install curl
RUN alias curl='curl --noproxy localhost,127.0.0.1'
RUN apt-get -y install tree
RUN apt-get -y install nkf

RUN apt-get -y install git
#Host bitbucket.org
#  StrictHostKeyChecking no

# RUN useradd -m enxajt
# WORKDIR /home/enxajt
# ENV HOME /home/enxajt
# #export HOME="/home/enxajt"
# USER enxajt

RUN apt-get -y install zsh
RUN chsh -s /usr/bin/zsh root
RUN ln -s /opt/dev/zsh/.zshrc ~/.zshrc
#curl https://raw.githubusercontent.com/enxajt/zsh/master/.zshrc > ~/.zshrc

# それぞれの言語の拡張 vim用
RUN apt-get -y install libperl-dev
RUN apt-get -y install python-dev python3-dev 
RUN apt-get -y install ruby-dev
RUN apt-get -y install lua5.2 liblua5.2-dev 
RUN apt-get -y install luajit libluajit-5.1

# NeoVim
# deopleteというpluginをインストールしたいので
RUN apt-get -y install libtool autoconf automake cmake g++ pkg-config unzip 
RUN apt-get -y install python-pip
RUN pip install --upgrade pip
RUN apt-get -y install python3-pip
RUN pip3 install --upgrade pip
RUN pip3 install neovim
RUN cd ~/ && git clone https://github.com/neovim/neovim.git
RUN cd ~/neovim && make CMAKE_EXTRA_FLAGS="-DCMAKE_INSTALL_PREFIX=$HOME/neovim" && \
  make install && \
  mkdir -p ~/.config/nvim
ENV PATH /root/neovim/bin:$PATH
#ENV PATH $HOME/neovim/bin:$PATH
#export PATH="$HOME/neovim/bin:$PATH"

#deinvim
RUN mkdir ~/.cache/dein
RUN cd ~/.cache/dein && \
  curl -f https://raw.githubusercontent.com/Shougo/dein.vim/master/bin/installer.sh > installer.sh && \
  sh ./installer.sh ~/.cache/dein
#deinvim install plugins
RUN curl -f https://raw.githubusercontent.com/enxajt/nvim/master/.vimrc > /root/neovim/share/nvim/sysinit.vim
RUN nvim +":silent call dein#install()" +:q
RUN nvim +":silent UpdateRemotePlugins" +:q
#RUN nvim -E -u NONE -S > /dev/null
RUN rm -f /root/neovim/share/nvim/sysinit.vim

# vim dotfiles
RUN mkdir ~/.vim
#RUN ln -s /opt/dev/nvim/.vimrc ~/.vim/.vimrc
RUN ln -s /opt/dev/nvim/.vimrc /root/neovim/share/nvim/sysinit.vim
RUN ln -s /opt/dev/nvim/dein.toml ~/.vim/dein.toml
RUN ln -s /opt/dev/nvim/dein_lazy.toml ~/.vim/dein_lazy.toml
# RUN nkf -Lu --overwrite ~/.vim/.vimrc
# RUN nkf -Lu --overwrite ~/.vimrc
# RUN nkf -Lu --overwrite ~/.vimrc
RUN ln -nfs /opt/dev/nvim/colors ~/.vim/colors
RUN ln -nfs /opt/dev/nvim/backup ~/.vim/backup
RUN ln -nfs /opt/dev/nvim/swp ~/.vim/swp
RUN ln -nfs /opt/dev/nvim/undo ~/.vim/undo

# PlantUML
RUN apt-get -y install default-jre
RUN apt-get -y install graphviz
RUN curl -L http://sourceforge.net/projects/plantuml/files/plantuml.jar/download -o /usr/bin/plantuml.jar
#ADD plantuml.jar /usr/bin/
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
RUN curl -L https://raw.githubusercontent.com/enxajt/plant-uml/master/gulpfile.js -o /root/plantuml/
#ADD gulpfile.js /root/plantuml/
RUN ln -sn /opt/dev/plantuml $HOME/plantuml/src/
RUN cd $HOME/plantuml && npm init -y
RUN cd $HOME/plantuml && npm install --save-dev gulp path gulp-plantuml gulp-webserver gulp-print gulp-cached gulp-exec browser-sync gulp-livereload gulp-ejs gulp-rename
EXPOSE 8000 35729

# remote from windows
#RUN apt-get -y install xrdp
#RUN echo 'npwd' |passwd root --stdin

WORKDIR /root/plantuml
CMD ["/bin/zsh"]
