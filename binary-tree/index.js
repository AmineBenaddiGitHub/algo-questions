/**
This week’s question:
Given an integer n, print a balanced binary tree with n leaf nodes using the characters /, , and \.
Examples:
> printTree(2)

/\

// or you could output something like:

 /\
/  \

> printTree(3)

 /\
/\ \

// or you could output something like:

  /\
 / /\
/ /  \
 */

const binaryTree = (n) => {
  const res = [];
  for (let i = 1; i < n; i++) {
    const row = Array.from({ length: n - i }, (_, idx) =>
      idx === 0 ? "/\\" : " \\"
    ).join("");
    const spaces = " ".repeat(i);
    res.unshift(spaces + row + spaces);
  }
  return res.join("\n");
};

console.log(binaryTree(20));
/**
                   /\                   
                  /\ \                  
                 /\ \ \                 
                /\ \ \ \                
               /\ \ \ \ \               
              /\ \ \ \ \ \              
             /\ \ \ \ \ \ \             
            /\ \ \ \ \ \ \ \            
           /\ \ \ \ \ \ \ \ \           
          /\ \ \ \ \ \ \ \ \ \          
         /\ \ \ \ \ \ \ \ \ \ \         
        /\ \ \ \ \ \ \ \ \ \ \ \        
       /\ \ \ \ \ \ \ \ \ \ \ \ \       
      /\ \ \ \ \ \ \ \ \ \ \ \ \ \      
     /\ \ \ \ \ \ \ \ \ \ \ \ \ \ \     
    /\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \    
   /\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \   
  /\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \  
 /\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ 
 */
