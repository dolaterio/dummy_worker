FROM ubuntu:14.04

RUN locale-gen en_US.UTF-8
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y --no-install-recommends nodejs npm nodejs-legacy

ENV PATH node_modules/.bin:$PATH
ADD worker.js /opt/worker.js
WORKDIR /opt/
ENTRYPOINT ["node", "worker.js"]
