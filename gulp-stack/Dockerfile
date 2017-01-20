FROM ubuntu:latest

EXPOSE 80 8080 3000 35729

RUN apt-get update
RUN apt-get install curl -y
RUN apt-get install software-properties-common -y
RUN add-apt-repository ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get install nodejs -y
RUN curl -L https://www.npmjs.com/install.sh | sh
RUN npm install --global gulp -y

ADD gulpfile.js /var/www/my_app/

# overwrite this with 'CMD []' in a dependent Dockerfile
CMD ["/bin/bash"]
