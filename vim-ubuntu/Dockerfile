FROM ubuntu
# apt の参照先が本家なので国内からだと遅めです。ミラーを設定した方がいいが、 なし
RUN apt-get update && apt-get -y upgrade
#build警告は気にしなくてよさそう。
#RUN apt-get install apt-utils

#RUN apt-get -y install language-pack-ja-base language-pack-ja ibus-mozc
RUN apt-get -y install man
RUN apt-get -y install manpages-ja
#RUN update-locale LANG=ja_JP.UTF-8 LANGUAGE=ja_JP:ja
#ENV LANG ja_JP.UTF-8
#ENV LANGUAGE ja_JP.UTF-8
#ENV LC_ALL ja_JP.UTF-8
#ENV LC_CTYPE ja_JP.UTF-8
#ENV LC_MESSAGES en_US.UTF-8

RUN apt-get -y install curl
RUN apt-get -y install tree
RUN apt-get -y install nkf

RUN apt-get -y install git
#Host bitbucket.org
#  StrictHostKeyChecking no

RUN apt-get -y install zsh
RUN chsh -s /usr/bin/zsh root
RUN cd /root/ && \
  curl -f https://raw.githubusercontent.com/enxajt/dockerfiles/master/.zshrc > .zshrc

RUN useradd -ms /bin/zsh enxajt

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
RUN alias curl='curl --noproxy localhost,127.0.0.1'
RUN cd ~/neovim && make CMAKE_EXTRA_FLAGS="-DCMAKE_INSTALL_PREFIX=$HOME/neovim" && \
  make install && \
  mkdir -p ~/.config/nvim
ENV PATH /root/neovim/bin:$PATH
#export PATH="$HOME/neovim/bin:$PATH" && source ~/.zshrc

#deinvim
RUN mkdir ~/.cache/dein
RUN cd ~/.cache/dein && \
  curl -f https://raw.githubusercontent.com/Shougo/dein.vim/master/bin/installer.sh > installer.sh && \
  sh ./installer.sh ~/.cache/dein
RUN cd ~ \
  && curl -f https://raw.githubusercontent.com/enxajt/nvim/master/.vimrc > .vimrc \
  && curl -f https://raw.githubusercontent.com/enxajt/nvim/master/dein.toml > dein.toml \
  && curl -f https://raw.githubusercontent.com/enxajt/nvim/master/dein_lazy.toml > dein_lazy.toml \
  && nkf -Lu --overwrite ~/.vimrc


# PlantUML
RUN apt-get -y install default-jre
RUN apt-get -y install graphviz
RUN curl -L http://sourceforge.net/projects/plantuml/files/plantuml.jar/download -o /usr/bin/plantuml.jar \
  && echo 'java -jar /usr/bin/plantuml.jar $@' > /usr/bin/plantuml \
  && chmod +x /usr/bin/plantuml

# gulp
RUN apt-get -y install nodejs npm

RUN npm install --global gulp-cli
cd /opt/dev/plant-uml && npm install --save-dev gulp

cd /opt/dev/plant-uml && npm init -y

CMD ["/bin/zsh"]
