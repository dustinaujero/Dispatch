# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



demo = User.create({email:"demo@demo.com", username:"username#0000", password:"password"})
me = User.create({email:"example@example.com", username:"dustin#1234", password:"monica!!"})

serverOne = Server.create({server_name:"Main", owner_id: demo.id})
chOne = Channel.create({channel_name:"1st Channel", server_id: serverOne.id})
chTwo = Channel.create({channel_name:"2nd Channel", server_id: serverOne.id})

serverTwo = Server.create({server_name:"Second", owner_id: demo.id})
Channel.create({channel_name:"2-1 Channel", server_id: serverTwo.id})
Channel.create({channel_name:"2-2 Channel", server_id: serverTwo.id})



serverThree = Server.create({server_name:"Third", owner_id: demo.id})
Channel.create({channel_name:"3-1 Channel", server_id: serverThree.id})
Channel.create({channel_name:"3-2 Channel", server_id: serverThree.id})


serverFour = Server.create({server_name:"Fourth", owner_id: demo.id})
Channel.create({channel_name:"4-1 Channel", server_id: serverFour.id})
Channel.create({channel_name:"4-2 Channel", server_id: serverFour.id})
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

