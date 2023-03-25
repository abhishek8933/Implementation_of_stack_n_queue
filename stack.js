
//implementation of stack using arrays

class Stack{
    //initialising our array 
    constructor(){
        this.st=[];
    }
    //pushing elements into stack
    push_elements(element){
        this.st.push(element);
    }
    //pop of element inside our stack as it uses LIFO rule
    pop_element(){
        if(this.st.length===0){
            return "Stack is empty";
        }else{
        let element=this.array[this.array.length-1];
        this.st.pop();
        return element;
        }
    }
    //check our stack is empty or not
    is_empty(){
        return this.st.length===0;
    }
    //printing all the elements which is inside our stack
    print_stack_element(){
        for(let i=0;i<this.st.length;i++){
            console.log(this.st[i]);
        }
    }
}
//creating an instance of class Stack
let stack=new Stack();
//performing operations
stack.push_elements(10);
stack.push_elements(20);
stack.push_elements(30);
stack.push_elements(40);
stack.push_elements(40);
stack.print_stack_element();
stack.pop_element();
stack.print_stack_element();