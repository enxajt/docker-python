# on linux GUI ?

## http://postd.cc/running-gui-apps-with-docker/
docker build -t firefox .
## http://qiita.com/fireowl11/items/7a22510bc8951342d031
docker run -it -p 2323:22 fgrehm/netbeans:v8.0.1 bash 
sudo sh -c "apt-get update && apt-get -y install ssh && service ssh restart"
sudo passwd developer 
remotehost：docker-machineのIP
ユーザ"developer"
ポート2323
プライベートキーは~/.docker/machine~
/usr/local/bin/netbeans でNetBeansが起動

## https://github.com/baudren/NoteOrganiser/wiki/Docker,-QML,-XServer-on-Windows
Docker, QML, XServer on Windows


## http://golangcloud.blogspot.fr/2014/06/run-x11-application-inside-docker.html
docker run -v /tmp/.X11-unix:/tmp/.X11-unix -e DISPLAY=unix$DISPLAY
