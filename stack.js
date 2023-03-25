
//implementation of stack using arrays

class Stack{
    constructor(){
        this.st=[];
    }
    push_elements(element){
        this.st.push(element);
    }
    pop_element(){
        if(this.st.length===0){
            return "Stack is empty";
        }else{
        let element=this.array[this.array.length-1];
        this.st.pop();
        return element;
        }
    }
    is_empty(){
        return this.st.length===0;
    }
    print_stack_element(){
        for(let i=0;i<this.st.length;i++){
            console.log(this.st[i]);
        }
    }
}
let stack=new Stack();

stack.push_elements(10);
stack.push_elements(20);
stack.push_elements(30);
stack.push_elements(40);
stack.push_elements(40);
stack.print_stack_element();
stack.pop_element();
stack.print_stack_element();