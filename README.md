# LTFHC EMR System


## Development

Prerequisite
  * Vagrant 1.6.3+
  * Ansible 1.7+

To install the development environment run.

  * ```git clone https://github.com/iilab/ltfhc-next.git```
  * ```git clone https://github.com/iilab/ltfhc-config.git```
  * ```cd ltfhc-next```
  * ```vagrant up``` (The provisioning will take a long time as it is building couch from source currently.)
  * (```vagrant provision```) Only necessary if you modify the playbook or need to provisioning an existing and running vagrant VM.
    * If you have made targeted modifications in the playbook and want to only run specific tags then use ```ansible-playbook -i system/inventory --private-key=~/.vagrant.d/insecure_private_key -u vagrant ../ltfhc-config/playbook/site.yml --tags="SOMETAGS"```

You should be able to access the application at ```https://localhost:8443``` with the username ```demo``` and the password ```demo```

To access Futon use ```https://127.0.0.1:8443/_utils/```

## Optional steps

To be able to run couchdb on https://www.health :
 - Add 127.0.0.1 www.health to /etc/hosts
 - sudo ipfw add 101 fwd 127.0.0.1,8443 tcp from any to me 443

Now you should be able to see Futon at ```https://www.health/_utils```

Create a user account click "Fix this" to end the Admin Party (bottom right of Futon)

## Deploying the EMR app

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

You can use the credentials you created above after ending the Admin Party. Edit your .kansorc to be able to push by default to your personal working dev replica. Replace USER and PASS (make sure to push by default to emr__dev__USER)

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



## Caolan's dev environment

I was having problems with the vagrant setup above (CouchDB was eating 100%
ram and CPU when PUT'ing documents for some reason). Until we can invest time
in fixing the development environment properly here's the process I'm using:

### Setup .dev domains for local machine (debian)

- `sudo apt-get install dnsmasq`
- edit /etc/dnsmasq.conf
    - add: `address=/dev/127.0.0.1`
- `service dnsmasq restart`
- edit /etc/dhcp/dhclient.conf
    - add: `prepend domain-name-servers 127.0.0.1;`
- `service network-manager restart`

### Start couchdb docker container

    $ fig up

CouchDB should then be accessible at http://localhost:5985/_utils,
username: demo, password: demo

### Push district couchapp

    $ rm kanso.json
    $ ln -s kanso.json.dev-district ./kanso.json
    $ kanso push http://demo:demo@localhost:5985/emr_district

You can now access the district couchapp at http://district.ltfhc.dev:5985

### Push clinic couchapp

    $ rm kanso.json
    $ ln -s kanso.json.dev-clinic ./kanso.json
    $ kanso push http://demo:demo@localhost:5985/emr_clinic

You can now access the clinic couchapp at http://clinic.ltfhc.dev:5985

### Push clinic data

    $ kanso upload data http://demo:demo@localhost:5985/emr_clinic --skip

### Setup replication of approved reports from clinic instance to district

    $ ./utils/setup_clinic_to_district_replication.js http://demo:demo@localhost:5985 emr_clinic emr_district


### To view reports in district instance

Create a user of type 'District' in the user administration interface,
login to the district couchapp and click the tab for the clinic. To add
more clinics to the district or add more distrits edit the lib/districts.js file.
