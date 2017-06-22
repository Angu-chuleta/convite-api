FROM node:6-alpine
#change timezone to local  ( America / Sao_Paulo)
#RUN cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
# add project to build
ADD . /root/app
WORKDIR /root/app

EXPOSE 3000
CMD ["npm","start"]