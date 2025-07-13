import { LinkedList } from "../../../src/utilities/datastructure/linkedlist/linkedlist";

const list = new LinkedList<number>();

list.append(10);
list.append(20);
list.prepend(5);

list.print();

