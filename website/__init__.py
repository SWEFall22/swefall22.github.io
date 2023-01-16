from flask import Flask

def create_app() -> Flask:
    '''Creates the Flask app, imports necessary classes, tests references to
    different types of data.'''

    app = Flask(__name__)

    from .views import views

    app.register_blueprint(views, url_prefix='/')

    return app