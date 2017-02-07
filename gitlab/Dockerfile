# annuler et utiliser https://raw.githubusercontent.com/sameersbn/docker-gitlab/master/docker-compose.yml > /home/${USER}/
FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
  curl \
  openssh-server \
  ca-certificates \
  postfix
RUN curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
RUN apt-get update && apt-get install -y \
  gitlab-ce
RUN gitlab-ctl reconfigure
Ruby (MRI) 2.3. 
