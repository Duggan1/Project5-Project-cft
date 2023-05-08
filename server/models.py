from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

from datetime import datetime, timedelta
# from apscheduler.schedulers.background import BackgroundScheduler




class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    serialize_rules= ("-created_at", "-updated_at", "-memberships","-_password_hash")

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
    
    @validates('_password')
    def pass_hashing(self, key, attr):
        password_hash = bcrypt.generate_password_hash(attr.encode('utf-8'))
        return password_hash.decode('utf-8')

    @staticmethod
    def simple_hash(input):
        return sum(bytearray(input, encoding='utf-8'))

    
# ////nullable fo gym&user idbefore the push

class Membership(db.Model, SerializerMixin):
    __tablename__ = 'memberships'
    serialize_rules= ("-created_at", "-updated_at", "-user_id","-user._password_hash", "-user.id","-gym.address","-gym.phone","-gym.id","-gym_id")

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),nullable=False)
    gym_id = db.Column(db.Integer, db.ForeignKey('gyms.id'),nullable=False)
    plan = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    @validates( 'plan' )
    def planmustbeone(self, key, value):
        if len(value) < 1:
            raise ValueError( 'too short')
        return value



class Gym(db.Model, SerializerMixin):
    __tablename__ = 'gyms'
    serialize_rules= ("-created_at", "-updated_at", "-memberships","users","plans")

    id = db.Column(db.Integer, primary_key = True)
    city = db.Column(db.String)
    address = db.Column(db.String)
    phone = db.Column(db.String)

    memberships = db.relationship('Membership', backref = 'gym', cascade = 'all, delete-orphan')
    users = association_proxy('memberships', 'user')
    plans = association_proxy('memberships', 'plan')
    





