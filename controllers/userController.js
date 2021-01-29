var models = require('../models');

// Display author create form on GET.
exports.user_create_get = function(req, res, next) {
        // create author GET controller logic here 
       
        res.render('forms/user_form', { title: 'Create User',  layout: 'layouts/detail'});
         console.log("User form renders successfully");
};



// Handle author create on POST.
exports.user_create_post = function(req, res, next) {
     // create author POST controller logic here
     // If an author gets created successfully, we just redirect to authors list
     // no need to render a page
        models.User.create({
            username: req.body.username,
        }).then(function() {
            console.log("Post created successfully");
           // check if there was an error during post creation
            res.redirect('/blog/user');
      });
};

// Display author delete form on GET.
exports.user_delete_get = function(req, res, next) {
        // GET logic to delete an author here
        
        console.log(req.params)
        models.User.destroy({
                where: {
                        id: req.params.user_id
                }
        })
                .then(() => {
                        console.log("User deleted successfully")
                        res.redirect('/blog/user')    
                })
                .catch(err => console.log(err))
        
        // renders author delete page
        // res.render('pages/user_delete', { title: 'Delete User',  layout: 'layouts/detail'} );
};

// Handle author delete on POST.
exports.user_delete_post = function(req, res, next) {
        // POST logic to delete an author here
        // If an author gets deleted successfully, we just redirect to authors list
        // no need to render a page
        models.User.destroy({
                where: {
                        id: req.params.user_id
                }
        })
                .then(() => {
                        console.log("User deleted successfully")
                        res.redirect('/blog/user')    
                })
                .catch(err => console.log(err))
        // res.redirect('/user')
};

// Display author update form on GET.
exports.user_update_get = function(req, res, next) {
        // GET logic to update an author here
        
        models.User.findOne({
                where: {
                        id: req.params.user_id
                }
        })
                .then((user) => {
                        // renders author form
                        res.render('forms/user_form', { title: 'Update User',  layout: 'layouts/detail', user: user});
                        console.log('User update get successfully.')
                })
                .catch(err => console.log(`Error - ${err}`))
        
};

// Handle post update on POST.
exports.user_update_post = function(req, res, next) {
        // POST logic to update an author here
        // If an author gets updated successfully, we just redirect to authors list
        // no need to render a page
        
        models.User.update({
                username: req.body.username
        },
        {
                where: {
                        id: req.params.user_id                        
                }
                }
        )
                .then(() => {
                        console.log("Users updated successfully")
                        res.redirect('/blog/user')
                })
                .catch(err => console.log(`Error - ${err}`))
                
        
        // res.redirect("/user");
};

// Display list of all authors.
exports.user_list = function(req, res, next) {
        // GET controller logic to list all authors
        
        console.log(req.params)
        
        models.User.findAll()
                .then((users) => {
                        // renders all authors list
                        res.render('pages/user_list', { title: 'User List',  layout: 'layouts/list', users: users} );                
                })
                .catch(err => console.log(`Error - ${err}`))
        
};

// Display detail page for a specific author.
exports.user_detail = function(req, res, next) {
        // GET controller logic to display just one author
        
        console.log(req.params)
        
        models.User.findOne({
                where: {
                        id: req.params.user_id
                }
        })
                .then((user) => {
                        // renders an individual author details page
                        res.render('pages/user_detail', { title: 'User Details',  layout: 'layouts/detail', user: user} ); 
                })
                .catch(err => console.log(`Error -${err}`))
};

// exports.user_detail_one = function(req, res, next) {
//         // GET controller logic to display just one author
        
//         console.log(req.params.user_id)
        
//         models.User.findOne({
//                 where: {
//                         id: req.params.user_id
//                 }
//         })
//                 .then((user) => {
//                       // renders an individual author details page
//                         res.render('pages/user_detail', { title: 'User Details',  layout: 'layouts/detail', user: user} );  
//                 })
                
// };




 