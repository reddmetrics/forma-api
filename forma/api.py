"""API handlers for FORMA data. See:

  https://docs.google.com/document/d/1xxcRcOtH62Z65E6tj9IkCZ0ySUv_VBBLRoRCv_ljbIg/edit#
"""

import webapp2
from google.appengine.ext.webapp.util import run_wsgi_app

class CountryAll(webapp2.RequestHandler):
    """Handler for downloading CSV of all probabilities for all periods for 
    supplied country ISO.
    """

    def post(self):
        self.get()
    
    def get(self, iso):
        self.response.out.write(
            'TODO: CSV of all probabilities for all periods for %s.' % iso)

class CountryLatest(webapp2.RequestHandler):
    """Handler for downloading CSV of all probabilities for latest period for 
    supplied country ISO.
    """
    
    def post(self):
        self.get()
    
    def get(self, iso):
        self.response.out.write(
            'TODO: CSV of all probabilities for latest period for %s.' % iso)

class CountryYear(webapp2.RequestHandler):
    """Handler for downloading CSV of all probabilities for supplied year and
    country ISO.
    """
    
    def post(self):
        self.get()
    
    def get(self, iso, year):
        self.response.out.write(
            'TODO: CSV of all probabilities in %s for %s.' % (year, iso))     

class WorldAll(webapp2.RequestHandler):
    """Handler for downloading CSV of all probabilities for all periods for 
    the entire world.
    """

    def post(self):
        self.get()
    
    def get(self):
        self.response.out.write(
            'TODO: CSV of all probabilities for all periods for entire world')  

class WorldLatest(webapp2.RequestHandler):
    """Handler for downloading CSV of all probabilities for latest period for 
    the entire world.
    """

    def post(self):
        self.get()
    
    def get(self):
        self.response.out.write(
            'TODO: CSV of all probabilities for latest period for entire world')                           

class WorldYear(webapp2.RequestHandler):
    """Handler for downloading CSV of all probabilities for supplied year for 
    the entire world.
    """

    def post(self):
        self.get()
    
    def get(self, year):
        self.response.out.write(
            'TODO: CSV of all probabilities in %s for entire world' % year) 

handler = webapp2.WSGIApplication([
    webapp2.Route(r'/api/prob/<iso:[A-Za-z]{3,3}.csv>', handler=CountryAll),
    webapp2.Route(r'/api/prob/latest/<iso:[A-Za-z]{3,3}.csv>', handler=CountryLatest),
    webapp2.Route(r'/api/prob/<year:\d{4,4}>/<iso:[A-Za-z]{3,3}.csv>', handler=CountryYear),
    webapp2.Route(r'/api/prob/world.csv', handler=WorldAll),
    webapp2.Route(r'/api/prob/latest/world.csv', handler=WorldLatest),
    webapp2.Route(r'/api/prob/<year:\d{4,4}>/world.csv', handler=WorldYear)],
    debug=True)
         
def main():
    run_wsgi_app(handler)

if __name__ == "__main__":
    main()