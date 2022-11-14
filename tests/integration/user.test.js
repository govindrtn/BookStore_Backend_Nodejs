import { expect } from 'chai';
// import expect from 'chai'
import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../src/index';

let loginToken, bookId


describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => { });
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      // clearCollections();
    }
    done();
  });

  describe(' User register', () => {
    it('should return user registeration.....done ', (done) => {
      const RegisterUser = {
        fullName: "Raja",
        email: "rajalodhi@gmail.com",
        password: "plmqaz1234@",
        mobile:"856545435353"
      }
      request(app)
        .post('/api/v1/users/register')
        .send(RegisterUser)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(201);
        });
      done();
    });
    it('when user enter valid details login sucess....', (done) => {
      const loginUser = {
        email: "rajlodhi@gmail.com",
        password: "plmqaz1234@"
      }
      request(app)
        .post('/api/v1/users/login')
        .send(loginUser)
        .end((err, res) => {
          loginToken = res.body.data
          console.log("login token --------->", loginToken);
          expect(res.statusCode).to.be.equal(200)
        })
      done()
    })
    describe(' Create Book ', () => {
      it('should return new Book created .....done ', (done) => {
        const Book = {
          author: "Sachin Chouksey",
          bookImage:"image42.png",
          bookName: "Rich Dad Poor Dad",
          description: "this book about your .....................",
          discountPrice: "3435",
          price: "4343",
          quantity: "30"
        }
        request(app)
          .post('/api/v1/books/createbook')
          .send(Book)
          .set('Authorization', `bearer ${loginToken}`)
          .end((err, res) => {
            bookId = res.body.data._id
            console.log("note id ------------>", bookId);
            expect(res.statusCode).to.be.equal(201);
          });
        done();
      });
      it('should return fatch all books... ', (done) => {
        request(app)
          .get('/api/v1/books/getallBook')
          .set('Authorization', `bearer ${loginToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
          });
        done();
      })
      it('should return fatch a single book by id... ', (done) => {
        request(app)
          .get(`/api/v1/books/${bookId}`)
          .set('Authorization', `bearer ${loginToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
          });
        done();
      })
      it('should return when Book update ..... ', (done) => {
        const Book = {
          author: "Sachin chouksey",
          bookName: "Rich Dad Poord",
          description: "this book about yo.....................",
          discountPrice: "345",
          price: "434",
          quantity: "34"
        }
        request(app)
          .put(`/api/v1/books/${bookId}`)
          .send(Book)
          .set('Authorization', `bearer ${loginToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(202);
          });
        done();
      });
      it('should return when Book delete ..... ', (done) => {
        request(app)
          .delete(`/api/v1/books/${bookId}`)
          .set('Authorization', `bearer ${loginToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
          });
        done();
      });
    })
  })
})