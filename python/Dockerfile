FROM ubuntu

RUN apt-get update && apt-get -y upgrade
#RUN apt-get -y install apt-utils

RUN apt-get -y install language-pack-ja-base language-pack-ja ibus-mozc
RUN apt-get -y install man
RUN apt-get -y install manpages-ja
RUN update-locale LANG=ja_JP.UTF-8 LANGUAGE=ja_JP:ja
ENV LANG ja_JP.UTF-8
ENV LC_ALL ja_JP.UTF-8
ENV LC_CTYPE ja_JP.UTF-8

RUN apt-get -y install git

RUN apt-get -y install build-essential
RUN apt-get install -qy python python-dev python-distribute python-pip ipython
RUN pip install --upgrade pip

RUN apt-get -y install vim 

RUN apt-get -y install zsh
RUN chsh -s /usr/bin/zsh root
ADD zshrc /root/zshrc
RUN mv /root/zshrc /root/.zshrc

#その他設定(ファイルをコピー)
#ADD .alias /

RUN pip install requests 

CMD ["/bin/bash"]
