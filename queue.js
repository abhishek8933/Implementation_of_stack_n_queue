//implementation of queue using single Array
class Queue{
    constructor(){
        this.array=[]
    }
    push_element(element){
        this.array.push(element);
    }
    dequeue(){
        for(let i=0;i<this.array.length-1;i++){
            this.array[i]=this.array[i+1];
        }
        this.array.pop();
    }
    print_queue(){
        console.log('printing the elements inside the queue');
        for(let i=0;i<this.array.length;i++){
            console.log(this.array[i]);
        }
    }
    first_element_inside_queue(){
        if(this.array.length===0){
            console.log('Queue is Empty');
        }else{
            console.log(this.array[0]);
        }
    }
    is_Empty(){
        return this.array.length===0;
    }
}

let queue=new Queue();
queue.push_element(10);
queue.push_element(20);
queue.push_element(30);
queue.push_element(40);
queue.push_element(50);
queue.push_element(60);

queue.print_queue();
queue.dequeue();
queue.print_queue();
console.log(queue.is_Empty());
queue.first_element_inside_queue();
