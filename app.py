from flask import Flask, render_template, redirect, url_for, send_file, request
from flask_sqlalchemy import SQLAlchemy
import secrets
import qrcode
import io

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"

db = SQLAlchemy(app)


# -------------------------
# Database Models
# -------------------------

class Business(db.Model):
    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(
        db.String(100)
    )

    reward = db.Column(
        db.String(200)
    )

    join_token = db.Column(
        db.String(32),
        unique=True,
        nullable=False
    )

    cards = db.relationship(
        "LoyaltyCard",
        backref="business"
    )


    @staticmethod
    def generate_token():
        return secrets.token_urlsafe(16)



class LoyaltyCard(db.Model):
    id = db.Column(
        db.String(32),
        primary_key=True
    )

    stamps = db.Column(
        db.Integer,
        default=0
    )

    business_id = db.Column(
        db.Integer,
        db.ForeignKey("business.id")
    )


    @staticmethod
    def generate_id():
        return secrets.token_urlsafe(16)



# -------------------------
# Routes
# -------------------------

@app.route("/")
def home():

    business = Business.query.first()

    return redirect(
        f"/join/{business.join_token}"
    )



@app.route("/join/<token>")
def join(token):

    business = Business.query.filter_by(
        join_token=token
    ).first_or_404()


    card = LoyaltyCard(
        id=LoyaltyCard.generate_id(),
        business_id=business.id
    )

    db.session.add(card)
    db.session.commit()


    return redirect(
        url_for(
            "card",
            card_id=card.id
        )
    )



@app.route("/card/<card_id>")
def card(card_id):

    card = LoyaltyCard.query.get_or_404(
        card_id
    )

    return render_template(
        "card.html",
        card=card
    )



@app.route("/staff/<card_id>")
def staff(card_id):

    card = LoyaltyCard.query.get_or_404(
        card_id
    )

    return render_template(
        "staff.html",
        card=card
    )



@app.route("/stamp/<card_id>")
def add_stamp(card_id):

    card = LoyaltyCard.query.get_or_404(
        card_id
    )

    card.stamps += 1

    db.session.commit()


    return redirect(
        f"/staff/{card.id}"
    )


@app.route("/business/<int:business_id>/qr")
def business_qr(business_id):

    business = Business.query.get_or_404(
        business_id
    )


    url = request.host_url + "join/" + business.join_token


    img = qrcode.make(url)


    img_io = io.BytesIO()

    img.save(
        img_io,
        "PNG"
    )

    img_io.seek(0)


    return send_file(
        img_io,
        mimetype="image/png"
    )

@app.route("/businesses")
def businesses():

    businesses = Business.query.all()

    return render_template(
        "businesses.html",
        businesses=businesses
    )

# -------------------------
# Demo Data
# -------------------------

def create_demo():

    if Business.query.count() == 0:

        businesses = [
            Business(
                name="Dukes Deli",
                reward="Free sandwich after 10 stamps",
                join_token=Business.generate_token()
            ),

            Business(
                name="STS Italian Deli",
                reward="Free coffee after 8 stamps",
                join_token=Business.generate_token()
            ),

            Business(
                name="Campus Coffee",
                reward="Free drink after 9 stamps",
                join_token=Business.generate_token()
            )
        ]


        db.session.add_all(businesses)
        db.session.commit()


        for business in businesses:
            print(
                business.name,
                "QR URL:",
                f"http://127.0.0.1:5000/join/{business.join_token}"
            )



# -------------------------
# Start App
# -------------------------

if __name__ == "__main__":

    with app.app_context():

        db.create_all()

        create_demo()


    app.run(debug=True)