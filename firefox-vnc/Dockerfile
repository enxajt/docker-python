# Firefox over VNC
# http://stackoverflow.com/questions/16296753/can-you-run-gui-apps-in-a-docker-container
# docker run -p 5900 -e HOME=/ creack/firefox-vnc x11vnc -forever -usepw -create
# docker run -p 8888:8888 anaconda /bin/bash -c "/opt/conda/bin/conda install jupyter -y --quiet && mkdir /opt/notebooks && /opt/conda/bin/jupyter notebook --notebook-dir=/opt/notebooks --ip='*' --port=8888 --no-browser"

from    ubuntu:12.04
run     apt-get update

#RUN apt-get -y install build-essential
#RUN apt-get -y install python python-dev python-distribute python-pip ipython
#RUN pip install --upgrade pip
#run apt-get -y install lsb-release 

# in order to create a 'fake' display and firefox
run     apt-get install -y x11vnc xvfb firefox
run     mkdir ~/.vnc

run     x11vnc -storepasswd 1234 ~/.vnc/passwd

# Autostart firefox (might not be the best way to do it, but it does the trick)
run     bash -c 'echo "firefox" >> /.bashrc'
