from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

from datetime import datetime, timedelta
# from apscheduler.schedulers.background import BackgroundScheduler


bcrypt = bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True)
    _password_hash = db.Column(db.String)
    email = db.Column(db.String)
    phone = db.Column(db.String)
    age = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    memberships = db.relationship('Membership', backref = 'user', cascade = 'all, delete-orphan')
    gyms = association_proxy('memberships', 'gym')


    # def __repr__(self):
    #     return f'User {self.username}, ID {self.id}'

    @hybrid_property
    def password_hash(self):
        raise Exception('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        # utf-8 encoding and decoding is required in python 3
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    @staticmethod
    def simple_hash(input):
        return sum(bytearray(input, encoding='utf-8'))

    


class Membership(db.Model, SerializerMixin):
    __tablename__ = 'memberships'

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    gym_id = db.Column(db.Integer, db.ForeignKey('gyms.id'))
    plan = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())
    # expires_at = db.Column(db.DateTime)
    # fighterReady = db.Column(db.Boolean)

    # def __init__(self, user_id, gym_id, plan):
    #     self.user_id = user_id
    #     self.gym_id = gym_id
    #     self.plan = plan
    #     self.created_at = datetime.now()
    #     choice = self.plan
    #     def switch(choice):
    #         if choice == "1 Month Membership":
    #             self.expires_at = self.created_at + timedelta(days=30)
    #             self.fighterReady = True
    #             return self.expires_at
    #         elif choice == "3 Month Membership":
    #             self.expires_at = self.created_at + timedelta(days=90)
    #             self.fighterReady = True
    #             return self.expires_at
    #         elif choice == "1 Day Membership":
    #             self.expires_at = self.created_at + timedelta(days=1)
    #             self.fighterReady = True
    #             return self.expires_at
    #         elif choice == "1 Year Membership":
    #             self.expires_at = self.created_at + timedelta(days=365)
    #             self.fighterReady = True
    #             return self.expires_at
    #         else:
    #             choice == "not selected/error"
    #             print("No Selection")
            



class Gym(db.Model, SerializerMixin):
    __tablename__ = 'gyms'


    id = db.Column(db.Integer, primary_key = True)
    city = db.Column(db.String)
    address = db.Column(db.String)
    phone = db.Column(db.String)

    memberships = db.relationship('Membership', backref = 'gym', cascade = 'all, delete-orphan')
    users = association_proxy('memberships', 'user')




