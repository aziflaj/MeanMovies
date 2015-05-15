#README

Make sure to install [MongoDB](http://docs.mongodb.org/manual/installation/)

```bash
# get the repo
git clone https://github.com/aziflaj/MeanMovies.git

# install the NPM dependencies
cd MeanMovies
npm install

# import the mongo collection
mongoimport --db movies --collection movieCollection --file movies.json

# run the app
npm start
```