class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  load(pos) {
    this.items(pos);
    if (pos === null){
      throw new Error('OutOfBounds');
    } else {
      return this.items.slice();
    }
  }

  max() {
    this.items();
    if (null || NaN || ''){
      throw new Error('EmptySortedList');
    } else {
      return this.items.max();
    }
  }

  min() {
    this.items();
    if (null || NaN || ''){
      throw new Error('EmptySortedList');
    } else {
      return this.items.max();
    }
  }

  sum() {
    // for (let i = 0; i < this.items.length; i++){
      
    // }
  }

  avg() {
    // ...
  }
}

module.exports = SortedList;
