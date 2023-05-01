from flask import make_response, request, session, jsonify
from flask_restful import Resource

from config import app, db, api
from models import *
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)
# Enable CORS



# Views go here!
session_user = []

class Users(Resource):
    def get(self):
        users = User.query.all()
        return make_response(
            [user.to_dict() for user in users],
            200
        )
api.add_resource(Users, '/users')

class Memberships(Resource):
    def get(self):
        memberships = Membership.query.all()
        return make_response(
            [membership.to_dict() for membership in memberships],
            200
        )
    def post(self):
        data = request.get_json()
        try:
            newMembership = Membership (
            plan = data['plan'],
            user_id = data["user_id"],
            gym_id = data["gym_id"]


            )
        except ValueError:
            return make_response({"error": "must be valid review"}, 404)

        db.session.add(newMembership)
        db.session.commit()
        return make_response(newMembership.to_dict(), 201)
    

api.add_resource(Memberships, '/memberships')




class SignUp(Resource):
    def post(self):
        password = request.json['password']
        username = request.json['username']
        email = request.json['email']
        phone = request.json['phone']
        age = request.json['age']


        user_exists = User.query.filter(User.username == username).first() is not None

        if user_exists:
            return jsonify({"error": "User already exists"}), 409

        hashed_password = bcrypt.generate_password_hash(password)
        new_user = User(
            # name= name,
            _password_hash=hashed_password,  
            username=username,
            email=email,
            phone=phone,
            age = age

        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({
            "id": new_user.id,
            "username": new_user.username
        })



class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter(
            User.username == data['username']
        ).first()

        password = data['_password']
        if not user:
            return {'error': 'Must enter a valid username and password'}, 404

        
        elif user.authenticate(password):
            session['user_id'] = user.id
            session_user.append(user.to_dict())
            return make_response(
                user.to_dict(),
                200
            )
        return {'error': 'Must enter a valid username and password'}, 404



class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401



class Logout(Resource):

    def delete(self): # just add this line!
        session['user_id'] = None
        return {'message': '204: No Content'}, 204




api.add_resource(SignUp, '/signup', endpoint='signup')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')



if __name__ == '__main__':
    app.run(port=5555, debug=True)

