var express = require('express');
var router = express.Router();

var navItems =
  [{name:'home'}, 
   {name:'about'}, 
   {name:'contact'}, 
   {name:'projects'}];
   
navItems.reverse();
   
var activeItem = navItems[0];

var renderObj = 
  { activeItem: activeItem, navItems: navItems };

/* GET home page. */
router.get('/', function(req, res) {
  res.render('pages/index', renderObj);
});

navItems.forEach(function(item){
    router.get('/' + item.name, function(req, res) {
      renderObj.activeItem = item;
      res.render('pages/index', renderObj);
    });
});

module.exports = router;
