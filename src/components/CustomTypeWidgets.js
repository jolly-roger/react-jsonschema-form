let instance;

class CustomTypeWidgets {
    constructor () {
        this.types = {};
        
        if(!instance){
            instance = this;
        }
        
        return instance;
    }
    getTypeWidget(name){
        return this.types[name];
    }
    registerTypeWidget(name, widget){
        this.types[name] = widget;
    }
}

export default CustomTypeWidgets;