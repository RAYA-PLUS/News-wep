const request = require('supertest');
const express = require('express');
const test = require('tape');
const app = express();
const { Article, User } = require('../models')

test('test of the test', (t) => {
    t.equal(-1, [1, 2, 3].indexOf(4));
    t.end();
})
test('test for Article.schema ', (t) => {
    const expected = ['title', 'content', 'user']
    const result = Object.keys(Article.schema.obj);
    var truth = result.reduce((acc, e, i) => {
        return acc && e === expected[i]
    })

    t.equal(truth, true)
    t.equal(String(Article.schema.obj.title.type).includes('String'), true)
    t.equal(String(Article.schema.obj.content.type).includes('String'), true)
    t.equal(String(Article.schema.obj.user.type).includes('String'), true)
    t.end();
})

test('test for User.schema ', (t) => {
    const expected = ['name', 'email', 'password', 'date']
    const result = Object.keys(User.schema.obj);
    var truth = result.reduce((acc, e, i) => {
        return acc && e === expected[i]
    })

    t.equal(truth, true)
    t.equal(String(User.schema.obj.name.type).includes('String'), true)
    t.equal(String(User.schema.obj.email.type).includes('String'), true)
    t.equal(String(User.schema.obj.password.type).includes('String'), true)
    t.equal(String(User.schema.obj.date.type).includes('Date'), true)
    t.end();
})
test('wrong route with get method returns a status code of 200 ', (t) => {
    request(app)
        .get('/vvv')
        .expect(404)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            if (err) t.error(err);
            t.end();
        });
});