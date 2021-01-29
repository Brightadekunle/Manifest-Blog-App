var models = require('../models');

// Display author create form on GET.
exports.author_create_get = function(req, res, next) {
        // create author GET controller logic here 
        res.render('forms/author_form', { title: 'Create Author',  layout: 'layouts/detail'});
};

// Handle author create on POST.
exports.author_create_post = function(req, res, next) {
     // create author POST controller logic here
     
     models.Author.create({
             first_name: req.body.first_name,
             last_name: req.body.last_name,
             username: req.body.username,
             email: req.body.email
     })
        .then(() => {
                // If an author gets created successfully, we just redirect to authors list
                // no need to render a page
                console.log("Author created successfully")
                res.redirect("/blog/authors");
        })
        .catch(err => console.log(`Error - ${err}`))
};

// Display author delete form on GET.
exports.author_delete_get = function(req, res, next) {
        // GET logic to delete an author here
        
        models.Author.destroy({
                where: {
                        id: req.params.author_id
                }
        })
                .then(() => {
                        // If an author gets deleted successfully, we just redirect to authors list
                        // no need to render a page
                        res.redirect('/blog/authors');
                })
                .catch(err => console.log(`Error - ${err}`))
};

// Handle author delete on POST.
exports.author_delete_post = function(req, res, next) {
        // POST logic to delete an author here
        
        models.Author.destroy({
                where: {
                        id: req.params.author_id
                }
        })
                .then(() => {
                        // If an author gets deleted successfully, we just redirect to authors list
                        // no need to render a page
                        res.redirect('/blog/authors');
                })
                .catch(err => console.log(`Error - ${err}`))
};

// Display author update form on GET.
exports.author_update_get = function(req, res, next) {
        // GET logic to update an author here
        
        models.Author.findOne({
                where: {
                        id: req.params.author_id
                }
        })
                .then((author) => {
                        // renders author form
                        res.render('forms/author_form', { title: 'Update Author',  layout: 'layouts/detail', author: author});
                })
                .catch(err => console.log(`Error - ${err}`))
};

// Handle post update on POST.
exports.author_update_post = function(req, res, next) {
        // POST logic to update an author here
        
        models.Author.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                email: req.body.email,
        }, {
                where: {
                        id: req.params.author_id
                }
        })
                .then(() => {
                        // If an author gets updated successfully, we just redirect to authors list
                        // no need to render a page
                        console.log("Author updated successfully")
                        res.redirect("/blog/authors");
                })
                .catch(err => console.log(`Error - ${err}`))
};

// Display list of all authors.
exports.author_list = function(req, res, next) {
        // GET controller logic to list all authors
        
        models.Author.findAll()
                .then((authors) => {
                        // renders all authors list
                        res.render('pages/author_list', { title: 'Author List',  layout: 'layouts/list', authors: authors} );
                })
                .catch(err => console.log(`Error - ${err}`))
};

// Display detail page for a specific author.
exports.author_detail = function(req, res, next) {
        // GET controller logic to display just one author
        
        console.log(req.params)
        models.Author.findOne({
                where: {
                        id: req.params.author_id
                }
        })
                .then((author) => {
                        // renders an individual author details page
                        res.render('pages/author_detail', { title: 'Author Details',  layout: 'layouts/detail', author: author} );
                })
                .catch(err => console.log(`Error - ${err}`))
        
};

 