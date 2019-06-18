const express = require('express');
const router = express.Router();
const faker = require('faker');
const _ = require('lodash');
const FAKE_TOKEN = 'dsfklajsgklaj';


const users = [];

let uId = 0

function fakeUser() {
  return {
    id: uId++,
    name: faker.name.findName(),
    email: faker.internet.email,
    avatar: faker.image.avatar(),
  };
}


function generateFakeData() {
  /* 가짜로 데이터를 생성하자. */
  for (let i = 0; i < 30; i++) {
    const user = fakeUser();
    users.push(user);
  }
}

generateFakeData();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/api/signin', function(req, res) {
  res.json({token: FAKE_TOKEN});
});


function paginate(data, page, res) {
  page = page || 1;
  const perPage = 20;
  const start = (page - 1) * perPage;
  res.header('x-total-page', Math.ceil(data.length / perPage));
  res.header('x-page', page);
  res.json(data.slice(start, start + perPage));
}

router.get('/api/users', function(req, res) {
  res.json(users);
});

router.use(function (req, res, next) {
  if (req.headers.authorization) {
    const parts = req.headers.authorization.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer' && parts[1] === FAKE_TOKEN) {
      return next();
    }
  }
  res.status(401).send('Unauthorized');
});
// 이 아래에 있는 API들은 모두 token을 제대로 주지 않으면 401에러가 발생!

router.get('/api/users/:id', function(req, res) {
  let id = parseInt(req.params.id, 10);
  res.json(users.find(e => e.id == id));
});


module.exports = router;