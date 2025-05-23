db.inventory.updateOne({
    $set:{"name":"chandubhargav}"},
    $currentDate:{"LastModified":true},
_id: ObjectId('68302cd0ddd99d3f3b6c4bd0')
}
)
// { _id: ObjectId('68302cd0ddd99d3f3b6c4bd0'), name: 'chandu' }

db.books.update({

    { _id:2},
    {
        $set:{
            stock:100
        }
    }
}
)