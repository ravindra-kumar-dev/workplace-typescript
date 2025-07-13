import { ListNode } from "./listdnode";

export class LinkedList<T> {
    private head: ListNode<T> | null = null;

    append(value: T): void {
        const newNode = new ListNode(value);
        if(!this.head){
            this.head = newNode;
            return
        }

        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    prepend(value: T) : void {
        const newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Print the list
    print(): void {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.value + " -> ";
            current = current.next;
        }
        console.log(output + "null");
    }

}
