from flask import Flask, Blueprint, render_template

views = Blueprint("views", __name__)


@views.route("/")
def home(name=None):
    """View for homepage."""
    return render_template("index.html", name=name)


@views.route("/courses")
def courses(name=None):
    """View for courses page."""
    return render_template("courses.html", name=name)


@views.route("/curriculum")
def curriculum(name=None):
    """View for curriculum page."""
    return render_template("curriculum.html", name=name)


@views.route("/faculty")
def faculty(name=None):
    """View for faculty page."""
    return render_template("faculty.html", name=name)


@views.route("/news")
def news(name=None):
    """View for news page."""
    return render_template("news.html", name=name)


@views.route("/projects")
def projects(name=None):
    """View for projects page."""
    return render_template("projects.html", name=name)


@views.route("/writing")
def writing(name=None):
    """View for writing page."""
    return render_template("writing.html", name=name)
