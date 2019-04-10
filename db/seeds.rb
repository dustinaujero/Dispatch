# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



demo = User.create({email:"demo@demo.com", username:"demoname", password:"password"})
demo1 = User.create({email:"demo1@demo.com", username:"demoname1", password:"password"})
demo2 = User.create({email:"demo2@demo.com", username:"demoname2", password:"password"})
demo3 = User.create({email:"demo3@demo.com", username:"demoname3", password:"password"})
demo4 = User.create({email:"demo4@demo.com", username:"demoname4", password:"password"})
demo5 = User.create({email:"demo5@demo.com", username:"demoname5", password:"password"})
dustin = User.create({email:"dustin", username:"dustin", password:"dustin"})


serverOne = Server.create({server_name:"Main", owner_id: demo.id})
Userserver.create({user_id: dustin.id, server_id: serverOne.id})
Userserver.create({user_id: demo1.id, server_id: serverOne.id})
Userserver.create({user_id: demo2.id, server_id: serverOne.id})
Userserver.create({user_id: demo3.id, server_id: serverOne.id})
Userserver.create({user_id: demo4.id, server_id: serverOne.id})
Userserver.create({user_id: demo5.id, server_id: serverOne.id})
chOne = Channel.create({channel_name:"1st Channel", server_id: serverOne.id})


chTwo = Channel.create({channel_name:"2nd Channel", server_id: serverOne.id})



serverTwo = Server.create({server_name:"Second", owner_id: demo.id, img_url: "/assets/basic-discord-645038d22a7d96fb1d5c8e85bc78b7055b9bbb022c62a0258b76b3a8a03f060e.png"})
ch3 = Channel.create({channel_name:"2-1 Channel", server_id: serverTwo.id})


ch4 = Channel.create({channel_name:"2-2 Channel", server_id: serverTwo.id})




serverThree = Server.create({server_name:"Third", owner_id: demo.id})
Channel.create({channel_name:"3-1 Channel", server_id: serverThree.id})
Channel.create({channel_name:"3-2 Channel", server_id: serverThree.id})


serverFour = Server.create({server_name:"Fourth", owner_id: demo.id})
Channel.create({channel_name:"4-1 Channel", server_id: serverFour.id})
Channel.create({channel_name:"4-2 Channel", server_id: serverFour.id})
Server.create({server_name:"Main", owner_id: demo.id, img_url: "/assets/basic-discord-645038d22a7d96fb1d5c8e85bc78b7055b9bbb022c62a0258b76b3a8a03f060e.png"})

