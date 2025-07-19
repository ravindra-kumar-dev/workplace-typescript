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

    insertAt(value: T, index: number): void {
        if (index < 0) throw new Error("Index out of bounds");
        if (index === 0) return this.prepend(value);

        const newNode = new ListNode(value);
        let current = this.head;
        let previous: ListNode<T> | null = null;
        let i = 0;

        while (i++ < index) {
            previous = current;
            current = current!.next;
        }

        previous!.next = newNode;
        newNode.next = current;
    }

    print(): void {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.value + " -> ";
            current = current.next;
        }
        console.log(output + "null");
    }

    remove(value: T): boolean {
        if (!this.head) return false;

        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            return true;
        }

        return false;
    }

    find(value: T): ListNode<T> | null {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    isEmpty(): boolean {
        return this.head !== null;
    }

    clear(): void {
        this.head = null;
    }
}
