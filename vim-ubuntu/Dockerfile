FROM ubuntu
# apt-get updateやyum updateの前にはミラーサーバーを書く
run echo "deb http://us.archive.ubuntu.com/ubuntu precise main universe" > /etc/apt/sources.list
RUN apt-get update && apt-get -y upgrade
RUN apt-get -y install apt-utils

RUN apt-get -y install language-pack-ja-base language-pack-ja ibus-mozc
RUN apt-get -y install man
RUN apt-get -y install manpages-ja
#RUN update-locale LANG=ja_JP.UTF-8 LANGUAGE=ja_JP:ja
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP.UTF-8
#ENV LC_ALL ja_JP.UTF-8
ENV LC_CTYPE ja_JP.UTF-8
ENV LC_MESSAGES en_US.UTF-8

RUN apt-get -y install git
              
# それぞれの言語の拡張 vim用
RUN apt-get -y install libperl-dev
RUN apt-get -y install python-dev python3-dev 
RUN apt-get -y install ruby-dev
RUN apt-get -y install lua5.2 liblua5.2-dev 
RUN apt-get -y install luajit libluajit-5.1

# NeoVim
# deopleteというpluginをインストールしたいので
RUN apt-get -y install python3-pip
RUN pip3 install --upgrade pip3
RUN pip3 install neovim
RUN apt-get -y install libtool autoconf automake cmake g++ pkg-config unzip 
RUN cd ~/ && git clone https://github.com/neovim/neovim.git
RUN apt-get -y install curl
RUN alias curl='curl --noproxy localhost,127.0.0.1'
RUN cd ~/neovim && make CMAKE_EXTRA_FLAGS="-DCMAKE_INSTALL_PREFIX=$HOME/neovim" && \
  make install && \
  mkdir -p ~/.config/nvim
ENV PATH $HOME/neovim/bin:$PATH
#export PATH="$HOME/neovim/bin:$PATH" && source ~/.zshrc

#deinvim
RUN mkdir ~/.cache/dein
RUN cd ~/.cache/dein && \
  curl https://raw.githubusercontent.com/Shougo/dein.vim/master/bin/installer.sh > installer.sh
RUN sh ./installer.sh ~/.cache/dein

#add dein.toml ~/.deinvim/
#add dein_lazy.toml ~/.deinvim/

# vim
#run git clone https://github.com/vim/vim.git /usr/local/src/vim
#run cd /usr/local/src/vim/src && \
#  ./configure --with-features=huge \
#  --enable-gui=no \
#  --enable-fail-if-missing \
#  --enable-perlinterp=dynamic \
#  --enable-pythoninterp \
#  --enable-python3interp \
#  --enable-rubyinterp \
#  --enable-luainterp \
#  --enable-cscope \
#  --enable-multibyte \
#  --enable-xim \
#  --enable-fontset \
#  --with-compiledby=kohei && \
#  make && \
#  make install

RUN apt-get -y install zsh
RUN chsh -s /usr/bin/zsh root
RUN cd /root/ && \
  curl https://bitbucket.org/enxajt/dockerfiles/raw/6513cf02f75f6b311209a4e2ebca3c9b6e8d5fe0/.zshrc > .zshrc
#ADD zshrc /root/zshrc
#RUN mv /root/zshrc /root/.zshrc

#ADD .alias /

CMD ["/bin/bash"]
