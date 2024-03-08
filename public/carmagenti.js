let player_num = 0;

let player1;
let player2;
let player3;

let bullet1;
let bullet2;
let bullet3
let canShoot = true;

const bullet_speed = 3;

const socket = new WebSocket("ws://192.168.1.13:8080");

socket.addEventListener("open", function(event){
});

socket.addEventListener("message", function(event){
	console.log("Server: ", event.data);

	let data = JSON.parse(event.data);

	if(data.player_num != undefined){
		player_num = data.player_num;
		console.log("Player num: ", player_num);
	}
	if(data.x != undefined){
		if(player_num == 2){
			if (data.n == 1) {
				player1.x = data.x,
				player1.y = data.y,
				player1.rotation = data.r
			}
			else if (data.n == 3) {
				player3.x = data.x,
				player3.y = data.y,
				player3.rotation = data.r
			}
		}
		else if(player_num == 1){
			if (data.n == 2) {
				player2.x = data.x,
				player2.y = data.y,
				player2.rotation = data.r
			}
			
			else if (data.n == 3) {
				player3.x = data.x,
				player3.y = data.y,
				player3.rotation = data.r
			}
		}
		else if(player_num == 3){
			if (data.n == 1) {
				player1.x = data.x,
				player1.y = data.y,
				player1.rotation = data.r
			}
			else if (data.n == 2) {
				player2.x = data.x,
				player2.y = data.y,
				player2.rotation = data.r
			}
		}
	}
	else if(data.bx != undefined){
<<<<<<< HEAD
		if(data.n === 1){
			console.log("balla1");
			if(bullet1 == undefined){

				bullet1 = global_game.add.image(data.bx, data.by, "bullet");
				bullet1.setScale(0.01);
				bullet1.rotation = data.br;
			}
			bullet1.y -= bullet_speed * Math.cos(bullet1.rotation);
			bullet1.x += bullet_speed * Math.sin(bullet1.rotation);
=======
		if(player_num == 2){
			if(bullet == undefined){
				bullet = global_game.add.image(player1.x + (2 * player1.width / 3) * Math.sin(player1_angle * Math.PI / 180), player1.y + (2 * player1.width / 3) * Math.sin(player1_angle * Math.PI / 180), 'bullet');

                bullet.setScale(0.01);

                global_game.physics.add.collider(player2, bullet, () => {
                    console.log("Hit with Player 2");

                    let bullet_collision_data = {
                        collided: 2
                    }
                
                    socket.send(JSON.stringify(bullet_collision_data));
                });
                global_game.physics.add.existing(bullet, false);
			}
			else if(bullet == undefined){
				bullet = global_game.add.image(player3.x + (2 * player3.width / 3) * Math.sin(player3_angle * Math.PI / 180), player3.y + (2 * player3.width / 3) * Math.sin(player3_angle * Math.PI / 180), 'bullet');

                bullet.setScale(0.01);

                global_game.physics.add.collider(player2, bullet, () => {
                    console.log("Hit with Player 2");

                    let bullet_collision_data = {
                        collided: 2
                    }
                
                    socket.send(JSON.stringify(bullet_collision_data));
                });
                global_game.physics.add.existing(bullet, false);
			}

			bullet.x = data.bx;
			bullet.y = data.by;
			bullet.rotation = data.br;
>>>>>>> 039456cd64aad4022ba9bc0f7969fe0e160638ac
		}
		else if(player_num == 1){
			if(bullet == undefined){
				bullet = global_game.add.image(player2.x + (2 * player2.width / 3) * Math.sin(player2_angle * Math.PI / 180), player2.y + (2 * player2.width / 3) * Math.sin(player2_angle * Math.PI / 180), 'bullet');

                bullet.setScale(0.01);

                global_game.physics.add.collider(player1, bullet, () => {
                    console.log("Hit with Player 1");

                    let bullet_collision_data = {
                        collided: 1
                    }
                
                    socket.send(JSON.stringify(bullet_collision_data));
                });
                global_game.physics.add.existing(bullet, false);
			}
			else if(bullet == undefined){
				bullet = global_game.add.image(player3.x + (2 * player3.width / 3) * Math.sin(player3_angle * Math.PI / 180), player3.y + (2 * player3.width / 3) * Math.sin(player3_angle * Math.PI / 180), 'bullet');

<<<<<<< HEAD
		if(data.n === 2){
			console.log("balla2");
			if(bullet2 == undefined){

				bullet2 = global_game.add.image(data.bx, data.by, "bullet");
				bullet2.setScale(0.01);
				bullet2.rotation = data.br;
			}
			bullet2.y -= bullet_speed * Math.cos(bullet2.rotation);
			bullet2.x += bullet_speed * Math.sin(bullet2.rotation);
		}
		
		if(data.n === 3){
			console.log("balla3");
			if(bullet3 == undefined){

				bullet3 = global_game.add.image(data.bx, data.by, "bullet");
				bullet3.setScale(0.01);
				bullet3.rotation = data.br;
			}
			bullet3.y -= bullet_speed * Math.cos(bullet3.rotation);
			bullet3.x += bullet_speed * Math.sin(bullet3.rotation);
		}
=======
                bullet.setScale(0.01);
>>>>>>> 039456cd64aad4022ba9bc0f7969fe0e160638ac

                global_game.physics.add.collider(player2, bullet, () => {
                    console.log("Hit with Player 2");

                    let bullet_collision_data = {
                        collided: 2
                    }
                
                    socket.send(JSON.stringify(bullet_collision_data));
                });
                global_game.physics.add.existing(bullet, false);
			}

			bullet.x = data.bx;
			bullet.y = data.by;
			bullet.rotation = data.br;
		}	
	}

	if(player_num == 3){
		if(bullet == undefined){
			bullet = global_game.add.image(player2.x + (2 * player2.width / 3) * Math.sin(player2_angle * Math.PI / 180), player2.y + (2 * player2.width / 3) * Math.sin(player2_angle * Math.PI / 180), 'bullet');

			bullet.setScale(0.01);

			global_game.physics.add.collider(player3, bullet, () => {
				console.log("Hit with Player 3");

				let bullet_collision_data = {
					collided: 3
				}
			
				socket.send(JSON.stringify(bullet_collision_data));
			});
			global_game.physics.add.existing(bullet, false);
			
		}
		else if(bullet == undefined){
			bullet = global_game.add.image(player2.x + (2 * player2.width / 3) * Math.sin(player2_angle * Math.PI / 180), player2.y + (2 * player2.width / 3) * Math.sin(player2_angle * Math.PI / 180), 'bullet');

			bullet.setScale(0.01);

			global_game.physics.add.collider(player3, bullet, () => {
				console.log("Hit with Player 3");

				let bullet_collision_data = {
					collided: 3
				}
			
				socket.send(JSON.stringify(bullet_collision_data));
			});
			global_game.physics.add.existing(bullet, false);
		}

		bullet.x = data.bx;
		bullet.y = data.by;
		bullet.rotation = data.br;
	}

});

const config = {
type: Phaser.AUTO,
width: 800,
height: 600,
scene:{
	preload: preload,
	create: create,
	update: update
  }
}

const game = new Phaser.Game(config);

let global_game;

const car_speed = 2;
const car_rotation = 2;

let player1_angle = -1.5;
let player2_angle = -1.5;
let player3_angle = -1.5;

let car_move;
let bullet_shoot;

function preload ()
{
	this.load.image('car1', 'assets/PNG/Cars/car_black_small_1.png');
	this.load.image('car2', 'assets/PNG/Cars/car_blue_small_1.png');
	this.load.image('car3', 'assets/PNG/Cars/car_red_small_1.png');

	this.load.image('track', 'assets/PNG/Track/track.png');

	this.load.image('bullet', 'assets/PNG/Bullet/bullet.png');

	global_game = this;

}

function create ()
{
	track = this.add.image(400, 300, 'track').setDisplaySize(800,600);

	player1 = this.add.image(272, 508, 'car1');
	player2 = this.add.image(272, 544, 'car2');
	player3 = this.add.image(272, 574, 'car3');

	player1.setScale(0.5);
	player2.setScale(0.5);
	player3.setScale(0.5);

	player1.setAngle(-90);
	player2.setAngle(-90);
	player3.setAngle(-90);

	car_move = this.input.keyboard.createCursorKeys();
	bullet_shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

}

function update ()
{
	if(player_num == 0)
		return;

	if(player_num == 1){
		if( car_move.up.isDown){
			player1.y -= car_speed*Math.cos(player1_angle*Math.PI/180);
			player1.x += car_speed*Math.sin(player1_angle*Math.PI/180);
		}
	
		if( car_move.down.isDown){
			player1.y += car_speed*Math.cos(player1_angle*Math.PI/180);
			player1.x -= car_speed*Math.sin(player1_angle*Math.PI/180);
		}
	
		if(car_move.left.isDown){
			player1_angle -= car_rotation;
		}
	
		if(car_move.right.isDown){
			player1_angle += car_rotation;
		}

		if (bullet_shoot.isDown && canShoot) {
            bullet1 = this.add.image(
                player1.x + (2 * player1.width / 3)* Math.sin(player1_angle * Math.PI / 180),
                player1.y - (2 * player1.width / 3) * Math.cos(player1_angle * Math.PI / 180),
                "bullet"
            );
            bullet1.setScale(0.01);
            bullet1.rotation = player1_angle * Math.PI / 180;
            canShoot = false;
        }

		player1.rotation = player1_angle*Math.PI/180;

 		 let player_data = {
			n: player_num,
			x: player1.x,
			y: player1.y,
			r: player1.rotation
  		};

 		socket.send(JSON.stringify(player_data));
<<<<<<< HEAD

		if (bullet1 == undefined || canShoot) {
			return;
		}
	
		bullet1.y -= bullet_speed * Math.cos(bullet1.rotation);
		bullet1.x += bullet_speed * Math.sin(bullet1.rotation);
	
		let bullet_data = {
			bx: bullet1.x,
			by: bullet1.y,
			br: bullet1.rotation,
			n: 1
		}
	
		socket.send(JSON.stringify(bullet_data));

=======
		
		 if (bullet == undefined || canShoot) {
			return;
		}
	
		bullet.y -= bullet_speed * Math.cos(bullet.rotation);
		bullet.x += bullet_speed * Math.sin(bullet.rotation);
	
		let bullet_data = {
			bx: bullet.x,
			by: bullet.y,
			br: bullet.rotation
		}
	
		socket.send(JSON.stringify(bullet_data));
>>>>>>> 039456cd64aad4022ba9bc0f7969fe0e160638ac
	}
	else if(player_num == 2){
		if( car_move.up.isDown){
			player2.y -= car_speed*Math.cos(player2_angle*Math.PI/180);
			player2.x += car_speed*Math.sin(player2_angle*Math.PI/180);
		}
	
		if( car_move.down.isDown){
			player2.y += car_speed*Math.cos(player2_angle*Math.PI/180);
			player2.x -= car_speed*Math.sin(player2_angle*Math.PI/180);
		}
	
		if(car_move.left.isDown){
			player2_angle -= car_rotation;
		}
	
		if(car_move.right.isDown){
			player2_angle += car_rotation;
		}

		if (bullet_shoot.isDown && canShoot) {
            bullet2 = this.add.image(
                player2.x + (2 * player2.width / 3)* Math.sin(player2_angle * Math.PI / 180),
                player2.y - (2 * player2.width / 3) * Math.cos(player2_angle * Math.PI / 180),
                "bullet"
            );
            bullet2.setScale(0.01);
            bullet2.rotation = player2_angle * Math.PI / 180;
            canShoot = false;
        }

		player2.rotation = player2_angle*Math.PI/180;

 		 let player_data = {
			n: player_num,
			x: player2.x,
			y: player2.y,
			r: player2.rotation
  		};

		socket.send(JSON.stringify(player_data));

		if (bullet2 == undefined || canShoot) {
			return;
		}
	
		bullet2.y -= bullet_speed * Math.cos(bullet2.rotation);
		bullet2.x += bullet_speed * Math.sin(bullet2.rotation);
	
		let bullet_data = {
			bx: bullet2.x,
			by: bullet2.y,
			br: bullet2.rotation,
			n: 2
		}
	
		socket.send(JSON.stringify(bullet_data));


		 if (bullet == undefined || canShoot) {
			return;
		}
	
		bullet.y -= bullet_speed * Math.cos(bullet.rotation);
		bullet.x += bullet_speed * Math.sin(bullet.rotation);
	
		let bullet_data = {
			bx: bullet.x,
			by: bullet.y,
			br: bullet.rotation
		}
	
		socket.send(JSON.stringify(bullet_data));

	}
	else if(player_num == 3){
		if( car_move.up.isDown){
			player3.y -= car_speed*Math.cos(player3_angle*Math.PI/180);
			player3.x += car_speed*Math.sin(player3_angle*Math.PI/180);
		}
	
		if( car_move.down.isDown){
			player3.y += car_speed*Math.cos(player3_angle*Math.PI/180);
			player3.x -= car_speed*Math.sin(player3_angle*Math.PI/180);
		}
	
		if(car_move.left.isDown){
			player3_angle -= car_rotation;
		}
	
		if(car_move.right.isDown){
			player3_angle += car_rotation;
		}

		if (bullet_shoot.isDown && canShoot) {
            bullet3 = this.add.image(
                player3.x + (2 * player3.width / 3)* Math.sin(player3_angle * Math.PI / 180),
                player3.y - (2 * player3.width / 3) * Math.cos(player3_angle * Math.PI / 180),
                "bullet"
            );

            bullet3.setScale(0.01);
            bullet3.rotation = player3_angle * Math.PI / 180;
            canShoot = false;
        }

		player3.rotation = player3_angle*Math.PI/180;

 		 let player_data = {
			n: player_num,
			x: player3.x,
			y: player3.y,
			r: player3.rotation
  		};
		
		socket.send(JSON.stringify(player_data));

		if (bullet3 == undefined || canShoot) {
			return;
		}
	
		bullet3.y -= bullet_speed * Math.cos(bullet3.rotation);
		bullet3.x += bullet_speed * Math.sin(bullet3.rotation);
	
		let bullet_data = {
			bx: bullet3.x,
			by: bullet3.y,
			br: bullet3.rotation,
			n: 3
		}
	
		socket.send(JSON.stringify(bullet_data));

<<<<<<< HEAD
=======
		 if (bullet == undefined || canShoot) {
			return;
		}
	
		bullet.y -= bullet_speed * Math.cos(bullet.rotation);
		bullet.x += bullet_speed * Math.sin(bullet.rotation);
	
		let bullet_data = {
			bx: bullet.x,
			by: bullet.y,
			br: bullet.rotation
		}
	
		socket.send(JSON.stringify(bullet_data));

>>>>>>> 039456cd64aad4022ba9bc0f7969fe0e160638ac
	}

}

