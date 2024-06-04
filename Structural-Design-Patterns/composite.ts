// Component Interface: This interface will be implemented by both leaf and composite objects.
interface FileSystemComponent {
  getName(): string;
  getSize(): number;
  display(indent: string): void;
}

// Leaf: This represents individual objects (files).
class File1 implements FileSystemComponent {
  constructor(private name: string, private size: number) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  display(indent: string = ""): void {
    console.log(`${indent}- File: ${this.getName()} (${this.getSize()} KB)`);
  }
}

// Composite: This represents composite objects (folders).
class Folder implements FileSystemComponent {
  private components: FileSystemComponent[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.components.reduce(
      (size, component) => size + component.getSize(),
      0
    );
  }

  add(component: FileSystemComponent): void {
    this.components.push(component);
  }

  remove(component: FileSystemComponent): void {
    const index = this.components.indexOf(component);

    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }

  display(indent: string = ""): void {
    console.log(`${indent}+ Folder: ${this.getName()} (${this.getSize()} KB)`);
    this.components.forEach((component) => component.display(indent + "  "));
  }
}

// Client Code: Demonstrating the usage of the Composite pattern.
const file1 = new File1("File1.txt", 10);
const file2 = new File1("File2.txt", 20);
const file3 = new File1("File3.txt", 30);

const folder1 = new Folder("Folder1");
const folder2 = new Folder("Folder2");

folder1.add(file1);
folder1.add(file2);

folder2.add(folder1);
folder2.add(file3);

folder2.display();
