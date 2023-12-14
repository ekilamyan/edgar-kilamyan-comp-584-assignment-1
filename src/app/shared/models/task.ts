export class Task {
    taskName: string;
    description: string;
    comments: string[]; 

    constructor(data: any) {
        if (data) {
            this.taskName = data.taskName;
            this.description = data. description;
            this.comments = data.comments;
        }
        else {
            this.taskName = '';
            this.description
            this.comments = [];
        }
    }
}


