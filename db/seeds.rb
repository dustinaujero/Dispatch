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
    Membership.create({user_id: serverOne.owner_id, channel_id: chOne.id})

chTwo = Channel.create({channel_name:"2nd Channel", server_id: serverOne.id})
    Membership.create({user_id: serverOne.owner_id, channel_id: chTwo.id})


serverTwo = Server.create({server_name:"Second", owner_id: demo.id, img_url: "/assets/basic-discord-645038d22a7d96fb1d5c8e85bc78b7055b9bbb022c62a0258b76b3a8a03f060e.png"})
ch3 = Channel.create({channel_name:"2-1 Channel", server_id: serverTwo.id})
    Membership.create({user_id: serverTwo.owner_id, channel_id: ch3.id})

ch4 = Channel.create({channel_name:"2-2 Channel", server_id: serverTwo.id})
    Membership.create({user_id: serverTwo.owner_id, channel_id: ch4.id})



serverThree = Server.create({server_name:"Third", owner_id: demo.id})
Channel.create({channel_name:"3-1 Channel", server_id: serverThree.id})
Channel.create({channel_name:"3-2 Channel", server_id: serverThree.id})


serverFour = Server.create({server_name:"Fourth", owner_id: demo.id})
Channel.create({channel_name:"4-1 Channel", server_id: serverFour.id})
Channel.create({channel_name:"4-2 Channel", server_id: serverFour.id})
Server.create({server_name:"Main", owner_id: demo.id, img_url: "/assets/basic-discord-645038d22a7d96fb1d5c8e85bc78b7055b9bbb022c62a0258b76b3a8a03f060e.png"})
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

