
## React, Redux, Nodejs Express, MongoDB, Docker Auction application

This app is made as a demo. Built this 2018. It connects to external API, syncs data every 24 hours to mongodb. Less requests to real backend. Application frontend connects to mongodb.

### Installation / Run

Setup [backend/config/connection.js](/backend/config/connection.js)

Run ``cd frontend && npm install`` 
Run ``cd backend && npm install`` 

Run dev:   
```docker-compose -f docker-compose.yml -f docker-compose.dev.yml up```    
or as a service
```docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d```

Access here: http://192.168.99.100:3000

Run prod (not ready):   
```docker-compose -f docker-compose.yml -f docker-compose.prod.yml up```
