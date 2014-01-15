# LTFHC EMR System

You need to have CouchDB installed somewhere (either local or remote).

We use [Kanso](http://kan.so) for dependency management and installation of this CouchApp.

To install:

```
npm install kanso
```

To get dependencies:

```
cd <project root>
kanso install
```

To push to local CouchDB:

```
kanso push http://localhost:5984/emr
```
