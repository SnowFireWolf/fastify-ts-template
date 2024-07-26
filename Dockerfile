FROM node:16



WORKDIR /usr/src/app
COPY . ./



RUN apt-get update
RUN apt-get upgrade -y



RUN npm -g install yarn
RUN yarn install
RUN yarn build



ENV HOST=0.0.0.0
ENV PORT=80

EXPOSE 80



# CMD [ "yarn", "start" ]  vector --config /etc/vector/vector.toml
CMD ["/bin/bash", "-c", "mkdir -p /var/run/dbus; service dbus start; yarn serve;"]
