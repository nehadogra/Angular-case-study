export class Students {
    public id: number;
    public name: string;
    public Class: number;
    public section: string;
    public subject1: number;
    public subject2: number;
    public subject3: number;

    constructor(id: number, name: string, Class: number, section: string, subject1: number, subject2: number, subject3: number) {
        this.id = id,
        this.name = name,
        this.Class = Class,
        this.section = section,
        this.subject1 = subject1,
        this.subject2 = subject2,
        this.subject3 = subject3
    }
}