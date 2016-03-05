var express = require('express');
var router = express.Router();
var MikroNode = require('mikronode');

/* GET home page. */
router.get('/', function(req, res, next) {


var connection = new MikroNode('192.168.10.1','admin','pass');
connection.connect(function(conn) {

   var chan=conn.openChannel();
   conn.closeOnDone(true);
   chan.write('/queue/simple/print',function() {
      chan.closeOnDone(true);
      chan.on('done',function(data) {

var listusers=[];

         var parsed = MikroNode.parseItems(data);

        // parsed.forEach(function(item) {

            var name=(JSON.stringify(parsed));
            //var name=(JSON.stringify(item.name));
           res.write(name);
          // });

        // res.write(listusers);
         res.end();
 
      }); 
   }); 
}); 



  
});




module.exports = router;
