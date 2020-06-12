//第一题
var user = {}
user.name = 'John';
user['surname']='Mike';
user.name='Peter';
delete user.name;

//第二题
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
var total=0;
for(let key in fruit){
    total+=fruit[key];
}
console.log(total);