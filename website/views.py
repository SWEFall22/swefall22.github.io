from flask import Flask, Blueprint, render_template

views = Blueprint("views", __name__)


@views.route("/")
def home(name=None):
    """"""
    return render_template("index.html", name=name)