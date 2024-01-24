let static = require('node-static');

let http = require('http'); 
let ws = require('ws');

let file = new static.Server('./public');
 
let http_server = http.createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
});

let ws_server = new  ws.WebSocket.Server({ server: http_server });

http_server.listen(8080);

let p1_conn;
let p2_conn;
let p3_conn;

ws_server.on('connection', function (conn){
	console.log('EVENT: Connection');
	
	if(p1_conn == undefined){
		p1_conn = conn;

		p1_conn.send('{"player_num":1}');

		p1_conn.on('message', function(data){
			if(p2_conn == undefined)
				return;
			p2_conn.send(data.toString());
			
			if(p3_conn == undefined)
				return;
			p3_conn.send(data.toString());

		console.log(data.toString());
     	});

	}
	else if(p2_conn == undefined){
		p2_conn = conn;

		p2_conn.send('{"player_num":2}');

		p2_conn.on('message', function(data){
			if(p1_conn == undefined)
				return;
			p1_conn.send(data.toString());

			if(p3_conn == undefined)
				return;
			p3_conn.send(data.toString());

		console.log(data.toString());
		});
	}
	else if(p3_conn == undefined){
		p3_conn = conn;

		p3_conn.send('{"player_num":3}');

		p3_conn.on('message', function(data){
			if(p1_conn == undefined)
				return;
			p1_conn.send(data.toString());

			if(p2_conn == undefined)
				return;
			p2_conn.send(data.toString());

		console.log(data.toString());
		});
	}
	
});
