//implementation of queue using single Array
class Queue{
    //initialising our queue
    constructor(){
        this.array=[]
    }
    //pushing an element inside our queue
    push_element(element){
        this.array.push(element);
    }
    //deleting an element inside our queue as it follows FIFO rule
    dequeue(){
        for(let i=0;i<this.array.length-1;i++){
            this.array[i]=this.array[i+1];
        }
        this.array.pop();
    }
    //printing all the elements inside our queue
    print_queue(){
        console.log('printing the elements inside the queue');
        for(let i=0;i<this.array.length;i++){
            console.log(this.array[i]);
        }
    }
    //printing the first element inside our queue
    first_element_inside_queue(){
        if(this.array.length===0){
            console.log('Queue is Empty');
        }else{
            console.log(this.array[0]);
        }
    }
    //checking whether our queue is empty or not
    is_Empty(){
        return this.array.length===0;
    }
}
//creating an instance of queue
let queue=new Queue();
//performing all the operations
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
