
'use strict'

const Linked = require('./ll.js')

module.exports = {

zipLists: function(L1, L2) {

    let zipped = new Linked()
    let track1 = L1.head.next
    let track2 = L2.head
    zipped.head = L1.head

    let current = zipped.head
    let flag = true
    while(track1 || track2){
    if (flag){
        if (!track2){flag = !flag}
        else{
        current.next = track2
        track2 = track2.next
        flag = !flag
        current = current.next
        }
    } else if (!flag ){
        if (!track1){flag = !flag}
        else{
        current.next = track1
        track1 = track1.next
        flag = !flag
        current = current.next
    }}
    }
    return zipped;
}


}


