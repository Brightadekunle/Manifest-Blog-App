var models = require('../models');

// Display category create form on GET.
exports.category_create_get = function(req, res, next) {
        // create category GET controller logic here 
        
        // renders a category form
        res.render('forms/category_form', { title: 'Create Category',  layout: 'layouts/detail'});
};

// Handle category create on POST.
exports.category_create_post = function(req, res, next) {
     // create category POST controller logic here
     
     models.Category.create({
             name: req.body.name
     })
        .then(() => {
                // If a category gets created successfully, we just redirect to categories list
                // no need to render a page
                console.log('Category created successfully')
                res.redirect("/blog/categories");
        })
        .catch(err => console.log(`Error - ${err}`))
     
     
};

// Display category delete form on GET.
exports.category_delete_get = function(req, res, next) {
        // GET logic to delete a category here
        
       models.Category.destroy({
                where: {
                        id: req.params.category_id
                }
        })
                .then(() => {
                        // If a category gets deleted successfully, we just redirect to categories list
                        // no need to render a page
                        console.log("Category deleted successfully")
                        res.redirect('/blog/categories');
                })
                .catch(err => console.log(`Error - ${err}`))
};

// Handle category delete on POST.
exports.category_delete_post = function(req, res, next) {
        // POST logic to delete a category here
        
        models.Category.destroy({
                where: {
                        id: req.params.category_id
                }
        })
                .then(() => {
                        // If a category gets deleted successfully, we just redirect to categories list
                        // no need to render a page
                        console.log("Category deleted successfully")
                        res.redirect('/blog/categories');
                })
                .catch(err => console.log(`Error - ${err}`))
                
};

// Display category update form on GET.
exports.category_update_get = function(req, res, next) {
        // GET logic to update a category here
        
        models.Category.findOne({
                where: {
                        id: req.params.category_id
                }
        })
                .then((category) => {
                        // renders a category form
                        res.render('forms/category_form', { title: 'Update Category',  layout: 'layouts/detail', category: category });
                })
                .catch(err => console.log(`Error - ${err}`))
        
};

// Handle category update on POST.
exports.category_update_post = function(req, res, next) {
        // POST logic to update a category here
        
        models.Category.update({
                name: req.body.name
        },{
                where: {
                        id: req.params.category_id
                }
        })
                .then(() => {
                        // If a category gets updated successfully, we just redirect to categories list
                        // no need to render a page
                        console.log("category updated successfully")
                        res.redirect("/blog/categories");                 
                })
                .catch(err => console.log(`Error - ${err}`))
       
};

// Display list of all categories.
exports.category_list = function(req, res, next) {
        // controller logic to display all categories
        
        models.Category.findAll()
                .then((categories) => {
                        // renders a category list page
                        console.log(categories)
                        res.render('pages/category_list', { title: 'Category List',  layout: 'layouts/list', categories: categories} );
                })
                .catch(err => console.log(`Error - ${err}`))
};

// Display detail page for a specific category.
exports.category_detail = function(req, res, next) {
        // constroller logic to display a single category
        
        models.Category.findOne({
                where: {
                        id: req.params.category_id
                }
        })
                .then((category) => {
                        // renders an inividual category details page
                        res.render('pages/category_detail', { title: 'Category Details',  layout: 'layouts/detail', category: category} );
                })
                .catch(err => console.log(`Error - ${err}`))
};



 