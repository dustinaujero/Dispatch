# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



demo = User.create({email:"brian@brian.com", username:"brian", password:"password"})
demo1 = User.create({email:"andrew@andrew.com", username:"andrew", password:"password"})
demo2 = User.create({email:"connor@connor.com", username:"connor", password:"password"})
demo3 = User.create({email:"anna@anna.com", username:"anna", password:"password"})
demo4 = User.create({email:"collin@collin.com", username:"collin", password:"password"})
demo5 = User.create({email:"harsh@harsh.com", username:"harsh", password:"password"})
demo6 = User.create({email:"mark@mark.com", username:"mark", password:"password"})
demo7 = User.create({email:"rain@rain.com", username:"rain", password:"password"})
demo8 = User.create({email:"greg@greg.com", username:"greg", password:"password"})
dustin = User.create({email:"dustin", username:"dustin", password:"nitsud"})
ruby = User.create({email:"ruby", username:"ruby", password:"nitsud"})

serverOne = Server.create({server_name:"CIRCLE", owner_id: demo.id})
Userserver.create({user_id: dustin.id, server_id: serverOne.id})
Userserver.create({user_id: demo1.id, server_id: serverOne.id})
Userserver.create({user_id: demo2.id, server_id: serverOne.id})
Userserver.create({user_id: demo3.id, server_id: serverOne.id})
Userserver.create({user_id: demo4.id, server_id: serverOne.id})
Userserver.create({user_id: demo5.id, server_id: serverOne.id})
Userserver.create({user_id: demo6.id, server_id: serverOne.id})
Userserver.create({user_id: demo7.id, server_id: serverOne.id})
Userserver.create({user_id: demo8.id, server_id: serverOne.id})
chOne = Channel.create({channel_name:"questions", server_id: serverOne.id})


chTwo = Channel.create({channel_name:"lyfe", server_id: serverOne.id})



serverTwo = Server.create({server_name:"G G", owner_id: demo.id, img_url: "/assets/basic-discord-645038d22a7d96fb1d5c8e85bc78b7055b9bbb022c62a0258b76b3a8a03f060e.png"})
Userserver.create({user_id: dustin.id, server_id: serverTwo.id})
ch3 = Channel.create({channel_name:"fun games", server_id: serverTwo.id})
ch4 = Channel.create({channel_name:"fun profiles", server_id: serverTwo.id})


serverThree = Server.create({server_name:"A 0 6", owner_id: demo.id})
Userserver.create({user_id: ruby.id, server_id: serverThree.id})
uhh = Channel.create({channel_name:"check the message", server_id: serverThree.id})
Message.create({user_id: ruby.id, channel_id: uhh.id, body: "check A07"})

serverFour = Server.create({server_name:"A 0 7", owner_id: demo.id})
Userserver.create({user_id: ruby.id, server_id: serverFour.id})
uhhh = Channel.create({channel_name:"check the message", server_id: serverFour.id})
Message.create({user_id: ruby.id, channel_id: uhhh.id, body: "check A06"})


