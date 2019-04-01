# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create({email:"demo@demo.com", username:"username#0000", password:"password"})
User.create({email:"example@example.com", username:"dustin#6969", password:"monica!!"})

server1 = Server.create({server_name:"Main", owner_id: demo.id})
Channel.create({channel_name:"1st Channel", server_id: server1.id})
Channel.create({channel_name:"2nd Channel", server_id: server1.id})

server2 = Server.create({server_name:"Second", owner_id: demo.id})
Channel.create({channel_name:"2-1 Channel", server_id: server2.id})
Channel.create({channel_name:"2-2 Channel", server_id: server2.id})



server3 = Server.create({server_name:"Third", owner_id: demo.id})
Channel.create({channel_name:"3-1 Channel", server_id: server3.id})
Channel.create({channel_name:"3-2 Channel", server_id: server3.id})


server4 = Server.create({server_name:"Fourth", owner_id: demo.id})
Channel.create({channel_name:"4-1 Channel", server_id: server4.id})
Channel.create({channel_name:"4-2 Channel", server_id: server4.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})
Server.create({server_name:"Main", owner_id: demo.id})

