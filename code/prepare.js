/**
 * Created by Don on 2017/5/17.
 */
var Chinese = {
    nation: '中国'
};
var Doctor = {
    career: '医生'
};
//1 使用object函数
var Doctor = object(Chinese);
Doctor.career = "ddddd"; //这样Doctor就继承了Chinese
//2浅拷贝的方法
function extendCopy(p) {
    var c = {};
    for (var i in p) {
        c[i] = p[i];
    }
    c.up = p;
    return c;
}
//3、深拷贝的方法
//所谓"深拷贝"，就是能够实现真正意义上的数组和对象的拷贝。它的实现并不难，只要递归调用"浅拷贝"就行了。
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}


//1 构造函数的继承方法
function Animal() {
    this.species = "动物";
}
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
///------构造函数绑定
function Cat(name, color) {
    Animal.call(this, arguments);
    this.name = name;
    this.color = color;
}  ///这样的cat就继承了animal的属性


//2让cat的prototype指向一个animal的实例
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat; //这两句是绑在一起的，使用实例继承，要重新将构造函数的构造器设置为原来的那个



//3、直接继承prototype
function Animal() {
}
Animal.prototype.species = "动物";
//将cat的prototype指向animal的prototype
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;//这样做两个函数指向同一个原型，修改其中的任何
//一个原型都会影响到另一个。优点是效率高



//4、利用空对象作为中介
var F = function () {
};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;//空对象基本不占空间，这样修改原型的
//时候就不会影响Animal了。



/*封装写法*/
function extend(Child, Parent) {
    var F = function () {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.up = Parent.prototype;
    //备用意思是为子对象设一个up性，这个属性直接指向父对象的prototype属性。
    // 这等于在子对象上打开一条通道，可以直接调用父对象的方法。这一行放在这里，
    // 只是为了实现继承的完备性，纯属备用性质。
}//YUI库用的是这个方法


//5、拷贝继承
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.up = p;
}