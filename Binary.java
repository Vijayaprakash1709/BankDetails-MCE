class BinaryTree{
    int data;
    BinaryTree left;
    BinaryTree right;
    BinaryTree(int data){
        this.data=data;
        left=null;
        right=null;
    }
}
class Binary{
public static void main(String [] args){
    BinaryTree root= new BinaryTree(5);
    root.left=new BinaryTree(10);
    root.right=new BinaryTree(15);
    root.left.left=new BinaryTree(20);
    root.left.right=new BinaryTree(25);
    root.right.left= new BinaryTree(30);
    root.right.right=new BinaryTree(35);
 PreOrder(root);
}
    //preorder

    static void PreOrder(BinaryTree root){
        if(root!=null){
            PreOrder(root.left);
            System.out.println(root.data);
            PreOrder(root.right);
        }
    }
   

}
