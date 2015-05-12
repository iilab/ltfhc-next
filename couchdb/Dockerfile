FROM debian:wheezy

RUN apt-get -y -q update && apt-get -y -q upgrade && apt-get -y -q install build-essential erlang erlang-dev libmozjs185-dev libicu-dev libcurl4-gnutls-dev libtool wget

# download couchdb
WORKDIR /usr/local/src
RUN wget http://mirror.csclub.uwaterloo.ca/apache/couchdb/source/1.6.1/apache-couchdb-1.6.1.tar.gz

# install couchdb
RUN tar zxf apache-couchdb-1.6.1.tar.gz
WORKDIR apache-couchdb-1.6.1
RUN ./configure --prefix=/usr/local && make && make install

# create couchdb user
RUN useradd --home /usr/local/var/lib/couchdb --create-home couchdb

# add config
ADD ./local.ini /usr/local/etc/couchdb/local.ini

# set couchdb permissions
RUN chown -R couchdb: /usr/local/etc/couchdb
RUN chown -R couchdb: /usr/local/var/lib/couchdb
RUN chown -R couchdb: /usr/local/var/log/couchdb
RUN chown -R couchdb: /usr/local/var/run/couchdb 
RUN chmod 0770 /usr/local/var/lib/couchdb
RUN chmod 0770 /usr/local/var/log/couchdb
RUN chmod 0770 /usr/local/var/run/couchdb
RUN chmod 664 /usr/local/etc/couchdb/*.ini
RUN chmod 775 /usr/local/etc/couchdb/*.d

EXPOSE 5985
USER couchdb
CMD ["couchdb"]
