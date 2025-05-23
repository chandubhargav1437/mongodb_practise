db.inventory.insertMany([{name:"chandu1",    age:"34",    work:"coder1"},
    {name:"chandu2",    age:"44",    work:"coder2"},
    {name:"chandu3",    age:"24",    work:"coder3"},
    {name:"chandu4",    age:"54",    work:"coder4"},
    {name:"chandu5",    age:"67",    work:"coder5"},
    {name:"chandu6",    age:"14",    work:"coder6"}
])
db.inventory.find()
db.inventory.find({age:"54"})
db.inventory.find({age:{$in:["54","25"]}})
db.inventory.find({name:"chandu1" ,age:{$lt:"60"}})
db.inventory.find({$or:[ {name:"chandu1"},{age:{$lt:60}}]})
db.inventory.find()
db.inventory.findOne({$or:[{name:{$in:["chandu","chandu1","chandu2"]}},{age:{$gt:60}}]})