var User = require('../models/user');

// Display author create form on GET.
exports.user_create_get = function(req, res, next) {
        // create author GET controller logic here 
        res.render('forms/user_form', { title: 'Create User',  layout: 'layouts/detail'});
};

// Handle author create on POST.
exports.user_create_post = function(req, res, next) {
     // create author POST controller logic here
     // If an author gets created successfully, we just redirect to authors list
     // no need to render a page
    res.redirect('/user')
};

// Display author delete form on GET.
exports.user_delete_get = function(req, res, next) {
        // GET logic to delete an author here
        
        // renders author delete page
        res.render('pages/user_delete', { title: 'Delete User',  layout: 'layouts/detail'} );
};

// Handle author delete on POST.
exports.user_delete_post = function(req, res, next) {
        // POST logic to delete an author here
        // If an author gets deleted successfully, we just redirect to authors list
        // no need to render a page
        res.redirect('/user')
};

// Display author update form on GET.
exports.user_update_get = function(req, res, next) {
        // GET logic to update an author here
        
        // renders author form
        res.render('forms/user_form', { title: 'Update User',  layout: 'layouts/detail'});
};

// Handle post update on POST.
exports.user_update_post = function(req, res, next) {
        // POST logic to update an author here
        // If an author gets updated successfully, we just redirect to authors list
        // no need to render a page
        res.redirect("/user");
};

// Display list of all authors.
exports.user_list = function(req, res, next) {
        // GET controller logic to list all authors
        
        // renders all authors list
        res.render('pages/user_list', { title: 'User List',  layout: 'layouts/list'} );
};

// Display detail page for a specific author.
exports.user_detail_all = function(req, res, next) {
        // GET controller logic to display just one author
        
        // renders an individual author details page
        res.render('pages/user_detail', { title: 'User Details',  layout: 'layouts/detail'} );
};

exports.user_detail_one = function(req, res, next) {
        // GET controller logic to display just one author
        
        // renders an individual author details page
        res.render('pages/user_detail', { title: 'User Details',  layout: 'layouts/detail'} );
};

 