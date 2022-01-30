function isGreater(a, b, cb) {
    var greater = false
    if (a > b) {
        greater = true
    }
    cb(greater)
}
isGreater(1, 2,(result)=> {
    if (result) {console.log('greater');}
     else { console.log('smaller')}
     })