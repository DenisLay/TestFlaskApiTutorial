class Template {
    constructor(template, className, behaviourCollection = []) {
        this.template = template;
        this.className = className;
        this.behaviourCollection = behaviourCollection;
    }

    render(root) {
        const item = this.template.content.cloneNode(true);
        const node = document.createElement('div');
        node.classList.add(this.className);
        node.appendChild(item);

        root.append(node);

        this.node = node;
    }

    remove() {
        this.executeBehaviour('end', () => { this.node.remove(); });
    }
    
    get() {
        return this.node;
    }

    executeBehaviour(lifeCycleStep, action) {
        if (this.behaviourCollection.length > 0) {
            this.behaviourCollection.map(item => {
                if (item.lifeCycleStep == lifeCycleStep) {
                    item.styleClassList.map(styleClassName => this.node.classList.add(styleClassName));
                    item.classList.map(className => this.node.classList.add(className));
                    setTimeout(
                        action,
                        item.duration
                    );
                }
            });
        } else {
            action();
        }
    }
}

class TemplateBehaviour {
    constructor(name, styleClassList, classList, duration, lifeCycleStep) {
        this.name = name;
        this.classList = classList;
        this.duration = duration;
        this.styleClassList = styleClassList;
        this.lifeCycleStep = lifeCycleStep;
    }
}   

