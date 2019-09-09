'use strict';

module.exports = function(Usuario) {
    Usuario.validatesFormatOf('email', { with: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ });
    Usuario.create = function(req, cb) {
        console.log(req);


    }
    Usuario.updachon = function(data, cb) {
        let nombre = data.nombre;
        let email = data.email;
        let password = data.password;

        const newUser = { nombre, email, password };
        console.log(newUser);
        Usuario.create(newUser, function(err, usuario) {
            if (err) {
                return cb(err);
            } else {

                return cb(null, usuario);

            }
        });
    }
    Usuario.remove = function(id, cb) {
        app.Models.Usuario.remove({ id: id }, - function(err, usuario) {
            if (err) {
                return cb(err);
            } else {
                return cb(usuario)
            }
        });
    }

    Usuario.remoteMethod(
        'updachon', {
            http: {
                path: '/updachon/:id',
                verb: 'POST'
            },
            returns: {
                arg: 'estado',
                type: 'array'
            },
            accepts: [
                { arg: 'data', type: 'object', http: { source: 'body' } }

            ]
        });
    Usuario.remoteMethod(
        'create', {
            http: {
                path: '/crear',
                verb: 'POST'
            },
            returns: {
                arg: 'estado',
                type: 'array'
            },
            accepts: [
                { arg: 'req', type: 'object', 'http': { source: 'req' } },

            ]


        });
    Usuario.remoteMethod(
        'remove', {
            http: {
                path: '/deleton',
                verb: 'GET'
            },
            returns: {
                arg: 'estado',
                type: 'array'
            },
            accepts: [
                { arg: 'id', type: 'object' }
            ]
        })
};