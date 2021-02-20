const fs = require('fs');
const {O_RDWR} = require('constants');

class ClassExample {
    classMember;

    constructor() {
        this.bool = true;
        this.numeric = 1234567890;
        this.string = 'Hello World!' + 'Foobar' + 'BooFar';
        this.undefined = undefined;
        this.obj = new Array();
        this.obj[1] = 'array';
    }

    set classMember(classMember) {
        this.classMember = classMember;
    }

    get classMember() {
        return this.classMember; 
    }

    methodExample(param) {
        if (typeof param == 'null') {
            throw new TypeError('A TypeError has occurred!');
        }

        return param;
    }

    nativeNodeExample(pathname = '/sumDir/sumFile.txt') {
        fs.readFile(pathname, 'utf-8', (err, data) => {
            if (err) {
                throw new Error(
                    `Error occurred while reading from file: ${pathname}`,
                );
            }

            console.log(data);

            return;
        });
    }
}

function helloWorld() {
    console.log('Hello World!');
}

let classExample = new ClassExample();

classExample.methodExample('Hello World');

helloWorld();
