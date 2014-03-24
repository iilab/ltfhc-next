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

## Contributing

Clone the repository and install dependent packages with Kanso.

```
git clone https://github.com/iilab/ltfhc-next.git
cd ltfhc-next
kanso install
```

You need to work in a personal dev replica. Once you have your credentials edit your .kansorc to be able to push by default to your personal working dev replica. Replace USER and PASS (make sure to push by default to emr__dev__USER)

*.kansorc*

```
exports.env = {
    // the default env will be used when you just do "kanso push"
    'default': {
        db: 'http://USER:PASS@couchdb.ltfhc.iilab.org/emr_dev_USER' 
    },
    // you can also define named environments this one will 
    // be used when you do "kanso push production"
    'development': {
        db: 'http://USER:PASS@couchdb.ltfhc.iilab.org/emr_dev'
    },
    // you can also define named environments this one will 
    // be used when you do "kanso push production"
    'production': {
        db: 'http://USER:PASS@couchdb.ltfhc.iilab.org/emr',
        minify: true
	}
};
```

Then upload the data files to your personal development database.

```
kanso upload data
kanso upload schema
```

Push your local couch app to your personal development database.

```
kanso push
```

The app should be available at http://couchdb.ltfhc.iilab.org/emr_dev_USER/_design/emr/index.html

## License & Copyright

Copyright 2014 Lake Tanganyika Floating Health Clinic, 501(c)(3)  <emr@floatingclinic.org>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
