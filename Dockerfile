FROM node:20

WORKDIR /root

ENV PATH="/root/bin:/root/node_modules/.bin:$PATH"

COPY package-lock.json package.json .

RUN npm install

COPY . .

ENTRYPOINT [ "/bin/bash" ]

CMD [ "-c", "tail -f /dev/null" ]
