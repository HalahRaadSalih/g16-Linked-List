function createSimpleLinkedList(inputArr){
    var linkedList = {};
    var head = linkedList;

    var i = 0;

    while(i < inputArr.length){

       linkedList = addNode(linkedList, node(inputArr[i]));

        i++;
    }

    return head;
}

function node(val){
    return {
        val: val,
        next: {}
    }
}

function addNode(list, node){
    if (!list.hasOwnProperty('next')){
        list.val = node.val;
        list.next = node.next;
    }
    else
    {
        list.next = node;

    }

    return list.next;
}
console.log(createSimpleLinkedList([1,2,3]));
