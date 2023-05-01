#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
# from faker import Faker

# Local imports
from app import app
from models import db, Membership, User, Gym

with app.app_context():
    # Restaurant.query.delete()
    # User.query.delete()
    # Review.query.delete()

  

    # u1= User(username = "bill", _password_hash= "york",email="bob@apple.com", phone="6067083456", age=24)
    # u2= User(username = "kevo", _password_hash= "lol",email="ktd@gmail.com", phone="7082800622", age=28)
    # users = [u1, u2]

    # opt1= Restaurant(name = "KRT", location = 'North', img ='https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/nyc-mayor-deblasio-makes-outdoor-dining-permanently-legal_0.jpg?itok=qBsr_UJY')

    # memberships = [opt1, ]

    cft1 = Gym(city = "Chicago", address = "6528 S Lavernge Ave Chicago, Illinois", phone = "1(773) 885-5700")
    cft2 = Gym(city = "Guadalajara", address = "Calle Federico E. Ibarra #955 Colonia Jardines de Alcalde, 44220 Guadalajara, Jalisco", phone = "+523315387680")
    gyms = [cft1, cft2 ]


if __name__ == '__main__':
    # fake = Faker()
    with app.app_context():
        # Membership.query.delete()
        # User.query.delete()
        Gym.query.delete()
        print("Starting seed...")
        # db.session.add_all(memberships)
        # db.session.add_all(users)
        db.session.add_all(gyms)
        db.session.commit()
        # Seed code goes here!
