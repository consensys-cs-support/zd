console.log('test');
var today = new Date();
today = today.toISOString().slice(0,10)


var zendesk = require('node-zendesk');

var client = zendesk.createClient({
  username:  'abc@website.net',
  token:     'abcd',
  remoteUri: 'https://abcd.zendesk.com/api/v2'
});


	//var query = "created:"+today+" type:ticket"
	var query = 5691
	client.search.query(query, function (err, req, result) {
		result.forEach((value,index)=>
		{
			var ticketUpdate = {"ticket":{"custom_fields":[{"id":360009452511,value:today}]}};
			
			client.tickets.update(value.id,ticketUpdate,function(err,req,result){
			console.log(result);
			})

		})
 

});


