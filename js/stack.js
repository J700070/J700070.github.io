'use strict';

const TYPES = ['number','string','object','function','boolean'];

var Stack =  function(type){
    if(type===null || type===undefined){
        throw new SyntaxError('Please specify a type');
    }  
    else if (typeof(type)!=='string'){
        throw new TypeError('Please provide a type as a string (Surrounded by quotation marks).');
    }
    else if (TYPES.indexOf(type)<0 || type.trim().length<=0){
        throw new TypeError('Type is not valid. Please enter a number, string, object or function');
    }
    else {
        let core = [];

        this.getType = function(){
            return type;
        }

        this.push = function(val){
            if(typeof(val)!==type){
                throw new TypeError(`Value pushed to the stack must by of ${this.type} type.`);
            }
            else core.push(val);
        };

        this.pop = function(){
            return core.pop();
        };

        this.toArray = function(){
            return core;
        };

        this.addAll = function(elem){

            if(arguments.length>1)
                elem = Array.prototype.slice.call(arguments);

            for (const el of elem){
                if(typeof(el)!==type) 
                    throw new TypeError(`Element ${el.toString()} does not meet the type check.`);
            }

            for (const el of elem){
                this.push(el);
            }
        };

        this.isEmpty = function(){return core.length===0;}

        this.peek = function(){
            return core[core.length-1];
        };
    }
};

for(const t of TYPES){
    Stack[t.toUpperCase()] = t;
}

Stack.prototype.toString = function(){
    return `[${this.toArray().join(',')}]`;
}

Stack.foreach = function(stack,callback){
    if(stack.toArray === undefined){
        throw new Error('Stack must be initialized');
    }
    else if (typeof(callback)!=='function'){
        throw new Error('Must pass a callback function as a parameter');
    }
    else{
        for (const s of stack.toArray()){
            callback(s);
        }
    }
};